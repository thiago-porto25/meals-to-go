import styled, { css } from "styled-components/native";

const defaultTextStyles = (theme) => css`
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 0;
`;

const body = (theme) => css`
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => css`
  font-size: ${theme.fontSizes.body};
`;

const error = (theme) => css`
  color: ${theme.colors.text.error};
`;

const label = (theme) => css`
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.medium};
`;

const caption = (theme) => css`
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const variants = {
  body,
  hint,
  label,
  error,
  caption,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
