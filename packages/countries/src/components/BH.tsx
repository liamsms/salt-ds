// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type BHProps = CountrySymbolProps;

const BH = forwardRef<SVGSVGElement, BHProps>(function BH(props: BHProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="BH"
      aria-label="Bahrain"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-BH-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-BH-a)`}>
        <path fill="#F5F7F8" d="M0 0h72v72H0z" />
        <path
          fill="#DD2033"
          d="M20 0h52v72H20l10-9-10-9 10-9-10-9 10-9-10-9 10-9-10-9Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default BH;
