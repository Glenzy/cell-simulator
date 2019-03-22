import { number } from "prop-types";

export interface IButton {
  text: string,
  name: string,
  ClickHandler: (event: React.MouseEvent<HTMLElement>) => void,
  ariaRole: string,
  tabindex: number,
  classes?: string
}