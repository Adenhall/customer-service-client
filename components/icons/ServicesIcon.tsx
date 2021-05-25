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
      titleAccess="Services"
      {...props}
    >
      <path
        d="M8.13333 2.4L0 0V13.36L7.86667 16L16 13.36V0L8.13333 2.4ZM1.33333 2L7.33333 3.76V14.16L1.33333 12.08V2ZM14.6667 12.08L8.66667 14.08V3.92L14.6667 2.08V12.08Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
