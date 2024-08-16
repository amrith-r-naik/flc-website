import { type NextPage } from "next";
import React from "react";

import CreateQuiz from "~/components/admin/quiz/createQuiz";

const AdminQuiz: NextPage = () => {
  return (
    <div className="container">
      <CreateQuiz />
    </div>
  );
};

export default AdminQuiz;
