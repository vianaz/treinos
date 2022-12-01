import {
  HTMLInputTypeAttribute,
  RefObject,
  useMemo,
  useState
} from 'react';

import { InputIcon, Input, Label } from '@atoms';

import * as S from './styles';

export type InputContainerProps = {
  label: string;
  name?: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputContainer = ({
  label,
  type,
  placeholder,
  errorMessage,
  name,
  onChange
}: InputContainerProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  const showInput = useMemo(() => {
    if (show) return 'text';
    return type;
  }, [show, type]);

  const handleShow = () => {
    if (type === 'password') setShow(!show);
  };

  return (
    <S.Container>
      <Label type={type} label={label} error={!!errorMessage} />
      <Input
        name={name}
        type={showInput}
        placeholder={placeholder}
        error={!!errorMessage}
        onChange={onChange}
      >
        <IfComponent condition={type === 'password'}>
          <InputIcon
            src={
              show
                ? '/icons/close_eye_light.svg'
                : '/icons/eye_light.svg'
            }
            alt="show password"
            onClick={handleShow}
          />
        </IfComponent>
      </Input>
      {errorMessage && (
        <S.ErrorMessage data-testid="error-message">
          {errorMessage}
        </S.ErrorMessage>
      )}
    </S.Container>
  );
};

type IfComponentProps = {
  condition: boolean;
  children: React.ReactNode;
};

const IfComponent = ({
  condition,
  children
}: IfComponentProps): JSX.Element => {
  if (condition) return <>{children}</>;

  return <></>;
};
