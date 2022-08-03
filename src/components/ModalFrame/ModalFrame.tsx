import { ModalFrameProps } from "@/types/ModalFrame";
import {
  StyledBackground,
  StyledClose,
  StyledContainer,
  StyledModalBlock,
  StyledModalContents
} from "./ModalFrame.style";

const ModalFrame = ({ handleModal, state, children, }: ModalFrameProps) => {
  return state ? (
    <StyledContainer>
      <StyledBackground onClick={(e) => handleModal(e)} />
      <StyledModalBlock>
        <StyledModalContents>
          {children}
        </StyledModalContents>
        <StyledClose onClick={(e) => handleModal(e)}>
          X
        </StyledClose>
      </StyledModalBlock>
    </StyledContainer>
  ) : (
    <></>
  );
};

export default ModalFrame;
