import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { articles } from "@/lib/articles";

const meta = articles.find((a) => a.slug === "diferencia-tin-tae")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/blog/${meta.slug}` },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p>
        Cuando pides un préstamo o comparas hipotecas, el banco siempre muestra dos
        cifras: el TIN y la TAE. La mayoría de la gente mira solo la más baja
        (normalmente el TIN) y se lleva sorpresas. Aquí te explicamos la diferencia
        de forma clara para que siempre elijas bien.
      </p>

      <h2>¿Qué es el TIN?</h2>
      <p>
        El <strong>TIN (Tipo de Interés Nominal)</strong> es el porcentaje de
        interés puro que el banco aplica al capital prestado. Es el coste básico del
        dinero que te prestan, sin incluir ningún gasto adicional.
      </p>
      <p>
        Si pides 10.000 euros con un TIN del 6% anual, el banco te cobra 600 euros
        al año solo en concepto de intereses (antes de comisiones y otros gastos).
      </p>

      <h2>¿Qué es la TAE?</h2>
      <p>
        La <strong>TAE (Tasa Anual Equivalente)</strong> incluye el TIN
        <strong> más todos los gastos y comisiones</strong> asociados al producto:
        comisión de apertura, gastos de estudio, seguros vinculados obligatorios, etc.
        Se expresa también como porcentaje anual y permite comparar productos en
        igualdad de condiciones.
      </p>
      <p>
        La TAE siempre es igual o mayor que el TIN. Si son iguales, significa que el
        producto no tiene comisiones adicionales.
      </p>

      <h2>Diferencia entre TIN y TAE: resumen visual</h2>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3">TIN</th>
              <th className="px-4 py-3">TAE</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["¿Qué incluye?", "Solo el interés", "Interés + comisiones + gastos"],
              ["¿Para qué sirve?", "Calcular la cuota mensual", "Comparar productos distintos"],
              ["¿Es siempre igual?", "Puede variar (si es variable)", "Siempre actualizada"],
              ["¿El banco lo puede ocultar?", "No, es obligatorio", "No, es obligatorio por ley"],
            ].map(([concepto, tin, tae]) => (
              <tr key={concepto as string} className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium text-gray-700">{concepto}</td>
                <td className="px-4 py-2">{tin}</td>
                <td className="px-4 py-2">{tae}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Ejemplo práctico: el truco del TIN bajo y la TAE alta</h2>
      <p>
        Imagina que comparas dos préstamos personales de 10.000 euros a 3 años:
      </p>
      <ul>
        <li><strong>Banco A:</strong> TIN 5% — TAE 7,2% — Comisión de apertura: 2%</li>
        <li><strong>Banco B:</strong> TIN 6% — TAE 6,1% — Sin comisiones</li>
      </ul>
      <p>
        El Banco A tiene un TIN más bajo, pero la TAE es mayor porque cobra una
        comisión de apertura del 2% (200 euros). En total, el Banco A es más caro
        aunque el interés nominal sea inferior.
      </p>
      <p>
        <strong>Regla de oro: compara siempre por la TAE.</strong> El TIN solo te
        sirve para saber cuánto pagarás cada mes.
      </p>

      <h2>¿Cuándo el TIN sí importa?</h2>
      <p>
        El TIN es útil cuando quieres calcular la cuota mensual exacta de un
        préstamo. La fórmula de amortización francesa usa el TIN mensual (TIN
        anual ÷ 12) para calcular cuánto de cada cuota son intereses y cuánto es
        capital.
      </p>
      <p>
        Puedes usar nuestra{" "}
        <Link href="/calculadora-prestamo" className="text-brand-600 underline">
          calculadora de préstamo personal
        </Link>{" "}
        introduciendo el TIN para obtener la cuota mensual exacta, o la{" "}
        <Link href="/calculadora-hipoteca" className="text-brand-600 underline">
          calculadora de hipoteca
        </Link>{" "}
        para ver también la tabla de amortización completa.
      </p>

      <h2>TIN y TAE en hipotecas variables</h2>
      <p>
        En las hipotecas variables (referenciadas al euríbor), el TIN cambia cada 6
        o 12 meses según la revisión. La TAE también se actualiza. Por eso en los
        folletos de las hipotecas variables verás la TAE calculada para un escenario
        concreto de euríbor, que puede no coincidir con la realidad futura.
      </p>
      <ul>
        <li>Lee siempre la FEIN (Ficha Europea de Información Normalizada) antes de firmar.</li>
        <li>
          Compara hipotecas variables con el mismo escenario de euríbor para que
          la comparación sea justa.
        </li>
        <li>Recuerda que en hipotecas fijas, el TIN y la TAE sí son definitivos.</li>
      </ul>

      <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">Calcula tu préstamo con el TIN</p>
        <p className="mt-1 text-sm text-gray-700">
          Introduce el TIN que te ofrece el banco para ver la cuota mensual exacta
          y el coste total del préstamo.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/calculadora-prestamo"
            className="inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Calcular préstamo →
          </Link>
          <Link
            href="/calculadora-hipoteca"
            className="inline-block rounded-lg border border-brand-600 px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50"
          >
            Calcular hipoteca →
          </Link>
        </div>
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
        name: "¿Cuál es la diferencia entre TIN y TAE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El TIN es el tipo de interés nominal puro, sin comisiones. La TAE incluye el TIN más todos los gastos y comisiones. Para comparar productos, siempre hay que fijarse en la TAE.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es mejor, un TIN bajo o una TAE baja?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Siempre es mejor una TAE baja. Un TIN bajo con comisiones altas puede resultar más caro que un TIN algo mayor sin comisiones. La TAE refleja el coste real total.",
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
