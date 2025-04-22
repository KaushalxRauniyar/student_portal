import React from 'react';
import './Test.css';

function QuizQuestion({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer, 
  userAnswer,
  score,
  isReview = false,
  showAllQuestions = false,
  isLocked = false
}) {
  const progress = (currentQuestion / totalQuestions) * 100;

  const getOptionClass = (index) => {
    if (userAnswer === null && !isLocked) return '';
    
    const isSelected = userAnswer === index;
    const isCorrect = question.answerIndex === index;
    
    if (isSelected && isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'incorrect';
    if (!isSelected && isCorrect && (userAnswer !== null || isLocked)) return 'correct';
    
    return '';
  };

  return (
    <div className={`quiz-question-card ${showAllQuestions ? 'review-mode' : ''}`}>
      {!showAllQuestions && (
        <div className="quiz-header">
          <div className="quiz-progress">
            <div className="progress-text">
              <span>Question {currentQuestion} of {totalQuestions}</span>
              <span className="score">Score: {score}/{totalQuestions}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      <div className="question-content">
        <h2 className="question-text">
          <span className="question-number">{currentQuestion}.</span>
          {question.question}
        </h2>

        <div className="options-grid">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${userAnswer === index ? 'selected' : ''} ${getOptionClass(index)}`}
              onClick={() => !isReview && !isLocked && onAnswer(index)}
              disabled={userAnswer !== null || isReview || isLocked}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="option-text">{option}</span>
              {(userAnswer !== null || isLocked) && index === question.answerIndex && (
                <svg className="correct-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizQuestion; 