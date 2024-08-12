import { useRouter } from "next/router";
import QuizTestPage from "~/components/quiz/QuizTestPage";

const QuizTest = () => {
  const router = useRouter();

  const quizId = Array.isArray(router.query.slug)
    ? router.query.slug[0]
    : router.query.slug;

  if (!quizId) {
    return <div>Error loading quiz.</div>;
  }

  return (
    
    <QuizTestPage quizId={quizId}/>
  );
};

export default QuizTest;
