import { flexCenter, imageFit } from "common/css";
import React from "react";
import styled from "styled-components";
import { palette } from "utils/theme";

const Div = styled.div`
  height: 112px;
  color: white;
  display: grid;
  grid-template-columns: 160px 2fr 2fr 1fr;
  background-color: ${palette.primaryMain};

  .item-flag {
    ${flexCenter()};
    overflow: hidden;
    img {
      ${imageFit()};
    }
  }

  .item {
    display: flex;
    align-items: center;
    .name-title {
      font-size: 25px;
      font-weight: 700;
      margin-left: 40px;
    }
  }

  .item-center {
    ${flexCenter("column")};
    .key {
      font-size: 20px;
    }
    .value {
      font-size: 25px;
      font-weight: 700;
    }
  }
`;

interface IServerItemProps {
  id: number;
  name: string;
  distance: number;
}
export const ServerItem: React.FC<IServerItemProps> = ({
  id,
  name,
  distance,
}) => {
  return (
    <Div>
      <div className="item-flag">
        <img
          src={`https://countryflagsapi.com/png/${name}`}
          alt={`${name} flag`}
        />
      </div>
      <div className="item">
        <span className="name-title">{name}</span>
      </div>
      <div className="item-center">
        <span className="key">Distance</span>
        <span className="value">{distance}</span>
      </div>
      <div className="item-center">
        <span className="key">ID</span>
        <span className="value">{id}</span>
      </div>
    </Div>
  );
};
