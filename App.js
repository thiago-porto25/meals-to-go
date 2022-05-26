import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features";

import { Text } from "react-native";
import { SafeArea } from "./src/components/safe-area/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_NAMES = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const TabBarIcon = (color, size, route) => {
  const iconName = TAB_NAMES[route.name];

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  return !oswaldLoaded || !latoLoaded ? null : (
    <ThemeProvider theme={theme}>
      <RestaurantsContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => TabBarIcon(color, size, route),
              headerShown: false,
              tabBarInactiveTintColor: theme.colors.ui.secondary,
              tabBarActiveTintColor: theme.colors.brand.primary,
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />

            <Tab.Screen name="Map" component={Map} />

            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>

        <StatusBar style="auto" />
      </RestaurantsContextProvider>
    </ThemeProvider>
  );
}
