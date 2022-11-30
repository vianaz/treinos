import * as S from './styles';

export type ButtonContainerProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  typeButton?: 'primary' | 'secondary' | 'tertiary';
};

export const ButtonContainer = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  typeButton = 'primary',
  children
}: ButtonContainerProps): JSX.Element => {
  return (
    <S.Button typeButton={typeButton} onClick={onClick}>
      {children}
    </S.Button>
  );
};
