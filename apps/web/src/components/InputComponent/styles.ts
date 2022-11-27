import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    letter-spacing: 0.05rem;

    font-size: ${({ theme }) => theme.fonts.fontSize['2xl']};
    color: ${({ theme }) => theme.colors.black.default};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};

    margin-bottom: ${({ theme }) => theme.spacing.xs};

    padding-left: ${({ theme }) => theme.spacing.xs};
  }
`;

export const Input = styled.div`
  display: flex;

  width: 16rem;

  padding: ${({ theme }) => theme.spacing.xs};

  margin: 0px 10px; /* TODO: remove after */

  border: 1px solid ${({ theme }) => theme.colors.black[300]};
  border-radius: 0.5rem;

  input {
    flex: 1;

    font-size: ${({ theme }) => theme.fonts.fontSize.xl};
    letter-spacing: 0.07rem;

    border: none;

    &:focus {
      outline: none;
    }
  }
`;
