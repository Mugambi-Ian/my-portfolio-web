import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    ...props,
  };
}

export function IconGitHub(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M12 1.75A10.25 10.25 0 0 0 8.76 21.73c.51.1.7-.22.7-.49l-.01-1.9c-2.85.62-3.45-1.21-3.45-1.21-.47-1.19-1.14-1.5-1.14-1.5-.93-.64.07-.63.07-.63 1.03.07 1.57 1.06 1.57 1.06.91 1.57 2.4 1.11 2.99.85.09-.66.36-1.11.65-1.37-2.28-.26-4.67-1.14-4.67-5.07 0-1.12.4-2.03 1.05-2.75-.1-.26-.46-1.3.1-2.71 0 0 .86-.28 2.82 1.05a9.8 9.8 0 0 1 5.14 0c1.96-1.33 2.82-1.05 2.82-1.05.56 1.41.2 2.45.1 2.71.65.72 1.05 1.63 1.05 2.75 0 3.94-2.4 4.8-4.68 5.06.37.31.69.94.69 1.9l-.01 2.81c0 .27.19.6.7.49A10.25 10.25 0 0 0 12 1.75Z" />
    </svg>
  );
}

export function IconLinkedIn(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M4.98 3.5A2.25 2.25 0 1 1 2.73 5.75 2.25 2.25 0 0 1 4.98 3.5ZM3 8.75h3.96V21H3ZM9.5 8.75h3.8v1.67h.05a4.17 4.17 0 0 1 3.75-2.06c4 0 4.75 2.63 4.75 6.06V21h-3.96v-5.83c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.08V21H9.5Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function IconDownload(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function IconExternal(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 5h5v5" />
      <path d="M19 5 9.5 14.5" />
      <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}
