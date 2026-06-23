import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { articles } from "@/lib/articles";

const meta = articles.find((a) => a.slug === "euribor-hipoteca-variable-como-afecta")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/blog/${meta.slug}` },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p>
        Si tienes una hipoteca variable, el euríbor determina cuánto pagas cada mes.
        Cuando sube, tu cuota sube. Cuando baja, baja. Aquí explicamos exactamente
        cómo funciona ese mecanismo y qué puedes hacer para protegerte.
      </p>

      <h2>¿Qué es el euríbor?</h2>
      <p>
        El euríbor (Euro Interbank Offered Rate) es el tipo de interés al que los
        bancos europeos se prestan dinero entre sí. Se publica diariamente para
        distintos plazos (1 mes, 3 meses, 6 meses, 12 meses). En España, las
        hipotecas variables se referencian casi siempre al{" "}
        <strong>euríbor a 12 meses</strong>.
      </p>
      <p>
        No es un tipo que fija el BCE directamente, aunque las decisiones del Banco
        Central Europeo sobre los tipos de interés influyen mucho en su evolución.
      </p>

      <h2>Cómo se calcula tu nueva cuota al revisar</h2>
      <p>
        Tu hipoteca variable se revisa cada 6 o 12 meses (según tu contrato). En
        cada revisión, el banco suma el euríbor del mes anterior a tu diferencial y
        recalcula la cuota con el capital pendiente.
      </p>
      <p>
        <strong>Fórmula:</strong> Nuevo tipo = Euríbor + Diferencial
      </p>
      <p>
        Ejemplo: si tu diferencial es del 1% y el euríbor está al 2,5%, tu tipo
        será del 3,5%. Puedes simular cuánto pagarás tras la revisión con nuestra{" "}
        <Link href="/calculadora-hipoteca" className="text-brand-600 underline">
          calculadora de hipoteca
        </Link>
        : introduce el capital pendiente, el nuevo tipo y los años que quedan.
      </p>

      <h2>Cuánto sube la cuota si el euríbor sube 1 punto</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Capital pendiente</th>
              <th className="px-4 py-3">Años restantes</th>
              <th className="px-4 py-3">Cuota al 3%</th>
              <th className="px-4 py-3">Cuota al 4%</th>
              <th className="px-4 py-3">Diferencia/mes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["100.000 €", "20 años", "555 €", "606 €", "+51 €"],
              ["150.000 €", "20 años", "832 €", "909 €", "+77 €"],
              ["200.000 €", "20 años", "1.109 €", "1.212 €", "+103 €"],
              ["200.000 €", "25 años", "948 €", "1.056 €", "+108 €"],
              ["300.000 €", "25 años", "1.422 €", "1.584 €", "+162 €"],
            ].map((row) => (
              <tr key={row[0] + row[1]} className="border-t border-gray-100">
                {row.map((cell, i) => (
                  <td key={i} className={`px-4 py-2 ${i === 4 ? "font-semibold text-red-600" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Opciones si la cuota te ahoga</h2>
      <p>
        Si el euríbor ha subido y la cuota te está resultando difícil de pagar,
        tienes varias opciones:
      </p>
      <ul>
        <li>
          <strong>Ampliación de plazo:</strong> alargar el préstamo reduce la cuota
          mensual, aunque pagas más intereses en total.
        </li>
        <li>
          <strong>Cambio a hipoteca fija (novación o subrogación):</strong> fijar
          el tipo elimina la incertidumbre. Tiene sentido cuando los tipos fijos
          están en niveles razonables.
        </li>
        <li>
          <strong>Amortización anticipada:</strong> si tienes ahorros, reducir
          capital baja la cuota y los intereses futuros.
        </li>
        <li>
          <strong>Código de Buenas Prácticas:</strong> si estás en situación
          vulnerable, la banca adherida a este código ofrece medidas de alivio.
        </li>
      </ul>

      <h2>¿Hipoteca fija o variable en 2026?</h2>
      <p>
        La respuesta depende de tu tolerancia al riesgo y de los tipos que ofrece
        el mercado en cada momento. Como regla general:
      </p>
      <ul>
        <li>
          <strong>Hipoteca fija:</strong> ideal si valoras la certeza y no quieres
          sorpresas. Pagas una prima por la seguridad.
        </li>
        <li>
          <strong>Hipoteca variable:</strong> puede ser más barata si el euríbor
          baja, pero asumes el riesgo de subidas.
        </li>
        <li>
          <strong>Hipoteca mixta:</strong> fija los primeros años y luego variable.
          Un equilibrio entre ambas.
        </li>
      </ul>

      <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">Simula tu cuota tras la revisión</p>
        <p className="mt-1 text-sm text-gray-700">
          Introduce el capital pendiente, el nuevo tipo (euríbor + diferencial)
          y los años que quedan para ver cuánto pagarás.
        </p>
        <Link
          href="/calculadora-hipoteca"
          className="mt-3 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Calcular nueva cuota →
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
        name: "¿Cómo afecta el euríbor a mi hipoteca variable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En cada revisión (cada 6 o 12 meses), el banco recalcula tu cuota sumando el euríbor del mes anterior a tu diferencial. Si el euríbor sube, tu cuota sube; si baja, también baja.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto sube la cuota si el euríbor sube un 1%?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para una hipoteca de 200.000 euros a 20 años, una subida de 1 punto en el euríbor supone unos 100 euros más al mes en la cuota.",
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
