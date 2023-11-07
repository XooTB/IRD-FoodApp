import * as React from "react";
import { SVGProps } from "react";

export const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <path
      strokeWidth={1.5}
      d="M14.25 16.084a4.473 4.473 0 0 1-2.75.917 4.473 4.473 0 0 1-2.75-.917"
    />
    <path
      strokeWidth={1.5}
      d="M2.656 12.613c-.324-2.106-.485-3.159-.087-4.092.398-.933 1.281-1.572 3.048-2.85l1.32-.954c2.197-1.589 3.296-2.383 4.564-2.383 1.268 0 2.366.794 4.564 2.383l1.32.955c1.766 1.277 2.65 1.916 3.047 2.849.399.933.237 1.986-.087 4.092l-.276 1.796c-.459 2.985-.688 4.477-1.758 5.368-1.071.89-2.636.89-5.766.89h-2.088c-3.13 0-4.696 0-5.766-.89-1.07-.89-1.3-2.383-1.759-5.368l-.276-1.796Z"
    />
  </svg>
);

export const Dashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.27 10.126a3.896 3.896 0 1 0 0-7.792 3.896 3.896 0 0 0 0 7.792ZM5.73 10.126a3.896 3.896 0 1 0 0-7.792 3.896 3.896 0 0 0 0 7.792ZM16.27 20.667a3.896 3.896 0 1 0 0-7.792 3.896 3.896 0 0 0 0 7.792ZM5.73 20.667a3.896 3.896 0 1 0 0-7.792 3.896 3.896 0 0 0 0 7.792Z"
    />
  </svg>
);

export const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <rect width={6} height={6} x={3.004} y={2.914} fill="#F36C01" rx={2} />
    <rect width={6} height={6} x={3.004} y={11.086} fill="#F36C01" rx={2} />
    <path fill="#FFA202" d="M10.996 5.914a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0Z" />
    <rect width={6} height={6} x={10.996} y={11.086} fill="#F36C01" rx={2} />
  </svg>
);

export const More = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M10.996 16.5h.008M16.5 16.5h.007M5.5 16.5h.007M10.996 11h.008M11 5.5h.007M16.5 11h.007M16.5 5.5h.007M5.5 11h.007M5.5 5.5h.007"
    />
  </svg>
);

export const Plane = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} {...props}>
    <path
      fill={props.stroke ? props.stroke : "#323232"}
      d="M17.64 2.858a2.039 2.039 0 0 0-1.924-.55L4.72 4.626a3.433 3.433 0 0 0-1.961 5.829l1.18 1.18a.687.687 0 0 1 .202.486v2.178c.001.306.072.607.206.883l-.005.005.017.017c.202.405.53.733.936.932l.018.018.005-.005c.275.134.577.204.883.206H8.38c.182 0 .357.072.486.2l1.18 1.18a3.409 3.409 0 0 0 3.522.832 3.391 3.391 0 0 0 2.298-2.74l2.32-11.02a2.045 2.045 0 0 0-.544-1.948ZM4.913 10.663 3.73 9.483a2.02 2.02 0 0 1-.496-2.113 2.047 2.047 0 0 1 1.718-1.392L15.84 3.686 5.514 14.014V12.12a2.047 2.047 0 0 0-.601-1.457Zm9.602 4.928a2.063 2.063 0 0 1-3.498 1.177l-1.182-1.183a2.047 2.047 0 0 0-1.456-.603H6.485L16.813 4.658 14.515 15.59Z"
    />
  </svg>
);

export const VideoReplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.224 19.557c-1.074.15-2.475.15-4.354.15H10.13c-3.695 0-5.542 0-6.69-1.147-1.148-1.148-1.148-2.995-1.148-6.69V10.13c0-3.695 0-5.542 1.148-6.69C4.587 2.29 6.434 2.29 10.129 2.29h1.741c3.695 0 5.542 0 6.69 1.148 1.148 1.148 1.148 2.995 1.148 6.69v1.741c0 1.108 0 2.05-.031 2.856-.025.646-.037.97-.282 1.09-.245.12-.519-.073-1.066-.46l-1.234-.873"
    />
    <path
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.7 11.361c-.161.575-.927.98-2.458 1.793-1.48.784-2.22 1.177-2.817 1.02a1.517 1.517 0 0 1-.653-.36c-.438-.413-.438-1.214-.438-2.815 0-1.6 0-2.401.438-2.814.181-.17.406-.294.653-.36.596-.157 1.336.235 2.817 1.02 1.53.812 2.296 1.218 2.458 1.792.067.238.067.487 0 .724Z"
    />
  </svg>
);
