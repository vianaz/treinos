import styled from 'styled-components';

import { InputProps } from '.';

type ErrorProps = Pick<InputProps, 'error'>;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div<ErrorProps>`
  display: flex;

  width: 16rem;

  padding: ${({ theme }) => theme.spacing.xs};

  margin: 0px 10px; /* TODO: remove after */

  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.primary[900] : theme.colors.black[300]};
  border-radius: 0.5rem;
`;

export const Input = styled.input`
  flex: 1;

  font-size: ${({ theme }) => theme.fonts.fontSize.xl};
  letter-spacing: 0.07rem;

  border: none;

  background: transparent;

  &:focus {
    outline: none;
  }
`;
