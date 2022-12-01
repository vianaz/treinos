import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  a {
    text-decoration: none;

    color: ${({ theme }) => theme.colors.primary[900]};
  }
`;
