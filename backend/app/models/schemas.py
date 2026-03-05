from pydantic import BaseModel
from typing import Dict, List, Any

class DocumentRequest(BaseModel):
    process: str   # duplicate | transmission | joint
    data: Dict[str, Any]   # All form fields from React
    selected_files: List[str]   # List of selected files to be generated