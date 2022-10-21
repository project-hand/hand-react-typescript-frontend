import { css } from "styled-components";

export const SIZES = {
  sm: css`
    --avatar-width: 50px;
    --avatar-height: 50px;
  `,
  md: css`
    --avatar-width: 100px;
    --avatar-height: 100px;
  `,
  lg: css`
    --avatar-width: 150px;
    --avatar-height: 150px;
  `,
  xlg: css`
    --avatar-width: 200px;
    --avatar-height: 200px;
  `,
};

export const VARIANTS = {
  circle: css`
    --avatar-radius: 99%;
  `,
  square: css`
    --avatar-radius: 10px;
  `,
};