import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
