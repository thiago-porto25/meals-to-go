import styled from "styled-components/native";

const StackExtraSmall = styled.View`
  height: ${({ theme }) => theme.space[1]};
`;

const StackSmall = styled.View`
  height: ${({ theme }) => theme.space[2]};
`;

const StackMedium = styled.View`
  height: ${({ theme }) => theme.space[3]};
`;

const StackLarge = styled.View`
  height: ${({ theme }) => theme.space[4]};
`;

const StackExtraLarge = styled.View`
  height: ${({ theme }) => theme.space[5]};
`;

const InlineExtraSmall = styled.View`
  width: ${({ theme }) => theme.space[1]};
`;

const InlineSmall = styled.View`
  width: ${({ theme }) => theme.space[2]};
`;

const InlineMedium = styled.View`
  width: ${({ theme }) => theme.space[3]};
`;

const InlineLarge = styled.View`
  width: ${({ theme }) => theme.space[4]};
`;

const InlineExtraLarge = styled.View`
  width: ${({ theme }) => theme.space[5]};
`;

export default function Spacer({ variant }) {
  switch (variant) {
    case "stack.xs":
      return <StackExtraSmall />;
    case "stack.sm":
      return <StackSmall />;
    case "stack.md":
      return <StackMedium />;
    case "stack.lg":
      return <StackLarge />;
    case "stack.xl":
      return <StackExtraLarge />;
    case "inline.xs":
      return <InlineExtraSmall />;
    case "inline.sm":
      return <InlineSmall />;
    case "inline.md":
      return <InlineMedium />;
    case "inline.lg":
      return <InlineLarge />;
    case "inline.xl":
      return <InlineExtraLarge />;
    default:
      return <StackMedium />;
  }
}
