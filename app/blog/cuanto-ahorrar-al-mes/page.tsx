import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { articles } from "@/lib/articles";

const meta = articles.find((a) => a.slug === "cuanto-ahorrar-al-mes")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/blog/${meta.slug}` },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p>
        No existe una respuesta universal a cuánto hay que ahorrar al mes, pero sí
        hay marcos probados que funcionan para la mayoría de personas. El más
        popular es la regla del 50/30/20, y aquí te explicamos cómo aplicarla a
        tu situación real.
      </p>

      <h2>La regla del 50/30/20</h2>
      <p>
        Esta regla, popularizada por la senadora Elizabeth Warren, divide el salario
        neto en tres bloques:
      </p>
      <ul>
        <li>
          <strong>50% para necesidades:</strong> alquiler o hipoteca, alimentación,
          suministros, transporte, seguros.
        </li>
        <li>
          <strong>30% para deseos:</strong> ocio, restaurantes, viajes, ropa,
          suscripciones.
        </li>
        <li>
          <strong>20% para ahorro e inversión:</strong> fondo de emergencia,
          inversión, pago de deudas extra.
        </li>
      </ul>

      <h2>Cuánto deberías ahorrar según tu sueldo</h2>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Sueldo neto/mes</th>
              <th className="px-4 py-3">Necesidades (50%)</th>
              <th className="px-4 py-3">Deseos (30%)</th>
              <th className="px-4 py-3">Ahorro (20%)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1.200 €", "600 €", "360 €", "240 €"],
              ["1.500 €", "750 €", "450 €", "300 €"],
              ["2.000 €", "1.000 €", "600 €", "400 €"],
              ["2.500 €", "1.250 €", "750 €", "500 €"],
              ["3.000 €", "1.500 €", "900 €", "600 €"],
              ["4.000 €", "2.000 €", "1.200 €", "800 €"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-gray-100">
                {row.map((cell, i) => (
                  <td key={i} className={`px-4 py-2 ${i === 3 ? "font-semibold text-brand-700" : ""} ${i === 0 ? "font-medium" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>¿Y si el 20% me parece demasiado?</h2>
      <p>
        Si ahora mismo no puedes ahorrar el 20%, no te preocupes. Empieza por lo
        que puedas: el <strong>1%, el 5% o el 10%</strong>. Lo más importante es
        crear el hábito. Con el tiempo, cuando suban los ingresos o bajen gastos,
        aumenta el porcentaje.
      </p>
      <p>
        El peor ahorro no es el pequeño: es el que nunca empieza.
      </p>

      <h2>El orden correcto: págate a ti primero</h2>
      <p>
        El error más común es intentar ahorrar lo que sobra al final del mes.
        Casi nunca sobra nada. La técnica que funciona es el{" "}
        <strong>ahorro automático</strong>: el día que cobras, transfiere
        automáticamente el porcentaje de ahorro a una cuenta separada.
      </p>
      <p>
        Así no "gastas" ese dinero porque nunca lo ves en tu cuenta corriente.
      </p>

      <h2>Dónde poner el dinero que ahorras</h2>
      <p>
        No todo el ahorro es igual. Tiene sentido estructurarlo en capas:
      </p>
      <ul>
        <li>
          <strong>Fondo de emergencia (3-6 meses de gastos):</strong> en una
          cuenta de ahorro accesible, no invertido. Es tu colchón de seguridad.
        </li>
        <li>
          <strong>Ahorro a medio plazo (1-5 años):</strong> para objetivos
          concretos (entrada de piso, coche, viaje largo). Depósitos o fondos
          conservadores.
        </li>
        <li>
          <strong>Inversión a largo plazo (+5 años):</strong> aquí entra el
          interés compuesto. Fondos indexados o planes de pensiones. Cuanto
          antes empieces, mejor.
        </li>
      </ul>

      <p>
        Simula cómo crecerá tu ahorro a largo plazo con nuestra{" "}
        <Link href="/calculadora-interes-compuesto" className="text-brand-600 underline">
          calculadora de interés compuesto
        </Link>
        . Es sorprendente lo que pueden crecer 200 € al mes a lo largo de 20 años.
      </p>

      <h2>La trampa del lifestyle inflation</h2>
      <p>
        Cuando sube el sueldo, la mayoría de personas sube también el nivel de
        vida proporcionalmente. El resultado: ahorran lo mismo en porcentaje o
        incluso menos.
      </p>
      <p>
        El antídoto es comprometerte a ahorrar <strong>la mitad de cada subida</strong>
        de sueldo. Si te suben 200 €/mes, destina 100 € más al ahorro y disfruta los
        otros 100 € como quieras. Es un equilibrio sostenible.
      </p>

      <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">¿Cuánto crecerá tu ahorro?</p>
        <p className="mt-1 text-sm text-gray-700">
          Introduce tu aportación mensual y los años que piensas mantenerla para
          ver el efecto del interés compuesto sobre tus ahorros.
        </p>
        <Link
          href="/calculadora-interes-compuesto"
          className="mt-3 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Simular mis ahorros →
        </Link>
      </div>

      <FaqJsonLd />
    </ArticleShell>
  );
}

function FaqJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto dinero debería ahorrar al mes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La regla del 50/30/20 recomienda destinar el 20% del salario neto al ahorro e inversión. Para un sueldo neto de 1.500 €/mes, eso equivale a 300 €. Si no es posible, empieza con lo que puedas y aumenta progresivamente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es la regla del 50/30/20?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es una guía para distribuir el sueldo neto: 50% para necesidades básicas (alquiler, comida, suministros), 30% para gastos discrecionales (ocio, restaurantes) y 20% para ahorro e inversión.",
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
