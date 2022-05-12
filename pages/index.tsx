import axios from 'axios';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TitlebarImageList from '@/components/TitlebarImageList/TitlebarImageList';
import { generateQuiz, IQuiz } from '@/mockdata/mockdata';

interface Props { quizzes: IQuiz[] }
const Home: NextPage<Props> = ({quizzes}) => {
  const [counter, setCounter] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/hello');

      console.log(data);

      return data;
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    const counterData = {
      counter: counter,
      name: 'fetching',
    };

    const { data } = await axios.post('/api/hello', counterData);

    console.log(data);
  };

  return (
    <Container maxWidth="lg">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title} onClick={() => setCounter(counter + 1)}>
          {counter}
        </h1>

        <Button variant="contained"  onClick={handleSubmit} disableElevation color="secondary">
          Submit count
        </Button>

        {session ? (
          <>
            <span>{session.user?.email}</span>
            <button onClick={() => signOut()}>sign out</button>
          </>
        ) : (
          <button onClick={() => signIn()}>sign in</button>
        )}
      <TitlebarImageList/>
        
      </main>
    </Container>
  );
};

export default Home;


export const getServerSideProps = () => {
  const quizzes = generateQuiz(5, 20);

  return {
    props: {
      quizzes,
    }
  }
}
