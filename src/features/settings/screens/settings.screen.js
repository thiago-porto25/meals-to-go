import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";

import { useAuthContext } from "../../../services/auth/auth.context";
import { colors } from "../../../infrastructure/theme/colors";

import { SafeArea } from "../../../components/safe-area/safe-area.component";
import { Text } from "../../../components/typography/typography.component";
import Spacer from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: rgba(255, 255, 255, 0.5);
`;

const AvatarContainer = styled.View`
  align-items: center;
  padding: ${({ theme }) => theme.space[2]};
`;

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent !important;
`;

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const renderLeft = (props) => <List.Icon {...props} />;

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

  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {avatar ? (
              <Avatar.Image
                size={180}
                source={{ uri: avatar }}
                backgroundColor={colors.brand.primary}
              />
            ) : (
              <Avatar.Icon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
            )}
          </TouchableOpacity>

          <Spacer />

          <Text variant="label">{user?.email}</Text>
        </AvatarContainer>

        <List.Section>
          <SettingsItem
            title="Favorites"
            description="View your favorites"
            left={(p) =>
              renderLeft({ ...p, icon: "heart", color: colors.ui.disabled })
            }
            onPress={() => navigation.navigate("Favorites")}
          />

          <SettingsItem
            title="Logout"
            left={(p) =>
              renderLeft({ ...p, icon: "door", color: colors.ui.secondary })
            }
            onPress={onLogout}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
}
