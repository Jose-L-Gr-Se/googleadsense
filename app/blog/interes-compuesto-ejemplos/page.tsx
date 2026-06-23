import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { articles } from "@/lib/articles";

const meta = articles.find((a) => a.slug === "interes-compuesto-ejemplos")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/blog/${meta.slug}` },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p>
        Llevo un tiempo invirtiendo en fondos indexados y ETFs, y lo que más me
        costó entender al principio no era la mecánica de cómo funcionan los fondos,
        sino el concepto que está detrás de por qué merece la pena mantenerlos a
        largo plazo sin tocarlos: el interés compuesto.
      </p>
      <p>
        Cuando lo entendí de verdad, con números reales, cambió bastante cómo pienso
        en el ahorro. Así que voy a explicarlo como me lo explicaron a mí, con
        ejemplos concretos.
      </p>

      <h2>La diferencia entre interés simple y compuesto</h2>
      <p>
        Con <strong>interés simple</strong> ganas siempre lo mismo sobre tu capital
        inicial. Inviertes 1.000 euros al 6% anual y cada año ganas 60 euros. Sin
        más.
      </p>
      <p>
        Con <strong>interés compuesto</strong>, los intereses que generas se suman
        al capital y el año siguiente generan intereses ellos también. Es decir, el
        primer año ganas 60 euros. El segundo año ganas intereses sobre 1.060 euros,
        no sobre 1.000. El tercero sobre 1.123. Y así sucesivamente.
      </p>
      <p>
        Al principio la diferencia es pequeña. Con los años se vuelve enorme.
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Año</th>
              <th className="px-4 py-3">Interés simple (6%)</th>
              <th className="px-4 py-3">Interés compuesto (6%)</th>
              <th className="px-4 py-3">Diferencia</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "1.060 €", "1.060 €", "0 €"],
              ["5", "1.300 €", "1.338 €", "+38 €"],
              ["10", "1.600 €", "1.791 €", "+191 €"],
              ["20", "2.200 €", "3.207 €", "+1.007 €"],
              ["30", "2.800 €", "5.743 €", "+2.943 €"],
            ].map(([year, simple, compound, diff]) => (
              <tr key={year} className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium">{year}</td>
                <td className="px-4 py-2">{simple}</td>
                <td className="px-4 py-2 font-semibold text-green-700">{compound}</td>
                <td className="px-4 py-2 text-brand-700 font-medium">{diff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        A 30 años, los 1.000 euros iniciales se convierten en casi 5.750 euros solo
        por el efecto del interés compuesto. Sin aportar nada más. Solo dejando el
        dinero quieto.
      </p>

      <h2>Por qué los fondos indexados y los ETFs son el vehículo ideal</h2>
      <p>
        Lo que hace que el interés compuesto funcione de verdad en la inversión es
        la <strong>reinversión de los beneficios</strong>. En un fondo indexado de
        acumulación (que es lo que yo uso), los dividendos no se reparten: se
        reinvierten automáticamente en el propio fondo. Eso activa el compuesto sin
        que tengas que hacer nada.
      </p>
      <p>
        Con un ETF de distribución, en cambio, te pagan los dividendos en efectivo.
        Si no los reinviertes tú manualmente, el efecto compuesto se rompe. Por eso
        para largo plazo la mayoría de gente que invierte en indexados prefiere
        fondos de acumulación.
      </p>

      <h2>El ejemplo que más me impactó: empezar 10 años antes</h2>
      <p>
        Esto es lo que de verdad me hizo entender que el tiempo importa más que
        el importe. Compara dos personas aportando 150 euros al mes a un fondo
        indexado con un 7% de rentabilidad media anual:
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3">Empieza a los 25</th>
              <th className="px-4 py-3">Empieza a los 35</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Años invirtiendo (hasta los 65)", "40 años", "30 años"],
              ["Total aportado", "72.000 €", "54.000 €"],
              ["Valor final estimado", "~400.000 €", "~182.000 €"],
              ["Diferencia", "+18.000 € aportados", "+218.000 € de resultado"],
            ].map(([concepto, a, b]) => (
              <tr key={concepto} className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium text-gray-700">{concepto}</td>
                <td className="px-4 py-2 text-green-700 font-semibold">{a}</td>
                <td className="px-4 py-2">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        El que empieza antes aporta 18.000 euros más en total, pero acaba con más
        del doble. Esos 10 años de diferencia valen 218.000 euros. Eso es el
        interés compuesto funcionando durante más tiempo.
      </p>

      <h2>Aportaciones periódicas: la clave que multiplica el efecto</h2>
      <p>
        Una cosa que aprendí al informarme sobre indexados es que no hace falta
        tener mucho capital inicial. Lo que realmente mueve la aguja son las
        aportaciones mensuales constantes. Con 200 euros al mes durante 25 años
        al 6% de rentabilidad media:
      </p>
      <ul>
        <li><strong>Total aportado:</strong> 60.000 €</li>
        <li><strong>Valor final estimado:</strong> ~138.000 €</li>
        <li><strong>Intereses generados:</strong> más de 78.000 € — más de lo que aportaste</li>
      </ul>
      <p>
        Pruébalo tú mismo con nuestra{" "}
        <Link href="/calculadora-interes-compuesto" className="text-brand-600 underline">
          calculadora de interés compuesto
        </Link>
        . Cambia los años y la aportación mensual y verás cómo el tiempo lo cambia
        todo.
      </p>

      <h2>Lo que hay que tener claro antes de invertir</h2>
      <p>
        El 7% de rentabilidad media anual que se usa como referencia en los fondos
        indexados globales es una media histórica a largo plazo. Hay años que sube
        un 20% y años que baja un 30%. La clave es no vender en los años malos,
        porque si vendes en rojo rompes el compuesto justo cuando más lo necesitas.
      </p>
      <p>
        Lo que yo hago, y lo que recomiendan casi todos los que llevan años en esto,
        es no mirar la cartera más de una vez al mes y seguir aportando igual
        independientemente de si el mercado sube o baja. Eso es todo.
      </p>

      <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">¿Cuánto crecerá tu dinero?</p>
        <p className="mt-1 text-sm text-gray-700">
          Introduce tu aportación mensual, los años que planeas mantenerla y la
          rentabilidad esperada. Los números hablan solos.
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
        name: "¿Qué es el interés compuesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El interés compuesto es el que se calcula sobre el capital inicial más los intereses acumulados. Con el tiempo genera un crecimiento exponencial porque los intereses producen a su vez más intereses.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué los fondos indexados aprovechan bien el interés compuesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los fondos indexados de acumulación reinvierten automáticamente los dividendos, activando el efecto del interés compuesto sin que el inversor tenga que hacer nada. A largo plazo, esto multiplica significativamente el resultado frente a retirar los dividendos.",
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
