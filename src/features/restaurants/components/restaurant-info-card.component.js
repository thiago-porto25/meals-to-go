import { StyleSheet, Text, View } from "react-native";
import { Card, Title } from "react-native-paper";

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
    <Card style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Title title={name} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
  },
  cover: {
    padding: 16,
    paddingBottom: 0,
    backgroundColor: "#fff",
  },
});
