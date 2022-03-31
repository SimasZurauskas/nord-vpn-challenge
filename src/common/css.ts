import { css, FlattenSimpleInterpolation } from "styled-components";

type FlexProps = (a?: "row" | "column") => FlattenSimpleInterpolation;

export const flexCenter: FlexProps = (direction = "row") =>
  css`
    display: flex;
    flex-direction: ${direction};
    justify-content: center;
    align-items: center;
  `;

export const imageFit = () =>
  css`
    width: 100%;
    object-fit: cover;
    min-height: 100%;
  `;
