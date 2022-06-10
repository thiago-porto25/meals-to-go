import { NavigationContainer } from "@react-navigation/native";

import { useAuthContext } from "../../services/auth/auth.context";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

export function Navigation() {
  const { isAuthenticated } = useAuthContext();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
}
