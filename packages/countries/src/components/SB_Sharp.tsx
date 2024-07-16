// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type SB_SharpProps = CountrySymbolProps;

const SB_Sharp = forwardRef<SVGSVGElement, SB_SharpProps>(function SB_Sharp(
  props: SB_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="SB_Sharp"
      aria-label="Solomon Islands"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-SB-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-SB-a)`}>
        <path fill="#004692" d="M0-11h72v72H0z" />
        <path fill="#009B77" d="M72 50V20.5L20 50h52Z" />
        <path
          fill="#FBD381"
          d="M81.408 19.201 78.418 14 16 49.89l2.991 5.202z"
        />
        <path
          fill="#F5F7F8"
          d="m30.857 3-1.533 3.483-3.61.464 2.663 2.616-.698 3.77 3.178-2.152 3.179 2.152-.699-3.77L36 6.947l-3.61-.464L30.857 3Zm0 20.667-1.533 3.483-3.61.464 2.663 2.616-.698 3.77 3.178-2.153L34.036 34l-.699-3.77L36 27.614l-3.61-.464-1.533-3.483Zm-10.961-6.85 1.533-3.484 1.533 3.484 3.61.463-2.663 2.617.698 3.77-3.178-2.153-3.179 2.153.698-3.77-2.662-2.617 3.61-.463Zm-8.753 6.85L9.61 27.15 6 27.614l2.663 2.616L7.964 34l3.179-2.153L14.32 34l-.698-3.77 2.663-2.616-3.61-.464-1.533-3.483ZM9.61 6.483 11.143 3l1.533 3.483 3.61.464-2.663 2.616.698 3.77-3.178-2.152-3.179 2.152.699-3.77L6 6.947l3.61-.464Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default SB_Sharp;
