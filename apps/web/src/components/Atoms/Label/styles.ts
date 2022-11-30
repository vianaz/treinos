import styled from 'styled-components';

export const Label = styled.label`
  letter-spacing: 0.05rem;

  font-size: ${({ theme }) => theme.fonts.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.black.default};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
  font-family: 'Open Sans', sans-serif;

  margin-bottom: ${({ theme }) => theme.spacing.xs};

  padding-left: ${({ theme }) => theme.spacing.xs};
`;
