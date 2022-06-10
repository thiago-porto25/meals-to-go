import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { AuthProvider } from "./src/services/auth/auth.context";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import "./src/utils/firebase";

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
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      )}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
