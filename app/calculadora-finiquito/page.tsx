import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import Finiquito from "@/components/calculators/Finiquito";
import { calculators } from "@/lib/config";

const meta = calculators.find((c) => c.slug === "finiquito")!;

export const metadata: Metadata = {
  title: `${meta.title}: cálculo rápido y gratis`,
  description: meta.description,
  alternates: { canonical: "/calculadora-finiquito" },
};

export default function Page() {
  return (
    <CalculatorShell
      slug="finiquito"
      title={meta.title}
      intro="Estima el importe de tu finiquito sumando el salario pendiente, las vacaciones no disfrutadas y la parte proporcional de las pagas extra."
      calculator={<Finiquito />}
      article={
        <>
          <h2>Qué incluye el finiquito</h2>
          <p>
            El finiquito es la liquidación de las cantidades que la empresa te debe
            al terminar la relación laboral: días trabajados del último mes,
            vacaciones generadas y no disfrutadas y la parte proporcional de las
            pagas extra si no las cobras prorrateadas.
          </p>
          <h2>Finiquito no es lo mismo que indemnización</h2>
          <p>
            El finiquito se cobra en cualquier salida (baja voluntaria o despido). La
            indemnización solo corresponde en despidos improcedentes u objetivos, y
            se calcula aparte según los años trabajados.
          </p>
          <ul>
            <li>Pide siempre el desglose por escrito antes de firmar.</li>
            <li>Firmar «no conforme» te permite reclamar después.</li>
            <li>Este cálculo es en bruto: faltará aplicar la retención de IRPF.</li>
          </ul>
        </>
      }
    />
  );
}
