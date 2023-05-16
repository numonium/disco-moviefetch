import { StyledComponent } from "styled-components";

export const dangerousHTML = (html: string) => ({
  __html: html
});

export const getBoundingClientRect = element => {
  const {top, right, bottom, left, width, height, x, y} = element.getBoundingClientRect()
  return {top, right, bottom, left, width, height, x, y}
}

/**
 * @NOTE -- styled-components has a bug where its string value
 *  is a CSS selector (i.e., className with leading ".")
 *
 *  -> to pass this as a className, we need to strip the leading "."
 */
 export const getClass = (comp: StyledComponent<any, any>) => {
  const str = comp.toString();

  return (str[0] === "." ? str.substring(1) : str);
}

export type MeasureLinkProps = ReturnType<typeof getBoundingClientRect> & {
  center: {
    x: number;
    y: number;
  }
}

export const measureLink = <T extends HTMLElement>(ele: T) => {
  const coords = getBoundingClientRect(ele) as MeasureLinkProps;

  coords.center = {
    x: coords.left + (coords.width / 2),
    y: coords.top + (coords.height / 2),
  };

  return coords;
};
