import React, { useState } from "react";
import DomainSearch from "./DomainSearch";
import QuizStart from "./QuizStart";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import "./Test.css";
import { Shuffle } from "lucide-react";

function shuffleArray(array) {
  const newArray = [...array]; // Create a copy of the array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
}

const AVAILABLE_DOMAINS = [
  "React",
  "DBMS",
  "AI",
  "Machine Learning",
  "Computer Networks",
  "Java",
  "Software Engineering",
  "Operating System",
  "Design and Analysis of Algorithms",
  "Data Structures and Algorithms",
  "Cloud Computing",
  "C Programming",
  "C++ Programming",
  "Python Programming",
  "JavaScript Programming",
  "HTML and CSS",
  "Web Development",
  "Angular Development",
  "Automata and Formal Language",
  "High-Performance Computing (HPC)",
  "Data Mining and Data Warehousing",
  "TypeScript Programming",
  "Node.js Programming",
  "Object-Oriented Programming (OOP)",
  "Advanced Mathematics",
];

function Test() {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [quizData, setQuizData] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);

  const handleDomainSelect = async (domain) => {
    try {
      setLoading(true);
      setError(null);
      setSelectedDomain(domain);
      const response = await fetch(
        `https://backend-r6wa.onrender.com/quizs/${encodeURIComponent(domain)}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch quiz questions");
      }

      const data = await response.json();

      // Shuffle both questions and options for each question
      // const shuffledQuestions = shuffleArray(data.questions).map(question => ({
      //   ...question,
      //   // options: shuffleArray(question.options),
      //   // Store the correct answer based on the shuffled options
      //   answerIndex: question.options.indexOf(question.options[question.answerIndex])
      // }));

      setQuizData({ ...data, questions: data.questions });
      setUserAnswers(new Array(data.questions.length).fill(null));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const handleAnswer = (answerIndex) => {
    if (isAnswerLocked) return;

    setIsAnswerLocked(true);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);

    if (answerIndex === quizData.questions[currentQuestion].answerIndex) {
      setScore((prevScore) => prevScore + 1);
    }

    // Wait for 1.5 seconds before moving to next question
    setTimeout(() => {
      if (currentQuestion < quizData.questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setShowResult(true);
      }
      setIsAnswerLocked(false);
    }, 1500);
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setUserAnswers(new Array(quizData.questions.length).fill(null));
    setScore(0);
    setShowResult(false);
    setIsReviewMode(false);
    setIsAnswerLocked(false);
  };

  const reviewQuiz = () => {
    setQuizStarted(true);
    setShowResult(false);
    setIsReviewMode(true);
  };

  return (
    <div className="test-container">
      <div className="test-page">
        <div className="test-content">
          <h1>Quiz Section</h1>

          {!quizStarted && !showResult && (
            <>
              <DomainSearch
                availableDomains={AVAILABLE_DOMAINS}
                onSelect={handleDomainSelect}
              />

              {loading && (
                <div className="loading">Loading quiz questions...</div>
              )}
              {error && <div className="error">{error}</div>}

              {quizData && (
                <QuizStart
                  domain={selectedDomain}
                  questionCount={quizData.questions.length}
                  onStart={startQuiz}
                />
              )}
            </>
          )}

          {quizStarted && !showResult && quizData && !isReviewMode && (
            <QuizQuestion
              question={quizData.questions[currentQuestion]}
              currentQuestion={currentQuestion + 1}
              totalQuestions={quizData.questions.length}
              onAnswer={handleAnswer}
              userAnswer={userAnswers[currentQuestion]}
              score={score}
              isLocked={isAnswerLocked}
            />
          )}

          {quizStarted && !showResult && quizData && isReviewMode && (
            <div className="review-container">
              <div className="review-header">
                <button className="back-button" onClick={restartQuiz}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back to Domains
                </button>
              </div>
              <div className="review-questions">
                {quizData.questions.map((question, index) => (
                  <QuizQuestion
                    key={index}
                    question={question}
                    currentQuestion={index + 1}
                    totalQuestions={quizData.questions.length}
                    onAnswer={() => {}}
                    userAnswer={userAnswers[index]}
                    score={score}
                    isReview={true}
                    showAllQuestions={true}
                  />
                ))}
              </div>
            </div>
          )}

          {showResult && (
            <QuizResult
              score={score}
              totalQuestions={quizData.questions.length}
              onRestart={restartQuiz}
              onReview={reviewQuiz}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Test;
