import { ModalFrameProps } from "@/types/ModalFrame";
import {
  StyledBackground,
  StyledClose,
  StyledContainer,
  StyledModal
} from "./ModalFrame.style";

const ModalFrame = ({ handleModal, state, children, }: ModalFrameProps) => {
  return state ? (
    <StyledContainer>
      <StyledBackground onClick={(e) => handleModal(e)} />
      <StyledModal>{children}</StyledModal>
      <StyledClose onClick={(e) => handleModal(e)}>
        X
      </StyledClose>
    </StyledContainer>
  ) : (
    <></>
  );
};

export default ModalFrame;
