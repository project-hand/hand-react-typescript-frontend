import Button from "@/components/Button/Button";
import ModalFrame from "@/layouts/ModalFrame/ModalFrame";
import { useToggleModal } from "@/utils/hooks";
import { MainWrapper } from "./LandingPage.style";
import LoginButton from "./Login/LoginButton";
import LoginForm from "./Login/LoginForm";
import LoginLogo from "./Login/LoginLogo";
import LoginTitle from "./Login/LoginTitle";
import MainTheme from "./MainTheme/MainTheme";

const LandingPage = () => {
  const { toggleModal, stateModal } = useToggleModal();

  return (
    <MainWrapper>
      <MainTheme />
      <Button disabled={false} size={'xxlg'} variant={'success'} onClickHandler={toggleModal} >
        시작하기
      </Button>
      <ModalFrame handleModal={toggleModal} state={stateModal} >
        <LoginForm>
          <LoginLogo />
          <LoginTitle />
          <LoginButton />
        </LoginForm>
      </ModalFrame>
    </MainWrapper>
  );
};



export default LandingPage;