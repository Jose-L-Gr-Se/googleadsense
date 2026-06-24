"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/config";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdUnitProps = {
  slot: string;
  format?: string;
  className?: string;
  /** Texto que se muestra como placeholder mientras AdSense está desactivado. */
  label?: string;
};

/**
 * Bloque de anuncio de AdSense.
 * Mientras `siteConfig.adsense.enabled` sea false (sitio aún no aprobado),
 * renderiza un placeholder visible para maquetar sin romper nada.
 */
export default function AdUnit({
  slot,
  format = "auto",
  className = "",
  label = "Espacio publicitario",
}: AdUnitProps) {
  const { enabled, client } = siteConfig.adsense;

  useEffect(() => {
    if (!enabled) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Silencioso: el script puede no haber cargado aún.
    }
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <ins
      className={`adsbygoogle block ${className}`}
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
