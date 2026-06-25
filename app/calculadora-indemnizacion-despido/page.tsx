import type { Metadata } from "next";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import IndemnizacionDespido from "@/components/calculators/IndemnizacionDespido";

export const metadata: Metadata = {
  title: "Calculadora de indemnización por despido 2026",
  description:
    "Calcula la indemnización por despido improcedente, objetivo o colectivo según la normativa española. Resultado inmediato con el desglose completo.",
  alternates: { canonical: "/calculadora-indemnizacion-despido" },
};

export default function Page() {
  return (
    <CalculatorShell
      slug="indemnizacion-despido"
      title="Calculadora de indemnización por despido 2026"
      intro="Calcula cuánto te corresponde cobrar si te despiden, según el tipo de despido y el tiempo trabajado en la empresa."
      calculator={<IndemnizacionDespido />}
      article={<Article />}
    />
  );
}

function Article() {
  return (
    <>
      <h2>Cómo se calcula la indemnización por despido</h2>
      <p>
        La indemnización por despido depende de tres factores: el tipo de despido, el tiempo
        que llevas en la empresa y tu salario bruto anual. La fórmula básica es:
      </p>
      <p>
        <strong>Indemnización = salario diario × días por año × años trabajados</strong>
      </p>
      <p>
        El salario diario se calcula dividiendo el salario bruto anual (incluidas pagas extras)
        entre 365. No entre 12 meses.
      </p>

      <h2>Tipos de despido y su indemnización</h2>
      <h3>Despido improcedente: 33 días/año</h3>
      <p>
        Es el más habitual y el que más cobra. Ocurre cuando el empleador no justifica el
        despido o lo hace con defectos formales. Desde la reforma laboral de 2012, la
        indemnización es de <strong>33 días por año trabajado</strong>, con un máximo de
        24 mensualidades.
      </p>
      <p>
        Atención: si tu contrato es anterior al 12 de febrero de 2012, los años trabajados
        antes de esa fecha se calculan a 45 días/año (con tope de 42 mensualidades para ese
        período). La calculadora aplica el régimen general post-2012 para simplificar.
      </p>

      <h3>Despido objetivo y ERE: 20 días/año</h3>
      <p>
        Los despidos por causas económicas, técnicas, organizativas o productivas se
        indemnizan con 20 días por año trabajado, máximo 12 mensualidades. Para que sea
        válido, la empresa debe justificar la causa con documentación.
      </p>

      <h2>¿Cuándo tienen que pagar la indemnización?</h2>
      <p>
        En el despido improcedente, la empresa tiene 48 horas tras la notificación para
        ofrecerte readmisión o pagar la indemnización. Si no lo hacen en ese plazo, pueden
        acumularse salarios de tramitación (los días que pasan hasta que cobras).
      </p>

      <h2>¿La indemnización está exenta de IRPF?</h2>
      <p>
        Sí, la parte de la indemnización que no supere los límites legales está exenta de
        IRPF (artículo 7.e LIRPF). Lo que cobres por encima del límite legal, si la empresa
        decide pagarte más, tributa como renta del trabajo. Consúltalo con un gestor antes
        de firmar el finiquito.
      </p>

      <h2>Diferencia entre indemnización y finiquito</h2>
      <p>
        Son dos conceptos distintos que aparecen juntos pero no son lo mismo:
      </p>
      <ul>
        <li>
          <strong>Indemnización:</strong> es la compensación por el despido. Solo existe si
          hay despido (no en baja voluntaria). Se calcula según los años trabajados.
        </li>
        <li>
          <strong>Finiquito:</strong> son las deudas pendientes de la empresa contigo —
          días trabajados no pagados, vacaciones no disfrutadas, parte proporcional de pagas
          extras. Se cobra siempre al terminar la relación laboral, sea por despido o por
          baja voluntaria.
        </li>
      </ul>
      <p>
        Puedes calcular el finiquito por separado con nuestra{" "}
        <Link href="/calculadora-finiquito" className="text-brand-600 underline">
          calculadora de finiquito
        </Link>
        .
      </p>

      <h2>Consejos antes de firmar el finiquito</h2>
      <ul>
        <li>Lee todo antes de firmar. Una vez firmado es difícil reclamar.</li>
        <li>
          Si pone "en conformidad con el finiquito y la indemnización", significa que renuncias
          a reclamar más. Puedes escribir "no conforme" y firmar igualmente para cobrar sin
          renunciar a tus derechos.
        </li>
        <li>Tienes derecho a que un representante sindical esté presente al firmar.</li>
        <li>
          Si el despido es improcedente y no te pagan en 48 horas, acude al SMAC (Servicio de
          Mediación, Arbitraje y Conciliación) antes de ir a juicio.
        </li>
      </ul>

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
        name: "¿Cuánto cobra de indemnización por despido improcedente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "33 días de salario por cada año trabajado, con un máximo de 24 mensualidades. El salario diario se calcula dividiendo el salario bruto anual entre 365.",
        },
      },
      {
        "@type": "Question",
        name: "¿La indemnización por despido paga IRPF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. La parte que no supera los límites legales está exenta de IRPF según el artículo 7.e de la LIRPF. Solo tributa si la empresa paga por encima del mínimo legal obligatorio.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre indemnización y finiquito?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La indemnización es la compensación por el despido (solo existe si hay despido). El finiquito son las cantidades pendientes de pago: días trabajados, vacaciones no disfrutadas y parte proporcional de pagas extras. Se cobran siempre al terminar, aunque sea baja voluntaria.",
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
