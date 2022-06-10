import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/account.styles";

import Spacer from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/typography.component";

export function AccountScreen({ navigation }) {
  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="title">Meals To Go</Text>

      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>

        <Spacer variant="stack.md" />

        <AuthButton
          icon="email"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
}
