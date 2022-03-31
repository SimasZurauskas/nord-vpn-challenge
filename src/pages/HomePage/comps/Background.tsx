import styled, { keyframes } from "styled-components";
import { palette } from "utils/theme";

const BlendIn = keyframes`
  0% { background-color: ${palette.primaryMain}; }
  100% { background-color: ${palette.primaryDark}; }
`;

const HorizonAnim = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;}
`;

const Div = styled.div`
  height: 100vh;
  position: absolute;
  width: 100%;
  animation: ${BlendIn};
  animation-duration: 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;

  #gradient {
    opacity: 0;
    height: 100vh;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      ${palette.primaryMain} 50%,
      rgba(255, 255, 255, 0) 100%
    );

    animation: ${HorizonAnim};
    animation-duration: 2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
`;

export const Background = () => {
  return (
    <Div>
      <div id="gradient" />
    </Div>
  );
};
