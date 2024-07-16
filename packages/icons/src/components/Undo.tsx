// WARNING: This file was generated by a script. Do not modify it manually

import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type UndoIconProps = IconProps;

export const UndoIcon = forwardRef<SVGSVGElement, UndoIconProps>(
  function UndoIcon(props: UndoIconProps, ref) {
    return (
      <Icon
        data-testid="UndoIcon"
        aria-label="undo"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path d="M7.293 10.83A5 5 0 1 0 1.668 3.5h2.33v1h-4v-4h1v2.183A6.024 6.024 0 0 1 2.256 1.31a6 6 0 1 1 5.296 10.486l-.258-.965Z" />
      </Icon>
    );
  },
);
