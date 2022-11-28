import type { NextPage } from 'next';

import { InputContainer } from '@molecules';

const Home: NextPage = () => {
  return (
    <div>
      <InputContainer
        type="password"
        label="Password"
        placeholder="Informação"
      />
    </div>
  );
};

export default Home;
