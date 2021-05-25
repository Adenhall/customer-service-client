import React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

export default function Icon({
  fill = "inherit",
  ...props
}: SvgIconProps): JSX.Element {
  return (
    <SvgIcon
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      titleAccess="Locked"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={fill}
        d="M12 6.66667V3.09067C12 1.38667 10.8467 0 9.42867 0H6.57133C5.15334 0 4 1.38667 4 3.09067V6.66667H2V16H14V6.66667H12ZM5.33334 3.09067C5.33334 2.138 5.90067 1.33333 6.57133 1.33333H9.42867C10.0993 1.33333 10.6667 2.138 10.6667 3.09067V6.66667H5.33334V3.09067ZM12.6667 14.6667H3.33334V8H12.6667V14.6667ZM8.66667 10H7.33333V12.6667H8.66667V10Z"
      />
    </SvgIcon>
  );
}
