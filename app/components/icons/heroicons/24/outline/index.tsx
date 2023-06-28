import { type SVGProps } from "react";
import href from "./sprite.svg";
export { href };

function Icon({ id, ...props}: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}>
      <use href={`${href}#${id}`} className={props.className} />
    </svg>
  );
}

export function ComputerDesktopIcon(props: SVGProps<SVGSVGElement>) {
  return <Icon id="computer-desktop" {...props} />;
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return <Icon id="moon" {...props} />;
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return <Icon id="sun" {...props} />;
}