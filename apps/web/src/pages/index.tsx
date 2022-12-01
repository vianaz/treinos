import { useRouter } from 'next/router';

import { useEffect } from 'react';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/signin');
  }, [router]);

  return <div></div>;
};

export default Home;
