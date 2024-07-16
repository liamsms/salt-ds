// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type ROProps = CountrySymbolProps;

const RO = forwardRef<SVGSVGElement, ROProps>(function RO(props: ROProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="RO"
      aria-label="Romania"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-RO-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle
          cx="36"
          cy="36"
          r="36"
          fill="#D9D9D9"
          transform="matrix(1 0 0 -1 0 72)"
        />
      </mask>
      <g mask={`url(#${uid}-RO-a)`}>
        <path fill="#004692" d="M0 72h24V0H0z" />
        <path fill="#FBD381" d="M24 72h24V0H24z" />
        <path fill="#DD2033" d="M48 72h24V0H48z" />
      </g>
    </CountrySymbol>
  );
});

export default RO;
