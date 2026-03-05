import { useState } from 'react';
import { generateDocuments } from '../services/api';

export const useFormSubmit = (processName) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = async (formData, selectedFiles = []) => {
    setLoading(true);
    setError(null);

    try {
      const result = await generateDocuments(processName, formData, selectedFiles);
      return result;
    } catch (err) {
      setError(err.message || 'An error occurred while generating documents');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setError(null);
  };

  return {
    submitForm,
    resetForm,
    loading,
    error,
  };
};