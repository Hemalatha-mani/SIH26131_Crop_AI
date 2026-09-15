import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AIDetect.css";

const diseaseInfo = {
  Healthy: {
    title: "Healthy Leaf",
    icon: "🌿",
    status: "No disease detected",
    description:
      "The uploaded leaf appears healthy. Continue good farming practices to maintain crop health.",
    cause:
      "No visible disease symptoms were detected in the uploaded image.",
    remedy:
      "Continue proper watering, balanced nutrition and regular crop monitoring.",
    prevention:
      "Maintain field hygiene, adequate spacing and regular inspection.",
  },

  Potato_Early_blight: {
    title: "Potato Early Blight",
    icon: "🥔",
    status: "Disease detected",
    description:
      "Early blight is a fungal disease that commonly affects potato leaves and can reduce crop productivity.",
    cause:
      "Usually caused by the fungus Alternaria solani. Warm conditions, leaf wetness and stressed plants can increase risk.",
    remedy:
      "Remove heavily infected leaves, improve field sanitation and use appropriate fungicide according to local agricultural guidance.",
    prevention:
      "Use healthy planting material, rotate crops, avoid prolonged leaf wetness and maintain proper plant spacing.",
  },

  Potato_Late_blight: {
    title: "Potato Late Blight",
    icon: "🥔",
    status: "Disease detected",
    description:
      "Late blight can spread rapidly under cool, wet conditions and may seriously affect potato crops.",
    cause:
      "Caused by Phytophthora infestans. Cool temperatures and prolonged moisture favor disease development.",
    remedy:
      "Remove infected plant material and follow locally recommended late-blight management practices and fungicides.",
    prevention:
      "Use disease-free seed, improve air circulation, avoid unnecessary leaf wetness and monitor crops frequently.",
  },

  Tomato_Bacterial_spot: {
    title: "Tomato Bacterial Spot",
    icon: "🍅",
    status: "Disease detected",
    description:
      "Bacterial spot produces dark lesions on tomato leaves and may also affect fruits.",
    cause:
      "Caused by several Xanthomonas bacteria. Wet conditions and contaminated plant material can encourage spread.",
    remedy:
      "Remove severely affected material, avoid working with wet plants and follow locally recommended bacterial disease control measures.",
    prevention:
      "Use clean seeds and seedlings, maintain field hygiene and avoid overhead irrigation when possible.",
  },

  Tomato_Early_blight: {
    title: "Tomato Early Blight",
    icon: "🍅",
    status: "Disease detected",
    description:
      "Early blight is a common fungal disease of tomato that causes leaf spots and can lead to premature leaf loss.",
    cause:
      "Commonly associated with Alternaria solani. Warm temperatures, moisture and plant stress can favor infection.",
    remedy:
      "Remove infected leaves, improve airflow and use appropriate fungicide recommendations when necessary.",
    prevention:
      "Practice crop rotation, maintain plant spacing, remove crop debris and avoid prolonged leaf wetness.",
  },

  Tomato_Late_blight: {
    title: "Tomato Late Blight",
    icon: "🍅",
    status: "Disease detected",
    description:
      "Late blight can spread quickly through tomato crops, particularly during cool and humid weather.",
    cause:
      "Caused by Phytophthora infestans and favored by cool, wet conditions.",
    remedy:
      "Remove severely affected material and follow locally recommended late-blight management practices.",
    prevention:
      "Maintain good airflow, monitor weather conditions, avoid prolonged leaf wetness and use healthy planting material.",
  },
};

