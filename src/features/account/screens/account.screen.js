import LottieView from "lottie-react-native";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationContainer,
  AuthButton,
} from "../components/account.styles";

import Spacer from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/typography.component";

export function AccountScreen({ navigation }) {
  return (
    <AccountBackground>
      <AccountCover />

      <AnimationContainer>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationContainer>

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
