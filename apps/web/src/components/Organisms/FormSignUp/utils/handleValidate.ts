/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from 'joi';

import { InputValues } from '../types';

export const handleValidate = (inputValues: InputValues) => {
  const copyInputs = {
    ...inputValues,
    bornDate: inputValues?.bornDate.split('/').reverse().join('-')
  };
  const eighteenYearsAgo = new Date().getFullYear() - 18;

  const inputValidations = Joi.object({
    email: Joi.string()
      .email({ tlds: false })
      .messages({
        'string.email': '*Email inválido',
        'string.empty': '*Email é obrigatório'
      })
      .required(),
    password: Joi.string()
      .min(8)
      .messages({
        'string.min': '*A senha deve ter no mínimo 8 caracteres',
        'string.empty': '*A senha é obrigatória'
      })
      .required(),
    bornDate: Joi.date()
      .max(`01-01-${eighteenYearsAgo}`)
      .messages({
        'date.max': '*Você deve ter no mínimo 18 anos',
        'date.base': '*A data de nascimento é obrigatória'
      })
      .required()
  });

  const error =
    inputValidations.validate(copyInputs)?.error?.details[0];

  return {
    message: error?.message,
    path: error?.path[0]
  };
};
