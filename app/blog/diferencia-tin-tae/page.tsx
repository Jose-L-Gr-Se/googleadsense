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
        Cuando estaba buscando hipoteca para mi primera vivienda, lo primero que me
        pasó es que todos los bancos me daban números distintos y no había manera de
        compararlos bien. Uno te ponía el TIN en grande, otro la TAE, otro te
        hablaba de diferencial más euríbor… una confusión bastante bien montada, la
        verdad.
      </p>
      <p>
        Después de mirar muchas ofertas entendí cuál era la clave: el TIN es el
        precio del dinero, pero la TAE es lo que pagas realmente. Si solo miras el
        TIN te pueden estar colando comisiones importantes por debajo.
      </p>

      <h2>Qué es el TIN</h2>
      <p>
        El <strong>TIN (Tipo de Interés Nominal)</strong> es el porcentaje de
        interés puro que el banco cobra sobre el capital. Sin más. No incluye
        comisiones, seguros vinculados ni ningún otro gasto.
      </p>
      <p>
        Es el número que los bancos ponen en grande en los anuncios porque siempre
        es el más bajo. Y es útil para calcular la cuota mensual, que es lo que
        hace nuestra{" "}
        <Link href="/calculadora-hipoteca" className="text-brand-600 underline">
          calculadora de hipoteca
        </Link>
        . Pero para comparar ofertas entre sí, solo con el TIN te quedas a medias.
      </p>

      <h2>Qué es la TAE y por qué es lo que importa</h2>
      <p>
        La <strong>TAE (Tasa Anual Equivalente)</strong> incluye el TIN más todos
        los gastos asociados al producto: comisiones de apertura, seguros
        obligatorios vinculados, gastos de estudio. Todo lo que te va a costar ese
        préstamo en realidad.
      </p>
      <p>
        Cuando yo estaba comparando bancos para la hipoteca, hubo un caso concreto
        que me abrió los ojos. Un banco me ofrecía un TIN del 2,9% y otro del 3,1%.
        El primero parecía mejor, claro. Pero cuando miré la TAE, el primero tenía
        una comisión de apertura del 1,5% y un seguro de vida vinculado bastante
        caro. La TAE resultaba ser más alta que la del segundo banco. O sea, el de
        TIN más bajo era el más caro en la práctica.
      </p>
      <p>
        Desde ese momento solo miraba la TAE para hacer la primera criba de ofertas.
      </p>

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
              ["¿Qué incluye?", "Solo el interés puro", "Interés + comisiones + seguros vinculados"],
              ["¿Para qué sirve?", "Calcular la cuota mensual", "Comparar productos distintos"],
              ["¿Cuál es mayor?", "Siempre igual o menor", "Siempre igual o mayor que el TIN"],
              ["¿Es obligatorio informarlo?", "Sí, por ley", "Sí, por ley"],
            ].map(([concepto, tin, tae]) => (
              <tr key={concepto as string} className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium text-gray-700">{concepto}</td>
                <td className="px-4 py-2">{tin}</td>
                <td className="px-4 py-2 font-semibold text-brand-700">{tae}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Un ejemplo concreto para que quede claro</h2>
      <p>
        Imagina que comparas dos préstamos personales de 15.000 euros a 4 años:
      </p>
      <ul>
        <li><strong>Banco A:</strong> TIN 5,5% — TAE 8,1% — Comisión apertura 2% + seguro obligatorio</li>
        <li><strong>Banco B:</strong> TIN 6,2% — TAE 6,4% — Sin comisiones</li>
      </ul>
      <p>
        El Banco A tiene TIN más bajo, pero su TAE es casi 2 puntos mayor. En un
        préstamo de 15.000 euros eso son cientos de euros de diferencia. Si solo
        hubieras mirado el TIN, habrías elegido el más caro.
      </p>

      <h2>Cuándo el TIN y la TAE son iguales</h2>
      <p>
        Si un banco ofrece un producto sin ninguna comisión ni gasto adicional, el
        TIN y la TAE coinciden. Esto pasa sobre todo en algunos depósitos o en
        préstamos muy sencillos. En hipotecas es bastante raro porque casi siempre
        hay algo vinculado.
      </p>

      <h2>TAE en hipotecas variables: el truco de la letra pequeña</h2>
      <p>
        En hipotecas variables, la TAE se calcula asumiendo que el euríbor se
        mantiene estable durante toda la vida del préstamo. Eso es una ficción
        contable, no una predicción. Dos hipotecas variables con la misma TAE
        calculada hoy pueden tener costes muy diferentes dependiendo de cómo
        evolucione el euríbor.
      </p>
      <p>
        Por eso en variables lo que realmente hay que comparar es el diferencial
        (el margen que cobra el banco por encima del euríbor) y las comisiones.
        La TAE sigue siendo útil como primer filtro, pero no es suficiente.
      </p>

      <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">Calcula tu cuota con el TIN que te ofrecen</p>
        <p className="mt-1 text-sm text-gray-700">
          Introduce el TIN, el importe y el plazo para ver la cuota mensual exacta
          y el total que pagarás.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/calculadora-hipoteca" className="inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
            Calcular hipoteca →
          </Link>
          <Link href="/calculadora-prestamo" className="inline-block rounded-lg border border-brand-600 px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50">
            Calcular préstamo →
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
          text: "Siempre es mejor una TAE baja. Un TIN bajo con comisiones altas puede resultar más caro que un TIN algo mayor sin comisiones. La TAE refleja el coste real total del producto.",
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
