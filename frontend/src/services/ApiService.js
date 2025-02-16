import axios from 'axios';

export const getPrediction = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/predict', formData, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting prediction:', error);
    throw error;
  }
};
