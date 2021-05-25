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
      titleAccess="Account"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.33334 3.33333C9.33334 1.49533 7.838 0 6 0C4.162 0 2.66667 1.49533 2.66667 3.33333C2.66667 5.17133 4.162 6.66667 6 6.66667C7.838 6.66667 9.33334 5.17133 9.33334 3.33333ZM6 5.33333C4.89734 5.33333 4 4.436 4 3.33333C4 2.23067 4.89734 1.33333 6 1.33333C7.10267 1.33333 8 2.23067 8 3.33333C8 4.436 7.10267 5.33333 6 5.33333ZM6 6.66667C2.57933 6.66667 0 8.09933 0 10C0 11.74 2.59734 16 6 16C9.40267 16 12 11.74 12 10C12 8.09933 9.42067 6.66667 6 6.66667ZM6 14.6667C3.43267 14.6667 1.33334 11.1433 1.33334 10C1.33334 9.056 3.32867 8 6 8C8.67133 8 10.6667 9.056 10.6667 10C10.6667 11.1433 8.56734 14.6667 6 14.6667Z"
        fill="#FFF5E2"
      />
    </SvgIcon>
  );
}
