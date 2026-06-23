import type { Metadata } from "next";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import Nomina from "@/components/calculators/Nomina";
import { calculators } from "@/lib/config";

const meta = calculators.find((c) => c.slug === "nomina")!;

export const metadata: Metadata = {
  title: "Calculadora de nómina 2026: salario bruto a neto",
  description: meta.description,
  alternates: { canonical: "/calculadora-nomina" },
};

export default function Page() {
  return (
    <>
      <CalculatorShell
        slug="nomina"
        title={meta.title}
        intro="Introduce tu salario bruto anual y calcula al instante cuánto cobrarás cada mes. Desglosa la Seguridad Social, el IRPF y tu neto real."
        calculator={<Nomina />}
        article={
          <>
            <h2>Cómo se calcula el salario neto</h2>
            <p>
              De tu salario bruto se descuentan dos cosas antes de que llegue a
              tu cuenta: las cotizaciones a la Seguridad Social y la retención
              del IRPF. Son conceptos distintos y es importante entender cada uno.
            </p>

            <h2>Cotizaciones a la Seguridad Social (6,35%)</h2>
            <p>
              Como trabajador por cuenta ajena, cotizas el <strong>6,35% de tu
              salario bruto</strong> a la Seguridad Social. Este porcentaje se
              divide en:
            </p>
            <ul>
              <li><strong>Contingencias comunes:</strong> 4,70% — cubre enfermedad, maternidad y jubilación.</li>
              <li><strong>Desempleo:</strong> 1,55% — financia la prestación por paro.</li>
              <li><strong>Formación profesional:</strong> 0,10%.</li>
            </ul>
            <p>
              Ojo: la empresa cotiza por ti una cantidad mucho mayor (en torno al
              30%), pero eso no sale de tu bolsillo. El 6,35% sí.
            </p>

            <h2>Retención de IRPF</h2>
            <p>
              El IRPF es un anticipo del impuesto sobre la renta. La empresa te
              lo descuenta cada mes y lo ingresa a Hacienda en tu nombre. Al hacer
              la declaración de la renta en primavera, si han retenido de más te
              devuelven la diferencia; si han retenido de menos, pagas.
            </p>
            <p>
              La retención exacta depende de tu situación personal (hijos,
              discapacidad, tipo de contrato…). Nuestra calculadora aplica la
              escala estatal general incluyendo la reducción por rendimientos del
              trabajo, que beneficia especialmente a salarios bajos y medios.
            </p>

            <h2>¿Qué diferencia hay entre 12 y 14 pagas?</h2>
            <p>
              Con <strong>14 pagas</strong>, cobras 12 mensualidades más dos
              pagas extra (habitualmente en julio y diciembre). Cada paga extra
              equivale a un mes de salario base.
            </p>
            <p>
              Con <strong>12 pagas prorrateadas</strong>, el importe de las pagas
              extra se reparte entre los 12 meses. El neto anual es el mismo, pero
              cada mes cobras más.
            </p>
            <p>
              La calculadora muestra el neto por paga según la opción que elijas.
              Usa también la{" "}
              <Link href="/calculadora-irpf" className="text-brand-600 underline">
                calculadora de IRPF
              </Link>{" "}
              para ver el desglose por tramos.
            </p>

            <h2>Por qué el coste para la empresa es mucho mayor</h2>
            <p>
              La calculadora muestra también el coste real para tu empresa.
              Además de tu salario bruto, la empresa paga aproximadamente un 30%
              adicional en cotizaciones patronales: desempleo, contingencias
              comunes, FOGASA, formación y accidentes.
            </p>
            <p>
              Es decir, si cobras 30.000 € brutos, tu empresa gasta en realidad
              unos 39.000 € al año contigo. Eso es útil saberlo a la hora de
              negociar una subida de sueldo.
            </p>
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
        name: "¿Cuánto me queda neto de un sueldo de 30.000 euros brutos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con 30.000 euros brutos anuales y 14 pagas, el salario neto estimado es de aproximadamente 22.500-23.000 euros al año, unos 1.600-1.650 euros por paga. Depende de deducciones personales y comunidad autónoma.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué porcentaje se descuenta de la nómina para la Seguridad Social?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El trabajador cotiza el 6,35% de su salario bruto: 4,70% de contingencias comunes, 1,55% de desempleo y 0,10% de formación profesional.",
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
