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
        Hace un tiempo mi empresa pasó por una época bastante mala económicamente.
        Recortes, rumores, EREs que no llegaban a confirmarse… el ambiente que
        todos conocemos. Una noche me puse en casa a calcular cuánto me tendrían
        que pagar si me echaban, después de 15 años trabajados allí. No porque
        quisiera irme, sino porque quería saber a qué atenerse. Y me sorprendió
        bastante lo que encontré, tanto para bien como para mal.
      </p>
      <p>
        Esto es lo que aprendí, por si alguien está en la misma situación.
      </p>

      <h2>Primero: finiquito e indemnización no son lo mismo</h2>
      <p>
        Este fue mi primer error de concepto. Cuando la gente dice "me van a pagar
        el finiquito" muchas veces está mezclando dos cosas distintas:
      </p>
      <ul>
        <li>
          <strong>El finiquito</strong> es lo que te deben sí o sí al terminar la
          relación laboral, independientemente del motivo: los días trabajados del
          último mes, las vacaciones que no hayas disfrutado y la parte proporcional
          de las pagas extra. Esto te lo pagan tanto si te echan como si te vas tú.
        </li>
        <li>
          <strong>La indemnización</strong> es lo que te pagan por el hecho de
          echarte. Solo existe en despidos, no en bajas voluntarias. Y el importe
          depende del tipo de despido y de los años que llevas en la empresa.
        </li>
      </ul>
      <p>
        Con 15 años trabajados, la diferencia entre un despido procedente, uno
        improcedente y un ERE es enorme. Vamos por partes.
      </p>

      <h2>Cómo se calcula la indemnización según el tipo de despido</h2>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Tipo de despido</th>
              <th className="px-4 py-3">Indemnización</th>
              <th className="px-4 py-3">Ejemplo (15 años, 2.000€/mes)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Despido objetivo (causas económicas, técnicas…)", "20 días/año trabajado", "~12.000 €"],
              ["Despido improcedente", "33 días/año trabajado", "~19.800 €"],
              ["Despido nulo", "Readmisión obligatoria + salarios de tramitación", "—"],
              ["Baja voluntaria", "Sin indemnización", "0 €"],
            ].map(([tipo, calculo, ejemplo]) => (
              <tr key={tipo as string} className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium text-gray-800">{tipo}</td>
                <td className="px-4 py-2 text-gray-600">{calculo}</td>
                <td className="px-4 py-2 font-semibold text-brand-700">{ejemplo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        En mi caso, con 15 años y un salario de algo más de 2.000 euros brutos,
        la diferencia entre que me echaran por causas económicas o que lo declararan
        improcedente era de varios miles de euros. Eso es lo que vale la pena saber
        antes de firmar nada.
      </p>

      <h2>Qué pasa cuando la empresa tiene problemas económicos</h2>
      <p>
        Cuando una empresa atraviesa dificultades económicas puede hacer varias cosas.
        La más habitual que afecta a los trabajadores son los despidos por causas
        objetivas (artículo 52 del Estatuto de los Trabajadores) o un ERE
        (Expediente de Regulación de Empleo).
      </p>
      <p>
        En ambos casos la indemnización es de <strong>20 días por año trabajado</strong>,
        con un máximo de 12 mensualidades. Menos que un despido improcedente, pero
        con la diferencia de que es el propio empresario quien lo comunica
        formalmente, no te pueden dejar simplemente sin empleo.
      </p>
      <p>
        Lo que mucha gente no sabe es que si la empresa alega causas económicas pero
        tú impugnas el despido y el juez lo declara improcedente, la indemnización
        sube a <strong>33 días por año</strong>. Por eso, antes de firmar la carta de
        despido, siempre vale la pena consultar con un abogado laboralista. Una
        consulta de una hora puede valer miles de euros.
      </p>

      <h2>El finiquito: qué incluye y cómo calcularlo</h2>
      <p>
        Independientemente de todo lo anterior, el finiquito siempre incluye tres
        conceptos. Voy con un ejemplo concreto para que se entienda bien:
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Concepto</th>
              <th className="px-4 py-3">Cálculo (salario 2.000 €/mes)</th>
              <th className="px-4 py-3">Importe</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Días trabajados sin cobrar", "2.000 € / 30 × 20 días", "1.333 €"],
              ["Vacaciones no disfrutadas", "2.000 € / 30 × 12 días", "800 €"],
              ["Parte proporcional pagas extra", "(2.000 × 2) / 12 × 7 meses", "2.333 €"],
              ["TOTAL FINIQUITO (bruto)", "", "4.466 €"],
            ].map(([concepto, calculo, importe]) => (
              <tr key={concepto as string} className="border-t border-gray-100">
                <td className="px-4 py-2 font-medium">{concepto}</td>
                <td className="px-4 py-2 text-gray-500 text-xs">{calculo}</td>
                <td className="px-4 py-2 font-semibold text-brand-700">{importe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Usa la{" "}
        <Link href="/calculadora-finiquito" className="text-brand-600 underline">
          calculadora de finiquito
        </Link>{" "}
        para obtener el importe exacto con tus datos. El resultado es en bruto,
        y luego se aplica la retención de IRPF.
      </p>

      <h2>Lo más importante: no firmes sin leerlo</h2>
      <p>
        Cuando me puse a revisar todo esto con calma entendí algo que antes no tenía
        tan claro: firmar el finiquito como "conforme" significa que aceptas que
        el importe es correcto y renuncias a reclamar más. Si hay alguna duda o
        discrepancia, se puede firmar como <strong>"no conforme"</strong>, cobrar
        el dinero igualmente, y reclamar la diferencia después.
      </p>
      <p>
        Mucha gente firma conforme por las prisas o porque no quiere problemas, y
        luego ya no puede reclamar nada. Diez minutos revisando los números antes
        pueden hacer una diferencia real.
      </p>

      <h2>Si te vas tú: baja voluntaria</h2>
      <p>
        Si eres tú quien decide irse, cobras el finiquito exactamente igual que en
        los casos anteriores: días trabajados, vacaciones y pagas extra. Lo que no
        cobras es la indemnización, y tampoco tienes derecho al paro.
      </p>
      <p>
        Además tienes que avisar con antelación. Lo que dice el convenio colectivo
        de tu sector, o 15 días si no pone nada. Si no avisas, la empresa puede
        descontarte esos días del finiquito.
      </p>

      <div className="my-6 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">Calcula tu finiquito antes de firmar nada</p>
        <p className="mt-1 text-sm text-gray-700">
          Introduce tu salario, los días trabajados y las vacaciones pendientes
          para saber exactamente cuánto te tienen que pagar.
        </p>
        <Link
          href="/calculadora-finiquito"
          className="mt-3 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Calcular mi finiquito →
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
        name: "¿Cuánto me corresponde si me despiden después de 15 años?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del tipo de despido. Por causas económicas: 20 días por año trabajado (unos 12.000€ con salario de 2.000€/mes). Si el despido es improcedente: 33 días por año (unos 19.800€). A esto se suma siempre el finiquito: días trabajados, vacaciones y pagas extra.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo cobrar el finiquito y luego reclamar si no estoy de acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Firmando el finiquito como 'no conforme' puedes cobrar el dinero y reclamar la diferencia posteriormente. Firmar 'conforme' implica aceptar el importe y dificulta cualquier reclamación posterior.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué diferencia hay entre finiquito e indemnización?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El finiquito incluye los conceptos pendientes al terminar la relación laboral (días trabajados, vacaciones, pagas extra) y corresponde siempre, sea cual sea el motivo. La indemnización es la compensación por el despido y solo existe en ciertos tipos de despido, no en baja voluntaria.",
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
