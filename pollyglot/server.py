import os
import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import vertexai
from vertexai.preview.generative_models import GenerativeModel

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Vertex AI initialization
project_id = "tester-fantasy"
location = "us-central1"
vertexai.init(project=project_id, location=location)

# Initialize generative model
model = GenerativeModel('gemini-pro')

class TranslationRequest(BaseModel):
    text: str
    target_language: str

@app.post("/translate")
async def translate_text(request: TranslationRequest):
    prompt = f"You are a Translation BOT. Strictly translate this text to {request.target_language}: {request.text}"
    try:
        response = model.generate_content(prompt)
        translated_text = response.candidates[0].content if response.candidates else "No translation available."
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    return {"translated_text": translated_text}

# Ensure Cloud Run listens on port 8080
if __name__ == "__main__":
    port = int(os.getenv("PORT", 8080))  # Read PORT from environment
    uvicorn.run(app, host="0.0.0.0", port=port)
