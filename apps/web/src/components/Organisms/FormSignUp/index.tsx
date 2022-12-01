import Link from 'next/link';

import { ButtonContainer, Text } from '@atoms';
import { InputContainer } from '@molecules';

import * as S from './styles';
import { useSignUpForm } from './hooks/useSignUpForm';

export const FormSignUp = (): JSX.Element => {
  const { handleSubmit, handleInputChange, inputErrors } =
    useSignUpForm();

  return (
    <S.Form onSubmit={handleSubmit}>
      <InputContainer
        label="email"
        name="email"
        type="text"
        errorMessage={inputErrors.email}
        placeholder="email@treinós.com"
        onChange={handleInputChange}
      />
      <InputContainer
        label="senha"
        name="password"
        type="password"
        errorMessage={inputErrors.password}
        placeholder="********"
        onChange={handleInputChange}
      />
      <InputContainer
        label="data de nascimento"
        name="bornDate"
        type="date"
        errorMessage={inputErrors.bornDate}
        placeholder="dd/mm/aaaa"
        onChange={handleInputChange}
      />
      <ButtonContainer>
        <Text size="4xl" bold>
          Cadastrar
        </Text>
      </ButtonContainer>
      <Text type="tertiary" size="lg">
        Ja tem uma conta? Faca <Link href="/signin">login</Link>
      </Text>
    </S.Form>
  );
};
