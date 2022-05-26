import styled, { css } from "styled-components/native";
import { StatusBar, Platform } from "react-native";

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  ${Platform.OS === "android" &&
  css`
    padding-top: ${StatusBar.currentHeight}px;
  `};
`;

export function SafeArea({ children }) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
