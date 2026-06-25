import type { Metadata } from "next";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import Autonomos from "@/components/calculators/Autonomos";
import { calculators } from "@/lib/config";

const meta = calculators.find((c) => c.slug === "autonomos")!;

export const metadata: Metadata = {
  title: "Calculadora de cuota de autónomos 2026: cuánto pagarás al mes",
  description: meta.description,
  alternates: { canonical: "/calculadora-autonomos" },
};

export default function Page() {
  return (
    <>
      <CalculatorShell
        slug="autonomos"
        title={meta.title}
        intro="Desde 2023 los autónomos cotizan según sus ingresos reales. Introduce tu facturación y gastos para saber en qué tramo estás y cuánto pagarás de cuota cada mes."
        calculator={<Autonomos />}
        article={
          <>
            <h2>Cómo funciona la cuota de autónomos por ingresos reales</h2>
            <p>
              Hasta 2022, casi todos los autónomos pagaban la misma cuota
              (alrededor de 294 € al mes) eligiesen la base que eligiesen. Desde
              2023 esto cambió: ahora se cotiza en función del{" "}
              <strong>rendimiento neto</strong>, es decir, lo que ganas de verdad
              una vez restados los gastos. Cuanto más ganas, más pagas.
            </p>
            <p>
              El sistema funciona por <strong>tramos</strong>. Cada tramo tiene una
              base de cotización mínima y una máxima, y tú eliges dentro de ese
              rango. La mayoría de autónomos cotiza por la base mínima, que es la
              que muestra la calculadora.
            </p>

            <h2>Cómo se calcula el rendimiento neto</h2>
            <p>
              El rendimiento neto no es tu facturación. Se calcula así:
            </p>
            <ul>
              <li><strong>Ingresos</strong> (lo que facturas) <strong>− gastos deducibles</strong> = rendimiento neto previo.</li>
              <li>A ese resultado se le resta un <strong>7% adicional</strong> por gastos de difícil justificación (un 5% si eres autónomo societario).</li>
              <li>El número final es el que determina tu tramo y tu cuota.</li>
            </ul>

            <h2>La tarifa plana para nuevos autónomos</h2>
            <p>
              Si te das de alta por primera vez (o no has estado de alta en los dos
              años anteriores), puedes acogerte a la <strong>tarifa plana de 80 €
              al mes</strong> durante los primeros 12 meses. Pasado ese año, si tus
              rendimientos siguen siendo bajos, puedes prorrogarla otros 12 meses.
            </p>

            <h2>¿Conviene cotizar por una base más alta?</h2>
            <p>
              Pagar la cuota mínima es lo más barato a corto plazo, pero tu base de
              cotización determina tu futura pensión de jubilación y las
              prestaciones por baja o cese de actividad. Si tienes capacidad, subir
              algo la base puede compensar a largo plazo. Es una decisión personal:
              calcula primero tu cuota mínima aquí y valora desde ahí.
            </p>

            <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
              <p className="font-semibold text-brand-700">Calcula también tu IRPF como autónomo</p>
              <p className="mt-1 text-sm text-ink-700">
                La cuota de autónomos es solo la Seguridad Social. Además tendrás que
                pagar IRPF por tus rendimientos. Estima cuánto con la{" "}
                <Link href="/calculadora-irpf" className="text-brand-600 underline">
                  calculadora de IRPF
                </Link>
                .
              </p>
            </div>
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
        name: "¿Cuánto paga un autónomo de cuota en 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende de los rendimientos netos. Con el sistema de cotización por ingresos reales, la cuota mínima va desde 200 € al mes (rendimientos bajos) hasta 460 € al mes (más de 6.000 € mensuales de rendimiento neto). Los nuevos autónomos pueden acogerse a la tarifa plana de 80 € al mes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se calcula el rendimiento neto de un autónomo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se restan los gastos deducibles a los ingresos facturados y, sobre ese resultado, se aplica una deducción adicional del 7% (5% para autónomos societarios) por gastos de difícil justificación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es la tarifa plana de autónomos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es una cuota reducida de 80 € al mes para nuevos autónomos durante los primeros 12 meses, prorrogable otros 12 meses si los rendimientos netos son inferiores al salario mínimo interprofesional.",
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
