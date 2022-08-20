import { StyledAvatar } from "./Avatar.style";
import defaultProfile from "@/assets/images/defaultProfile.jpeg";
import { SIZES, VARIANTS } from "./Avatar.variant";

const Avatar = ({ image, size, kind }) => {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[kind];

  return (
    <StyledAvatar src={image || defaultProfile} sizeStyle={sizeStyle} variantStyle={variantStyle} alt="user avatar" />
  );
};

export default Avatar;