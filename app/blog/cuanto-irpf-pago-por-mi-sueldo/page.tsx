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
        El año que me hicieron una revisión salarial me pasó algo que seguramente
        le pasa a mucha gente: me subieron el sueldo y en la nómina siguiente casi
        no se notó. Pensé que había algún error. No lo había. Lo que pasaba es que
        al subir de tramo en el IRPF, Hacienda se llevaba una parte mayor y el
        incremento neto era bastante más pequeño de lo que esperaba.
      </p>
      <p>
        Desde entonces tengo claro que antes de negociar o valorar una oferta de
        trabajo hay que saber qué te quedas realmente, no solo el bruto que pone
        en el contrato.
      </p>

      <h2>Cómo funciona el IRPF: tramos, no porcentaje fijo</h2>
      <p>
        El error más común es pensar que el IRPF aplica un porcentaje único a todo
        tu sueldo. No funciona así. Funciona por <strong>tramos</strong>: cada parte
        de tu salario tributa al tipo que le corresponde según la escala.
      </p>
      <p>
        Si ganas 40.000 euros, <strong>no pagas el 37% sobre 40.000 euros</strong>.
        Pagas el 19% sobre los primeros 12.450 €, el 24% sobre el siguiente tramo,
        el 30% sobre el siguiente, y el 37% solo sobre los últimos 4.800 €. El
        resultado es un tipo efectivo bastante más bajo que el marginal.
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Tramo</th>
              <th className="px-4 py-3">Tipo estatal 2026</th>
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

      <h2>Cuánto te quedas neto según tu sueldo — tabla 2026</h2>
      <p>
        Para que no tengas que hacer los cálculos a mano, aquí va una referencia
        rápida. Son estimaciones sin deducciones personales y sin cotizaciones
        a la Seguridad Social (que restan otro 6,35% adicional):
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Salario bruto</th>
              <th className="px-4 py-3">IRPF anual</th>
              <th className="px-4 py-3">Tipo efectivo</th>
              <th className="px-4 py-3">Neto por paga (14p)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["20.000 €", "2.775 €", "13,9%", "1.230 €"],
              ["25.000 €", "4.275 €", "17,1%", "1.480 €"],
              ["30.000 €", "5.775 €", "19,3%", "1.730 €"],
              ["40.000 €", "9.175 €", "22,9%", "2.202 €"],
              ["50.000 €", "12.775 €", "25,6%", "2.659 €"],
              ["60.000 €", "17.575 €", "29,3%", "3.030 €"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium">{row[0]}</td>
                <td className="px-4 py-2 text-red-600">{row[1]}</td>
                <td className="px-4 py-2">{row[2]}</td>
                <td className="px-4 py-2 font-semibold text-brand-700">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Para ver tu caso exacto con el desglose por tramos, usa la{" "}
        <Link href="/calculadora-irpf" className="text-brand-600 underline">
          calculadora de IRPF
        </Link>
        . Y si quieres el neto real incluyendo también las cotizaciones a la
        Seguridad Social, la{" "}
        <Link href="/calculadora-nomina" className="text-brand-600 underline">
          calculadora de nómina
        </Link>{" "}
        te da todos los descuentos juntos.
      </p>

      <h2>Por qué una subida de sueldo no se nota tanto como esperas</h2>
      <p>
        Esto es exactamente lo que me pasó a mí. Si estás ganando 28.000 euros y
        te suben a 32.000, no te llevas 4.000 euros más al año. Parte de ese
        incremento tributa al 30%, otra parte quizás sube al siguiente tramo.
        El neto real del aumento puede ser bastante menor de lo que parece en papel.
      </p>
      <p>
        No digo que no merezca la pena negociar subidas, obviamente que sí. Pero
        conviene saber de antemano qué impacto real tendrá en tu bolsillo para no
        llevarte sorpresas en la próxima nómina.
      </p>

      <h2>Qué puede reducir lo que pagas de IRPF</h2>
      <p>
        La tabla de arriba no incluye deducciones. Dependiendo de tu situación
        personal, puedes reducir bastante lo que pagas:
      </p>
      <ul>
        <li><strong>Hijos a cargo:</strong> hasta 2.400 € de deducción por el primero, más por los siguientes.</li>
        <li><strong>Aportaciones a planes de pensiones:</strong> reducen directamente la base imponible.</li>
        <li><strong>Hipoteca anterior a 2013:</strong> deducción del 15% de lo pagado ese año.</li>
        <li><strong>Discapacidad propia o de familiares a cargo.</strong></li>
      </ul>
      <p>
        Estas deducciones no las aplica automáticamente la empresa. Algunas hay que
        comunicarlas al departamento de RRHH o declararlas en la renta. Vale la
        pena revisarlas cada año.
      </p>

      <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">Calcula tu IRPF y neto real</p>
        <p className="mt-1 text-sm text-gray-700">
          Introduce tu salario bruto y ve el desglose completo: IRPF por tramos,
          tipo efectivo y lo que cobrarás cada mes.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/calculadora-irpf" className="inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
            Calcular IRPF →
          </Link>
          <Link href="/calculadora-nomina" className="inline-block rounded-lg border border-brand-600 px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50">
            Ver nómina completa →
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
        name: "¿Cuánto IRPF se paga por un sueldo de 30.000 euros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con 30.000 euros brutos, el IRPF estatal estimado es de unos 5.775 euros, con un tipo efectivo del 19,3%. El neto por paga con 14 pagas sería aproximadamente 1.730 euros, sin contar las cotizaciones a la Seguridad Social.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué una subida de sueldo no se nota tanto en la nómina?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Porque el IRPF es progresivo. El incremento salarial tributa a los tipos más altos de tu tramo, así que una parte importante de la subida se va en impuestos. El neto real del aumento siempre es menor que el bruto.",
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
