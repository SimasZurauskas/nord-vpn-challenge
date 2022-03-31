import styled from "styled-components";

export const Spacer = styled.div<{ px: number }>`
  min-height: ${({ px }) => px}px;
`;
