import { useState } from "react";
import { ActivityIndicator } from "react-native-paper";

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
import { colors } from "../../../infrastructure/theme/colors";

export function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading } = useAuthContext();

  const handleRegister = () => {
    if (email === "" || password === "" || repeatedPassword === "") {
      return;
    }

    onRegister(email, password, repeatedPassword);
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

        <Spacer variant="stack.sm" />

        <InputContainer>
          <Input
            label="Repeat Password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            value={repeatedPassword}
            onChangeText={setRepeatedPassword}
          />
        </InputContainer>

        <Spacer variant="stack.md" />

        {error && (
          <ErrorContainer>
            <Text variant="error">{error.message}</Text>
            <Spacer variant="stack.md" />
          </ErrorContainer>
        )}

        {isLoading ? (
          <ActivityIndicator animating color={colors.brand.primary} />
        ) : (
          <AuthButton icon="email" onPress={handleRegister}>
            Register
          </AuthButton>
        )}
      </AccountContainer>

      <AuthButton onPress={() => navigation.goBack()}>Back</AuthButton>
    </AccountBackground>
  );
}
