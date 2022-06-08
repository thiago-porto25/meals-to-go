import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.tertiary};
  align-items: center;
  justify-content: center;
`;
