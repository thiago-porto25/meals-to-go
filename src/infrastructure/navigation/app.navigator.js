import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

import { useAuthContext } from "../../services/auth/auth.context";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesProvider } from "../../services/favorites/favorites.context";

import { theme } from "../theme";
import { SafeArea } from "../../components/safe-area/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_NAMES = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = ({ logout }) => (
  <SafeArea>
    <Button mode="outlined" onPress={logout}>
      Logout
    </Button>
  </SafeArea>
);

const TabBarIcon = (color, size, route) => {
  const iconName = TAB_NAMES[route.name];

  return <Ionicons name={iconName} size={size} color={color} />;
};

export function AppNavigator() {
  const { onLogout } = useAuthContext();

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

            <Tab.Screen
              name="Settings"
              component={() => <Settings logout={onLogout} />}
            />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesProvider>
  );
}
