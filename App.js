import { StatusBar } from "expo-status-bar";

import { RestaurantsScreen } from "./src/features";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}
