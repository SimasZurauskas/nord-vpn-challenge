import { Spacer } from "common";
import { flexCenter } from "common/css";
import styled, { keyframes } from "styled-components";
import { palette } from "utils/theme";
import {
  Background,
  ControllPanel,
  ItemsContainer,
  LogOutButton,
} from "./comps";

const FadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;}
`;

const Div = styled.div`
  position: relative;
  height: 100vh;
  ${flexCenter()};

  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    max-width: 800px;
    background-color: white;
    max-height: 80%;
    padding: 20px;
    opacity: 0;

    animation: ${FadeIn};
    animation-duration: 0.3s;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;

    .title {
      font-weight: 700;
      font-size: 24px;
      color: ${palette.prussianBlue};
    }
  }
`;

const HomePage = () => {
  return (
    <>
      <Background />
      <Div>
        <LogOutButton />
        <div className="container drop-shadow">
          <span className="title">Server Explorer</span>
          <Spacer px={10} />
          <ControllPanel />
          <Spacer px={20} />
          <ItemsContainer />
        </div>
      </Div>
    </>
  );
};

export default HomePage;
