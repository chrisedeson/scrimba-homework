from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import vertexai
from vertexai.preview.generative_models import GenerativeModel

app = FastAPI()

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://pollyglot-translate.netlify.app/"],  # Update this in production
    allow_methods=["*"],
    allow_headers=["*"],
)

# Vertex AI initialization (using your working structure)
project_id = "tester-fantasy"
location = "us-central1"
vertexai.init(project=project_id, location=location)

# Initialize your generative model
model = GenerativeModel('gemini-pro')

# Request model for translation
class TranslationRequest(BaseModel):
    text: str
    target_language: str

@app.post("/translate")
async def translate_text(request: TranslationRequest):
    # Create a prompt using your preferred structure
    
    # prompt = (
    #     "You are a professional translator. Your sole task is to translate text into "
    #     f"{request.target_language} and nothing else. Do not output any greetings, explanations, or extra commentary. "
    #     "If you are not 100% sure of the translation, output an empty response instead of guessing.\n\n"
    #     "Input: <<<" + request.text + ">>>\n\n"
    #     "Output:"
    # )
    
    prompt = (
    f"You are a professional translator. Your only task is to translate text into {request.target_language}. "
    f"Do not include any greetings, explanations, or additional text—only provide the translated output.\n\n"
    f"Input: {request.text}\n\n"
    f"Output:"
    )
    
    try:
        response = model.generate_content(prompt)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    return {"translated_text": response.text}

# Run the server with:
# uvicorn main:app --host 0.0.0.0 --port 8000 --reload
