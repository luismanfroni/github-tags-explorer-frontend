import styled from "styled-components";
import { spacers, colors } from "core/design";
import { darken, lighten } from "polished";

const LoadingComponentWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  background: ${(props) => props.theme.background};
`;

const LoadingComponent = styled.div`
  width: 320px;
  height: 32px;
  margin: auto;
  margin-top: ${spacers[5]}em;
  border: 2px solid ${colors.grey.darker};
  border-radius: ${spacers[5]}em;
  z-index: 100;
  background: linear-gradient(
    to right,
    ${(props) => darken(0.15, props.theme.colors.primary)},
    ${(props) => props.theme.colors.primary},
    ${(props) => lighten(0.15, props.theme.colors.primary)},
    ${(props) => props.theme.colors.primary},
    ${(props) => darken(0.15, props.theme.colors.primary)}
  );
  background-size: 1000px 640px;

  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: loading;
  animation-timing-function: linear;

  @keyframes loading {
    0% {
      background-position: -320px 0;
    }
    100% {
      background-position: 320px 0;
    }
  }
`;

export function Loading(): JSX.Element {
  return (
    <LoadingComponentWrapper>
      <LoadingComponent />
    </LoadingComponentWrapper>
  );
}
