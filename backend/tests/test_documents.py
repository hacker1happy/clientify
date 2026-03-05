import os
import shutil
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_generate_duplicate_documents():

    payload = {
        "process": "duplicate",
        "data": {
            "FOLIONO": "TEST123",
            "NumberOfShareHolders": "1",
            "SIGNATUREA": "John Doe",
            "Email1": "john@example.com",
            "Mobile1": "9999999999",
            "FACEVALUE": "10",
            "CERTNOA": "123",
            "NOSA": "100"
        },
        "selected_files": [
            "1. Authorization_Letter.docx"
        ]
    }

    response = client.post("/api/documents/generate", json=payload)

    assert response.status_code == 200
    assert response.headers["content-type"] == "application/zip"

    # Save returned zip temporarily
    zip_path = "test_output.zip"
    with open(zip_path, "wb") as f:
        f.write(response.content)

    assert os.path.exists(zip_path)

    # # Cleanup zip
    # os.remove(zip_path)

    # # Cleanup backend output folder
    # output_folder = os.path.join(
    #     "app",
    #     "output",
    #     "duplicate",
    #     "TEST123"
    # )

    # if os.path.exists(output_folder):
    #     shutil.rmtree(output_folder)

    # # Cleanup generated zip inside backend (if created there)
    # backend_zip = output_folder + ".zip"
    # if os.path.exists(backend_zip):
    #     os.remove(backend_zip)
    # # Cleanup zip
    # os.remove(zip_path)

    # # Cleanup backend output folder           
    # output_folder = os.path.join(
    #     "app",
    #     "output",
    #     "duplicate",
    #     "TEST123"
    # )

    # if os.path.exists(output_folder):
    #     shutil.rmtree(output_folder)

    # # Cleanup generated zip inside backend (if created there)
    # backend_zip = output_folder + ".zip"
    # if os.path.exists(backend_zip):
    #     os.remove(backend_zip)