import styled from "styled-components";
export default styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
  width: 100%;
  min-height: 100vh;
`;
