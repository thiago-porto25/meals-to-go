import { initializeApp, getApps } from "firebase/app";
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
import { AuthProvider } from "./src/services/auth/auth.context";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { Spinner } from "./src/components/spinner/spinner.component";

const firebaseConfig = {
  apiKey: "AIzaSyC1T5D47CuF1wa70NwQTyAP672A3rJYvJ8",
  authDomain: "mealstogo-b266e.firebaseapp.com",
  projectId: "mealstogo-b266e",
  storageBucket: "mealstogo-b266e.appspot.com",
  messagingSenderId: "133203250116",
  appId: "1:133203250116:web:195a6ee7be55ee29603291",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

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
        <AuthProvider>
          <FavoritesProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesProvider>
        </AuthProvider>
      )}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
