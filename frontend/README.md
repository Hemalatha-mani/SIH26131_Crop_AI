# CropCare AI Frontend — SIH26131

A React + Vite frontend for the SIH26131 Crop Disease Detection project.

## Pages

1. Home — project overview and workflow
2. AI Detect — upload a leaf and call the FastAPI `/predict` endpoint
3. Diseases — six supported classes
4. Remedies — disease-specific causes and management guidance
5. Prevention — general and disease-specific prevention checklist

## Run

Make sure the FastAPI backend is running at:

`http://127.0.0.1:8000`

Then:

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal, normally:

`http://localhost:5173`

## Backend requirement

The frontend expects:

`POST http://127.0.0.1:8000/predict`

with a multipart form field named `file`.

It expects JSON similar to:

```json
{
  "success": true,
  "filename": "leaf.jpg",
  "disease": "Potato_Early_blight",
  "confidence": 99.97
}
```

## Important

The remedies/prevention text is decision-support content. For actual field treatment, users should confirm diagnosis and follow local agricultural recommendations and product labels.
