import type { NextPage } from 'next';

import { InputComponent } from '@components';

const Home: NextPage = () => {
  return (
    <div>
      <InputComponent
        type="password"
        label="Password"
        placeholder="Informação"
      />
    </div>
  );
};

export default Home;
