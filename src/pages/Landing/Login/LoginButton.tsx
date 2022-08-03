import styled from 'styled-components';
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
import { RiKakaoTalkFill } from '@react-icons/all-files/ri/RiKakaoTalkFill';

const LoginButton = () => {
  function loginHandler(e: React.MouseEvent<HTMLButtonElement>, to: string) {
    e.preventDefault();
    if (process.env.NODE_ENV !== 'development') {
      window.location.href = 'baseURL' + to;
    } else {
      window.location.href = to;
    }
  }

  return (
    <StyledLoginButtonsWrapper>
      <StyledGoogleButton onClick={(e) => loginHandler(e, '/auth/google')}>
        <FcGoogle />
        <span>구글 이메일로 시작하기</span>
      </StyledGoogleButton>
      <StyledKakaoButton onClick={(e) => loginHandler(e, '/auth/kakao')}>
        <RiKakaoTalkFill />
        <span>카카오 아이디로 시작하기</span>
      </StyledKakaoButton>
    </StyledLoginButtonsWrapper>
  );
};

const StyledLoginButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 35px;
  padding: 0 20px;
  border-radius: 4px;
  border: none;
  gap: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    font-size: 1.3rem;
    gap: 10px;
    height: 40px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.6rem;
    gap: 10px;
    height: 50px;
  }
`;

const StyledGoogleButton = styled(StyledButton)`
  background-color: #ebebeb;
`;

const StyledKakaoButton = styled(StyledButton)`
  background-color: #fee500;
`;

export default LoginButton;