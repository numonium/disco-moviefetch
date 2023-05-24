import { css, styled } from "styled-components";

export const QueryBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const queryButtonHover = css`
    background-color: rgba(255,255,255,.3);
    /* background-color: yellow; */
    cursor: pointer;
`

export const QueryButton = styled.button<{
  $selected?: boolean;
}>`
  display: inline-block;
  appearance: none;
  margin: .5em 1em 0;
  padding: .25em 1em .5em;
  font-size: 1.25rem;
  line-height: 1;
  background-color: rgba(255,255,255,0);
  color: #fafafa;
  border: solid 2px rgba(255,255,255,.8);
  border-radius: 12px;

  /* &:hover, */
  ${({$selected}) => $selected && queryButtonHover}

  &:hover {
    ${queryButtonHover}
  }

  &:focus,
  &:focus-visible,
  &:focus-within {
    outline: solid 2px #fafafa;
    outline-offset: 2px;
    background-color: rgba(127, 17, 224, 1);
  }

  transition: background-color 0.125s ease-in-out;
`;
