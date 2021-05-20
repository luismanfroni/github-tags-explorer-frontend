import { spacers } from "core/design";
import styled from "styled-components";

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & * {
    margin: ${spacers[1]}em;
  }
`;
