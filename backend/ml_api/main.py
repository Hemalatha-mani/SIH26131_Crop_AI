import io
import os


# Limit TensorFlow CPU usage on Render
os.environ["TF_NUM_INTRAOP_THREADS"] = "1"
os.environ["TF_NUM_INTEROP_THREADS"] = "1"

import numpy as np
import tensorflow as tf

tf.config.threading.set_intra_op_parallelism_threads(1)
tf.config.threading.set_inter_op_parallelism_threads(1)

from PIL import Image
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from fastapi import Depends
from database import SessionLocal
from models import Prediction, ChatHistory
from pydantic import BaseModel
from chatbot import get_chatbot_response


# ============================================================
# CONFIGURATION
# ============================================================

MODEL_PATH = "crop_disease_model_final.keras"

IMAGE_SIZE = (224, 224)

CLASS_NAMES = [
    "Healthy",
    "Potato_Early_blight",
    "Potato_Late_blight",
    "Tomato_Bacterial_spot",
    "Tomato_Early_blight",
    "Tomato_Late_blight"
]


# ============================================================
# LOAD MODEL
# ============================================================

print("Loading crop disease model...")

if not os.path.exists(MODEL_PATH):
    raise FileNotFoundError(
        f"Model not found: {MODEL_PATH}"
    )

model = tf.keras.models.load_model(MODEL_PATH)

print("Model loaded successfully!")
print("Input shape:", model.input_shape)
print("Output shape:", model.output_shape)


# ============================================================
# FASTAPI APPLICATION
# ============================================================

app = FastAPI(
    title="SIH26131 Crop Disease Detection API",
    description="AI-based crop disease prediction system",
    version="1.0.0"
)


# ============================================================
# CORS
# ============================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
# ============================================================
# DATABASE SESSION
# ============================================================

def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


# ============================================================
# ROOT ENDPOINT
# ============================================================

@app.get("/")
def home():
    return {
        "message": "Crop Disease Detection API is running",
        "model": "crop_disease_model_final.keras",
        "status": "ready"
    }


# ============================================================
# HEALTH CHECK
# ============================================================

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "model_loaded": True
    }


# ============================================================
# IMAGE PREDICTION
# ============================================================

def predict_image(image):

    # Convert image to RGB
    image = image.convert("RGB")

    # Resize to model input size
    image = image.resize(IMAGE_SIZE)

    # Convert to NumPy
    image_array = np.array(image)

    # Add batch dimension
    image_array = np.expand_dims(image_array, axis=0)

    # Model prediction
    predictions = model.predict(
        image_array,
        verbose=0
    )

    # Find highest probability
    predicted_index = int(
        np.argmax(predictions[0])
    )

    confidence = float(
        predictions[0][predicted_index]
    )

    predicted_class = CLASS_NAMES[predicted_index]

    return predicted_class, confidence


# ============================================================
# PREDICTION API
# ============================================================

@app.post("/predict")
async def predict(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    try:
        print("STEP 1: Prediction request received")
        print("Filename:", file.filename)

        # Read uploaded image
        image_data = await file.read()

        print("STEP 2: Image read successfully")
        print("Image size:", len(image_data), "bytes")

        # Open image
        image = Image.open(
            io.BytesIO(image_data)
        )

        print("STEP 3: Image opened successfully")
        print("Image format:", image.format)
        print("Image size:", image.size)

        # Predict
        print("STEP 4: Starting model prediction")

        disease, confidence = predict_image(image)

        print("STEP 5: Model prediction completed")
        print("Disease:", disease)
        print("Confidence:", confidence)

        # Convert confidence to percentage
        confidence_percentage = round(
            confidence * 100,
            2
        )

        print("STEP 6: Saving prediction to database")

        # Save prediction to PostgreSQL
        prediction_record = Prediction(
            user_id=None,
            disease=disease,
            confidence=confidence_percentage,
            image_name=file.filename
        )

        db.add(prediction_record)
        db.commit()
        db.refresh(prediction_record)

        print("STEP 7: Database save completed")

        return {
            "success": True,
            "filename": file.filename,
            "disease": disease,
            "confidence": confidence_percentage
        }

    except Exception as e:

        print("PREDICTION ERROR:", str(e))

        return {
            "success": False,
            "error": str(e)
        }
        
# ============================================================
# DETECTION HISTORY API
# ============================================================

@app.get("/history")
def get_history(db: Session = Depends(get_db)):

    history = (
        db.query(Prediction)
        .order_by(Prediction.created_at.desc())
        .all()
    )

    return [
        {
            "id": item.id,
            "disease": item.disease,
            "confidence": item.confidence,
            "image_name": item.image_name,
            "created_at": item.created_at
        }
        for item in history
    ]
# ============================================================
# DASHBOARD STATISTICS API
# ============================================================

@app.get("/dashboard")
def dashboard_stats(db: Session = Depends(get_db)):

    predictions = (
        db.query(Prediction)
        .order_by(Prediction.created_at.desc())
        .all()
    )

    # Total number of detections
    total_detections = len(predictions)

    # Count healthy detections
    healthy_count = sum(
        1
        for item in predictions
        if item.disease == "Healthy"
    )

    # Count diseased detections
    diseased_count = total_detections - healthy_count

    # Calculate average confidence
    if total_detections > 0:
        average_confidence = round(
            sum(item.confidence for item in predictions)
            / total_detections,
            2
        )
    else:
        average_confidence = 0

    # Get latest 5 detections
    recent = predictions[:5]

    return {
        "total_detections": total_detections,
        "healthy_count": healthy_count,
        "diseased_count": diseased_count,
        "average_confidence": average_confidence,

        "recent_detections": [
            {
                "id": item.id,
                "disease": item.disease,
                "confidence": item.confidence,
                "image_name": item.image_name,
                "created_at": item.created_at
            }
            for item in recent
        ]
    }
    
# ============================================================
# CHATBOT REQUEST MODEL
# ============================================================

class ChatRequest(BaseModel):
    question: str
# ============================================================
# CHATBOT API
# ============================================================

@app.post("/chat")
def chat(
    request: ChatRequest,
    db: Session = Depends(get_db)
):

    question = request.question.strip()

    if not question:
        return {
            "success": False,
            "error": "Question cannot be empty"
        }

    # Generate chatbot answer
    answer = get_chatbot_response(question)

    # Save chat to PostgreSQL
    chat_record = ChatHistory(
        user_id=None,
        question=question,
        answer=answer
    )

    db.add(chat_record)
    db.commit()
    db.refresh(chat_record)

    return {
        "success": True,
        "question": question,
        "answer": answer
    }
# ============================================================
# CHAT HISTORY API
# ============================================================

@app.get("/chat-history")
def get_chat_history(db: Session = Depends(get_db)):

    history = (
        db.query(ChatHistory)
        .order_by(ChatHistory.created_at.desc())
        .all()
    )

    return [
        {
            "id": item.id,
            "question": item.question,
            "answer": item.answer,
            "created_at": item.created_at
        }
        for item in history
    ]
