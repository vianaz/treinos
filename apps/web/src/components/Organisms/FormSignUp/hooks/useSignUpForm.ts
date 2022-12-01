import { useRouter } from 'next/router';
import { useState } from 'react';

import { InputValues } from '../types';
import { handleValidate } from '../utils/handleValidate';

export const useSignUpForm = () => {
  const router = useRouter();
  const [inputValues, setInputValues] = useState<InputValues>({
    email: '',
    password: '',
    bornDate: ''
  });
  const [inputErrors, setInputErrors] = useState<InputValues>({
    email: '',
    password: '',
    bornDate: ''
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });

    if (inputErrors[name as keyof InputValues]) {
      setInputErrors({
        ...inputErrors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { message, path } = handleValidate(inputValues);

    if (message && path)
      return setInputErrors({ ...inputErrors, [path]: message });

    router.push('/signin');
  };

  return {
    handleInputChange,
    handleSubmit,
    inputErrors,
    setInputErrors
  };
};
