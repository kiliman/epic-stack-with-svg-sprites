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

export function ArrowLeftOnRectangleIcon(props: SVGProps<SVGSVGElement>) {
  return <Icon id="arrow-left-on-rectangle" {...props} />;
}

export function PencilSquareIcon(props: SVGProps<SVGSVGElement>) {
  return <Icon id="pencil-square" {...props} />;
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return <Icon id="user" {...props} />;
}