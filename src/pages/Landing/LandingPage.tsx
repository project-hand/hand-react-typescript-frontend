import Button from "@/components/Button/Button";
import ModalFrame from "@/components/ModalFrame/ModalFrame";
import { useToggleModal } from "@/utils/hooks";
import { MainWrapper } from "./LandingPage.style";
import LoginForm from "./Login/LoginForm";
import MainTheme from "./MainTheme/MainTheme";

const LandingPage = () => {
  const { toggleModal, stateModal } = useToggleModal();

  const onLogin = () => {

  };

  return (
    <MainWrapper>
      <MainTheme />
      <Button disabled={false} size={'xxlg'} variant={'success'} onClickHandler={toggleModal} >
        시작하기
      </Button>
      <ModalFrame handleModal={toggleModal} state={stateModal} >
        <LoginForm>

        </LoginForm>
      </ModalFrame>
    </MainWrapper>
  );
};



export default LandingPage;