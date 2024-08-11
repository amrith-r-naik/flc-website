import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { api } from "~/utils/api";

interface Option {
  id: string;
  text: string;
}

interface Question {
  id: string;
  text: string;
  type?: string; 
  options?: Option[];
  correctOptionId: string;
  score: number;
  imgSrc?: string;
}

const QuizTest = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [savedAnswers, setSavedAnswers] = useState<Set<number>>(new Set());
  const [timer, setTimer] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [isTimerWarning, setIsTimerWarning] = useState<boolean>(false);

  const quizId = Array.isArray(router.query.slug)
    ? router.query.slug[0]
    : router.query.slug;

  if (!quizId) {
    return <div>Error loading quiz.</div>;
  }

  const { data: quiz, isLoading, isError } = api.quiz.getQuizById.useQuery({
    quizId: quizId,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (quiz) {
      setTimer(quiz.timeLimit * 60);
      setTimerRunning(true);
    }
  }, [quiz]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (timerRunning && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleSubmit();
            return 0;
          }
          if (prev <= 60 && !isTimerWarning) {
            setIsTimerWarning(true);
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerRunning, timer]);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !quiz) return <div>Error loading quiz.</div>;

  const questions = quiz.questions?.questions as Question[] | undefined;

  if (!questions || !Array.isArray(questions)) {
    return <div>No questions available for this quiz.</div>;
  }

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleOptionClick = (index: number, value: string) => {
    setAnswers((prev) => {
      const updatedAnswers = { ...prev, [index]: value };
      setSavedAnswers((prevSet) => {
        const newSet = new Set(prevSet);
        newSet.add(index);
        return newSet;
      });
      return updatedAnswers;
    });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setAnswers((prev) => {
      const updatedAnswers = { ...prev, [currentQuestionIndex]: value };
      setSavedAnswers((prevSet) => {
        const newSet = new Set(prevSet);
        if (value.trim()) {
          newSet.add(currentQuestionIndex);
        } else {
          newSet.delete(currentQuestionIndex);
        }
        return newSet;
      });
      return updatedAnswers;
    });
  };

  const handleSaveAnswer = () => {
    setSavedAnswers((prev) => new Set(prev).add(currentQuestionIndex));
  };

  const handleSubmit = () => {
    const result = questions.map((question, index) => {
      return {
        questionIndex: index,
        questionText: question.text,
        answer: answers[index] ?? "No answer provided",
        correctAnswer: question.correctOptionId,
        type: question.type ?? "unknown",
      };
    });

    console.log("Quiz Results:", JSON.stringify(result));
      void router.push(`/quizresult/${quizId}`)
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 lg:flex-row">
      <div className="flex-1 bg-white p-4 text-black shadow-md lg:p-8">
        <div className="mb-4 flex items-center justify-between border border-black p-4">
          <h1 className="text-xl font-semibold underline">#{quiz.title}</h1>
          <div
            className={`text-lg font-semibold ${
              isTimerWarning ? "animate-pulse text-red-500" : "text-green-500"
            }`}
          >
            Time Left: {formatTime(timer)}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold">
            Question {currentQuestionIndex + 1}: {currentQuestion?.text}
          </h2>
          {currentQuestion?.options && (
            <div className="space-y-2">
              {currentQuestion.options.map((option) => (
                <label
                  key={option.id}
                  className={`block cursor-pointer rounded-md border border-gray-300 p-2 ${
                    answers[currentQuestionIndex] === option.text
                      ? "bg-blue-200"
                      : ""
                  } hover:bg-gray-200`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    className="mr-2"
                    checked={answers[currentQuestionIndex] === option.text}
                    onChange={() =>
                      handleOptionClick(currentQuestionIndex, option.text)
                    }
                  />
                  {option.text}
                </label>
              ))}
            </div>
          )}
          {!currentQuestion?.options && (
            <textarea
              className="mt-4 w-full rounded-md border border-gray-500 bg-gray-100 p-2 text-black"
              rows={5}
              placeholder="Write your answer here..."
              value={answers[currentQuestionIndex] ?? ""}
              onChange={handleTextChange}
            />
          )}
        </div>
        {!currentQuestion?.options && (
          <button
            onClick={handleSaveAnswer}
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 font-semibold text-white"
          >
            Save Answer
          </button>
        )}
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
            className="rounded-md bg-gray-500 px-4 py-2 font-semibold text-white"
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="rounded-md bg-green-500 px-4 py-2 font-semibold text-white"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              className="rounded-md bg-blue-500 px-4 py-2 font-semibold text-white"
            >
              Next
            </button>
          )}
        </div>
      </div>

      <div className="bg-white p-4 shadow-md lg:w-1/4 border border-l-black">
        <h2 className="mb-4 text-lg font-semibold border border-black text-black p-4">Questions</h2>
        <div className="grid grid-cols-4 gap-2 lg:grid-cols-2">
          {questions.map((_, index: number) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(index)}
              className={`rounded-md border p-2 ${
                currentQuestionIndex === index
                  ? "bg-blue-500 text-white"
                  : savedAnswers.has(index)
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizTest;

