import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { articles } from "@/lib/articles";

const meta = articles.find((a) => a.slug === "hipoteca-200000-euros-cuota-mensual")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/blog/${meta.slug}` },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p>
        Una hipoteca de 200.000 euros es una de las más comunes en España. Antes de
        firmar, es fundamental saber exactamente cuánto pagarás cada mes y cuánto
        dinero habrás desembolsado al final del préstamo. En este artículo
        desglosamos todos los escenarios.
      </p>

      <h2>¿Cuánto se paga al mes por una hipoteca de 200.000 euros?</h2>
      <p>
        La cuota mensual depende de tres factores: el importe (200.000 €), el tipo
        de interés y el plazo. Con los tipos actuales del mercado, estas son las
        cuotas aproximadas:
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Plazo</th>
              <th className="px-4 py-3">Interés 3%</th>
              <th className="px-4 py-3">Interés 3,5%</th>
              <th className="px-4 py-3">Interés 4%</th>
              <th className="px-4 py-3">Interés 4,5%</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["15 años", "1.381 €", "1.430 €", "1.479 €", "1.529 €"],
              ["20 años", "1.109 €", "1.159 €", "1.212 €", "1.265 €"],
              ["25 años", "948 €", "1.001 €", "1.056 €", "1.112 €"],
              ["30 años", "843 €", "898 €", "955 €", "1.013 €"],
            ].map(([plazo, ...cuotas]) => (
              <tr key={plazo} className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium">{plazo}</td>
                {cuotas.map((c) => (
                  <td key={c} className="px-4 py-2">{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        <strong>Ejemplo concreto:</strong> con 200.000 euros a 25 años y un interés
        fijo del 3,5%, la cuota mensual sería de aproximadamente <strong>1.001 €</strong>.
        Al final del préstamo habrás pagado unos 300.300 €, es decir, más de
        100.000 € en intereses.
      </p>

      <p>
        Puedes calcular tu cuota exacta con nuestra{" "}
        <Link href="/calculadora-hipoteca" className="text-brand-600 underline">
          calculadora de hipoteca
        </Link>
        , que también genera la tabla de amortización completa mes a mes.
      </p>

      <h2>Hipoteca fija vs variable: cuál elegir en 2026</h2>
      <p>
        Tras varios años de euríbor alto, muchos bancos ofrecen hipotecas fijas
        competitivas. La hipoteca fija te da <strong>certeza total</strong>: sabes
        lo que pagarás durante toda la vida del préstamo, independientemente de lo
        que haga el euríbor.
      </p>
      <p>
        La hipoteca variable puede resultar más barata si el euríbor baja, pero
        asumes el riesgo de que suba. Para una hipoteca de 200.000 euros a 25 años,
        una subida de 1 punto en el euríbor puede elevar la cuota mensual en más de
        80-100 euros.
      </p>

      <h2>Requisitos del banco para concederte 200.000 euros</h2>
      <p>
        Los bancos aplican criterios de solvencia antes de aprobar cualquier
        hipoteca. Para 200.000 euros, en general necesitas:
      </p>
      <ul>
        <li>
          <strong>Ingresos suficientes:</strong> la cuota no debe superar el 30-35%
          de tus ingresos netos mensuales. Con una cuota de 1.000 €, necesitas ganar
          al menos 2.857 € netos.
        </li>
        <li>
          <strong>Ahorros del 20-30%:</strong> los bancos financian como máximo el
          80% del valor de tasación, así que para 200.000 euros necesitas tener
          ahorrados entre 40.000 y 60.000 euros (incluyendo gastos de compraventa).
        </li>
        <li>
          <strong>Estabilidad laboral:</strong> contrato indefinido o ser autónomo
          con al menos 2 años de actividad.
        </li>
        <li>
          <strong>Sin deudas importantes:</strong> el conjunto de tus cuotas
          (hipoteca + otros préstamos) no debe superar el 35% de tus ingresos.
        </li>
      </ul>

      <h2>Gastos adicionales a tener en cuenta</h2>
      <p>
        El precio de la vivienda no es el único gasto. Al comprar con hipoteca
        debes añadir:
      </p>
      <ul>
        <li>
          <strong>ITP o IVA:</strong> entre el 6% y el 10% del precio según la
          comunidad autónoma (ITP para vivienda usada, 10% IVA para nueva).
        </li>
        <li>
          <strong>Notaría y registro:</strong> aproximadamente 1.000-2.000 €.
        </li>
        <li>
          <strong>Tasación:</strong> entre 250 y 600 €.
        </li>
        <li>
          <strong>Gestoría:</strong> opcional, 300-600 €.
        </li>
      </ul>
      <p>
        En total, calcula entre un 10% y un 15% adicional sobre el precio del
        inmueble en gastos asociados a la compra.
      </p>

      <h2>Cómo conseguir las mejores condiciones</h2>
      <ul>
        <li>Pide ofertas a <strong>al menos tres bancos distintos</strong> antes de decidir.</li>
        <li>Compara siempre la <strong>TAE</strong>, no solo el TIN, ya que incluye las comisiones.</li>
        <li>
          Negocia los productos vinculados (seguros, tarjetas): a veces un tipo
          más bajo sale caro si los seguros son caros.
        </li>
        <li>
          Considera un <strong>bróker hipotecario</strong> si no tienes tiempo:
          cobran comisión pero suelen conseguir mejores tipos que en ventanilla.
        </li>
      </ul>

      <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">¿Listo para calcular tu hipoteca?</p>
        <p className="mt-1 text-sm text-gray-700">
          Usa nuestra calculadora gratuita para ver la cuota exacta, los intereses
          totales y la amortización completa mes a mes.
        </p>
        <Link
          href="/calculadora-hipoteca"
          className="mt-3 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Calcular mi hipoteca →
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
        name: "¿Cuánto se paga al mes por una hipoteca de 200.000 euros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del plazo y el interés. A 25 años con un 3,5% de interés fijo, la cuota mensual es de aproximadamente 1.001 euros.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto dinero necesito ahorrado para una hipoteca de 200.000 euros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los bancos financian como máximo el 80% del valor de tasación. Para 200.000 euros necesitas tener ahorrados entre 40.000 y 60.000 euros, incluyendo impuestos y gastos de escritura.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto gana que ganar para que me concedan una hipoteca de 200.000 euros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La cuota no debe superar el 30-35% de tus ingresos netos. Con una cuota de 1.000 euros, necesitas ingresar al menos 2.857 euros netos al mes.",
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
