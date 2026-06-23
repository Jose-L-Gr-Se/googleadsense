import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import InteresCompuesto from "@/components/calculators/InteresCompuesto";
import { calculators } from "@/lib/config";

const meta = calculators.find((c) => c.slug === "interes-compuesto")!;

export const metadata: Metadata = {
  title: `${meta.title}: simula tus inversiones`,
  description: meta.description,
  alternates: { canonical: "/calculadora-interes-compuesto" },
};

export default function Page() {
  return (
    <CalculatorShell
      slug="interes-compuesto"
      title={meta.title}
      intro="Descubre cuánto puede crecer tu dinero con aportaciones periódicas y el efecto del interés compuesto a lo largo de los años."
      calculator={<InteresCompuesto />}
      article={
        <>
          <h2>Qué es el interés compuesto</h2>
          <p>
            El interés compuesto es el interés que se calcula no solo sobre el
            capital inicial, sino también sobre los intereses acumulados. Con el
            tiempo, este efecto «bola de nieve» dispara el valor final de tus
            inversiones.
          </p>
          <h2>El factor que más importa: el tiempo</h2>
          <p>
            Empezar pronto pesa más que aportar mucho. Una aportación mensual modesta
            mantenida durante 30 años suele superar a una mayor durante 10 años,
            gracias a la capitalización.
          </p>
          <ul>
            <li>Reinvierte siempre los intereses y dividendos.</li>
            <li>La rentabilidad histórica de la bolsa global ronda el 7% anual.</li>
            <li>Recuerda descontar la inflación para ver el poder adquisitivo real.</li>
          </ul>
        </>
      }
    />
  );
}
