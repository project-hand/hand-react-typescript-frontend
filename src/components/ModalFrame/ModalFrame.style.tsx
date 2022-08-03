import styled from 'styled-components';

const StyledContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledModalBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 1.8rem;
  background-color: white;
  width: 200px;
  height: 300px;
  animation: modal-show 1s;

  @media only screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media only screen and (min-width: 1024px) {
    width: 400px;
    height: 400px;
  }

  @keyframes modal-show {
      from {
          opacity: 0;
          margin-top: -50px;
      }
      to {
          opacity: 1;
          margin-top: 0;
      }
  }
`;

const StyledModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledClose = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 10px;
  height: 10px;
  background-color: white;
  cursor: pointer;
`;

const StyledBackground = styled.div`
  position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
    animation: modal-bg-show 1s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export { StyledContainer, StyledModalBlock, StyledClose, StyledBackground, StyledModalContents };
