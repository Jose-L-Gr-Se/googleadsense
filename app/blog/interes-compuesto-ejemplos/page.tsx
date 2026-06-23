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
        Se dice que Albert Einstein llamó al interés compuesto la "octava maravilla
        del mundo" y afirmó que quien lo entiende lo gana, y quien no lo entiende lo
        paga. Tanto si inviertes como si tienes deudas, el interés compuesto trabaja
        continuamente a tu favor o en tu contra. Aquí te explicamos cómo funciona
        con ejemplos reales.
      </p>

      <h2>¿Qué es el interés compuesto?</h2>
      <p>
        El <strong>interés simple</strong> calcula los intereses siempre sobre el
        capital inicial. Si inviertes 1.000 € al 5% anual con interés simple,
        ganas 50 € cada año, independientemente del tiempo.
      </p>
      <p>
        El <strong>interés compuesto</strong> calcula los intereses sobre el capital
        inicial más los intereses acumulados. Es decir, los intereses generan a su
        vez más intereses. Con el tiempo, este efecto crea una curva de crecimiento
        exponencial.
      </p>

      <h2>Ejemplo 1: 1.000 euros durante 20 años</h2>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Año</th>
              <th className="px-4 py-3">Interés simple (5%)</th>
              <th className="px-4 py-3">Interés compuesto (5%)</th>
              <th className="px-4 py-3">Diferencia</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "1.050 €", "1.050 €", "0 €"],
              ["5", "1.250 €", "1.276 €", "26 €"],
              ["10", "1.500 €", "1.629 €", "129 €"],
              ["20", "2.000 €", "2.653 €", "653 €"],
              ["30", "2.500 €", "4.322 €", "1.822 €"],
            ].map(([year, simple, compound, diff]) => (
              <tr key={year as string} className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium">{year}</td>
                <td className="px-4 py-2">{simple}</td>
                <td className="px-4 py-2 font-semibold text-green-700">{compound}</td>
                <td className="px-4 py-2 text-brand-700">+{diff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Con solo 1.000 euros iniciales y sin aportar nada más, el interés compuesto
        genera 653 euros más que el interés simple en 20 años. Y en 30 años, la
        diferencia se dispara a más de 1.800 euros.
      </p>

      <h2>Ejemplo 2: El poder de las aportaciones periódicas</h2>
      <p>
        El interés compuesto se vuelve realmente potente cuando combinas capital
        inicial con aportaciones mensuales. Veamos qué pasa si aportas 200 € al mes
        durante 25 años con una rentabilidad anual del 6%:
      </p>
      <ul>
        <li><strong>Total aportado:</strong> 200 € × 12 meses × 25 años = <strong>60.000 €</strong></li>
        <li><strong>Valor final de la cartera:</strong> aproximadamente <strong>138.900 €</strong></li>
        <li><strong>Intereses generados:</strong> más de <strong>78.900 €</strong></li>
      </ul>
      <p>
        Has aportado 60.000 euros y has recibido casi 139.000. Los intereses
        compuestos han casi doblado tu dinero por encima de lo aportado.
      </p>
      <p>
        Compruébalo con nuestra{" "}
        <Link href="/calculadora-interes-compuesto" className="text-brand-600 underline">
          calculadora de interés compuesto
        </Link>
        , donde puedes simular con tu capital inicial, aportación mensual y el
        rendimiento que esperas.
      </p>

      <h2>Ejemplo 3: Empezar 10 años antes marca toda la diferencia</h2>
      <p>
        Este es el ejemplo que más impacta cuando se entiende bien. Compara dos
        personas que invierten 100 € al mes al 7% anual:
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3">Ana (empieza a los 25)</th>
              <th className="px-4 py-3">Luis (empieza a los 35)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Edad de inicio", "25 años", "35 años"],
              ["Edad de jubilación", "65 años", "65 años"],
              ["Años invirtiendo", "40 años", "30 años"],
              ["Total aportado", "48.000 €", "36.000 €"],
              ["Valor final", "~262.000 €", "~121.000 €"],
            ].map(([concepto, ana, luis]) => (
              <tr key={concepto as string} className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium text-gray-700">{concepto}</td>
                <td className="px-4 py-2 text-green-700 font-semibold">{ana}</td>
                <td className="px-4 py-2">{luis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Ana aporta 12.000 euros más que Luis, pero acaba con el doble de dinero.
        Los 10 años de ventaja le dan al interés compuesto tiempo suficiente para
        multiplicar exponencialmente su cartera.
      </p>

      <h2>¿Cómo funciona el interés compuesto en la práctica?</h2>
      <p>
        Los principales vehículos donde actúa el interés compuesto son:
      </p>
      <ul>
        <li>
          <strong>Fondos de inversión indexados:</strong> reinvierten los dividendos
          automáticamente. Son el vehículo más eficiente para el largo plazo.
        </li>
        <li>
          <strong>Planes de pensiones:</strong> también capitalizan los rendimientos,
          con ventaja fiscal adicional.
        </li>
        <li>
          <strong>Depósitos con capitalización:</strong> los intereses se suman al
          principal y generan más intereses en el siguiente período.
        </li>
        <li>
          <strong>Dividendos reinvertidos en acciones:</strong> si reinviertes los
          dividendos en lugar de cobrarlos, activas el interés compuesto.
        </li>
      </ul>

      <h2>El interés compuesto en tu contra: las deudas</h2>
      <p>
        El mismo mecanismo que hace crecer tus inversiones puede destruir tu
        economía si tienes deudas de consumo (tarjetas revolving, minicréditos).
        Una deuda de 3.000 euros en una tarjeta con un 24% TAE puede crecer hasta
        más de 7.000 euros en 5 años si solo pagas el mínimo.
      </p>
      <p>
        Por eso, la primera inversión siempre es <strong>cancelar las deudas
        caras</strong>. Ninguna inversión da de forma garantizada un 20-24% anual,
        pero tu tarjeta revolving sí te cobra ese interés.
      </p>

      <h2>Los tres factores que más influyen</h2>
      <ul>
        <li>
          <strong>El tiempo:</strong> es el factor más importante. Cuanto antes
          empieces, mayor será el efecto. No hay ningún sustituto del tiempo.
        </li>
        <li>
          <strong>La rentabilidad anual:</strong> un 1% más de rentabilidad a lo
          largo de 30 años puede suponer una diferencia enorme en el resultado final.
        </li>
        <li>
          <strong>La regularidad de las aportaciones:</strong> aportar todos los
          meses, aunque sea poco, es más poderoso que grandes aportaciones
          esporádicas.
        </li>
      </ul>

      <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">Simula el crecimiento de tus ahorros</p>
        <p className="mt-1 text-sm text-gray-700">
          Introduce tu capital inicial, aportación mensual y rentabilidad esperada
          para ver cómo crecerá tu dinero con el interés compuesto.
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
          text: "El interés compuesto es el interés que se calcula sobre el capital inicial más los intereses acumulados. Con el tiempo, genera un crecimiento exponencial porque los intereses producen a su vez más intereses.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre interés simple y compuesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El interés simple siempre se calcula sobre el capital inicial. El interés compuesto se calcula sobre el capital más los intereses acumulados. A largo plazo, el compuesto genera mucho más capital.",
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
