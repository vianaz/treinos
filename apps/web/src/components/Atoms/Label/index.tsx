import * as S from './styles';

export type LabelProps = {
  type: 'text' | 'email' | 'password';
  label?: string;
};

export const Label = ({
  type,
  label = ''
}: LabelProps): JSX.Element => {
  return <S.Label htmlFor={type}>{label}</S.Label>;
};
