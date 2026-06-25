type Props = { slug: string; className?: string };

/**
 * Iconos de línea para cada calculadora, indexados por slug.
 * SVG inline (sin dependencias), heredan el color con currentColor.
 */
export default function CalculatorIcon({ slug, className = "h-6 w-6" }: Props) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (slug) {
    case "hipoteca":
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20h14V9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "prestamo":
      return (
        <svg {...common}>
          <rect x="2.5" y="6" width="19" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      );
    case "iva":
      return (
        <svg {...common}>
          <path d="M6 18 18 6" />
          <circle cx="7.5" cy="7.5" r="2" />
          <circle cx="16.5" cy="16.5" r="2" />
        </svg>
      );
    case "interes-compuesto":
      return (
        <svg {...common}>
          <path d="M3 17l5-5 4 4 7-8" />
          <path d="M19 8h-3.5M19 8v3.5" />
        </svg>
      );
    case "finiquito":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "irpf":
      return (
        <svg {...common}>
          <path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2V3z" />
          <path d="M9 8h6M9 12h6" />
        </svg>
      );
    case "nomina":
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M16 7.5c0-1.4-1.8-2.5-4-2.5s-4 1.1-4 2.5S9.8 10 12 10s4 1.1 4 2.5-1.8 2.5-4 2.5-4-1.1-4-2.5" />
        </svg>
      );
    case "autonomos":
      return (
        <svg {...common}>
          <circle cx="12" cy="7.5" r="3.5" />
          <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
        </svg>
      );
    case "indemnizacion-despido":
      return (
        <svg {...common}>
          <path d="M9 14l-4-4 4-4" />
          <path d="M5 10h11a3 3 0 0 1 0 6h-1" />
        </svg>
      );
    case "plusvalia-municipal":
      return (
        <svg {...common}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
          <path d="M12 6v4m0 0l2-2m-2 2-2-2" />
        </svg>
      );
    case "retencion-autonomos":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 9h8M8 13h5" />
          <circle cx="15.5" cy="13.5" r="1.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 7h8M8 11h2M14 11h2M8 15h2M14 15h2" />
        </svg>
      );
  }
}
