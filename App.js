import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesProvider } from "./src/services/favorites/favorites.context";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { Spinner } from "./src/components/spinner/spinner.component";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  return (
    <ThemeProvider theme={theme}>
      {!oswaldLoaded || !latoLoaded ? (
        <Spinner />
      ) : (
        <FavoritesProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesProvider>
      )}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
