import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const ResetStyle = createGlobalStyle`
  ${reset}

  body {
    height: 100vh;

  }
`;
