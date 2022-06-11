import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { useFavoritesContext } from "../../../services/favorites/favorites.context";

import { SafeArea } from "../../../components/safe-area/safe-area.component";
import { Text } from "../../../components/typography/typography.component";
import Spacer from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { FadeInView } from "../../../components/animations/fade.animation";

const RestaurantsListContainer = styled.View`
  flex: 1;
  margin: 0 ${({ theme }) => theme.space[3]};
`;

const NoFavoritesArea = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[3]};
`;

const renderItem = ({ item, navigation }) => {
  return (
    <FadeInView duration={1000}>
      <TouchableOpacity
        onPress={() => navigation.navigate("RestaurantDetail", { item })}
      >
        <RestaurantInfoCard restaurant={item} />
      </TouchableOpacity>
      <Spacer variant="stack.md" />
    </FadeInView>
  );
};

export function FavoritesScreen({ navigation }) {
  const { favorites } = useFavoritesContext();

  return favorites.length ? (
    <SafeArea>
      <RestaurantsListContainer>
        <FlatList
          data={favorites}
          renderItem={({ item }) => renderItem({ item, navigation })}
          keyExtractor={(item) => item.name}
        />
      </RestaurantsListContainer>
    </SafeArea>
  ) : (
    <SafeArea>
      <NoFavoritesArea>
        <Text variant="body">No favorites yet</Text>
      </NoFavoritesArea>
    </SafeArea>
  );
}
