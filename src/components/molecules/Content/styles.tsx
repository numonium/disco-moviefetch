import styled from 'styled-components';

export const ContentWrapper = styled.section`
  position: relative;
  z-index: 10;
`;

export const ContentFG = styled.main`
  position: fixed;
  // display: flex;
  top: 4%;
  right: 4%;
  bottom: 166px;
  left: 4%;
  // flex-direction: column;
  // align-items: flex-end;
  z-index: 10;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  color: #111;
  padding: 1vh 2vw 12vh;
  box-sizing: border-box;
  clip-path: url(#bg-pattern-body-clip);
  // background: rgba(0, 255, 0, .6);
`;
