"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

import ParticlesBackground from "~/components/background/particles";
import { api } from "~/utils/api";

const QuizIntroPage = () => {
  const router = useRouter();

  const {
    data: quizzes,
    isLoading,
    isError,
  } = api.quiz.getAllQuizzes.useQuery();


  console.log(quizzes)
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading quizzes </div>;

  const handleTakeTestClick = (quizId: string) => {
    void router.push(`/quiztest/${quizId}`);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <ParticlesBackground />
      </div>

      <section className="container mx-auto   ">
        <div className=" stickey  mt-5 rounded-lg border border-black bg-gray-200 p-2 text-black">
          <h1 className="subheading">Quiz Dashboard</h1>
        </div>

        <div className="flex flex-col  p-4 md:flex-row">
          <div className="mb-4 md:hidden">
            <RulesSheet />
          </div>

          <div className="flex-grow space-y-4 p-2">
            {Array.isArray(quizzes) && quizzes.length > 0 ? (
              quizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="flex w-full flex-col rounded-lg bg-gray-200 p-6 text-black shadow-lg"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h1 className="subheading font-bold underline">
                      #{quiz.title}
                    </h1>
                    <div className="rounded bg-gray-900 px-2 py-1 text-2xl font-bold text-red-500">
                      {quiz.timeLimit} Min
                    </div>
                  </div>

                  <div className="mb-4">
                    <h2 className="text-lg font-semibold">Quiz Details</h2>
                    <ul className="list-disc space-y-2 pl-5">
                      <li>
                        Total Questions:{" "}
                        {quiz.questions
                          ? Object.keys(quiz.questions).length
                          : 0}
                      </li>
                      <li>Max Score: {quiz.maxScore}</li>
                    </ul>
                  </div>

                  <Button
                    onClick={() => handleTakeTestClick(quiz.id)}
                    className="mt-auto w-full rounded  px-4 py-2 font-bold transition duration-200 hover:bg-blue-600"
                  >
                    Take Test
                  </Button>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center rounded-lg bg-gray-100 p-6 text-center text-black shadow-lg">
                <p className="text-lg font-semibold">
                  Currently, no quizzes are published. You will be notified when
                  new quizzes are available.
                </p>
              </div>
            )}
          </div>

          <div className="sticky top-16 hidden h-screen w-1/3 overflow-y-auto rounded-lg bg-gray-100 p-6 text-black shadow-lg md:block">
            <h2 className="mb-4 text-xl font-bold">Rules & Guidelines</h2>
            <hr />
            <div className="space-y-2 p-2 leading-relaxed">
              <ul className="list-disc">
                <li>Please read all instructions carefully before starting.</li>
                <li>
                  Ensure a stable internet connection throughout the quiz.
                </li>
                <li>Do not refresh the page during the quiz.</li>
                <li>Answer all questions within the time limit.</li>
                <li>Good luck!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const RulesSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-white text-black">
          View Rules
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="via-gary-300 to bg-white bg-gradient-to-b from-gray-100"
      >
        <SheetHeader>
          <SheetTitle className="text-black underline">
            #Rules & Guidelines
          </SheetTitle>
          <SheetDescription className="font-semibold text-gray-800 ">
            Please read all instructions carefully before starting.
          </SheetDescription>
          <hr />
        </SheetHeader>
        <div className="space-y-2 p-2 font-semibold leading-relaxed text-gray-600">
          <ul className="list-disc">
            <li>Please read all instructions carefully before starting.</li>
            <li>Ensure a stable internet connection throughout the quiz.</li>
            <li>Do not refresh the page during the quiz.</li>
            <li>Answer all questions within the time limit.</li>
            <li>Good luck!</li>
          </ul>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="button"
              className="bg-black text-white hover:border hover:border-black hover:text-black"
            >
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default QuizIntroPage;
