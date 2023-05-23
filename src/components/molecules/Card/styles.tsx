import styled from 'styled-components';

export const StyledCard = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  text-decoration: none;

  background-color: rgba(127, 17, 224, 0);

  &:hover {
    background-color: #d411e0 !important;
  }
  &:focus,
  &:focus-visible,
  &:focus-within {
    outline: solid 3px #fafafa;
    outline-offset: 2px;
    background-color: rgba(127, 17, 224, 1);
    border-radius: 3px;
  }

  transition: background-color 0.125s ease-in-out;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const CardImage = styled.img`
  display: flex;
  flex: 1;
  width: 100%;
  /* height: 12vh; */
  object-fit: contain;
`;

export const CardText = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  font-weight: bold;
  color: #fafafa;
`;