function AIDetect() {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle image selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setError("");
  };

  // Send image to FastAPI
  const handleDetect = async () => {
    if (!selectedFile) {
      setError("Please upload a crop leaf image first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "`${import.meta.env.VITE_API_URL}/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setResult(response.data);
      } else {
        setError(response.data.error || "Prediction failed.");
      }
    } catch (err) {
      console.error(err);
      setError(
        "Unable to connect to the AI server. Make sure FastAPI is running on port 8000."
      );
    } finally {
      setLoading(false);
    }
  };

  const clearImage = () => {
    setSelectedFile(null);
    setPreview(null);
    setResult(null);
    setError("");
  };

  const info = result ? diseaseInfo[result.disease] : null;

  return (
    <div className="ai-page">

      {/* HERO */}
      <section className="ai-hero">
        <span className="ai-eyebrow">AI-POWERED CROP HEALTH</span>

        <h1>
          Analyze your
          <span> crop leaf</span>
        </h1>

        <p>
          Upload a clear image of a crop leaf and let CropCare AI identify
          possible diseases with confidence.
        </p>
      </section>

      {/* MAIN DETECTION AREA */}
      <section className="ai-detection-container">

        {/* LEFT SIDE */}
        <div className="upload-card">

          <div className="card-heading">
            <div className="heading-icon">📷</div>

            <div>
              <h2>Upload Leaf Image</h2>
              <p>JPG, JPEG or PNG · Clear leaf image recommended</p>
            </div>
          </div>

          <label className="upload-zone">

            {preview ? (
              <img
                src={preview}
                alt="Uploaded crop leaf"
                className="uploaded-preview"
              />
            ) : (
              <>
                <div className="upload-icon">🌱</div>

                <h3>Drop your leaf image here</h3>

                <p>
                  or click to browse from your device
                </p>

                <span className="browse-button">
                  Choose Image
                </span>
              </>
            )}

            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleFileChange}
              hidden
            />
          </label>

          {selectedFile && (
            <div className="file-info">

              <div className="file-icon">🖼️</div>

              <div className="file-details">
                <strong>{selectedFile.name}</strong>

                <span>
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>

              <button
                className="remove-button"
                onClick={clearImage}
              >
                ✕
              </button>

            </div>
          )}

          {error && (
            <div className="error-box">
              ⚠️ {error}
            </div>
          )}

          <button
            className="detect-button"
            onClick={handleDetect}
            disabled={!selectedFile || loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Analyzing Leaf...
              </>
            ) : (
              <>
                🔍 Detect Disease
              </>
            )}
          </button>

          <div className="ai-note">
            <span>🔒</span>
            <p>
              Your image is analyzed by the CropCare AI model
              running locally on your system.
            </p>
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="result-card">

          {!result && !loading && (
            <div className="empty-result">

              <div className="empty-leaf">
                🌿
              </div>

              <h2>Your diagnosis will appear here</h2>

              <p>
                Upload a crop leaf image and click
                <strong> Detect Disease </strong>
                to get an AI-powered result.
              </p>

              <div className="result-features">

                <div>
                  <span>🤖</span>
                  <p>AI Detection</p>
                </div>

                <div>
                  <span>📊</span>
                  <p>Confidence Score</p>
                </div>

                <div>
                  <span>🌱</span>
                  <p>Farmer Guidance</p>
                </div>

              </div>

            </div>
          )}


          {loading && (
            <div className="loading-result">

              <div className="ai-loader">
                <div className="loader-leaf">🌿</div>
              </div>

              <h2>Analyzing your leaf...</h2>

              <p>
                CropCare AI is examining the image for
                disease patterns.
              </p>

              <div className="loading-bar">
                <div></div>
              </div>

            </div>
          )}


          {result && info && (
            <div className="diagnosis-result">

              {/* Result header */}
              <div className="result-top">

                <div className="success-badge">
                  ✓ AI Analysis Complete
                </div>

                <span className="result-date">
                  CropCare AI
                </span>

              </div>

              {/* Disease */}
              <div className="disease-header">

                <div className="disease-icon">
                  {info.icon}
                </div>

                <div>
                  <span>{info.status}</span>

                  <h2>{info.title}</h2>
                </div>

              </div>


              {/* Confidence */}
              <div className="confidence-section">

                <div className="confidence-heading">

                  <span>AI Confidence</span>

                  <strong>
                    {result.confidence}%
                  </strong>

                </div>

                <div className="confidence-bar">
                  <div
                    style={{
                      width: `${result.confidence}%`,
                    }}
                  ></div>
                </div>

                <p>
                  The model is highly confident in this prediction.
                </p>

              </div>


              {/* Description */}
              <div className="diagnosis-description">
                <h3>🌿 About this diagnosis</h3>

                <p>
                  {info.description}
                </p>
              </div>


              {/* Cause */}
              <div className="quick-info cause-info">

                <div className="quick-icon">
                  🔬
                </div>

                <div>
                  <h3>Possible Cause</h3>
                  <p>{info.cause}</p>
                </div>

              </div>


              {/* Remedy */}
              <div className="quick-info remedy-info">

                <div className="quick-icon">
                  💊
                </div>

                <div>
                  <h3>Recommended Remedy</h3>
                  <p>{info.remedy}</p>
                </div>

              </div>


              {/* Prevention */}
              <div className="quick-info prevention-info">

                <div className="quick-icon">
                  🛡️
                </div>

                <div>
                  <h3>Prevention</h3>
                  <p>{info.prevention}</p>
                </div>

              </div>


              {/* Navigation */}
              <div className="result-actions">

                <button
                  onClick={() =>
                    navigate("/diseases", {
                      state: {
                        disease: result.disease,
                      },
                    })
                  }
                  className="outline-action"
                >
                  🦠 View Disease
                </button>

                <button
                  onClick={() =>
                    navigate("/remedies", {
                      state: {
                        disease: result.disease,
                      },
                    })
                  }
                  className="outline-action"
                >
                  💊 View Remedies
                </button>

                <button
                  onClick={() =>
                    navigate("/prevention", {
                      state: {
                        disease: result.disease,
                      },
                    })
                  }
                  className="primary-action"
                >
                  🛡️ Prevention Guide →
                </button>

              </div>

            </div>
          )}

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="how-section">

        <div className="section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            From leaf to insight in
            <span> three simple steps</span>
          </h2>

        </div>

        <div className="steps">

          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon">📷</div>

            <h3>Upload</h3>

            <p>
              Take a clear photo of the affected crop leaf
              and upload it.
            </p>
          </div>


          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon">🤖</div>

            <h3>AI Analysis</h3>

            <p>
              Our trained EfficientNet model analyzes
              the leaf image.
            </p>
          </div>


          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon">🌱</div>

            <h3>Take Action</h3>

            <p>
              Get disease information, remedies and
              prevention guidance.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default AIDetect;
