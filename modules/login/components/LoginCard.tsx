import styled from "styled-components";
import { shadows, spacers, breakpoints } from "core/design";

export const LoginCard = styled.div`
  text-align: center;
  background: ${(props) => props.theme.cardBackground};
  box-shadow: ${shadows.md};
  padding: ${spacers[4]}rem;
  border-radius: ${spacers[0]}rem;
  width: 95%;
  @media (min-width: ${breakpoints.sm}) {
    width: 75%;
  }
`;
