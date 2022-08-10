import loadingSpinnerGIF from '@/assets/images/loadingSpinner.gif';
import styled from 'styled-components';

const LoadingSpinner = () => {
  return (
    <StyledLoadingSpinnerContainer>
      <img src={loadingSpinnerGIF} alt="loading.." />
    </StyledLoadingSpinnerContainer>
  );
};

const StyledLoadingSpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingSpinner;