import { HTMLInputTypeAttribute, RefObject } from 'react';

import * as S from './styles';

export type InputProps = {
  type: HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  error?: boolean;
  children?: React.ReactNode;
  ref?: RefObject<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  type,
  children,
  placeholder = '',
  error = false,
  name,
  onChange
}: InputProps): JSX.Element => {
  return (
    <S.InputWrapper error={error}>
      <S.Input
        name={name}
        type={type}
        placeholder={placeholder}
        data-testid="input"
        onChange={onChange}
      />
      {children}
    </S.InputWrapper>
  );
};
