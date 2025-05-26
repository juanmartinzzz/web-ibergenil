import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { QuizQuestion } from '../../types';

const QuickQuiz: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "¿Cuánto es tu factura de electricidad promedio mensual?",
      options: [
        { id: "low", text: "Menos de 100€", value: 1 },
        { id: "medium", text: "100€ - 200€", value: 2 },
        { id: "high", text: "Más de 200€", value: 3 }
      ]
    },
    {
      id: 2,
      question: "¿Qué tipo de techo tiene tu propiedad?",
      options: [
        { id: "flat", text: "Plano", value: 3 },
        { id: "sloped", text: "Inclinado/Pendiente", value: 2 },
        { id: "unsure", text: "No lo sé", value: 1 }
      ]
    },
    {
      id: 3,
      question: "¿Cuánto sol recibe tu propiedad?",
      options: [
        { id: "high", text: "Mucho sol (Sur)", value: 3 },
        { id: "medium", text: "Moderado", value: 2 },
        { id: "low", text: "Poco sol", value: 1 }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (questionId: number, optionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    setScore(prevScore => prevScore + value);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScore(0);
    setQuizCompleted(false);
  };

  const getResultMessage = () => {
    // Maximum possible score is 9 (3 questions with max value 3)
    const percentage = (score / 9) * 100;

    if (percentage >= 75) {
      return {
        title: "Excellent Solar Potential!",
        message: "Based on your answers, your property has excellent potential for solar energy. You could save significantly on energy bills!",
        icon: <CheckCircle2 size={48} className="text-green-500" />
      };
    } else if (percentage >= 50) {
      return {
        title: "Good Solar Potential",
        message: "Your property shows good potential for solar energy. A professional assessment can help identify the best solution for you.",
        icon: <CheckCircle2 size={48} className="text-secondary" />
      };
    } else {
      return {
        title: "Worth Exploring Further",
        message: "There may be some challenges, but solar could still be viable. Our experts can help determine the best options for your situation.",
        icon: <HelpCircle size={48} className="text-accent" />
      };
    }
  };

  const result = getResultMessage();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 h-full">
      <h2 className="font-montserrat font-semibold text-2xl text-primary mb-4">
        Quiz rápido sobre energía solar
      </h2>
      <p className="text-gray-600 mb-6">
        Responde unas preguntas sobre los beneficios de la energía solar
      </p>

      <AnimatePresence mode="wait">
        {!quizCompleted ? (
          <motion.div
            key={`question-${currentQuestion}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-background p-6 rounded-lg"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-sm font-medium bg-primary-light text-white px-2 py-1 rounded-full">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>

            <h3 className="font-montserrat font-medium text-xl mb-6">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-3">
              {questions[currentQuestion].options.map(option => (
                <motion.button
                  key={option.id}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all flex justify-between items-center ${
                    answers[questions[currentQuestion].id] === option.id
                      ? 'border-secondary bg-secondary opacity-10'
                      : 'border-gray-200 hover:border-secondary'
                  }`}
                  onClick={() => handleAnswer(questions[currentQuestion].id, option.id, option.value)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{option.text}</span>
                  {answers[questions[currentQuestion].id] === option.id && (
                    <CheckCircle2 size={20} className="text-secondary" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="quiz-result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center p-6"
          >
            <div className="mb-6 flex justify-center">
              {result.icon}
            </div>
            <h3 className="font-montserrat font-semibold text-2xl text-primary mb-4">
              {result.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {result.message}
            </p>
            <div className="space-y-4">
              <motion.button
                className="w-full bg-secondary text-white py-3 rounded-md flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const formElement = document.getElementById('solar-form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Obtén tu evaluación gratuita</span>
                <ArrowRight size={18} />
              </motion.button>
              <button
                className="text-primary underline"
                onClick={resetQuiz}
              >
                Reiniciar las preguntas
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuickQuiz;