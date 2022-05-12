import Quiz from '@/components/Quiz/Quiz';
import { generateQuiz, IQuiz } from '@/mockdata/mockdata';

import type { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { StringifyOptions } from 'querystring';

interface Props { quiz: IQuiz }

const QuizPage:  NextPage<Props> = ({ quiz }) => {
  //const quizzes = generateQuiz(5, 20);
  /* console.log(quiz); */
  return (
    <div>
      <div>
        {quiz.questions.map(question => (
          <p key={question.id}>{question.text}
            <Quiz question={question}/> 
          </p>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const quizzes = generateQuiz(5, 20);
  const quiz = quizzes.filter(quiz => quiz.id === context.query.title)[0]
  console.log(quiz);

  return {
    props: {
      quiz
    }
  }
}