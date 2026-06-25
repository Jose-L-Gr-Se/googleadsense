import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import PlusvaliaMinicipal from "@/components/calculators/PlusvaliaMinicipal";

export const metadata: Metadata = {
  title: "Calculadora de plusvalía municipal 2026 (IIVTNU)",
  description:
    "Calcula la plusvalía municipal al vender o heredar un inmueble. Método objetivo y método real. Resultado inmediato según la normativa vigente.",
  alternates: { canonical: "/calculadora-plusvalia-municipal" },
};

export default function Page() {
  return (
    <CalculatorShell
      slug="plusvalia-municipal"
      title="Calculadora de plusvalía municipal 2026"
      intro="Calcula el Impuesto sobre el Incremento del Valor de los Terrenos (plusvalía municipal) que pagarás al vender o heredar un inmueble."
      calculator={<PlusvaliaMinicipal />}
      article={<Article />}
    />
  );
}

function Article() {
  return (
    <>
      <h2>¿Qué es la plusvalía municipal?</h2>
      <p>
        La plusvalía municipal es el nombre popular del Impuesto sobre el Incremento del
        Valor de los Terrenos de Naturaleza Urbana (IIVTNU). Es un impuesto local que grava
        el aumento de valor del suelo desde que se compró hasta que se vende o transmite.
      </p>
      <p>
        Lo paga habitualmente el vendedor en una compraventa, y el heredero o legatario en
        una herencia o donación. Cada ayuntamiento lo gestiona y puede establecer su propio
        tipo impositivo, con un máximo del 30%.
      </p>

      <h2>Cómo se calcula desde 2021: dos métodos</h2>
      <p>
        Tras la sentencia del Tribunal Constitucional de octubre de 2021 que anuló el
        método anterior, el Real Decreto-ley 26/2021 reformó el impuesto y estableció dos
        formas de calcularlo. El contribuyente puede elegir el que le resulte más favorable:
      </p>

      <h3>Método objetivo (coeficiente sobre valor catastral)</h3>
      <p>
        Se multiplica el valor catastral del suelo por un coeficiente que depende de los
        años de tenencia del inmueble (de 1 a 20 años). Después se aplica el tipo
        impositivo del ayuntamiento. Los coeficientes máximos los fija el Estado cada año.
      </p>

      <h3>Método real (plusvalía efectiva del suelo)</h3>
      <p>
        Se calcula la ganancia real obtenida (precio de venta menos precio de compra),
        se multiplica por el porcentaje que representa el suelo sobre el valor catastral total,
        y al resultado se le aplica el tipo del ayuntamiento.
      </p>
      <p>
        Si vendiste con pérdidas, no hay impuesto que pagar.
      </p>

      <h2>¿Dónde encuentro el valor catastral?</h2>
      <p>
        En el recibo del IBI (Impuesto sobre Bienes Inmuebles) que recibes cada año. Aparece
        desglosado en "valor catastral del suelo" y "valor catastral de la construcción". Si
        no lo tienes a mano, puedes consultarlo en la web del Catastro (catastro.meh.es) con
        tu referencia catastral.
      </p>

      <h2>¿Cuándo hay que pagarlo?</h2>
      <ul>
        <li><strong>Compraventa:</strong> 30 días hábiles desde la firma de la escritura.</li>
        <li><strong>Herencia o donación:</strong> 6 meses desde el fallecimiento (prorrogable otros 6).</li>
      </ul>
      <p>
        Se presenta ante el ayuntamiento donde esté ubicado el inmueble, no donde vivas tú.
      </p>

      <h2>¿Quién paga la plusvalía en una compraventa?</h2>
      <p>
        Por ley, la paga el vendedor. Sin embargo, es posible pactar que la pague el
        comprador, aunque esto debe quedar reflejado en la escritura. Lo habitual es que
        la asuma el vendedor.
      </p>
      <p>
        Atención: la plusvalía municipal es independiente del IRPF que pagas en la declaración
        de la renta por la ganancia patrimonial. Son dos impuestos distintos sobre la misma
        venta.
      </p>

      <FaqJsonLd />
    </>
  );
}

function FaqJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Quién paga la plusvalía municipal al vender un piso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Por ley la paga el vendedor. Puede pactarse con el comprador que la asuma él, pero lo habitual en España es que sea el vendedor.",
        },
      },
      {
        "@type": "Question",
        name: "¿Si vendo con pérdidas tengo que pagar plusvalía?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Desde la reforma de 2021, si vendes por menos de lo que compraste (pérdida real), no hay plusvalía que pagar. Debes acreditarlo con las escrituras de compra y venta.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo hay que pagar la plusvalía municipal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En una compraventa, en los 30 días hábiles siguientes a la firma de la escritura. En herencias, en los 6 meses desde el fallecimiento (prorrogable otros 6 meses).",
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
