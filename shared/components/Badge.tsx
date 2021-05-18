import styled from "styled-components";
import { bestContrast, spacers, ThemeColors } from "core/design";

export const Badge = styled.span<{ action?: ThemeColors }>`
  background: ${(props) => props.theme.colors[props.action!]};
  color: ${(props) =>
    bestContrast(
      props.theme.colors[props.action!],
      props.theme.textColor,
      props.theme.invertedTextColor
    )};
  border-radius: ${spacers[0]}em;
  padding: ${spacers[0]}em ${spacers[1]}em;
  margin: 0 ${spacers[1]}em;
  text-transform: uppercase;
  cursor: ${(props) => (props.onClick !== undefined ? "pointer" : "inherit")};
`;
Badge.defaultProps = {
  action: "secondary"
};
