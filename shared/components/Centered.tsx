import styled from "styled-components";

type CenteredProps = {
  flexDirection?: "column" | "row";
};

export default styled.div<CenteredProps>`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: ${(props) => props.flexDirection ?? "column"};
`;
