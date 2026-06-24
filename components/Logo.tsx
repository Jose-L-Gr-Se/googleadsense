"use client";

import { useId } from "react";

type LogoProps = {
  size?: number;
  withText?: boolean;
  className?: string;
};

export default function Logo({ size = 36, withText = true, className = "" }: LogoProps) {
  // useId garantiza IDs únicos cuando hay múltiples instancias del SVG en la página
  const uid = useId().replace(/:/g, "");
  const gradId = `lg-${uid}`;

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      {/* Icono: monograma geométrico CC con línea de tendencia */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4f78f7" />
            <stop offset="100%" stopColor="#1d37d7" />
          </linearGradient>
        </defs>

        {/* Fondo cuadrado redondeado */}
        <rect width="40" height="40" rx="10" fill={`url(#${gradId})`} />

        {/* CC monograma — dos arcos paralelos en blanco puro, gruesos y limpios */}
        {/* Arco izquierdo de la C exterior */}
        <path
          d="M22 10 C13 10 10 14.5 10 20 C10 25.5 13 30 22 30"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Arco derecho de la C interior (más pequeño, desplazado) */}
        <path
          d="M25 15 C20 15 17.5 17 17.5 20 C17.5 23 20 25 25 25"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        {/* Punto / nodo que conecta las dos C — evoca dato / precisión */}
        <circle cx="28" cy="20" r="2.2" fill="white" />
      </svg>

      {withText && (
        <span className="flex flex-col -space-y-0.5 leading-none">
          <span className="text-[15px] font-extrabold tracking-tight text-ink-900">
            Calculadoras
          </span>
          <span className="text-[15px] font-extrabold tracking-tight text-brand-600">
            Claras
          </span>
        </span>
      )}
    </span>
  );
}
