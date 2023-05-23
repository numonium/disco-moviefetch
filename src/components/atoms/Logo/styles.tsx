import { keyframes, styled } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
    }
`;

export const StyledLogo = styled.div`
  height: 15vh;
  margin: 0 auto;
  padding: 0;
  object-fit: contain;
  transform: rotateY(45deg);
  animation: ${rotateAnimation} 5s linear infinite;

  & img {
    display: flex;
    flex: 1 0 auto;
    object-fit: contain;
  }
`;

export default StyledLogo;
