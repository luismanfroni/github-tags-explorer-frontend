import styled from "styled-components";
import { colors, spacers } from "core/design";

export const Input = styled.input`
  color: ${(props) => props.theme.textColor};
  background: ${colors.grey.darker};
  padding: ${spacers[1]}rem;
  border-radius: ${spacers[0]}rem;
  border: 0;
  outline: transparent solid 2px;
  text-align: center;
  transition: outline 0.15s ease-in-out;

  :focus {
    outline: ${(props) => props.theme.colors.primary} solid ${spacers[0]}em;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${colors.grey.lighter};
    opacity: 1; /* Firefox */
  }
  :focus::placeholder {
    color: transparent;
    opacity: 0; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${colors.grey.lighter};
  }
  :focus:-ms-input-placeholder {
    color: transparent;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${colors.grey.lighter};
  }
  :focus::-ms-input-placeholder {
    color: transparent;
  }
`;
