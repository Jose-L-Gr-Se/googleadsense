import type { Metadata } from "next";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import Irpf from "@/components/calculators/Irpf";
import { calculators } from "@/lib/config";

const meta = calculators.find((c) => c.slug === "irpf")!;

export const metadata: Metadata = {
  title: `${meta.title}: retención y salario neto`,
  description: meta.description,
  alternates: { canonical: "/calculadora-irpf" },
};

export default function Page() {
  return (
    <>
      <CalculatorShell
        slug="irpf"
        title={meta.title}
        intro="Calcula cuánto pagarás de IRPF según tu salario bruto anual y cuánto cobrarás de neto. Incluye el desglose por tramos del impuesto."
        calculator={<Irpf />}
        article={
          <>
            <h2>Qué es el IRPF y cómo funciona</h2>
            <p>
              El IRPF (Impuesto sobre la Renta de las Personas Físicas) es un
              impuesto progresivo: cuanto más ganas, mayor porcentaje pagas. No
              se aplica un tipo único sobre todo el salario, sino que cada tramo
              tributa a un tipo diferente.
            </p>

            <h2>Diferencia entre tipo marginal y tipo efectivo</h2>
            <p>
              El <strong>tipo marginal</strong> es el porcentaje que se aplica al
              último euro que ganas (el tramo más alto que alcanzas). El{" "}
              <strong>tipo efectivo</strong> es el porcentaje real que pagas sobre
              el total: siempre es menor que el marginal porque los primeros euros
              tributan a tipos más bajos.
            </p>
            <p>
              Ejemplo: si ganas 40.000 €, tu tipo marginal es el 37%, pero tu tipo
              efectivo ronda el 20-22%.
            </p>

            <h2>¿Qué no incluye esta calculadora?</h2>
            <p>
              Para simplificar, esta calculadora solo aplica la escala estatal
              general. El IRPF real depende también de:
            </p>
            <ul>
              <li>El <strong>tramo autonómico</strong> (varía por comunidad autónoma).</li>
              <li>Las <strong>deducciones personales</strong>: hijos, hipoteca, discapacidad…</li>
              <li>
                La <strong>cotización a la Seguridad Social</strong> (aproximadamente
                un 6,35% del bruto), que reduce la base imponible.
              </li>
              <li>Las <strong>reducciones por rendimientos del trabajo</strong>.</li>
            </ul>
            <p>
              Para el salario neto definitivo, usa la calculadora como estimación y
              consulta tu nómina o un asesor fiscal para el cálculo exacto.
            </p>

            <h2>¿Cuándo tengo que hacer la declaración de la renta?</h2>
            <p>
              Tienes obligación de declarar si tus ingresos del trabajo superan los
              22.000 € anuales con un solo pagador (o 15.000 € con más de un
              pagador). El plazo habitual es de abril a junio del año siguiente.
            </p>
            <p>
              La{" "}
              <Link href="/calculadora-finiquito" className="text-brand-600 underline">
                calculadora de finiquito
              </Link>{" "}
              también puede ayudarte a estimar el impacto fiscal de cobrar un
              finiquito en el mismo año.
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
        name: "¿Cuánto IRPF se paga por 30.000 euros brutos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con 30.000 euros brutos anuales, el IRPF estatal aproximado es de unos 5.900 euros, con un tipo efectivo de alrededor del 19-20%. El neto anual sería de unos 24.000 euros antes de cotizaciones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre tipo marginal y tipo efectivo del IRPF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tipo marginal es el porcentaje que se aplica al último tramo de ingresos. El tipo efectivo es el porcentaje real pagado sobre el total. El efectivo siempre es menor porque los primeros euros tributan a tipos más bajos.",
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
