import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal — Calculadoras Claras",
  description:
    "Aviso legal, condiciones de uso y responsabilidad del sitio Calculadoras Claras.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false },
};

export default function Page() {
  return (
    <div className="prose-article mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Aviso legal</h1>
      <p className="text-sm text-gray-500">Última actualización: junio de 2026</p>

      <h2>1. Identificación del titular</h2>
      <p>
        El presente sitio web <strong>www.calculadorasclaras.es</strong> es titularidad
        de un particular con domicilio en España. Para cualquier comunicación puedes
        dirigirte a:{" "}
        <a href="mailto:hola@calculadorasclaras.es" className="text-brand-600 underline">
          hola@calculadorasclaras.es
        </a>
      </p>

      <h2>2. Objeto y actividad</h2>
      <p>
        Calculadoras Claras es un sitio web de carácter informativo y educativo que
        ofrece calculadoras financieras gratuitas (hipoteca, préstamos, IVA, IRPF,
        interés compuesto, nómina y finiquito) y artículos relacionados con finanzas
        personales.
      </p>
      <p>
        El sitio no presta servicios de asesoramiento financiero, fiscal ni legal. Los
        resultados de las calculadoras son estimaciones orientativas obtenidas a partir
        de los datos introducidos por el usuario y no constituyen en ningún caso
        asesoramiento profesional.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio web implica la aceptación de las presentes
        condiciones. El usuario se compromete a hacer un uso lícito del sitio, sin
        vulnerar derechos de terceros ni la legalidad vigente.
      </p>
      <p>
        Queda prohibido:
      </p>
      <ul>
        <li>Reproducir, distribuir o modificar los contenidos sin autorización expresa.</li>
        <li>Usar el sitio para actividades ilícitas o que puedan dañar la imagen del mismo.</li>
        <li>Intentar acceder a sistemas o áreas no autorizadas.</li>
      </ul>

      <h2>4. Exención de responsabilidad</h2>
      <p>
        <strong>Exactitud de los cálculos:</strong> Aunque hacemos todo lo posible para
        que las calculadoras sean correctas y estén actualizadas con la normativa
        vigente, no garantizamos la ausencia de errores. La legislación fiscal y laboral
        cambia con frecuencia y puede haber diferencias entre el resultado obtenido y la
        cantidad real según tu situación particular.
      </p>
      <p>
        <strong>Decisiones financieras:</strong> El titular no se responsabiliza de las
        decisiones tomadas por el usuario basándose en los resultados de las
        calculadoras. Antes de tomar cualquier decisión financiera, fiscal o laboral
        relevante, consulta con un asesor o profesional cualificado.
      </p>
      <p>
        <strong>Disponibilidad del servicio:</strong> No garantizamos la disponibilidad
        continua e ininterrumpida del sitio. Podemos suspenderlo temporalmente por
        mantenimiento sin previo aviso.
      </p>
      <p>
        <strong>Enlaces externos:</strong> El sitio puede contener enlaces a terceros.
        No controlamos el contenido de esos sitios y no asumimos responsabilidad alguna
        por ellos.
      </p>

      <h2>5. Propiedad intelectual</h2>
      <p>
        Todos los contenidos del sitio (textos, código, diseño, logotipos y elementos
        gráficos) son propiedad del titular o de terceros que han autorizado su uso.
        Están protegidos por la legislación española e internacional sobre propiedad
        intelectual.
      </p>
      <p>
        Se permite citar contenidos del sitio siempre que se indique la fuente y se
        incluya enlace al artículo original. La reproducción total o parcial con fines
        comerciales sin autorización expresa queda prohibida.
      </p>

      <h2>6. Legislación aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española, en particular por la Ley
        34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico
        (LSSI-CE) y la Ley Orgánica 3/2018 de Protección de Datos Personales.
        Cualquier controversia se someterá a los juzgados y tribunales competentes
        según la normativa aplicable.
      </p>

      <h2>7. Modificaciones</h2>
      <p>
        El titular se reserva el derecho de modificar este aviso legal en cualquier
        momento. Los cambios serán efectivos desde su publicación en esta página.
      </p>
    </div>
  );
}
