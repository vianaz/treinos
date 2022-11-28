import * as S from './styles';

export type InputProps = {
  error?: boolean;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  children?: React.ReactNode;
};

export const Input = ({
  type,
  children,
  placeholder = '',
  error = false
}: InputProps): JSX.Element => {
  return (
    <S.InputWrapper error={error}>
      <S.Input type={type} placeholder={placeholder} />
      {children}
    </S.InputWrapper>
  );
};
