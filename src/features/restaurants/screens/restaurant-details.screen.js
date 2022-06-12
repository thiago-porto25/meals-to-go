import { useState } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";

import { SafeArea } from "../../../components/safe-area/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const BreakfastIcon = (props) => <List.Icon {...props} icon="bread-slice" />;

const LunchIcon = (props) => <List.Icon {...props} icon="hamburger" />;

const DinnerIcon = (props) => <List.Icon {...props} icon="food-variant" />;

const DrinksIcon = (props) => <List.Icon {...props} icon="cup" />;

export function RestaurantDetailsScreen({ route }) {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={route.params.item} />

      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={BreakfastIcon}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={LunchIcon}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Cheeseburger with Fries" />
          <Divider />
          <List.Item title="Pasta Carbonara" />
          <Divider />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={DinnerIcon}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Steak and mash potatoes" />
          <Divider />
          <List.Item title="Pizza" />
          <Divider />
          <List.Item title="Shrimp Risotto" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drinks"
          left={DrinksIcon}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Bloody Mary" />
          <Divider />
          <List.Item title="Margarita" />
          <Divider />
          <List.Item title="Coke" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
}
