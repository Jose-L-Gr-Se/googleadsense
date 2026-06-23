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
        Cuando estaba buscando hipoteca lo primero que hice fue meterme en Google y
        buscar exactamente esto: cuanto se paga al mes por una hipoteca de 200.000
        euros. Y la mayoría de resultados eran una mezcla de artículos genéricos y
        simuladores de bancos que te pedían el teléfono antes de darte ningún número.
        Así que voy a intentar responder de verdad.
      </p>

      <h2>¿Cuánto se paga al mes? Las cifras reales</h2>
      <p>
        La cuota depende de tres cosas: cuánto pides (200.000 €), a qué interés y en
        cuántos años. Con los tipos actuales del mercado, más o menos esto es lo que
        te encontrarás:
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Plazo</th>
              <th className="px-4 py-3">Al 3%</th>
              <th className="px-4 py-3">Al 3,5%</th>
              <th className="px-4 py-3">Al 4%</th>
              <th className="px-4 py-3">Al 4,5%</th>
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
        Puedes calcular exactamente tu caso con la{" "}
        <Link href="/calculadora-hipoteca" className="text-brand-600 underline">
          calculadora de hipoteca
        </Link>
        , que además genera la tabla de amortización mes a mes.
      </p>

      <h2>Lo que nadie te cuenta: el banco no es tu única opción</h2>
      <p>
        Yo cometí el error clásico: fui directamente a mi banco de toda la vida,
        me dieron una oferta y casi la firmo sin mirar más. Por suerte alguien me
        recomendó usar un broker hipotecario antes de decidir.
      </p>
      <p>
        Usé <strong>iAhorro</strong> y la diferencia fue bastante notable. En mi caso
        conseguieron un tipo bastante mejor del que me ofrecía mi banco, y encima sin
        tener que ir yo a negociar con nadie. El broker trabaja con varios bancos a la
        vez y negocia en tu nombre, tienen más palanca que tú yendo solo a ventanilla.
      </p>
      <p>
        No lo digo como publicidad, lo digo porque me ahorré una cantidad relevante
        en intereses a lo largo del préstamo. En una hipoteca de 200.000 euros, medio
        punto de diferencia en el interés son más de 10.000 euros menos pagados al
        final. Vale la pena dedicar una tarde a comparar.
      </p>

      <h2>Fija, variable o mixta: qué elegir ahora mismo</h2>
      <p>
        Después de años de euríbor disparado, el mercado de hipotecas fijas ha
        mejorado bastante. Mi opinión personal, y esto es solo mi opinión, es que
        para la mayoría de gente la hipoteca fija da más tranquilidad y a día de hoy
        los tipos no están tan mal como para que no merezca la pena pagar esa
        "prima" por la certeza.
      </p>
      <p>
        Con la variable asumes que si el euríbor sube, tú pagas más. Y puede subir
        bastante. Para una hipoteca de 200.000 euros a 25 años, una subida de 1 punto
        en el euríbor te puede costar 100 euros más al mes. Mes tras mes. Eso se nota.
      </p>
      <p>
        Puedes simular exactamente cuánto cambia tu cuota con distintos tipos en la{" "}
        <Link href="/calculadora-hipoteca" className="text-brand-600 underline">
          calculadora
        </Link>
        .
      </p>

      <h2>Cuánto necesitas tener ahorrado</h2>
      <p>
        Los bancos financian como mucho el 80% del valor de tasación. Para una
        hipoteca de 200.000 euros eso significa que el piso vale al menos 250.000,
        así que necesitas tener ahorrados mínimo 50.000 euros solo de entrada.
      </p>
      <p>
        A eso le sumas los gastos de compraventa: el ITP (entre el 6% y el 10% según
        la comunidad), notaría, registro y gestoría. En Madrid, por ejemplo, el ITP
        está al 6%, así que en un piso de 250.000 euros son otros 15.000 euros más.
        En total, calcula que necesitas tener entre el 25% y el 30% del valor del
        piso ahorrado antes de empezar.
      </p>

      <h2>Cuánto tienes que ganar para que te den la hipoteca</h2>
      <p>
        La regla que aplican casi todos los bancos es que la cuota mensual no supere
        el 30-35% de tus ingresos netos. Con una cuota de 1.000 euros al mes,
        necesitas demostrar que ingresas al menos 2.800-3.000 euros netos.
      </p>
      <p>
        Si no llegas solo, se puede pedir con pareja o con un avalista, aunque eso
        tiene sus propias implicaciones. Puedes calcular tu salario neto con nuestra{" "}
        <Link href="/calculadora-nomina" className="text-brand-600 underline">
          calculadora de nómina
        </Link>{" "}
        para ver exactamente con cuánto cuentas.
      </p>

      <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">Calcula tu cuota ahora</p>
        <p className="mt-1 text-sm text-gray-700">
          Cambia los valores para ver cómo afecta el plazo y el tipo de interés
          a lo que pagarás cada mes.
        </p>
        <Link
          href="/calculadora-hipoteca"
          className="mt-3 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Abrir calculadora →
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
          text: "Los bancos financian como máximo el 80%. Para 200.000 euros necesitas entre 40.000 y 60.000 euros ahorrados, incluyendo impuestos y gastos de escritura.",
        },
      },
      {
        "@type": "Question",
        name: "¿Vale la pena usar un broker hipotecario?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí. Un broker negocia con varios bancos a la vez y puede conseguir mejores condiciones que yendo directamente a tu banco. En hipotecas grandes, medio punto de diferencia en el interés puede suponer más de 10.000 euros de ahorro.",
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
