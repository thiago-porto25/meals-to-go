import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { useRestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/safe-area/safe-area.component";

const SearchBarContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const RestaurantsListContainer = styled.View`
  flex: 1;
  margin: 0 ${({ theme }) => theme.space[3]};
`;

const renderItem = ({ item }) => {
  return (
    <>
      <RestaurantInfoCard restaurant={item} />
      <Spacer variant="stack.md" />
    </>
  );
};

export function RestaurantsScreen() {
  const { restaurants, isLoading, error } = useRestaurantsContext();

  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar />
      </SearchBarContainer>
      <RestaurantsListContainer>
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </RestaurantsListContainer>
    </SafeArea>
  );
}
