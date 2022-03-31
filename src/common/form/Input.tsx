import styled from "styled-components";
import { palette } from "utils/theme";

export const Input = styled.input.attrs((props) => ({
  type: "text",
  ...props,
}))`
  ::placeholder {
    opacity: 0.6;
  }

  height: 30px;
  border-radius: 3px;
  padding: 5px;
  font-size: 18px;
  padding: 6px 18px;
  border: 1px solid ${palette.stroke};

  &:focus {
    outline: none;
    border: 1px solid ${palette.cadetBlue};
  }
`;
