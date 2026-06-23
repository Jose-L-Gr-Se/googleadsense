import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { articles } from "@/lib/articles";

const meta = articles.find((a) => a.slug === "cuanto-irpf-pago-por-mi-sueldo")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/blog/${meta.slug}` },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p>
        Una de las preguntas más frecuentes al negociar un salario o revisar la
        nómina es: ¿cuánto me quedo realmente después de impuestos? El IRPF es
        progresivo — no se aplica un único porcentaje, sino tramos — y aquí te
        explicamos exactamente cuánto pagas según tu sueldo.
      </p>

      <h2>Cómo funciona el IRPF: el sistema de tramos</h2>
      <p>
        El IRPF no aplica un porcentaje fijo a todo tu salario. Funciona por{" "}
        <strong>tramos</strong>: cada parte del sueldo tributa al tipo que le
        corresponde. Los primeros euros siempre pagan menos, los últimos pagan más.
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Base imponible (tramo)</th>
              <th className="px-4 py-3">Tipo estatal</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Hasta 12.450 €", "19%"],
              ["De 12.450 € a 20.200 €", "24%"],
              ["De 20.200 € a 35.200 €", "30%"],
              ["De 35.200 € a 60.000 €", "37%"],
              ["De 60.000 € a 300.000 €", "45%"],
              ["Más de 300.000 €", "47%"],
            ].map(([tramo, tipo]) => (
              <tr key={tramo} className="border-t border-gray-100">
                <td className="px-4 py-2">{tramo}</td>
                <td className="px-4 py-2 font-semibold text-brand-700">{tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Recuerda: si ganas 40.000 €, <strong>no pagas el 37% sobre 40.000 €</strong>.
        Solo pagas el 37% sobre la parte que supera 35.200 €. El resto tributa a los
        tipos inferiores.
      </p>

      <h2>Cuánto IRPF se paga por salario — ejemplos reales 2026</h2>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Salario bruto</th>
              <th className="px-4 py-3">IRPF anual (est.)</th>
              <th className="px-4 py-3">Tipo efectivo</th>
              <th className="px-4 py-3">Neto anual (est.)</th>
              <th className="px-4 py-3">Neto/mes (14p)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20.000 €", "2.775 €", "13,9%", "17.225 €", "1.230 €"],
              ["25.000 €", "4.275 €", "17,1%", "20.725 €", "1.480 €"],
              ["30.000 €", "5.775 €", "19,3%", "24.225 €", "1.730 €"],
              ["40.000 €", "9.175 €", "22,9%", "30.825 €", "2.202 €"],
              ["50.000 €", "12.775 €", "25,6%", "37.225 €", "2.659 €"],
              ["60.000 €", "17.575 €", "29,3%", "42.425 €", "3.030 €"],
              ["80.000 €", "26.575 €", "33,2%", "53.425 €", "3.816 €"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-gray-100">
                {row.map((cell, i) => (
                  <td key={i} className={`px-4 py-2 ${i === 0 ? "font-medium" : ""} ${i === 4 ? "font-semibold text-brand-700" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500">
        * Estimaciones basadas en la escala estatal 2026 sin deducciones personales
        ni cotizaciones a la Seguridad Social (~6,35%). El neto real será algo menor.
      </p>

      <p className="mt-4">
        Para calcular tu caso exacto, usa nuestra{" "}
        <Link href="/calculadora-irpf" className="text-brand-600 underline">
          calculadora de IRPF
        </Link>
        , que también muestra el desglose tramo a tramo.
      </p>

      <h2>La diferencia entre retención y cuota del IRPF</h2>
      <p>
        La <strong>retención</strong> es lo que la empresa te descuenta cada mes
        de la nómina como anticipo del IRPF. La <strong>cuota</strong> es lo que
        debes pagar realmente al hacer la declaración de la renta.
      </p>
      <p>
        Si la empresa te ha retenido más de lo que debes, Hacienda te{" "}
        <strong>devuelve</strong> la diferencia. Si ha retenido menos, tendrás que{" "}
        <strong>pagar</strong> la diferencia en la declaración.
      </p>

      <h2>Deducciones que reducen tu IRPF</h2>
      <p>
        La tabla anterior no incluye deducciones. Dependiendo de tu situación
        personal, puedes reducir significativamente lo que pagas:
      </p>
      <ul>
        <li><strong>Hijos menores:</strong> hasta 2.400 € de deducción por el primero.</li>
        <li><strong>Hipoteca anterior a 2013:</strong> deducción del 15% de lo pagado.</li>
        <li><strong>Aportación a planes de pensiones:</strong> reduce la base imponible.</li>
        <li><strong>Discapacidad propia o de familiares.</strong></li>
        <li><strong>Alquiler de vivienda habitual</strong> en algunos casos.</li>
      </ul>

      <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">Calcula tu IRPF exacto</p>
        <p className="mt-1 text-sm text-gray-700">
          Introduce tu salario bruto y número de pagas para ver la retención, el
          tipo efectivo y tu sueldo neto.
        </p>
        <Link
          href="/calculadora-irpf"
          className="mt-3 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Calcular mi IRPF →
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
        name: "¿Cuánto IRPF se paga por un sueldo de 30.000 euros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con 30.000 euros brutos anuales, el IRPF estatal estimado es de unos 5.775 euros, con un tipo efectivo del 19,3%. El salario neto anual sería de aproximadamente 24.225 euros, sin contar cotizaciones a la Seguridad Social.",
        },
      },
      {
        "@type": "Question",
        name: "¿El IRPF se aplica sobre todo el salario al mismo porcentaje?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. El IRPF es progresivo y funciona por tramos. Cada parte del sueldo tributa al tipo de su tramo. Si ganas 40.000 €, no pagas el 37% sobre los 40.000 €, sino solo sobre la parte que supera 35.200 €.",
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
