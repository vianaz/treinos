import * as S from './styles';

export type TextProps = {
  children: React.ReactNode;
  bold?: boolean;
  type?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | '';
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
    | '10xl';
};

export const Text = ({
  bold = false,
  type = '',
  children,
  size = 'md'
}: TextProps): JSX.Element => {
  return (
    <S.Text bold={bold} type={type} size={size}>
      {children}
    </S.Text>
  );
};
