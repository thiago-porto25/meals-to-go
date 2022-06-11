import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

import { useAuthContext } from "../../../services/auth/auth.context";

import { SafeArea } from "../../../components/safe-area/safe-area.component";
import { Text } from "../../../components/typography/typography.component";
import Spacer from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${({ theme }) => theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  padding: ${({ theme }) => theme.space[2]};
`;

export function SettingsScreen({ navigation }) {
  const { onLogout, user } = useAuthContext();

  const renderLeft = (props) => <List.Icon {...props} color="black" />;

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182bd" />

        <Spacer />

        <Text variant="label">{user?.email}</Text>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(p) => renderLeft({ ...p, icon: "heart" })}
          onPress={() => navigation.navigate("Favorites")}
        />

        <SettingsItem
          title="Logout"
          left={(p) => renderLeft({ ...p, icon: "door" })}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
}
