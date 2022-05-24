import styled, { css } from "styled-components/native";
import { StatusBar, Platform, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";

const RestaurantsScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  ${Platform.OS === "android" &&
  css`
    padding-top: ${StatusBar.currentHeight}px;
  `};
`;

const SearchBarContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const RestaurantsListContainer = styled.View`
  padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[3]};
`;

const renderItem = ({ item }) => {
  return (
    <>
      <RestaurantInfoCard />
      <Spacer variant="stack.md" />
    </>
  );
};

export function RestaurantsScreen() {
  return (
    <>
      <RestaurantsScreenContainer>
        <SearchBarContainer>
          <Searchbar />
        </SearchBarContainer>
        <RestaurantsListContainer>
          <FlatList
            data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </RestaurantsListContainer>
      </RestaurantsScreenContainer>
    </>
  );
}
