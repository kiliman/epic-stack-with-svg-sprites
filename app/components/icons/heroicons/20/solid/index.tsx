import { type SVGProps } from "react";
import href from "./sprite.svg";
export { href };

export default function Icon({ icon, ...props}: SVGProps<SVGSVGElement> & { icon: IconName }) {
  return (
    <svg {...props}>
      <use href={`${href}#${icon}`} />
    </svg>
  );
}

type IconName =
  | "arrow-left-on-rectangle"
  | "pencil-square"
  | "user"