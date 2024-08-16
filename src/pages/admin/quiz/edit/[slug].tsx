import { type NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import NotFound from "~/pages/404";

import UpdateQuiz from "~/components/admin/quiz/updateQuiz";
import { api } from "~/utils/api";

const AdminQuiz: NextPage = () => {
  const { query } = useRouter();

  const quizId = query.slug instanceof Array ? query.slug[0] : query.slug;

  const { data: quiz } = api.quiz.getQuizById.useQuery({
    quizId: quizId ?? "",
  });

  if (!quiz || quiz.quizState !== "DRAFT") return <NotFound />;

  return (
    <div className="container">
      <UpdateQuiz quiz={quiz} />
    </div>
  );
};

export default AdminQuiz;
