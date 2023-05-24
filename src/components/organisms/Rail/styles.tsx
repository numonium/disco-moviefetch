import { styled } from 'styled-components';

export const Rail = styled.div`
  overflow: hidden;
  overflow-x: auto;
  width: 100%;
  margin-bottom: 5%;
`;

export const RailItems = styled.ul`
  display: flex;
  flex: 1;
  min-height: 30vh;
  height: auto !important;
  margin: 0;
  padding: 0 2vmax;
  flex-direction: row;
  list-style: none;
`;
