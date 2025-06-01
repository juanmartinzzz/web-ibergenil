import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, HelpCircle, XCircle } from 'lucide-react';
import { QuizQuestion } from '../../types';

const QuickQuiz: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "¿Por qué Andalucía está entre las mejores regiones de Europa para instalar paneles solares?",
      options: [
        { id: "low", text: "Porque tiene menor densidad de nubes que otras regiones", isCorrect: false   },
        { id: "medium", text: "Porque tiene más de 3 mil horas de sol al año", isCorrect: true },
        { id: "high", text: "Porque los paneles funcionan mejor cerca del Mediterráneo", isCorrect: false }
      ],
      funFact: "Andalucía tiene uno de los mayores niveles de radiación solar de Europa. ¡Literalmente vives en una mina de oro solar sin explotar!",
    },
    {
      id: 2,
      question: "¿Qué ventajas económicas trae instalar paneles solares en tu casa o negocio en España?",
      options: [
        { id: "flat", text: "Puedes vender tu excedente de energía a la red eléctrica y recibir compensación", isCorrect: true },
        { id: "sloped", text: "Te descuentan el IVA de todas tus compras por 5 años", isCorrect: false  },
        { id: "unsure", text: "Te regalan entradas al Caminito del Rey", isCorrect: false }
      ],
      funFact: "Desde 2019 en España está en vigor la compensación simplificada, lo que significa que si produces más energía de la que consumes, te descuentan ese sobrante en tu factura. ¡Es como tener una pequeña planta eléctrica en tu tejado!",
    },
    {
      id: 3,
      question: "¿Cuál afirmación es cierta sobre los paneles solares?",
      options: [
        { id: "high", text: "Tienen solo 5% de eficiencia", isCorrect: false },
        { id: "medium", text: "Solo funcionan durante los veranos", isCorrect: false },
        { id: "low", text: "Reducen drásticamente las emisiones de CO₂", isCorrect: true }
      ],
      funFact: "Una instalación solar residencial típica puede evitar la emisión de más de una tonelada de CO₂ al año. ¡Eso equivale a plantar unos 50 árboles cada año sin ensuciarte las manos!",
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (questionId: number, optionId: string) => {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    setAnsweredQuestions([...answeredQuestions, questionId]);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 1500);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setAnsweredQuestions([]);
    setQuizCompleted(false);
  };

  const isAnswerCorrect = (questionId: number, optionId: string) => {
    const question = questions.find(q => q.id === questionId);
    return question?.options.find(opt => opt.id === optionId)?.isCorrect;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 h-full">
      <h2 className="font-montserrat font-semibold text-2xl text-primary mb-4">
        Quiz rápido
      </h2>
      {!quizCompleted && (
        <p className="text-gray-600">
          Cuánto sabes sobre energía solar?
        </p>
      )}

      <AnimatePresence mode="wait">
        {quizCompleted && (
          <motion.div
          key="quiz-result"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center p-6"
          >
          <div className="mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-6xl"
            >
              🌞
            </motion.div>
          </div>
          <p className="text-gray-600 mb-6">
            Listo para pasar a un futuro más sostenible y económico? Ibergenil Energy hace realidad tu proyecto de energía solar con una visita <span className="text-secondary font-bold">GRATUITA</span> y sin compromiso.
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
              <span>Solicita tu visita gratuita</span>
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

        {/* Questions */}
        <div className="mt-4 space-y-8">
          {/* Current Question */}
          {!quizCompleted && (
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
                {questions[currentQuestion].options.map(option => {
                  const isAnswered = answeredQuestions.includes(questions[currentQuestion].id);
                  const isSelected = answers[questions[currentQuestion].id] === option.id;
                  const isCorrect = isAnswerCorrect(questions[currentQuestion].id, option.id);

                  return (
                    <motion.button
                      key={option.id}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all flex justify-between items-center ${
                        isAnswered
                          ? isCorrect
                            ? 'border-green-500 bg-green-50'
                            : isSelected
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200'
                          : isSelected
                          ? 'border-secondary bg-secondary opacity-10'
                          : 'border-gray-200 hover:border-secondary'
                      }`}
                      onClick={() => !isAnswered && handleAnswer(questions[currentQuestion].id, option.id)}
                      whileHover={!isAnswered ? { scale: 1.02 } : {}}
                      whileTap={!isAnswered ? { scale: 0.98 } : {}}
                      disabled={isAnswered}
                    >
                      <span>{option.text}</span>
                      {isAnswered && (
                        <>
                          {isCorrect && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="flex items-center gap-2"
                            >
                              <span className="text-green-500">✨</span>
                              <CheckCircle2 size={20} className="text-green-500" />
                            </motion.div>
                          )}
                          {isSelected && !isCorrect && (
                            <XCircle size={20} className="text-red-500" />
                          )}
                        </>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {answeredQuestions.includes(questions[currentQuestion].id) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg"
                >
                  <p className="text-md text-secondary leading-tight">
                    {questions[currentQuestion].funFact}
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Previous Questions */}
          {answeredQuestions.length > 0 && (
            <div className="space-y-6">
              <h4 className="font-montserrat font-medium text-lg text-gray-700">
                Preguntas anteriores
              </h4>

              {answeredQuestions.reverse().map((questionId, index) => {
                const question = questions.find(q => q.id === questionId);
                if (!question) return null;

                return (
                  <motion.div
                    key={`answered-${questionId}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-4 rounded-lg"
                  >
                    <h5 className="font-medium text-gray-800 mb-3">
                      {question.question}
                    </h5>
                    <div className="space-y-2">
                      {question.options.map(option => {
                        const isSelected = answers[questionId] === option.id;
                        const isCorrect = option.isCorrect;

                        return (
                          <div
                            key={option.id}
                            className={`py-1 px-3 rounded-lg border flex justify-between items-center ${
                              isCorrect
                                ? 'border-green-500 bg-green-50'
                                : isSelected
                                ? 'border-red-500 bg-red-50'
                                : 'border-gray-200 hidden'
                            }`}
                          >
                            <span className="text-sm">{option.text}</span>
                            {isCorrect && (
                              <div className="flex items-center gap-2">
                                <span className="text-green-500">✨</span>
                                <CheckCircle2 size={16} className="text-green-500" />
                              </div>
                            )}
                            {isSelected && !isCorrect && (
                              <XCircle size={16} className="text-red-500" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-3 p-3 rounded-lg"
                    >
                      <p className="text-md text-secondary leading-tight">
                        {question.funFact}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default QuickQuiz;