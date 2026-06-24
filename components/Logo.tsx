import { siteConfig } from "@/lib/config";

type LogoProps = {
  /** Tamaño del icono en px. El texto escala en consecuencia. */
  size?: number;
  /** Si false, muestra solo el icono sin el nombre. */
  withText?: boolean;
  className?: string;
};

/**
 * Logo de Calculadoras Claras.
 * Marca: cuadrado redondeado con gradiente + símbolo € sobre barras
 * (alusión a cálculo / finanzas). Todo en SVG, sin dependencias.
 */
export default function Logo({ size = 36, withText = true, className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b66f5" />
            <stop offset="1" stopColor="#1d37d7" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#logo-grad)" />
        {/* Barras tipo gráfico/cálculo */}
        <rect x="11" y="27" width="5" height="10" rx="1.5" fill="#ffffff" opacity="0.5" />
        <rect x="19" y="22" width="5" height="15" rx="1.5" fill="#ffffff" opacity="0.7" />
        {/* Símbolo euro estilizado */}
        <path
          d="M34.5 18.8c-1.1-1.5-2.9-2.5-5-2.5-3.6 0-6.5 3.4-6.5 7.7s2.9 7.7 6.5 7.7c2.1 0 3.9-1 5-2.5"
          stroke="#ffffff"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M21 22.2h9M21 26.2h8" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-bold tracking-tight text-ink-900">
            Calculadoras
          </span>
          <span className="text-[15px] font-bold tracking-tight text-brand-600">
            Claras
          </span>
        </span>
      )}
      <span className="sr-only">{siteConfig.name}</span>
    </span>
  );
}
