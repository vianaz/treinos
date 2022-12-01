import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 18rem;

  .forgot-password {
    margin-top: ${({ theme }) => theme.spacing.xs};
    margin-left: auto;
  }
`;

export const ErrorMessage = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: ${({ theme }) => theme.fonts.fontSize['xl']};
  color: ${({ theme }) => theme.colors.primary[900]};

  padding-left: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.xs};
`;
