# api/routes/conversion.py
from fastapi import APIRouter, HTTPException, BackgroundTasks, WebSocket
from fastapi.responses import JSONResponse
from typing import List, Optional
import os

from ...models.requests import ConversionRequest
from ...models.responses import TaskResponse, OperationResult
from ...core.task_manager import TaskManager
from ...core.file_handler import FileHandler
from ...services.websocket_manager import WebSocketManager

router = APIRouter(prefix="/api/v1/conversion", tags=["conversion"])
task_manager = TaskManager()
file_handler = FileHandler()
ws_manager = WebSocketManager()

@router.post("/submit", response_model=TaskResponse)
async def submit_conversion(request: ConversionRequest):
    """
    Submit a conversion task
    """
    # Validate input paths
    for path in request.input_paths:
        if not file_handler.validate_path(path):
            raise HTTPException(status_code=400, detail=f"Invalid path: {path}")

    # Auto-generate output path if not provided
    if not request.output_path:
        request.output_path = file_handler.generate_output_path(
            request.input_paths[0],
            request.target_format
        )

    # Create task
    task_id = task_manager.create_task(
        operation=request.operation.value,
        params=request.dict()
    )

    return TaskResponse(
        task_id=task_id,
        status="pending",
        message="Task submitted successfully",
        created_at=task_manager.tasks[task_id].created_at.isoformat()
    )

@router.get("/task/{task_id}/status")
async def get_task_status(task_id: str):
    """
    Get task status
    """
    status = task_manager.get_task_status(task_id)
    if not status:
        raise HTTPException(status_code=404, detail="Task not found")
    return JSONResponse(content=status)

@router.post("/task/{task_id}/cancel")
async def cancel_task(task_id: str):
    """
    Cancel a running task
    """
    success = task_manager.cancel_task(task_id)
    if not success:
        raise HTTPException(status_code=400, detail="Task cannot be cancelled")
    return {"message": "Task cancelled successfully"}

@router.websocket("/task/{task_id}/ws")
async def task_websocket(websocket: WebSocket, task_id: str):
    """
    WebSocket connection for real-time task updates
    """
    await ws_manager.connect(websocket, task_id)
    try:
        while True:
            # Send updates every second
            status = task_manager.get_task_status(task_id)
            if status:
                await websocket.send_json(status)
            await asyncio.sleep(1)
    except:
        ws_manager.disconnect(task_id)
