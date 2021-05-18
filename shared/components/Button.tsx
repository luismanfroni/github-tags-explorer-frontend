import styled from "styled-components";
import { spacers, ThemeColors, bestContrast, findBestContrast } from "core/design";

export const Button = styled.button<{ action?: ThemeColors }>`
  background-color: ${(props) => props.theme.colors[props.action!]};
  color: ${(props) =>
    bestContrast(
      props.theme.colors[props.action!],
      props.theme.textColor,
      props.theme.invertedTextColor
    )};
  padding: ${spacers[2]}rem ${spacers[1]}rem;
  border-radius: ${spacers[0]}rem;
  cursor: pointer;
  border: 0;
  padding: ${spacers[1]}em ${spacers[3]}em;
  outline: transparent solid 0;
  transition: outline 0.15s ease-in-out;
  :active {
    outline: ${(props) => findBestContrast(props.action!, props.theme)} solid ${spacers[0]}rem;
  }
`;
Button.defaultProps = {
  action: "primary"
};
