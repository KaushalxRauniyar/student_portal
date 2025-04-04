import React, { useState } from "react";
import axios from "axios";
import { FaGraduationCap, FaCode, FaHeart, FaBriefcase } from "react-icons/fa";
import PropTypes from "prop-types";
import "./ElectiveSuggestion.css";

const ElectiveSuggestion = () => {
  const [formData, setFormData] = useState({
    selected_courses: [],
    skills: [],
    interests: [],
    career_goals: [],
  });

  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Predefined options
  const courseOptions = [
    "Data Structures",
    "Machine Learning",
    "Web Development",
    "Computer Networks",
    "Database Management",
    "Operating Systems",
    "Software Engineering",
    "Cloud Computing",
  ];

  const skillOptions = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Java",
    "SQL",
    "React",
    "Node.js",
    "Git",
    "Docker",
  ];

  const interestOptions = [
    "artificial intelligence",
    "web development",
    "mobile development",
    "data science",
    "cybersecurity",
    "cloud computing",
    "blockchain",
    "game development",
  ];

  const careerOptions = [
    "software engineer",
    "web developer",
    "data scientist",
    "mobile developer",
    "cloud architect",
    "security engineer",
    "devops engineer",
    "full stack developer",
  ];

  const handleSelect = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://recommendation-engine-l7cl.onrender.com/api/recommend",
        formData
      );
      setRecommendations(response.data);
    } catch (err) {
      setError("Failed to get recommendations. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const SelectSection = ({ title, options, selected, category, icon }) => (
    <div className="section-container">
      <div className="section-header">
        <div className="section-icon">{icon}</div>
        <h3 className="section-title">{title}</h3>
      </div>
      <div className="options-grid">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(category, option)}
            className={`option-button ${
              selected.includes(option) ? "selected" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  SelectSection.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  };

  return (
    <div className="elective-container">
      <div className="elective-header">
        <h2>Elective Course Recommendation</h2>
        <p>
          Select your preferences to get personalized course recommendations
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <SelectSection
          title="Selected Courses"
          options={courseOptions}
          selected={formData.selected_courses}
          category="selected_courses"
          icon={<FaGraduationCap />}
        />

        <SelectSection
          title="Skills"
          options={skillOptions}
          selected={formData.skills}
          category="skills"
          icon={<FaCode />}
        />

        <SelectSection
          title="Interests"
          options={interestOptions}
          selected={formData.interests}
          category="interests"
          icon={<FaHeart />}
        />

        <SelectSection
          title="Career Goals"
          options={careerOptions}
          selected={formData.career_goals}
          category="career_goals"
          icon={<FaBriefcase />}
        />

        <button type="submit" disabled={loading} className="submit-button">
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
                ></circle>
              </svg>
              <span>Getting Recommendations...</span>
            </div>
          ) : (
            "Get Recommendations"
          )}
        </button>
      </form>

      {error && (
        <div className="error-message">
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {recommendations && (
        <div className="recommendations-section">
          <h3 className="recommendations-header">Recommended Courses</h3>
          <div className="recommendations-grid">
            {recommendations.recommendations.map((rec) => (
              <div key={rec.course_id} className="recommendation-card">
                <div className="recommendation-header">
                  <h4 className="course-title">{rec.title}</h4>
                  {/* <span className="match-score">{rec.match_score}% Match</span> */}
                </div>
                <p className="course-description">{rec.description}</p>
                <p className="course-explanation">{rec.explanation}</p>
                <div className="keywords-container">
                  {rec.keywords.map((keyword) => (
                    <span key={keyword} className="keyword-tag">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ElectiveSuggestion;
