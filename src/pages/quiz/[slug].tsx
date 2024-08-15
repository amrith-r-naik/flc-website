import { useRouter } from "next/router";
import React from "react";

import NotFound from "~/pages/404";

import QuizPage from "~/components/quiz/page";

const QuizTest = () => {
  const router = useRouter();

  const quizId = Array.isArray(router.query.slug)
    ? router.query.slug[0]
    : router.query.slug;

  if (!quizId) return <NotFound />;

  return <QuizPage quizId={quizId} />;
};

export default QuizTest;
