import { StyledButton } from "./Button.style";
import { ButtonProps } from "@/types/button";
import { SIZES, VARIANTS } from "./Button.variant";

function Button({ disabled, size, variant, children, onClickHandler }: ButtonProps) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton onClick={(e) => onClickHandler(e)} disabled={disabled} sizeStyle={sizeStyle} variantStyle={variantStyle}>
      {children}
    </StyledButton>
  );
}

export default Button;