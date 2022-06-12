import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";

const IndicatorContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export function Spinner() {
  return (
    <IndicatorContainer>
      <ActivityIndicator color={colors.brand.primary} size={50} animating />
    </IndicatorContainer>
  );
}
