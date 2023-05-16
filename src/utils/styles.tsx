import styled, { css } from "styled-components";

export const flexCol = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const flexList = css`
  ${flexCol}
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const styleTransition = (prop = "all", time = `0.25s`, ease = `ease-in-out`) => css`
  transition: ${prop} ${time} ${ease};
`;
