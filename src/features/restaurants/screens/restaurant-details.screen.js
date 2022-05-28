import { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

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
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={LunchIcon}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Cheeseburger with Fries" />
          <List.Item title="Pasta Carbonara" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={DinnerIcon}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Steak and mash potatoes" />
          <List.Item title="Pizza" />
          <List.Item title="Shrimp Risotto" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={DrinksIcon}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item item="Caipirinha" />
          <List.Item title="Bloody Mary" />
          <List.Item title="Margarita" />
          <List.Item title="Coke" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
}
