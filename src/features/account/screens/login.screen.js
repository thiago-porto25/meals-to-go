import { useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import { useAuthContext } from "../../../services/auth/auth.context";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  InputContainer,
  Input,
  ErrorContainer,
} from "../components/account.styles";

import Spacer from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/typography.component";

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useAuthContext();

  const handleLogin = () => {
    if (email === "" || password === "") {
      return;
    }

    onLogin(email, password);
  };

  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="title">Meals To Go</Text>
      <AccountContainer>
        <InputContainer>
          <Input
            label="E-mail"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </InputContainer>

        <Spacer variant="stack.sm" />

        <InputContainer>
          <Input
            label="Password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
          />
        </InputContainer>

        <Spacer variant="stack.md" />

        {error && (
          <ErrorContainer>
            <Text variant="error">{error.code}</Text>
            <Spacer variant="stack.md" />
          </ErrorContainer>
        )}

        {isLoading ? (
          <ActivityIndicator animating color={Colors.blue300} />
        ) : (
          <AuthButton icon="lock-open-outline" onPress={handleLogin}>
            Login
          </AuthButton>
        )}
      </AccountContainer>

      <AuthButton onPress={() => navigation.goBack()}>Back</AuthButton>
    </AccountBackground>
  );
}
