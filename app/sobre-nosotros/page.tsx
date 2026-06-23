import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre nosotros — Calculadoras Claras",
  description:
    "Quiénes somos y por qué creamos Calculadoras Claras: herramientas financieras gratuitas y claras para todos.",
  alternates: { canonical: "/sobre-nosotros" },
};

export default function Page() {
  return (
    <div className="prose-article mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Sobre nosotros</h1>

      <p>
        Calculadoras Claras nace de una frustración muy concreta: las calculadoras
        financieras que encuentras en la mayoría de sitios dan un número y punto. Sin
        explicar de dónde sale, sin desglose, sin contexto. Y la mayoría están hechas
        para que acabes contratando algo, no para que entiendas lo que estás mirando.
      </p>

      <p>
        Yo he pasado por ese proceso. Calculando cuánto me costaría una hipoteca y no
        entendiendo bien la diferencia entre el TIN y la TAE. Mirando ofertas de
        préstamos con tipos que no podía comparar bien. Revisando mi nómina sin tener
        claro cuánto me estaba descontando Hacienda y cuánto era Seguridad Social.
        Preguntándome cuánto me quedaría si algún día la empresa me echaba.
      </p>

      <p>
        Esas dudas tan concretas son las que intentamos resolver aquí, con calculadoras
        que muestran el desglose completo y artículos que explican las cosas como las
        explicaría alguien que ya las ha entendido, no como las explica un banco o una
        gestoría.
      </p>

      <h2>Qué ofrecemos</h2>
      <ul>
        <li>
          <strong>Calculadoras financieras gratuitas</strong> — hipoteca, préstamos,
          IVA, IRPF 2026, nómina bruto/neto, interés compuesto y finiquito. Sin
          registro, sin trampa.
        </li>
        <li>
          <strong>Resultados con desglose</strong> — no solo el número final, también
          cómo se llega a él.
        </li>
        <li>
          <strong>Artículos en lenguaje normal</strong> — escritos desde la experiencia
          de haberlo mirado y entendido, no desde la teoría.
        </li>
        <li>
          <strong>Actualización constante</strong> — los tramos de IRPF, las
          cotizaciones a la Seguridad Social y otras cifras cambian. Intentamos tenerlo
          siempre al día.
        </li>
      </ul>

      <h2>Privacidad por diseño</h2>
      <p>
        Todo lo que introduces en las calculadoras se queda en tu navegador. No enviamos
        tus datos a ningún servidor. No necesitamos saber tu salario ni el importe de tu
        hipoteca para darte el resultado.
      </p>

      <h2>Contacto</h2>
      <p>
        Si encuentras algún error en los cálculos, si tienes alguna sugerencia o si
        simplemente quieres decir algo, escríbenos a{" "}
        <a href="mailto:hola@calculadorasclaras.es" className="text-brand-600 underline">
          hola@calculadorasclaras.es
        </a>
        . Leemos todos los mensajes.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-5 border border-brand-100">
        <p className="font-semibold text-brand-700">Empieza a calcular</p>
        <p className="mt-1 text-sm text-gray-700">
          Todas nuestras calculadoras son gratuitas y funcionan al instante, sin
          registro.
        </p>
        <Link
          href="/"
          className="mt-3 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Ver todas las calculadoras →
        </Link>
      </div>
    </div>
  );
}
