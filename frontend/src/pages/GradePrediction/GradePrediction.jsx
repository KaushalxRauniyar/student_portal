import { useState } from "react";
import axios from "axios";
import { FaChartLine, FaArrowRight } from "react-icons/fa";
import "./GradePrediction.css";

const GradePrediction = () => {
  const [formData, setFormData] = useState({
    "10th": "",
    "12th": "",
    "1st": "",
    "2nd": "",
    "3rd": "",
    "4th": "",
    "5th": "",
    "6th": "",
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Only allow numbers and decimal point
    if (
      value === "" ||
      (/^\d*\.?\d*$/.test(value) && parseFloat(value) <= 10)
    ) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const getRequiredFields = () => {
    const filledFields = Object.entries(formData)
      .filter(([, value]) => value !== "")
      .map(([key]) => key);

    if (filledFields.length === 0) return ["10th", "12th"];
    const lastField = filledFields[filledFields.length - 1];
    const semesterNumber = parseInt(lastField) || 0;

    if (semesterNumber < 1) return ["10th", "12th", "1st"];
    return [
      "10th",
      "12th",
      ...Array.from(
        { length: semesterNumber },
        (_, i) => `${i + 1}${getSuffix(i + 1)}`
      ),
    ];
  };

  const getSuffix = (num) => {
    if (num === 1) return "st";
    if (num === 2) return "nd";
    if (num === 3) return "rd";
    return "th";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const dataToSend = Object.fromEntries(
        Object.entries(formData)
          .filter(([, value]) => value !== "")
          .map(([key, value]) => [key, parseFloat(value)])
      );

      const response = await axios.post(
        "https://recommendation-engine-l7cl.onrender.com/api/predict-score",
        dataToSend
      );
      setPrediction(response.data);
    } catch (err) {
      setError("Failed to get prediction. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const requiredFields = getRequiredFields();

  const getLabelText = (semester) => {
    if (semester === "10th" || semester === "12th") {
      return `${semester} Grade`;
    }
    return `${semester} Semester SGPA`;
  };

  return (
    <div className="grade-prediction-container">
      <div className="grade-prediction-header">
        <div className="header-icon">
          <FaChartLine />
        </div>
        <h2>Grade Prediction</h2>
        <p>
          Predict your next semester&apos;s grade based on your academic history
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grade-prediction-form">
        <div className="form-grid">
          {Object.keys(formData).map((semester) => (
            <div
              key={semester}
              className={`form-group ${
                requiredFields.includes(semester) ? "required" : ""
              }`}
            >
              <label htmlFor={semester}>
                {getLabelText(semester)}
                {requiredFields.includes(semester) && (
                  <span className="required-mark">*</span>
                )}
              </label>
              <input
                type="text"
                id={semester}
                name={semester}
                value={formData[semester]}
                onChange={handleInputChange}
                placeholder="Enter grade"
                className="grade-input"
                required={requiredFields.includes(semester)}
              />
            </div>
          ))}
        </div>

        <button type="submit" disabled={loading} className="predict-button">
          {loading ? (
            <div className="loading-spinner">
              <svg className="spinner" viewBox="0 0 50 50">
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                />
              </svg>
              <span>Predicting...</span>
            </div>
          ) : (
            <>
              Predict Next Semester
              <FaArrowRight className="button-icon" />
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="error-message">
          <svg className="error-icon" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </div>
      )}

      {prediction && (
        <div className="prediction-result">
          <div className="prediction-card">
            <div className="prediction-header">
              <h3>Predicted {prediction.predicted_semester} Semester SGPA</h3>
              <div className="prediction-score">
                {prediction.predicted_score.toFixed(2)}
              </div>
            </div>
            <div className="performance-analysis">
              <h4>Performance Analysis</h4>
              <p>{prediction.performance_analysis}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GradePrediction;
