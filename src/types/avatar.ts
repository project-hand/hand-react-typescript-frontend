import { CSSProp } from "styled-components";

export interface AvatarProps {
  size: 'sm' | 'md' | 'lg' | 'xlg';
  variant: 'circle' | 'square';
}

export interface StyledAvatarProps {
  sizeStyle: CSSProp;
  variantStyle: CSSProp;
}