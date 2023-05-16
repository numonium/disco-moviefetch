import { useEffect, useRef } from "react";
import styled, {css} from "styled-components";
import * as colors from "./css-preset-colors.json";
import { randomItem, randomKey } from "./object";

export type ConsoleBadgeProps = {
  color?: string;
};

const ConsoleBadge = css<ConsoleBadgeProps>`
  padding: .125em .25em;
  ${({color}) => (css`
    background-color: ${color};
  `)};
  color: #fff;
`;

export const Marty = ({
  badgeName,
  ...args
}) => {
  const colorMap = {};
  const color = randomKey(colors);

  const badgeMap = useRef({});

  const f = () => {
    if(!(badgeName in badgeMap)) {
      badgeMap[badgeName] = randomItem(colors);
    }
  }
}

// Object.defineProperty(console, 'marty', {
//   value(args) {
//     return
//   }
