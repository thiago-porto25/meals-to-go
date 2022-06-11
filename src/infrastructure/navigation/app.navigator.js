import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features";
import { SettingsNavigator } from "./settings.navigator";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesProvider } from "../../services/favorites/favorites.context";

import { theme } from "../theme";

const Tab = createBottomTabNavigator();

const TAB_NAMES = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const TabBarIcon = (color, size, route) => {
  const iconName = TAB_NAMES[route.name];

  return <Ionicons name={iconName} size={size} color={color} />;
};

export function AppNavigator() {
  return (
    <FavoritesProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => TabBarIcon(color, size, route),
              headerShown: false,
              tabBarInactiveTintColor: theme.colors.ui.secondary,
              tabBarActiveTintColor: theme.colors.brand.primary,
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />

            <Tab.Screen name="Map" component={MapScreen} />

            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesProvider>
  );
}
