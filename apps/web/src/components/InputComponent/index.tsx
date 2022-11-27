import Image from 'next/image';
import { useMemo, useState } from 'react';

import * as S from './styles';

export type InputComponentProps = {
  label: string;
  placeholder?: string;
  type: 'text' | 'email' | 'password';
};

export const InputComponent = ({
  label,
  type,
  placeholder
}: InputComponentProps): JSX.Element => {
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
      <label htmlFor={type}>{label}</label>

      <S.Input>
        <input type={showInput} placeholder={placeholder} />
        <IfComponent condition={type === 'password'}>
          <Image
            src={
              show
                ? '/icons/close_eye_light.svg'
                : '/icons/eye_light.svg'
            }
            alt="Eye Password"
            width={24}
            height={24}
            onClick={handleShow}
          />
        </IfComponent>
      </S.Input>
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
