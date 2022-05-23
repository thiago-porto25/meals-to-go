import { Card, Title } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const RestaurantTitle = styled(Title)`
  padding: 16px;
  padding-top: 8px;
  color: ${({ theme }) => theme.colors.ui.primary};
`;

export function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=",
    ],
    address = "100 Some address street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard key={name}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <RestaurantTitle>{name}</RestaurantTitle>
    </RestaurantCard>
  );
}
