import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  return !oswaldLoaded || !latoLoaded ? null : (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
