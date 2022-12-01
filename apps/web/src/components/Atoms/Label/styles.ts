import styled from 'styled-components';

import { LabelProps } from '.';

type Label = Pick<LabelProps, 'error'>;

export const Label = styled.label<Label>`
  letter-spacing: 0.05rem;

  font-size: ${({ theme }) => theme.fonts.fontSize['2xl']};
  color: ${({ theme, error }) =>
    error ? theme.colors.primary[900] : theme.colors.black[300]};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
  font-family: 'Open Sans', sans-serif;

  margin-bottom: ${({ theme }) => theme.spacing.xs};

  padding-left: ${({ theme }) => theme.spacing.sm};
`;
