import { ModalFrameProps } from "@/types/ModalFrame";
import {
  StyledBackground,
  StyledClose,
  StyledContainer,
  StyledModalBlock,
  StyledModalContents
} from "./ModalFrame.style";
import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';

const ModalFrame = ({ handleModal, state, children, }: ModalFrameProps) => {
  return state ? (
    <StyledContainer>
      <StyledBackground onClick={(e) => handleModal(e)} />
      <StyledModalBlock>
        <StyledModalContents>
          {children}
        </StyledModalContents>
        <StyledClose onClick={(e) => handleModal(e)}>
          <AiFillCloseCircle />
        </StyledClose>
      </StyledModalBlock>
    </StyledContainer>
  ) : (
    <></>
  );
};

export default ModalFrame;
