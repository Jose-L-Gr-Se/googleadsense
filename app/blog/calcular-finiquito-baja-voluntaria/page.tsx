import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { articles } from "@/lib/articles";

const meta = articles.find((a) => a.slug === "calcular-finiquito-baja-voluntaria")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/blog/${meta.slug}` },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p>
        Si has decidido dejar tu trabajo voluntariamente, tienes derecho a cobrar un
        finiquito. Mucha gente cree que en la baja voluntaria no se cobra nada, pero
        eso es falso. Lo que no cobras es la indemnización por despido, pero el
        finiquito siempre te corresponde.
      </p>

      <h2>¿Qué cobra un trabajador que se va por baja voluntaria?</h2>
      <p>
        Al ir por baja voluntaria, el finiquito incluye exactamente los mismos
        conceptos que en cualquier otra salida:
      </p>
      <ul>
        <li>
          <strong>Salario de los días trabajados</strong> del último mes que no hayas cobrado.
        </li>
        <li>
          <strong>Vacaciones generadas y no disfrutadas.</strong> Si llevas 6 meses
          en el año y tienes 22 días de vacaciones anuales, te corresponden 11 días.
        </li>
        <li>
          <strong>Parte proporcional de las pagas extra,</strong> si no están
          prorrateadas en la nómina mensual.
        </li>
      </ul>
      <p>
        Lo que <strong>no</strong> cobras en la baja voluntaria es la{" "}
        <strong>indemnización por despido</strong>. Eso solo corresponde en despidos
        objetivos, EREs o despidos improcedentes.
      </p>

      <h2>Cómo calcular el finiquito por baja voluntaria paso a paso</h2>

      <p>
        Vamos con un ejemplo real. Imagina que ganas 1.800 €/mes brutos, trabajaste
        19 días del último mes, tienes 8 días de vacaciones sin disfrutar y llevas
        generados 5 meses de paga extra (dos pagas al año no prorrateadas).
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Concepto</th>
              <th className="px-4 py-3">Cálculo</th>
              <th className="px-4 py-3">Importe</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Salario días trabajados", "1.800 € / 30 días × 19 días", "1.140,00 €"],
              ["Vacaciones no disfrutadas", "1.800 € / 30 días × 8 días", "480,00 €"],
              ["Pagas extra (5 meses)", "(1.800 € × 2 pagas / 12) × 5 meses", "1.500,00 €"],
              ["TOTAL FINIQUITO (bruto)", "", "3.120,00 €"],
            ].map(([concepto, calculo, importe]) => (
              <tr key={concepto as string} className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium">{concepto}</td>
                <td className="px-4 py-2 text-gray-500">{calculo}</td>
                <td className="px-4 py-2 font-semibold text-brand-700">{importe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Recuerda que este importe es en <strong>bruto</strong>. La empresa aplicará
        la retención de IRPF correspondiente a tu tramo, así que el neto que
        recibirás será algo menor.
      </p>

      <p>
        Usa nuestra{" "}
        <Link href="/calculadora-finiquito" className="text-brand-600 underline">
          calculadora de finiquito
        </Link>{" "}
        para obtener el importe exacto con tus datos.
      </p>

      <h2>Preaviso en la baja voluntaria: ¿cuántos días?</h2>
      <p>
        La baja voluntaria requiere que avises a la empresa con antelación. El plazo
        lo marca el convenio colectivo, pero si no dice nada, el Estatuto de los
        Trabajadores establece{" "}
        <strong>15 días de preaviso</strong> como referencia habitual.
      </p>
      <p>
        Si te vas sin respetar el preaviso, la empresa puede <strong>descontarte
        del finiquito</strong> los días de preaviso no cumplidos. Es decir, si
        debías avisar 15 días antes y solo avisas 5, pueden descontarte 10 días de
        salario.
      </p>

      <h2>¿Qué pasa con el paro en la baja voluntaria?</h2>
      <p>
        Esta es la gran diferencia con un despido: si te vas por baja voluntaria,{" "}
        <strong>no tienes derecho a cobrar el paro</strong> (prestación por
        desempleo). Solo se cobra el paro cuando la empresa rescinde el contrato,
        no cuando lo rescinde el trabajador.
      </p>
      <p>
        Excepciones: hay situaciones en las que abandonar el trabajo puede dar
        derecho a paro (acoso laboral, incumplimiento grave del empresario…), pero
        requieren resolución judicial o reconocimiento expreso.
      </p>

      <h2>Consejos antes de firmar el finiquito</h2>
      <ul>
        <li>
          <strong>Revisa el desglose.</strong> La empresa debe entregarte el finiquito
          por escrito con cada concepto desglosado.
        </li>
        <li>
          <strong>Compara con tu cálculo.</strong> Usa la calculadora antes de ir a
          firmar para saber si el importe es correcto.
        </li>
        <li>
          <strong>Firma "no conforme" si hay discrepancias.</strong> Puedes cobrar
          el finiquito y luego reclamar la diferencia. Firmarlo como "conforme"
          puede dificultar la reclamación posterior.
        </li>
        <li>
          <strong>Guarda una copia firmada</strong> por ambas partes.
        </li>
      </ul>

      <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">Calcula tu finiquito ahora</p>
        <p className="mt-1 text-sm text-gray-700">
          Introduce tu salario, días trabajados y vacaciones pendientes para obtener
          el importe exacto de tu finiquito.
        </p>
        <Link
          href="/calculadora-finiquito"
          className="mt-3 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Calcular finiquito →
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
        name: "¿Se cobra finiquito en la baja voluntaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En la baja voluntaria siempre se cobra el finiquito: días trabajados pendientes, vacaciones no disfrutadas y la parte proporcional de las pagas extra. Lo que no se cobra es la indemnización por despido.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede cobrar el paro tras una baja voluntaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. La prestación por desempleo solo se cobra cuando es la empresa quien rescinde el contrato. Si el trabajador se va por baja voluntaria, no tiene derecho a paro salvo situaciones excepcionales reconocidas judicialmente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos días de preaviso hay que dar en la baja voluntaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del convenio colectivo. Si el convenio no establece nada, la referencia habitual son 15 días. No respetar el preaviso puede suponer un descuento en el finiquito.",
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
