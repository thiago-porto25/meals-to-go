import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { useFavoritesContext } from "../../../services/favorites/favorites.context";

import { SafeArea } from "../../../components/safe-area/safe-area.component";
import Spacer from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const RestaurantsListContainer = styled.View`
  flex: 1;
  margin: 0 ${({ theme }) => theme.space[3]};
`;

const renderItem = ({ item, navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("RestaurantDetail", { item })}
      >
        <RestaurantInfoCard restaurant={item} />
      </TouchableOpacity>
      <Spacer variant="stack.md" />
    </>
  );
};

export function FavoritesScreen({ navigation }) {
  const { favorites } = useFavoritesContext();

  return (
    <SafeArea>
      <RestaurantsListContainer>
        <FlatList
          data={favorites}
          renderItem={({ item }) => renderItem({ item, navigation })}
          keyExtractor={(item) => item.name}
        />
      </RestaurantsListContainer>
    </SafeArea>
  );
}