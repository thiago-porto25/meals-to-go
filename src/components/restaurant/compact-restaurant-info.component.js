import { Platform } from "react-native";
import styled from "styled-components/native";
import RawWebView from "react-native-webview";

import { Text } from "../typography/typography.component";
import Spacer from "../spacer/spacer.component";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.space[2]};
  border-radius: 10px;
`;
const Image = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const Webview = styled(RawWebView)`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const isAndroid = Platform.OS === "android";

export function CompactRestaurantInfo({ restaurant, isMap }) {
  const RenderedImage = isAndroid && isMap ? Webview : Image;

  return (
    <Container>
      <RenderedImage source={{ uri: restaurant.photos[0] }} />
      <Spacer variant="stack.sm" />
      <Text variant="body">{restaurant.name}</Text>
    </Container>
  );
}
