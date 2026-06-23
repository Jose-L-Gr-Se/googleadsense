import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import Hipoteca from "@/components/calculators/Hipoteca";
import { calculators, siteConfig } from "@/lib/config";

const meta = calculators.find((c) => c.slug === "hipoteca")!;

export const metadata: Metadata = {
  title: `${meta.title} 2026: cuota mensual y amortización`,
  description: meta.description,
  alternates: { canonical: "/calculadora-hipoteca" },
};

export default function Page() {
  return (
    <>
      <CalculatorShell
        slug="hipoteca"
        title={meta.title}
        intro="Introduce el importe, el tipo de interés y el plazo para conocer tu cuota mensual, los intereses totales y la tabla de amortización completa."
        calculator={<Hipoteca />}
        article={
          <>
            <h2>Cómo se calcula la cuota de una hipoteca</h2>
            <p>
              La mayoría de hipotecas en España usan el sistema de amortización
              francés: pagas una cuota fija cada mes en la que, al principio, casi
              todo son intereses y, con el tiempo, vas amortizando más capital.
            </p>
            <h2>¿Qué tipo de interés debo poner?</h2>
            <p>
              Si tu hipoteca es fija, usa el TIN que te ofrece el banco. Si es
              variable, suma el euríbor actual al diferencial de tu oferta para
              estimar la cuota. Recuerda revisar también la TAE, que incluye
              comisiones y otros gastos.
            </p>
            <h2>Consejos antes de firmar</h2>
            <ul>
              <li>No dediques más del 30-35% de tus ingresos a la cuota.</li>
              <li>Compara al menos tres ofertas de bancos distintos.</li>
              <li>Revisa las comisiones de apertura y amortización anticipada.</li>
            </ul>
          </>
        }
      />
      <FaqJsonLd />
    </>
  );
}

function FaqJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo se calcula la cuota de una hipoteca?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con el sistema de amortización francés se paga una cuota fija mensual que combina intereses y capital. La calculadora aplica la fórmula del préstamo francés según importe, tipo de interés y plazo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué porcentaje de mis ingresos debe ir a la hipoteca?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se recomienda no superar el 30-35% de los ingresos netos mensuales del hogar.",
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
