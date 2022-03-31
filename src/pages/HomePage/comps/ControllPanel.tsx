import { flexCenter } from "common/css";
import { Button } from "common/form";
import { useStateSelector } from "state";
import useActionsServers from "state/actionHooks/useActionsServers";
import styled, { css } from "styled-components";

const StyledButton = styled(Button)`
  width: 200px;
  ${flexCenter()};
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Arrow = styled.img.attrs((props) => ({
  src: "assets/arrow.svg",
  alt: "",
  ...props,
}))<{ isActive: boolean; dir: "asc" | "desc" }>`
  margin-left: 10px;
  transform: scale(0.8);

  ${({ dir }) =>
    dir === "desc" &&
    css`
      transform: scale(0.8) rotate(180deg);
    `};

  ${({ isActive }) =>
    !isActive &&
    css`
      opacity: 0;
    `};
`;

export const ControllPanel = () => {
  const { dir, sortType } = useStateSelector(({ servers }) => servers.sort);
  const { setSort } = useActionsServers();
  return (
    <Div>
      <StyledButton onClick={() => setSort("name")}>
        Country <Arrow dir={dir} isActive={sortType === "name"} />
      </StyledButton>
      <StyledButton onClick={() => setSort("distance")}>
        Distance <Arrow dir={dir} isActive={sortType === "distance"} />
      </StyledButton>
      <StyledButton onClick={() => setSort("id")}>
        ID <Arrow dir={dir} isActive={sortType === "id"} />
      </StyledButton>
    </Div>
  );
};
