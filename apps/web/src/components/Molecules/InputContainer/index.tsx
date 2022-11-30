import { HTMLInputTypeAttribute, useMemo, useState } from 'react';

import { InputIcon, Input, Label } from '@atoms';

import * as S from './styles';

export type InputContainerProps = {
  label: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute | string;
};

export const InputContainer = ({
  label,
  type,
  placeholder
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
      <Label type={type} label={label} />
      <Input type={showInput} placeholder={placeholder}>
        <IfComponent condition={type === 'password'}>
          <InputIcon
            src={
              show
                ? '/icons/close_eye_light.svg'
                : '/icons/eye_light.svg'
            }
            alt="olhozinho"
            onClick={handleShow}
          />
        </IfComponent>
      </Input>
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
