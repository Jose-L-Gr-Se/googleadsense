import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import Prestamo from "@/components/calculators/Prestamo";
import { calculators } from "@/lib/config";

const meta = calculators.find((c) => c.slug === "prestamo")!;

export const metadata: Metadata = {
  title: `${meta.title}: cuota y coste total`,
  description: meta.description,
  alternates: { canonical: "/calculadora-prestamo" },
};

export default function Page() {
  return (
    <CalculatorShell
      slug="prestamo"
      title={meta.title}
      intro="Calcula la cuota mensual y el coste total de un préstamo personal indicando el importe, el tipo de interés (TIN) y el plazo en meses."
      calculator={<Prestamo />}
      article={
        <>
          <h2>TIN, TAE y coste real del préstamo</h2>
          <p>
            El TIN es el tipo de interés nominal que se aplica al capital. La TAE
            incluye además las comisiones y refleja mejor el coste real. Para
            comparar préstamos, fíjate siempre en la TAE.
          </p>
          <h2>¿Cuánto puedo pedir?</h2>
          <p>
            Como regla general, el conjunto de tus cuotas mensuales (incluida la
            hipoteca) no debería superar el 35% de tus ingresos netos. Pedir más de
            lo necesario solo aumenta los intereses que pagarás.
          </p>
          <ul>
            <li>Plazos más largos = cuota menor pero más intereses totales.</li>
            <li>Revisa comisiones de apertura y de cancelación anticipada.</li>
            <li>Desconfía de TAE muy por encima del mercado.</li>
          </ul>
        </>
      }
    />
  );
}
