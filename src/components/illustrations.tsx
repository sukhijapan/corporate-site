import React from 'react';

/**
 * Lightweight inline SVG artwork used in place of placeholder boxes. All are
 * decorative, drawn with the brand palette, and scale to their container.
 */

const common = {
  navy: '#002147',
  navyLight: '#003366',
  accent: '#FF8C00',
  sand: '#D2B48C',
  green: '#4F7942',
  white: '#FFFFFF',
};

/** ITPapp web dashboard mockup. */
export const DashboardArt: React.FC = () => (
  <svg viewBox="0 0 480 320" role="img" aria-label="ITPapp dashboard interface" className="art art-dashboard">
    <rect x="0" y="0" width="480" height="320" rx="14" fill={common.white} />
    <rect x="0" y="0" width="480" height="48" rx="14" fill={common.navy} />
    <rect x="0" y="34" width="480" height="14" fill={common.navy} />
    <circle cx="28" cy="24" r="6" fill={common.accent} />
    <rect x="44" y="19" width="90" height="10" rx="5" fill="rgba(255,255,255,0.85)" />
    <rect x="408" y="16" width="48" height="16" rx="8" fill={common.accent} />
    {/* sidebar */}
    <rect x="0" y="48" width="120" height="272" fill="#F1F4F8" />
    <rect x="20" y="76" width="80" height="10" rx="5" fill={common.navyLight} />
    <rect x="20" y="104" width="64" height="8" rx="4" fill="#C7D0DB" />
    <rect x="20" y="128" width="72" height="8" rx="4" fill="#C7D0DB" />
    <rect x="20" y="152" width="58" height="8" rx="4" fill="#C7D0DB" />
    {/* stat cards */}
    <rect x="140" y="68" width="100" height="60" rx="8" fill="#EAF1FB" />
    <rect x="252" y="68" width="100" height="60" rx="8" fill="#FFF1DE" />
    <rect x="364" y="68" width="96" height="60" rx="8" fill="#E7F0E3" />
    <rect x="156" y="84" width="40" height="14" rx="4" fill={common.navy} />
    <rect x="156" y="106" width="60" height="7" rx="3" fill="#9DB0C6" />
    <rect x="268" y="84" width="40" height="14" rx="4" fill={common.accent} />
    <rect x="268" y="106" width="60" height="7" rx="3" fill="#D8B68A" />
    <rect x="380" y="84" width="40" height="14" rx="4" fill={common.green} />
    <rect x="380" y="106" width="56" height="7" rx="3" fill="#A9C29C" />
    {/* table rows */}
    <rect x="140" y="148" width="320" height="40" rx="6" fill="#F6F8FB" />
    <rect x="140" y="196" width="320" height="40" rx="6" fill="#F6F8FB" />
    <rect x="140" y="244" width="320" height="40" rx="6" fill="#F6F8FB" />
    <circle cx="162" cy="168" r="8" fill={common.green} />
    <circle cx="162" cy="216" r="8" fill={common.accent} />
    <circle cx="162" cy="264" r="8" fill="#C7D0DB" />
    <rect x="184" y="164" width="150" height="8" rx="4" fill="#9DB0C6" />
    <rect x="184" y="212" width="180" height="8" rx="4" fill="#9DB0C6" />
    <rect x="184" y="260" width="120" height="8" rx="4" fill="#9DB0C6" />
    <rect x="392" y="160" width="52" height="16" rx="8" fill="#E7F0E3" />
    <rect x="392" y="208" width="52" height="16" rx="8" fill="#FFF1DE" />
  </svg>
);

/** Laptop displaying the ITPapp web interface. */
export const LaptopArt: React.FC = () => (
  <svg viewBox="0 0 460 300" role="img" aria-label="ITPapp running on a laptop" className="art art-laptop">
    <rect x="60" y="28" width="340" height="216" rx="12" fill={common.navy} />
    <rect x="74" y="42" width="312" height="188" rx="6" fill={common.white} />
    <rect x="74" y="42" width="312" height="30" rx="6" fill="#EAF1FB" />
    <circle cx="90" cy="57" r="4" fill={common.accent} />
    <circle cx="104" cy="57" r="4" fill={common.sand} />
    <circle cx="118" cy="57" r="4" fill={common.green} />
    <rect x="92" y="92" width="120" height="12" rx="6" fill={common.navy} />
    <rect x="92" y="116" width="200" height="8" rx="4" fill="#C7D0DB" />
    <rect x="92" y="134" width="170" height="8" rx="4" fill="#C7D0DB" />
    <rect x="92" y="166" width="80" height="26" rx="13" fill={common.accent} />
    <rect x="290" y="92" width="80" height="100" rx="8" fill="#F1F4F8" />
    <rect x="304" y="108" width="52" height="8" rx="4" fill="#9DB0C6" />
    <rect x="304" y="126" width="40" height="8" rx="4" fill="#9DB0C6" />
    <circle cx="330" cy="160" r="20" fill="#E7F0E3" />
    <path d="M321 160 l6 6 l12 -13" fill="none" stroke={common.green} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    {/* base */}
    <path d="M30 256 h400 l20 24 H10 Z" fill={common.navyLight} />
    <rect x="190" y="256" width="80" height="8" rx="4" fill="#001735" />
  </svg>
);

/** Round avatar placeholder with initials. */
export const Avatar: React.FC<{ initials: string }> = ({ initials }) => (
  <svg viewBox="0 0 120 120" role="img" aria-label={`Portrait of ${initials}`} className="art art-avatar">
    <defs>
      <linearGradient id={`av-${initials}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={common.navy} />
        <stop offset="1" stopColor={common.navyLight} />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="60" fill={`url(#av-${initials})`} />
    <text
      x="60"
      y="60"
      dy="0.35em"
      textAnchor="middle"
      fontFamily="Montserrat, sans-serif"
      fontSize="40"
      fontWeight="700"
      fill={common.white}
    >
      {initials}
    </text>
  </svg>
);

type IconProps = { className?: string };
const iconBase = (children: React.ReactNode, label: string, className?: string) => (
  <svg viewBox="0 0 48 48" role="img" aria-label={label} className={`service-icon ${className ?? ''}`}>
    {children}
  </svg>
);

export const QmsIcon: React.FC<IconProps> = ({ className }) =>
  iconBase(
    <>
      <rect x="10" y="6" width="28" height="36" rx="4" fill="none" stroke={common.navy} strokeWidth="2.5" />
      <path d="M17 18 h14 M17 25 h14 M17 32 h8" stroke={common.navy} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="34" cy="34" r="9" fill={common.accent} />
      <path d="M30 34 l3 3 l5 -6" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </>,
    'Quality management system',
    className,
  );

export const AuditIcon: React.FC<IconProps> = ({ className }) =>
  iconBase(
    <>
      <circle cx="21" cy="21" r="13" fill="none" stroke={common.navy} strokeWidth="2.5" />
      <path d="M30 30 l9 9" stroke={common.accent} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M15 21 l4 4 l8 -9" fill="none" stroke={common.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </>,
    'Audit preparation',
    className,
  );

export const ComplianceIcon: React.FC<IconProps> = ({ className }) =>
  iconBase(
    <>
      <path d="M24 5 l16 6 v10 c0 11 -7 18 -16 22 c-9 -4 -16 -11 -16 -22 V11 Z" fill="none" stroke={common.navy} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M16 23 l6 6 l11 -13" fill="none" stroke={common.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </>,
    'Compliance and governance',
    className,
  );
