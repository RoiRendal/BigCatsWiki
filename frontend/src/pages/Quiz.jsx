// src/pages/Quiz.jsx
import { useState } from 'react';
import { questions } from '../data/questions';
import { Link } from 'react-router-dom';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    // Added 'px-4' so it doesn't touch screen edges on mobile
    <div className="max-w-2xl mx-auto mt-6 md:mt-10 px-4 pb-10">
      
      <h1 className="text-2xl md:text-3xl font-extrabold text-center text-stone-800 mb-6 md:mb-8">
        Test Your Knowledge
      </h1>

      {/* 
         RESPONSIVE CARD:
         p-6 (mobile) -> md:p-8 (desktop)
      */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-stone-100 min-h-[400px] flex flex-col justify-center">
        
        {showScore ? (
          /* SECTION 1: SCORE SCREEN */
          <div className="text-center py-6 md:py-10 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-lg md:text-xl mb-8 text-stone-600">
              You scored <span className="text-orange-600 font-bold text-4xl block mt-2">{score} / {questions.length}</span>
            </p>
            
            {/* 
               RESPONSIVE BUTTONS:
               flex-col (Stack on mobile) -> sm:flex-row (Side-by-side on tablet+)
            */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={resetQuiz}
                  className="w-full sm:w-auto bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-colors shadow-md"
                >
                  Play Again
                </button>
                <Link 
                  to="/"
                  className="w-full sm:w-auto bg-stone-100 text-stone-800 px-8 py-3 rounded-full font-bold hover:bg-stone-200 transition-colors text-center border border-stone-200"
                >
                  Back to Wiki
                </Link>
            </div>
          </div>
        ) : (
          /* SECTION 2: QUESTION CARD */
          <div className="w-full">
            <div className="mb-6 md:mb-8">
                <div className="flex justify-between items-end mb-4 border-b border-stone-100 pb-2">
                    <span className="text-xs md:text-sm font-bold text-stone-400 uppercase tracking-widest">
                        Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded">
                        Trivia
                    </span>
                </div>
                
                {/* 
                   FLUID TEXT: 
                   text-xl (mobile) -> md:text-2xl (desktop)
                   h-auto (mobile) -> md:h-20 (desktop fixed height to prevent jumping)
                */}
                <h2 className="text-xl md:text-2xl font-bold text-stone-800 leading-tight md:h-20 flex items-center">
                    {questions[currentQuestion].questionText}
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option.isCorrect)}
                  className="group w-full text-left p-4 rounded-xl border-2 border-stone-100 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 flex items-center justify-between"
                >
                  <span className="font-medium text-stone-700 text-sm md:text-base group-hover:text-orange-900">
                    {option.text}
                  </span>
                  {/* Arrow icon that appears on hover (Desktop) or always visible if you prefer */}
                  <span className="opacity-0 group-hover:opacity-100 text-orange-500 transition-opacity">
                    ➜
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
