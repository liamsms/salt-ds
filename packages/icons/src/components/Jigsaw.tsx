// WARNING: This file was generated by a script. Do not modify it manually

import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type JigsawIconProps = IconProps;

export const JigsawIcon = forwardRef<SVGSVGElement, JigsawIconProps>(
  function JigsawIcon(props: JigsawIconProps, ref) {
    return (
      <Icon
        data-testid="JigsawIcon"
        aria-label="jigsaw"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M1 6h1.5a.5.5 0 0 1 0 1H1v4h4V9.5a.5.5 0 0 1 1 0V11h4V8h.5a1.5 1.5 0 0 0 0-3H10V2H7v-.5a1.5 1.5 0 1 0-3 0V2H1v4Zm5-4.5a.5.5 0 0 0-1 0V3H2v2h.5a1.5 1.5 0 1 1 0 3H2v2h2v-.5a1.5 1.5 0 1 1 3 0v.5h2V7h1.5a.5.5 0 0 0 0-1H9V3H6V1.5Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  },
);
