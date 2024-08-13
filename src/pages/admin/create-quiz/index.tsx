import React from "react";

import CreateQuizForm from "~/components/quiz/createQuiz";

const page = () => {
  return (
    <div className="w-full space-y-4  bg-[#373A40] p-8">
      <h1 className="text-xl font-extrabold ">Create Quiz</h1>
      <CreateQuizForm />
    </div>
  );
};

export default page;
