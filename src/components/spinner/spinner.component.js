import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

const IndicatorContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export function Spinner() {
  return (
    <IndicatorContainer>
      <ActivityIndicator color={Colors.blue300} size={50} animating />
    </IndicatorContainer>
  );
}
