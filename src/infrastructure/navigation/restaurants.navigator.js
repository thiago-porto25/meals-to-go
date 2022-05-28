import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen, RestaurantDetailsScreen } from "../../features";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
