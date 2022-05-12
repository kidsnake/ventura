import Quiz from '@/components/Quiz/Quiz';
import { QuizAll } from '@/mock data/mockdata';
import type { NextPage } from 'next';
import { useRouter } from 'next/router'

const quiz: NextPage = () => { // sta ide umjesto 'home'
  return (
    <div>
      <h1>{QuizAll[0].name}</h1>
      <Quiz/>
    </div>
    
  );
};

export default quiz;