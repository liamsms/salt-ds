// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type EC_SharpProps = CountrySymbolProps;

const EC_Sharp = forwardRef<SVGSVGElement, EC_SharpProps>(function EC_Sharp(
  props: EC_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="EC_Sharp"
      aria-label="Ecuador"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-EC-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-EC-a)`}>
        <path fill="#DD2033" d="M0 50v-7h72v7z" />
        <path fill="#F1B434" d="M0 25V0h72v25z" />
        <path fill="#004692" d="M0 43V25h72v18z" />
        <path
          fill="#936846"
          fillRule="evenodd"
          d="M39.208 13.436c-1.139.676-1.767 1.702-1.986 2.363-.432 1.306-2.247 1.39-2.798.13-.785-1.791-2.244-2.587-3.951-2.845-1.763-.267-3.648.08-4.82.489l-.989-2.833c1.504-.524 3.892-.98 6.258-.623 1.704.258 3.458.957 4.803 2.39a7.746 7.746 0 0 1 1.952-1.65c1.887-1.12 4.458-1.563 7.712-.603l-.848 2.877c-2.553-.752-4.247-.34-5.333.305Z"
          clipRule="evenodd"
        />
        <path
          fill="#FBD381"
          d="m30.2 25-13-3v11.338a4 4 0 0 0 4.608 3.953L30.2 36V25Zm12 0 13-3v11.338a4 4 0 0 1-4.608 3.953L42.2 36V25Z"
        />
        <path
          fill="#004692"
          d="m33.2 23-13-3v11.338a4 4 0 0 0 4.608 3.953L33.2 34V23Zm6 0 13-3v11.338a4 4 0 0 1-4.608 3.953L39.2 34V23Z"
        />
        <path
          fill="#DD2033"
          d="m23.2 18 13 3 13-3v11.338a4 4 0 0 1-4.608 3.953L36.2 32l-8.392 1.291a4 4 0 0 1-4.608-3.953V18Z"
        />
        <path
          fill="#0091DA"
          d="M42.788 36.218C41.264 38.396 38.965 40 36.2 40s-5.063-1.603-6.588-3.782C28.082 34.033 27.2 31.121 27.2 28c0-3.121.883-6.033 2.412-8.218C31.137 17.604 33.435 16 36.2 16s5.063 1.604 6.588 3.782C44.318 21.967 45.2 24.879 45.2 28c0 3.121-.882 6.033-2.412 8.218Z"
        />
        <path
          fill="#C1C3C3"
          fillRule="evenodd"
          d="M42.788 36.218C41.264 38.396 38.965 40 36.2 40s-5.063-1.603-6.588-3.782C28.082 34.033 27.2 31.121 27.2 28c0-3.121.883-6.033 2.412-8.218C31.137 17.604 33.435 16 36.2 16s5.063 1.604 6.588 3.782C44.318 21.967 45.2 24.879 45.2 28c0 3.121-.882 6.033-2.412 8.218ZM36.2 38c3.866 0 7-4.477 7-10s-3.134-10-7-10-7 4.477-7 10 3.134 10 7 10Z"
          clipRule="evenodd"
        />
        <mask
          id={`${uid}-EC-b`}
          x="29"
          y="18"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <ellipse cx="36.2" cy="28" fill="#D9D9D9" rx="7" ry="10" />
        </mask>
        <g mask={`url(#${uid}-EC-b)`}>
          <path fill="#008259" d="m33.6 29-4 6-1-6h5Zm0 0 8.8 6 2.2-6h-11Z" />
          <path fill="#F5F7F8" d="m35.6 25 5 4h-13l1.5-5 4.5 2 2-1Z" />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default EC_Sharp;
