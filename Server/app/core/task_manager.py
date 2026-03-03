# core/task_manager.py
import uuid
import asyncio
from datetime import datetime
from typing import Dict, Any, Optional
from enum import Enum
import threading
import queue

class TaskStatus(str, Enum):
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"

class Task:
    def __init__(self, task_id: str, operation: str, params: Dict[str, Any]):
        self.task_id = task_id
        self.operation = operation
        self.params = params
        self.status = TaskStatus.PENDING
        self.progress = 0
        self.message = ""
        self.logs = []
        self.result = None
        self.error = None
        self.created_at = datetime.now()
        self.started_at = None
        self.completed_at = None
        self._cancel_flag = False

class TaskManager:
    def __init__(self):
        self.tasks: Dict[str, Task] = {}
        self.executor = OperationExecutor()
        self._lock = threading.Lock()

    def create_task(self, operation: str, params: Dict[str, Any]) -> str:
        task_id = str(uuid.uuid4())
        task = Task(task_id, operation, params)

        with self._lock:
            self.tasks[task_id] = task

        # Start async execution
        thread = threading.Thread(target=self._execute_task, args=(task_id,))
        thread.daemon = True
        thread.start()

        return task_id

    def _execute_task(self, task_id: str):
        task = self.tasks[task_id]
        task.status = TaskStatus.RUNNING
        task.started_at = datetime.now()

        try:
            # Add progress callback
            params = task.params.copy()
            params['_progress_callback'] = lambda p, msg: self._update_progress(task_id, p, msg)

            result = self.executor.execute(task.operation, params)

            task.status = TaskStatus.COMPLETED
            task.result = result
            task.progress = 100
            task.message = "Operation completed successfully"

        except Exception as e:
            task.status = TaskStatus.FAILED
            task.error = str(e)
            task.message = f"Operation failed: {str(e)}"

        finally:
            task.completed_at = datetime.now()

    def _update_progress(self, task_id: str, progress: int, message: str):
        task = self.tasks.get(task_id)
        if task:
            task.progress = progress
            task.message = message
            task.logs.append(f"[{datetime.now().isoformat()}] {message}")

    def get_task_status(self, task_id: str) -> Optional[Dict]:
        task = self.tasks.get(task_id)
        if not task:
            return None

        return {
            'task_id': task.task_id,
            'status': task.status,
            'progress': task.progress,
            'message': task.message,
            'logs': task.logs[-50:],  # Last 50 logs
            'created_at': task.created_at.isoformat(),
            'started_at': task.started_at.isoformat() if task.started_at else None,
            'completed_at': task.completed_at.isoformat() if task.completed_at else None,
            'result': task.result,
            'error': task.error
        }

    def cancel_task(self, task_id: str) -> bool:
        task = self.tasks.get(task_id)
        if task and task.status in [TaskStatus.PENDING, TaskStatus.RUNNING]:
            task._cancel_flag = True
            task.status = TaskStatus.CANCELLED
            task.message = "Task cancelled by user"
            return True
        return False
