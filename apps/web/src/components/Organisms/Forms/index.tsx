import { ButtonContainer, Text } from '@atoms';
import { InputContainer } from '@molecules';

import * as S from './styles';

export const FormSignUp = (): JSX.Element => {
  return (
    <S.Form>
      <InputContainer
        label="email"
        type="email"
        placeholder="email@treinós.com"
      />
      <InputContainer
        label="senha"
        type="password"
        placeholder="********"
      />
      <InputContainer
        label="data de nascimento"
        type=""
        placeholder="dd/mm/aaaa"
      />
      <ButtonContainer>
        <Text size="4xl" bold>
          Cadastrar
        </Text>
      </ButtonContainer>
    </S.Form>
  );
};
