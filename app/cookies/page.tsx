import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de cookies — Calculadoras Claras",
  description:
    "Información sobre las cookies que utiliza Calculadoras Claras, para qué sirven y cómo gestionarlas.",
  alternates: { canonical: "/cookies" },
  robots: { index: false },
};

export default function Page() {
  return (
    <div className="prose-article mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Política de cookies</h1>
      <p className="text-sm text-gray-500">Última actualización: junio de 2026</p>

      <p>
        Esta política explica qué son las cookies, cuáles usamos en{" "}
        <strong>Calculadoras Claras</strong> y cómo puedes gestionarlas.
      </p>

      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan en tu
        navegador cuando los visitas. Sirven para recordar información sobre tu visita
        (por ejemplo, el idioma preferido o si has aceptado el aviso de cookies) y para
        recopilar estadísticas de uso.
      </p>

      <h2>Cookies que utilizamos</h2>

      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Cookie</th>
              <th className="px-4 py-3">Proveedor</th>
              <th className="px-4 py-3">Finalidad</th>
              <th className="px-4 py-3">Duración</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["_ga", "Google Analytics", "Distingue usuarios únicos para estadísticas de tráfico anónimas.", "2 años"],
              ["_ga_*", "Google Analytics", "Almacena el estado de la sesión de Google Analytics 4.", "2 años"],
              ["_gid", "Google Analytics", "Distingue usuarios en sesiones de 24h.", "24 horas"],
              ["IDE", "Google DoubleClick (AdSense)", "Publicidad personalizada basada en intereses.", "1 año"],
              ["test_cookie", "Google DoubleClick (AdSense)", "Comprueba que el navegador acepta cookies.", "Sesión"],
              ["CONSENT", "Google", "Almacena el estado del consentimiento del usuario.", "2 años"],
            ].map(([cookie, proveedor, finalidad, duracion]) => (
              <tr key={cookie as string} className="border-t border-gray-100">
                <td className="px-4 py-2 font-mono text-xs font-semibold">{cookie}</td>
                <td className="px-4 py-2 text-xs">{proveedor}</td>
                <td className="px-4 py-2 text-xs">{finalidad}</td>
                <td className="px-4 py-2 text-xs whitespace-nowrap">{duracion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Tipos de cookies según su finalidad</h2>

      <h3>Cookies técnicas (necesarias)</h3>
      <p>
        Son imprescindibles para el funcionamiento del sitio. Sin ellas, el sitio no
        puede funcionar correctamente. No requieren consentimiento.
      </p>

      <h3>Cookies de analítica</h3>
      <p>
        Usamos <strong>Google Analytics 4</strong> para obtener estadísticas anónimas
        sobre el uso del sitio: páginas más visitadas, tiempo medio de sesión, origen
        del tráfico, etc. Esta información nos ayuda a mejorar el contenido y la
        experiencia. La dirección IP se anonimiza antes de su procesamiento.
      </p>

      <h3>Cookies de publicidad</h3>
      <p>
        Utilizamos <strong>Google AdSense</strong> para mostrar anuncios. Google y sus
        socios pueden usar cookies de publicidad para mostrar anuncios basados en tus
        visitas previas a este u otros sitios. Puedes consultar la{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          className="text-brand-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          política de publicidad de Google
        </a>{" "}
        para más información.
      </p>

      <h2>Cómo gestionar las cookies</h2>
      <p>
        Puedes controlar y gestionar las cookies de varias formas:
      </p>

      <h3>Desde tu navegador</h3>
      <p>
        Todos los navegadores modernos permiten ver, bloquear y eliminar cookies.
        Consulta la ayuda de tu navegador:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">
            Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">
            Apple Safari
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h3>Opt-out de Google Analytics</h3>
      <p>
        Instala el{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          className="text-brand-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          complemento de inhabilitación de Google Analytics
        </a>{" "}
        para impedir que Google Analytics recoja datos sobre tu navegación.
      </p>

      <h3>Opt-out de publicidad personalizada</h3>
      <p>
        Puedes desactivar los anuncios personalizados de Google desde la{" "}
        <a
          href="https://www.google.com/settings/ads"
          className="text-brand-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Configuración de anuncios
        </a>{" "}
        o en{" "}
        <a
          href="https://www.youronlinechoices.eu"
          className="text-brand-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Your Online Choices
        </a>
        .
      </p>

      <h2>Más información</h2>
      <p>
        Para más detalles sobre cómo tratamos tus datos, consulta nuestra{" "}
        <Link href="/privacidad" className="text-brand-600 underline">
          Política de privacidad
        </Link>
        . Para cualquier consulta escríbenos a{" "}
        <a href="mailto:hola@calculadorasclaras.es" className="text-brand-600 underline">
          hola@calculadorasclaras.es
        </a>
        .
      </p>
    </div>
  );
}
