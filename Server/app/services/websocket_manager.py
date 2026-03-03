# services/websocket_manager.py
from fastapi import WebSocket
from typing import Dict, Set
import asyncio
import json

class WebSocketManager:
    def __init__(self):
        self.active_connections: Dict[str, Set[WebSocket]] = {}

    async def connect(self, websocket: WebSocket, task_id: str):
        await websocket.accept()
        if task_id not in self.active_connections:
            self.active_connections[task_id] = set()
        self.active_connections[task_id].add(websocket)

    def disconnect(self, task_id: str, websocket: WebSocket = None):
        if task_id in self.active_connections:
            if websocket:
                self.active_connections[task_id].discard(websocket)
            if not self.active_connections[task_id] or not websocket:
                del self.active_connections[task_id]

    async def broadcast_to_task(self, task_id: str, message: dict):
        if task_id in self.active_connections:
            disconnected = set()
            for connection in self.active_connections[task_id]:
                try:
                    await connection.send_json(message)
                except:
                    disconnected.add(connection)

            # Clean up disconnected
            for conn in disconnected:
                self.active_connections[task_id].discard(conn)
