import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import Iva from "@/components/calculators/Iva";
import { calculators } from "@/lib/config";

const meta = calculators.find((c) => c.slug === "iva")!;

export const metadata: Metadata = {
  title: `${meta.title}: sumar o quitar el 21%, 10% y 4%`,
  description: meta.description,
  alternates: { canonical: "/calculadora-iva" },
};

export default function Page() {
  return (
    <CalculatorShell
      slug="iva"
      title={meta.title}
      intro="Añade o quita el IVA de cualquier importe. Elige entre el tipo general (21%), reducido (10%) o superreducido (4%) y obtén la base imponible al instante."
      calculator={<Iva />}
      article={
        <>
          <h2>Tipos de IVA en España</h2>
          <ul>
            <li><strong>21% (general):</strong> la mayoría de bienes y servicios.</li>
            <li><strong>10% (reducido):</strong> hostelería, transporte, vivienda nueva.</li>
            <li><strong>4% (superreducido):</strong> pan, leche, libros, medicamentos.</li>
          </ul>
          <h2>Cómo quitar el IVA de un precio</h2>
          <p>
            Para obtener la base imponible a partir de un precio con IVA del 21%, se
            divide el total entre 1,21. La calculadora lo hace automáticamente al
            elegir el modo «Quitar IVA».
          </p>
        </>
      }
    />
  );
}
