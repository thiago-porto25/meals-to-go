import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import Spacer from "../spacer/spacer.component";
import { Text } from "../typography/typography.component";

const FavoritesWrapper = styled.View`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
`;

const CompactInfoWrapper = styled.View`
  margin-right: ${({ theme }) => theme.space[2]};
`;

export function FavoritesBar({ favorites, navigate }) {
  if (!favorites.length) {
    return (
      <FavoritesWrapper>
        <Text variant="caption">No favorites yet</Text>
      </FavoritesWrapper>
    );
  }

  return (
    <FavoritesWrapper>
      <Text variant="caption">Favorites</Text>

      <Spacer variant="stack.sm" />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.placeId;

          return (
            <CompactInfoWrapper key={key}>
              <TouchableOpacity
                onPress={() =>
                  navigate("RestaurantDetail", { item: restaurant })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </CompactInfoWrapper>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
}
