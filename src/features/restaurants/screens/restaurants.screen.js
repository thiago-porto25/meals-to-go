import { useState } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";

import { useRestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { useFavoritesContext } from "../../../services/favorites/favorites.context";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/safe-area/safe-area.component";
import { Spinner } from "../../../components/spinner/spinner.component";
import { Search } from "../components/search.component";
import { FavoritesBar } from "../../../components/favorite/favorites-bar.component";

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

export function RestaurantsScreen({ navigation }) {
  const { restaurants, isLoading } = useRestaurantsContext();
  const { favorites } = useFavoritesContext();
  const [isFavoritesToggled, setIsFavoritesToggled] = useState();

  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isFavoritesToggled}
        onFavoritesToggle={() => setIsFavoritesToggled(!isFavoritesToggled)}
      />

      {isFavoritesToggled && (
        <FavoritesBar favorites={favorites} navigate={navigation.navigate} />
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <RestaurantsListContainer>
          <FlatList
            data={restaurants}
            renderItem={({ item }) => renderItem({ item, navigation })}
            keyExtractor={(item) => item.name}
          />
        </RestaurantsListContainer>
      )}
    </SafeArea>
  );
}
