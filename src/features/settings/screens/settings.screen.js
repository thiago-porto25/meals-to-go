import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const [avatar, setAvatar] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photo = await AsyncStorage.getItem(`@${currentUser.uid}-photo`);
    setAvatar(photo);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  const renderLeft = (props) => <List.Icon {...props} color="black" />;

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {avatar ? (
            <Avatar.Image
              size={180}
              source={{ uri: avatar }}
              backgroundColor="#2182bd"
            />
          ) : (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182bd" />
          )}
        </TouchableOpacity>

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
