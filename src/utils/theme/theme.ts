import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";
import "@fontsource/roboto/700.css";

export const palette = {
  primaryMain: "#4687ff",
  primaryDark: "#093b90",
  secondaryMain: "#f64f63",
  secondaryDark: "#DA3C56",
  stroke: "#E9ECFF",
  cadetBlue: "#9EA5B7",
  prussianBlue: "#022033",
  error: "#d32f2f",
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto";
    background-color: ${palette.primaryMain};

    .drop-shadow{
      filter: drop-shadow(0px 0px 50px rgba(7, 46, 91, 0.3));
    }
  }
`;

const theme = {};
export default theme;
