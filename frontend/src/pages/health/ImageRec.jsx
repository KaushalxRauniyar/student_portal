import React, { useState } from 'react';
import { getPrediction } from '../../services/ApiService';
import './ImageRec.css'

const ImageRec = () => {
  const [formData, setFormData] = useState({
    id: 1,
    Gender: '',
    Age: '',
    City: '',
    Profession: '',
    AcademicPressure: '',
    WorkPressure: '',
    CGPA: '',
    StudySatisfaction: '',
    JobSatisfaction: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prediction = await getPrediction(formData);
    setResult(prediction);
    alert(result.depression_status?"Sorry😓 You have depression.Please Consult with Doctor":"Congrats🎉 You are Healthy")
  };


  return (
    <div className='healthh bg-gradient-to-l from-red-200 to-blue-300 h-screen w-screen'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Gender: </label>
            <input
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              placeholder='Male/Female'
              required
            />
          </div>
          <div>
            <label>Age: </label>
            <input
              name="Age"
              type="number"
              placeholder='E.g. 21'
              value={formData.Age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>City: </label>
            <input
              name="City"
              placeholder='Enter Your Place'
              value={formData.City}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Profession: </label>
            <input
              name="Profession"
              placeholder='E.g Student'
              value={formData.Profession}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Academic Pressure: </label>
            <input
              name="AcademicPressure"
              placeholder='0-5'
              type="number"
              value={formData.AcademicPressure}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Work Pressure: </label>
            <input
              name="WorkPressure"
               placeholder='0-5'
              type="number"
              value={formData.WorkPressure}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>CGPA: </label>
            <input
              name="CGPA"
              placeholder='1.00-10.00'
              type="number"
              value={formData.CGPA}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Study Satisfaction: </label>
            <input
              name="StudySatisfaction"
              placeholder='0-5'
              type="number"
              value={formData.StudySatisfaction}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Job Satisfaction: </label>
            <input
              name="JobSatisfaction"
              type="number"
              value={formData.JobSatisfaction}
              placeholder='0-5'
              onChange={handleChange}
              required
            />
          </div>
          <div className='text-center'>

          <button type="submit">Get Prediction</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default ImageRec;
