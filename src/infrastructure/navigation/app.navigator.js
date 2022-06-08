import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "../theme";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features";

import { SafeArea } from "../../components/safe-area/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_NAMES = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const TabBarIcon = (color, size, route) => {
  const iconName = TAB_NAMES[route.name];

  return <Ionicons name={iconName} size={size} color={color} />;
};

export function AppNavigator() {
  return (
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

      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
