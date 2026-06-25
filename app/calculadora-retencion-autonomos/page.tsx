import type { Metadata } from "next";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import RetencionAutonomos from "@/components/calculators/RetencionAutonomos";

export const metadata: Metadata = {
  title: "Calculadora de IRPF autónomos: pago fraccionado modelo 130",
  description:
    "Calcula el pago fraccionado trimestral de IRPF para autónomos (modelo 130) y estima tu factura fiscal anual. Actualizado 2026.",
  alternates: { canonical: "/calculadora-retencion-autonomos" },
};

export default function Page() {
  return (
    <CalculatorShell
      slug="retencion-autonomos"
      title="Calculadora de IRPF autónomos: modelo 130"
      intro="Calcula cuánto tienes que pagar cada trimestre en el modelo 130 (pago fraccionado de IRPF) y estima tu factura fiscal anual como autónomo."
      calculator={<RetencionAutonomos />}
      article={<Article />}
    />
  );
}

function Article() {
  return (
    <>
      <h2>¿Qué es el modelo 130?</h2>
      <p>
        El modelo 130 es el pago fraccionado del IRPF para autónomos en estimación directa.
        Es, básicamente, un adelanto trimestral del IRPF que pagarás en la declaración de
        la renta anual. Se presenta en abril, julio, octubre y enero.
      </p>
      <p>
        La lógica es sencilla: Hacienda no quiere esperar a junio del año siguiente para
        cobrar el impuesto de todo el año. Con el 130 cobra por adelantado cada trimestre,
        y luego en la renta ajustas la diferencia.
      </p>

      <h2>¿Cómo se calcula?</h2>
      <p>
        En estimación directa simplificada, el cálculo es:
      </p>
      <p>
        <strong>Pago = 20% × (ingresos acumulados − gastos acumulados) − retenciones recibidas − pagos previos</strong>
      </p>
      <p>
        El porcentaje del 20% se aplica sobre el rendimiento neto acumulado desde enero
        hasta el final del trimestre que estás liquidando. Si el resultado es negativo
        o cero, no pagas nada.
      </p>

      <h2>¿Quién tiene obligación de presentarlo?</h2>
      <p>
        La mayoría de autónomos en estimación directa (simplificada o normal). Hay una
        excepción importante: si durante el año anterior más del 70% de tus ingresos
        procedieron de clientes que ya te retuvieron el IRPF en la factura (el 15% habitual),
        puedes quedar exento de presentar el 130.
      </p>
      <p>
        Esto ocurre frecuentemente con autónomos que trabajan solo para empresas y emiten
        facturas con retención. Si facturas también a particulares, normalmente sí tienes
        que presentar el 130.
      </p>

      <h2>¿Qué gastos puedo deducir?</h2>
      <p>
        Los gastos necesarios para la actividad que estén justificados con factura:
      </p>
      <ul>
        <li>Cuota de autónomos a la Seguridad Social</li>
        <li>Alquiler del local o parte proporcional del uso del domicilio</li>
        <li>Suministros (luz, internet) si tienes local o porcentaje si es el domicilio</li>
        <li>Material, herramientas, equipos informáticos</li>
        <li>Gestoría, asesoría, seguros profesionales</li>
        <li>Formación relacionada con la actividad</li>
        <li>Vehículo (solo en actividades en que sea necesario y esté afecto al 100%)</li>
      </ul>
      <p>
        La cuota de autónomos es uno de los gastos más relevantes. Puedes calcularla con
        nuestra{" "}
        <Link href="/calculadora-autonomos" className="text-brand-600 underline">
          calculadora de cuota de autónomos
        </Link>
        .
      </p>

      <h2>¿Y la declaración de la renta anual?</h2>
      <p>
        En junio presentas la renta como siempre. Los pagos del 130 que hayas hecho a lo
        largo del año se descuentan de lo que debes. Si pagaste de más (por ejemplo porque
        tuviste menos ingresos de los previstos), Hacienda te devuelve la diferencia.
        Si pagaste de menos, tendrás que pagar el resto.
      </p>
      <p>
        Para estimar el tipo medio de IRPF que te corresponde según tus rendimientos, puedes
        usar la{" "}
        <Link href="/calculadora-irpf" className="text-brand-600 underline">
          calculadora de IRPF
        </Link>
        .
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
        name: "¿Cuánto se paga en el modelo 130?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El 20% del rendimiento neto acumulado desde enero (ingresos menos gastos), menos las retenciones que ya te han practicado en factura y los pagos de trimestres anteriores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo se presenta el modelo 130?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuatro veces al año: 1T en abril (1-20), 2T en julio (1-20), 3T en octubre (1-20) y 4T en enero del año siguiente (1-30).",
        },
      },
      {
        "@type": "Question",
        name: "¿Un autónomo que solo trabaja para empresas tiene que presentar el modelo 130?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Posiblemente no. Si el año anterior más del 70% de tus ingresos tuvieron retención de IRPF en factura, estás exento de presentar el 130. Consulta tu caso concreto con un gestor.",
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
