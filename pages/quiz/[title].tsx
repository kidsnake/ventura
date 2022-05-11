import Quiz from '@/components/Quiz/Quiz';
import type { NextPage } from 'next';
import { useRouter } from 'next/router'

const quiz: NextPage = () => { // sta ide umjesto 'home'
  return (
    <div>
      <h1>Kviz o Zagrebu</h1>
      <Quiz/>
    </div>
    
  );
};

export default quiz;