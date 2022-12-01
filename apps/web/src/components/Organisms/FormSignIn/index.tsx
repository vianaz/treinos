import { ButtonContainer, Text } from '@atoms';
import { InputContainer } from '@molecules';

import * as S from './styles';

export const FormSignIn = (): JSX.Element => {
  return (
    <S.Form onSubmit={e => e.preventDefault()}>
      <Text size="10xl">Bem vindo(a)!</Text>
      <InputContainer
        label="email"
        name="email"
        type="text"
        placeholder="email@treinós.com"
      />
      <InputContainer
        label="senha"
        name="password"
        type="password"
        placeholder="********"
      >
        <a href="#" className="forgot-password">
          <Text type="quaternary">Esqueceu sua senha?</Text>
        </a>
      </InputContainer>
      <ButtonContainer>
        <Text type="primary" size="4xl" bold>
          Entrar
        </Text>
      </ButtonContainer>
    </S.Form>
  );
};
