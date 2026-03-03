# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import uvicorn

from .api.routes import conversion, pdf, audio, video, image, system
from .config.settings import settings

app = FastAPI(
    title="FileWarp Backend API",
    description="REST API for FileWarp operations",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure appropriately for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(conversion.router)
app.include_router(pdf.router)
app.include_router(audio.router)
app.include_router(video.router)
app.include_router(image.router)
app.include_router(system.router)

# Static files for outputs (optional)
app.mount("/outputs", StaticFiles(directory="outputs"), name="outputs")

@app.get("/")
async def root():
    return {
        "service": "FileWarp Backend",
        "version": "1.0.0",
        "status": "operational"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=settings.DEBUG
    )
