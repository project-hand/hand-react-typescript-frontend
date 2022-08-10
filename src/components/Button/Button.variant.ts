import { css } from "styled-components";

export const SIZES = {
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 8px;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 12px;
  `,
  xlg: css`
    --button-font-size: 1.5rem;
    --button-padding: 20px 24px;
    --button-radius: 16px;
  `,
  xxlg: css`
  --button-font-size: 1.75rem;
  --button-padding: 20px 24px;
  --button-radius: 20px;
`,
};

export const VARIANTS = {
  success: css`
    --button-color: #ffffff;
    --button-bg-color: #15b1ff;
    --button-hover-bg-color: #0487c8;
  `,
  error: css`
    --button-color: #ffffff;
    --button-bg-color: #dc3545;
    --button-hover-bg-color: #c82333;
  `,
  warning: css`
    --button-color: #212529;
    --button-bg-color: #ffc107;
    --button-hover-bg-color: #e0a800;
  `,
};