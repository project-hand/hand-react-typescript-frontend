import React from "react";
import { CSSProp } from "styled-components";

export interface ButtonProps {
  disabled: boolean;
  size: 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg';
  variant: 'success' | 'error' | 'warning';
  children: React.ReactNode;
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface StyledButtonProps {
  sizeStyle: CSSProp;
  variantStyle: CSSProp;
}