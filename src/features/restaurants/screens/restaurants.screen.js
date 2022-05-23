import styled, { css } from "styled-components/native";
import { StatusBar, Platform } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const RestaurantsScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  ${Platform.OS === "android" &&
  css`
    padding-top: ${StatusBar.currentHeight}px;
  `};
`;

const SearchBarContainer = styled.View`
  padding: 16px;
`;

const RestaurantsListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;

export function RestaurantsScreen() {
  return (
    <>
      <RestaurantsScreenContainer>
        <SearchBarContainer>
          <Searchbar />
        </SearchBarContainer>
        <RestaurantsListContainer>
          <RestaurantInfoCard />
        </RestaurantsListContainer>
      </RestaurantsScreenContainer>
    </>
  );
}
