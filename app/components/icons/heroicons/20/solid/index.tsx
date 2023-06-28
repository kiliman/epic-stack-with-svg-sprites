import { SVGProps } from "react";
import href from "./sprite.svg";
export { href };

export default function Icon({
  id,
  ...props
}: SVGProps<SVGSVGElement> & { id: heroicons_20_solid.IconIds }) {
  return (
    <svg {...props}>
      <use href={`${href}#${id}`} className={props.className} />
    </svg>
  );
}