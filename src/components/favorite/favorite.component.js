import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { useFavoritesContext } from "../../services/favorites/favorites.context";

const FavoriteButton = styled.TouchableOpacity`
  background-color: transparent;
  /* border-radius: 50px;
  border-color: #20232a; */
  position: absolute;
  top: 25px;
  right: 25px;
  /* width: 64px; */
  z-index: 9;
`;

export function Favorite({ restaurant }) {
  const { favorites, addFavorite, removeFavorite } = useFavoritesContext();

  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);

  const handlePress = () =>
    isFavorite ? removeFavorite(restaurant) : addFavorite(restaurant);

  return (
    <FavoriteButton onPress={handlePress}>
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
}
