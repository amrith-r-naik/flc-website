import { type NextPage } from "next";
import React from "react";

import CreateQuizForm from "~/components/admin/quiz/createQuiz";

const AdminQuiz: NextPage = () => {
  return (
    <div className="container">
      <CreateQuizForm />
    </div>
  );
};

export default AdminQuiz;
