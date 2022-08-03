import styled from "styled-components";
import MainTheme from "./MainTheme";

const LandingPage = () => {
  return (
    <MainWrapper>
      <MainTheme />
      <Button />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  height: 100vh;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 800ms;
  border: none;
  border-radius: 45px;
  padding: 15px 25px;
  font-size: 30px;
  background-color: white;
  cursor: pointer;

  &::after{
    content: '시작하기';
  }

  &:hover{
    background-color: #15b1ff;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }

  @keyframes showBtn {
    from{
      opacity: 0.9;
    filter: alpha(opacity=90);
    }
  }
`;

export default LandingPage;