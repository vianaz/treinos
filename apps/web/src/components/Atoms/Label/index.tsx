import * as S from './styles';

export type LabelProps = {
  type: string;
  label?: string;
  style?: 'primary' | 'secondary' | 'tertiary';
  error?: boolean;
};

export const Label = ({
  type,
  label = '',
  error = false
}: LabelProps): JSX.Element => {
  return (
    <S.Label htmlFor={type} error={error} data-testid="label-input">
      {label}
    </S.Label>
  );
};
