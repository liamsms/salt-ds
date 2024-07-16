// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type NI_SharpProps = CountrySymbolProps;

const NI_Sharp = forwardRef<SVGSVGElement, NI_SharpProps>(function NI_Sharp(
  props: NI_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="NI_Sharp"
      aria-label="Nicaragua"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-NI-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-NI-a)`}>
        <path fill="#005EB8" d="M0 0h72v50H0z" />
        <path fill="#F5F7F8" d="M0 41V9h72v32z" />
        <path
          fill="#F1B434"
          fillRule="evenodd"
          d="M36 34a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 4c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13Z"
          clipRule="evenodd"
        />
        <mask
          id={`${uid}-NI-b`}
          x="29"
          y="19"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#D9D9D9" d="m35.7 19 6.495 11.25h-12.99L35.7 19Z" />
        </mask>
        <g mask={`url(#${uid}-NI-b)`}>
          <path fill="#86C5FA" d="M29.2 19h14v7h-14z" />
          <path fill="#005EB8" d="M29.2 28h14v8h-14z" />
          <path fill="#009B77" d="M29.2 26h14v2h-14z" />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default NI_Sharp;
