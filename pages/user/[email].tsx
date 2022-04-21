import type { NextPage } from 'next';

import { PrismaClient, User } from '@prisma/client';

const Home: NextPage<{ user: User }> = ({ user }) => {
  return (
    <div>
      <p>ime {user.name}</p>
      <p>email {user.email}</p>
      <p> iz baze podataka smo izvukle ime i mail ulogiranog korisnika</p>
    </div>
  );
};

export default Home;

const prisma = new PrismaClient();

export const getServerSideProps = async (ctx: any) => {
  const email = ctx.params.email;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return {
    props: {
      user,
    },
  };
};
