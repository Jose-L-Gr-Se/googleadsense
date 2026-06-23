import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal y condiciones de uso del sitio.",
  alternates: { canonical: "/aviso-legal" },
};

export default function Page() {
  return (
    <div className="prose-article mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Aviso legal</h1>
      <h2>Carácter orientativo de las calculadoras</h2>
      <p>
        Las calculadoras de {siteConfig.name} ofrecen estimaciones de carácter
        informativo y educativo. No constituyen asesoramiento financiero, fiscal ni
        legal. Antes de tomar decisiones, consulta con un profesional cualificado.
      </p>
      <h2>Responsabilidad</h2>
      <p>
        Hacemos lo posible para que los cálculos sean correctos, pero no garantizamos
        la ausencia de errores. El uso de la información del sitio es bajo tu
        responsabilidad.
      </p>
      <h2>Propiedad intelectual</h2>
      <p>
        Los contenidos de este sitio están protegidos. No se permite su reproducción
        sin autorización.
      </p>
    </div>
  );
}
