import { StyledAvatarProps } from "@/types/avatar";
import styled from "styled-components";

export const StyledAvatar = styled.img<StyledAvatarProps>`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  margin: 0;
  border: none;
  width: var(--avatar-width, 50px);
  height: var(--avatar-height, 50px);
  border-radius: var(--avatar-radius, 99%);
`;