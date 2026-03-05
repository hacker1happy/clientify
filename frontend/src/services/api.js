const API_BASE_URL = 'http://localhost:8000/clientify';

export const generateDocuments = async (process, formData, selectedFiles = []) => {
  try {
    console.log('Submitting form data:', { process, formData, selectedFiles });
    const response = await fetch(`${API_BASE_URL}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        process,
        data: formData,
        selected_files: selectedFiles,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate documents');
    }

    // Get the blob from response
    const blob = await response.blob();
    
    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `documents_${process}_${Date.now()}.zip`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);

    return { success: true };
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};