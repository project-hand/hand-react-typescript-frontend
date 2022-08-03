import styled from "styled-components";

const ThemeBox = styled.div`
  width: 250px;
  height: 250px;
  position: relative;

  @media only screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media only screen and (min-width: 1024px) {
    width: 600px;
    height: 600px;
  }
`;

const StyledCalBox = styled.div`
  opacity: .4;
  position: absolute;
  top: 12%;
  left: 50%;
  background: #15b1ff;
  width: 60%;
  height: 30%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  animation: moveCenter 2000ms 1 ease-out;

  &:hover{
    opacity: 1;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }

  @keyframes moveCenter {
    from{
      top: 0;
      left: 50%;
      opacity: .1;
    }
  }
`;

const StyledMemBox = styled.div`
  position: absolute;
  top: 30%;
  left: 19%;
  animation: moveRight 2200ms 1 ease-out;
  opacity: .4;
  background: #fbfb12;
  width: 29%;
  height: 30%;
  border-radius: 30px;

  &:hover{
    opacity: 1;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }

  @keyframes moveRight {
    from{
      top: 90%;
      left: 10%;
      opacity: .1;
    }
  }
`;

const StyledTodBox = styled.div`
  position: absolute;
  top: 30%;
  left: 51%;
  animation: moveLeft 2400ms 1 ease-out;
  opacity: .4;
  background: #e8a;
  width: 29%;
  height: 30%;
  border-radius: 30px;

  &:hover{
    opacity: 1;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }

  @keyframes moveLeft {
    from{
      top: 20%;
      left: 90%;
      opacity: .1;
    }
  }
`;

const StyledTitle = styled.div`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 30%;
  width: 100%;
  line-height: 300px;
  text-align: center;
  transform: translate3d(0, 0, 0);
  color: black;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: .1em;
  font-size: 24px;
  text-shadow: 0 1px 0 rgba(black, .1);
  text-indent: .3em;

  animation: hideTitle 2000ms 1 linear;

  &::after{
    content: 'Have A Nice Day';
  }

  @keyframes hideTitle{
    from{
      opacity: 1;
    }
  }

  @media only screen and (min-width: 768px) {
    letter-spacing: .1em;
    font-size: 46px;
    top: 50%;
  }

  @media only screen and (min-width: 1024px) {
    letter-spacing: .15em;
    font-size: 54px;
    top: 50%;
  }

`;

const StyledShortTitle = styled(StyledTitle)`
  opacity: 0;
  font-size: 36px;
  animation: showShortTitle 2400ms 1 linear 3000ms;
  animation-fill-mode: forwards;
  &::after{
      content: 'HAND';
  }

  @keyframes showShortTitle{
    to{
      opacity: 1;
    }
  }
  
  @media only screen and (min-width: 768px) {
    letter-spacing: .1em;
    font-size: 48px;
  }

  @media only screen and (min-width: 1024px) {
    letter-spacing: .15em;
    font-size: 64px;
  }
`;

export { ThemeBox, StyledCalBox, StyledMemBox, StyledShortTitle, StyledTitle, StyledTodBox };