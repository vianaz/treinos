import styled, { css } from 'styled-components';

import { ButtonContainerProps } from '.';

const Primary = css`
  background-color: ${({ theme }) => theme.colors.primary.default};
`;

const Secondary = css`
  background-color: ${({ theme }) => theme.colors.secondary.default};
`;

const Tertiary = css`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.black[300]};
`;

type ButtonProps = Omit<ButtonContainerProps, 'children'>;
export const Button = styled.button<ButtonProps>`
  width: 190px;
  height: 64px;

  aspect-ratio: ${({ theme }) => theme.aspectRatio.bigRectangle};

  border-radius: 10px;
  border: none;

  &:hover {
    cursor: pointer;
  }

  ${({ typeButton }) => typeButton === 'tertiary' && Tertiary}
  ${({ typeButton }) => typeButton === 'primary' && Primary}
  ${({ typeButton }) => typeButton === 'secondary' && Secondary}
`;
