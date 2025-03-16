import React from 'react';
import './Test.css';

function QuizStart({ domain, questionCount, onStart }) {
  return (
    <div className="quiz-start-card">
      <div className="quiz-info">
        <h2>{domain} Quiz</h2>
        
        <div className="quiz-details">
          <div className="detail-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Duration: {questionCount * 1} minutes</span>
          </div>
          
          <div className="detail-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>{questionCount} Questions</span>
          </div>
          
          <div className="detail-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Total Score: {questionCount} points</span>
          </div>
        </div>

        <div className="quiz-instructions">
          <h3>Instructions:</h3>
          <ul>
            <li>Each question carries 1 point</li>
            <li>No negative marking</li>
            <li>You cannot go back to previous questions</li>
            <li>Select the best answer from the given options</li>
          </ul>
        </div>

        <button className="start-button" onClick={onStart}>
          Start Quiz
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default QuizStart; 