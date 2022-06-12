import styled, { css } from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  width: 95%;
  align-self: center;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  padding-bottom: ${({ theme }) => theme.space[0]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: ${({ theme }) =>
    css`
      ${theme.space[2]} ${theme.space[0]}
    `}; ;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
