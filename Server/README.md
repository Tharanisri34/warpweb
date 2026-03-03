## Architecture Components
### 1. Core Backend Structure
```bash
Server/
├── app/
│   ├── __init__.py
│   ├── main.py                 # FastAPI app entry
│   ├── api/
│   │   ├── __init__.py
│   │   ├── routes/
│   │   │   ├── conversion.py   # All conversion endpoints
│   │   │   ├── pdf.py          # PDF operations
│   │   │   ├── audio.py         # Audio operations
│   │   │   ├── video.py         # Video operations
│   │   │   ├── image.py         # Image operations
│   │   │   └── system.py        # System status, version, etc.
│   │   └── dependencies.py      # Shared dependencies
│   ├── core/
│   │   ├── __init__.py
│   │   ├── interpreter.py       # Operation interpreter
│   │   ├── executor.py          # Execution engine
│   │   ├── task_manager.py      # Async task management
│   │   └── file_handler.py      # File path validation
│   ├── models/
│   │   ├── __init__.py
│   │   ├── requests.py          # Pydantic request models
│   │   ├── responses.py         # Response models
│   │   └── tasks.py             # Task status models
│   ├── services/
│   │   ├── __init__.py
│   │   ├── conversion_service.py # Direct import mapping
│   │   ├── progress_service.py   # Progress tracking
│   │   └── websocket_manager.py  # WebSocket for real-time updates
│   └── utils/
│       ├── __init__.py
│       ├── validators.py         # Input validation
│       └── formatters.py         # Response formatting
├── config/
│   ├── __init__.py
│   └── settings.py               # App settings
├── logs/                          # Operation logs
├── uploads/                       # Temporary file storage (optional)
├── outputs/                       # Generated outputs
└── requirements.txt
```

## Usage
```shell
# Submit conversion task
curl -X POST http://localhost:8000/api/v1/conversion/submit \
  -H "Content-Type: application/json" \
  -d '{
    "operation": "convert-doc",
    "input_paths": ["/path/to/document.docx"],
    "target_format": "pdf",
    "options": {"use_extras": false}
  }'

# Get task status
curl http://localhost:8000/api/v1/conversion/task/123e4567-e89b-12d3-a456-426614174000/status

# WebSocket connection for real-time updates
# ws://localhost:8000/api/v1/conversion/task/123e4567-e89b-12d3-a456-426614174000/ws
```
