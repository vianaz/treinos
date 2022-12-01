import styled, { css } from 'styled-components';

import { TextProps } from '.';

const PrimaryColor = css`
  color: #fff;
`;

const SecondaryColor = css`
  color: ${({ theme }) => theme.colors.tertiary.first};
`;

const TertiaryColor = css`
  color: ${({ theme }) => theme.colors.black[300]};
`;

type TextStyleProps = Omit<TextProps, 'children'>;

export const Text = styled.p<TextStyleProps>`
  font-size: ${({ size, theme }) =>
    theme.fonts.fontSize[size || 'md']};
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.1rem;

  ${({ type }) => type === 'primary' && PrimaryColor}
  ${({ type }) => type === 'secondary' && SecondaryColor}
  ${({ type }) => type === 'tertiary' && TertiaryColor}
`;
