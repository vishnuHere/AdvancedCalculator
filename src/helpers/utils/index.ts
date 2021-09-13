import { Maybe } from "types";
import { createBrowserHistory } from "history";

const prefix = "qb-wp-";

export const joinClass = (...classNames: Maybe<boolean | string>[]): string => {
  return classNames
    .filter((className: string) => !!className)
    .map((className: string) =>
      className.startsWith(prefix) ? className : `${prefix}${className}`
    )
    .join(" ");
};

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const history = createBrowserHistory();

export const redirect = (path: string) => history.push(path);
