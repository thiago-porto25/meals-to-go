import { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Camera, CameraType } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAuthContext } from "../../../services/auth/auth.context";

import { Text } from "../../../components/typography/typography.component";

export const ProfileCamera = styled(Camera)`
  height: 100%;
  width: 100%;
  flex: 1;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
  position: relative;
`;

export function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useAuthContext();

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`@${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text variant="label">No access to camera</Text>;
  }

  return (
    <ProfileCamera
      ref={(r) => (cameraRef.current = r)}
      type={CameraType.front}
      ratio={"16:9"}
    >
      <TouchableOpacity onPress={snap}>
        <InnerSnap />
      </TouchableOpacity>
    </ProfileCamera>
  );
}
