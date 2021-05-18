import styled from "styled-components";

export const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
  text-align: center;
`;

export const H2 = styled.h2`
  color: ${(props) => props.theme.textColor};
  text-align: center;
`;

export const H3 = styled.h3`
  color: ${(props) => props.theme.textColor};
  text-align: center;
`;

export const P = styled.p`
  color: ${(props) => props.theme.textColor};
  text-align: center;
`;

export default {
  H1,
  H2,
  H3,
  P
};
