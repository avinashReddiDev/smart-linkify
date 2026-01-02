export interface LinkifyOptions {
  color?: string;
  target?: "_blank" | "_self";
  className?: string;
  underline?: boolean;
  maxLength?: number;
  onClick?: (url: string) => void;
}
