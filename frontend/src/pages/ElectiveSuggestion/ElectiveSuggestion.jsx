import React, { useState } from 'react';
import './ElectiveSuggestion.css';
import { FaArrowRight } from 'react-icons/fa';
import SuggestionCard from './SuggestionCard';

const ElectiveSuggestion = () => {
  // Predefined courses from backend
  const predefinedCourses = [
    "Data Structures",
    "Database Management",
    "Operating Systems",
    "Computer Networks",
    "Machine Learning",
    "Web Development",
    "Cybersecurity",
    "Software Engineering",
    "Data Mining and Data Warehousing",
    "Data Science and Machine Learning",
    "Deep Learning and Neural Networks",
    "Digital Forensics",
    "Digital Marketing and Analytics",
    "Distributed Computing",
    "Edge Computing",
    "Embedded Systems",
    "Ethical Hacking",
    "Evolutionary Computation",
    "Fuzzy Logic and Soft Computing",
    "Game Development and Design",
    "Geographic Information Systems",
    "Green Computing",
    "High-Performance Computing",
    "Human-Centered AI",
    "Humanoid Robotics",
    "Image Processing and Pattern Recognition",
    "Immersive Technologies",
    "Information and Web Security",
    "Next-Generation Wireless Networks",
    "Parallel and Distributed Systems",
    "Post-Quantum Cryptography",
    "Quantum Computing",
    "Recommender Systems",
    "Robotics and Intelligent Systems",
    "Security in IoT",
    "Self-Adaptive Software Systems",
    "Semantic Web and Ontology Engineering",
    "Sensor Networks and Pervasive Computing",
    "Social Network Analysis",
    "Software Defined Networking",
    "Software Testing and Quality Assurance",
    "Speech and Audio Processing",
    "Swarm Intelligence",
    "Trust and Privacy in AI",
    "Ubiquitous Computing",
    "Vehicular Ad Hoc Networks",
    "Virtual Reality and Augmented Reality",
    "Wearable Computing",
    "Web 3.0 and Decentralized Applications",
    "Wireless Sensor Networks and IoT Security",
    "Artificial Intelligence Ethics and Regulations",
    "Bio-Medical Data Processing",
    "Computational Advertising",
    "Computational Finance",
    "Computational Geometry",
    "Cyber Threat Intelligence",
    "Data Visualization and Storytelling",
    "Explainable AI",
    "Fog Computing",
    "Genetic Algorithms",
    "Graph Theory in Computer Science",
    "Haptics and Human-Computer Interaction",
    "Intelligent Transportation Systems",
    "Internet Law and Cyber Regulations",
    "Knowledge Engineering",
    "Malware Analysis",
    "Mobile and Wireless Security",
    "Multimodal Interaction Systems",
    "Neuro-Symbolic AI",
    "Privacy-Preserving Computing",
    "Software Reengineering",
    "Smart Contracts and Cryptoeconomics",
    "Software Reliability",
    "Surveillance Technologies",
    "Synthetic Data Generation",
    "Traffic Analysis in Cybersecurity",
    "Web Personalization",
    "Zero Trust Security"
  ];

  const [formData, setFormData] = useState({
    selected_courses: [],
    skills: [],
    area_of_interest: [],
    future_career_paths: []
  });

  const [suggestions, setSuggestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    skills: [
      'Programming',
      'Data Analysis',
      'Machine Learning',
      'Web Development',
      'Database Management',
      'Cybersecurity',
      'Cloud Computing',
      'DevOps',
      'UI/UX Design',
      'Mobile Development',
      'Ethics',
      'AI',
      'Policy'
    ],
    interests: [
      'Artificial Intelligence',
      'Data Science',
      'Software Development',
      'Cybersecurity',
      'Cloud Computing',
      'Mobile Development',
      'Game Development',
      'Blockchain',
      'IoT',
      'Robotics',
      'AI Ethics',
      'Responsible AI'
    ],
    careers: [
      'Software Engineer',
      'Data Scientist',
      'AI/ML Engineer',
      'DevOps Engineer',
      'Cybersecurity Analyst',
      'Cloud Architect',
      'Full Stack Developer',
      'Mobile Developer',
      'UI/UX Designer',
      'Blockchain Developer',
      'AI Ethicist',
      'Policy Analyst'
    ]
  };

  const handleMultiSelectChange = (e, field) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({
      ...prev,
      [field]: selectedOptions
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const requestData = {
        selected_courses: formData.selected_courses,
        skills: formData.skills.map(skill => skill.toLowerCase()),
        area_of_interest: formData.area_of_interest.map(interest => interest.toLowerCase()),
        future_career_paths: formData.future_career_paths.map(career => career.toLowerCase())
      };

      console.log('Request Data:', requestData);

      const response = await fetch('http://localhost:5000/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error Response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response Data:', data);
      setSuggestions(data || null);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to get recommendations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="elective-container">
      <div className="elective-page">
        <div className="elective-content">
          <h1>Elective Course Suggestions</h1>

          <form onSubmit={handleSubmit} className="elective-form">
            <div className="form-group">
              <label htmlFor="selected_courses">Previously Completed Courses</label>
              <select
                id="selected_courses"
                multiple
                value={formData.selected_courses}
                onChange={(e) => handleMultiSelectChange(e, 'selected_courses')}
                className="multi-select"
                required
              >
                {predefinedCourses.map(course => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
              <small className="text-gray-500">Hold Ctrl/Cmd to select multiple courses</small>
            </div>

            <div className="form-group">
              <label htmlFor="skills">Technical Skills</label>
              <select
                id="skills"
                multiple
                value={formData.skills}
                onChange={(e) => handleMultiSelectChange(e, 'skills')}
                className="multi-select"
                required
              >
                {options.skills.map(skill => (
                  <option key={skill} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
              <small className="text-gray-500">Hold Ctrl/Cmd to select multiple skills</small>
            </div>

            <div className="form-group">
              <label htmlFor="area_of_interest">Areas of Interest</label>
              <select
                id="area_of_interest"
                multiple
                value={formData.area_of_interest}
                onChange={(e) => handleMultiSelectChange(e, 'area_of_interest')}
                className="multi-select"
                required
              >
                {options.interests.map(interest => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
              <small className="text-gray-500">Hold Ctrl/Cmd to select multiple interests</small>
            </div>

            <div className="form-group">
              <label htmlFor="future_career_paths">Future Career Paths</label>
              <select
                id="future_career_paths"
                multiple
                value={formData.future_career_paths}
                onChange={(e) => handleMultiSelectChange(e, 'future_career_paths')}
                className="multi-select"
                required
              >
                {options.careers.map(career => (
                  <option key={career} value={career}>
                    {career}
                  </option>
                ))}
              </select>
              <small className="text-gray-500">Hold Ctrl/Cmd to select multiple career paths</small>
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Getting Suggestions...' : 'Get Suggestions'}
              {!loading && <FaArrowRight className="ml-2" />}
            </button>
          </form>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="suggestions-section">
            {suggestions ? (
              <>
                <h2>Recommended Electives</h2>
                <div className="suggestions-grid">
                  <SuggestionCard suggestion={suggestions} />
                </div>
              </>
            ) : !loading && !error && (
              <div className="no-suggestions">
                Select your preferences to get elective suggestions
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectiveSuggestion; 