import React from 'react';
import './Test.css';

function QuizResult({ score, totalQuestions, onRestart, onReview }) {
  const percentage = (score / totalQuestions) * 100;
  let message = '';
  let messageColor = '';

  if (percentage >= 90) {
    message = 'Excellent! You\'re a master of this subject!';
    messageColor = '#10B981';
  } else if (percentage >= 70) {
    message = 'Great job! You have a good understanding!';
    messageColor = '#3B82F6';
  } else if (percentage >= 50) {
    message = 'Good effort! Keep practicing to improve!';
    messageColor = '#F59E0B';
  } else {
    message = 'Keep learning! You\'ll do better next time!';
    messageColor = '#EF4444';
  }

  return (
    <div className="quiz-result-card">
      <div className="result-content">
        <div className="score-circle" style={{ '--score-color': messageColor }}>
          <div className="score-number">{score}</div>
          <div className="score-label">out of {totalQuestions}</div>
        </div>

        <h2 className="result-title">Quiz Completed!</h2>
        <p className="result-message" style={{ color: messageColor }}>{message}</p>
        
        <div className="result-stats">
          <div className="stat-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Correct Answers: {score}</span>
          </div>
          <div className="stat-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span>Wrong Answers: {totalQuestions - score}</span>
          </div>
          <div className="stat-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20v-6M6 20V10M18 20V4"></path>
            </svg>
            <span>Accuracy: {Math.round(percentage)}%</span>
          </div>
        </div>

        <div className="result-actions">
          <button className="review-button" onClick={onReview}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Review Answers
          </button>
          <button className="restart-button" onClick={onRestart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9-9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M3 21v-5h5"></path>
            </svg>
            Try Another Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizResult; 