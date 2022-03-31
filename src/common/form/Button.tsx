import styled from "styled-components";
import { palette } from "utils/theme";

export const Button = styled.button<{ fullWidth?: boolean }>`
  background-color: ${palette.secondaryMain};
  color: white;
  border: none;
  border-radius: 3px;
  outline: none;
  padding: 10px 30px;
  font-size: 18px;
  transition: background-color 0.3s;
  cursor: pointer;

  width: ${({ fullWidth }) => (fullWidth ? "100%" : "unset")};

  &:disabled {
    cursor: default;
    background-color: ${palette.cadetBlue};
  }

  &:active {
    background-color: ${palette.secondaryDark};
  }
`;
