import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad — Calculadoras Claras",
  description:
    "Información sobre cómo tratamos tus datos personales, cookies y publicidad en Calculadoras Claras.",
  alternates: { canonical: "/privacidad" },
  robots: { index: false },
};

export default function Page() {
  return (
    <div className="prose-article mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Política de privacidad</h1>
      <p className="text-sm text-gray-500">Última actualización: junio de 2026</p>

      <p>
        Esta política de privacidad describe cómo <strong>Calculadoras Claras</strong>{" "}
        (en adelante, "el sitio"), accesible desde{" "}
        <a href="https://www.calculadorasclaras.es" className="text-brand-600 underline">
          www.calculadorasclaras.es
        </a>
        , recoge, usa y protege tu información cuando lo visitas.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos es el titular del sitio web
        Calculadoras Claras. Para cualquier consulta relacionada con privacidad puedes
        escribir a:{" "}
        <a href="mailto:hola@calculadorasclaras.es" className="text-brand-600 underline">
          hola@calculadorasclaras.es
        </a>
      </p>

      <h2>2. Datos que recogemos</h2>
      <p>
        <strong>Calculadoras:</strong> Los datos que introduces en las calculadoras
        (salario, importe de hipoteca, etc.) se procesan únicamente en tu navegador y
        no se envían ni almacenan en ningún servidor. No guardamos tus cálculos.
      </p>
      <p>
        <strong>Datos de uso anónimos:</strong> Utilizamos Google Analytics 4 para
        recoger información agregada y anónima sobre cómo se usa el sitio (páginas
        visitadas, tiempo de sesión, país de origen). Esta información no permite
        identificarte personalmente y nos ayuda a mejorar el servicio.
      </p>
      <p>
        <strong>Datos de publicidad:</strong> Google AdSense puede recoger información
        sobre tu navegación para mostrar anuncios relevantes. Esta recogida se realiza
        mediante cookies y tecnologías similares.
      </p>

      <h2>3. Base legal para el tratamiento</h2>
      <p>
        El tratamiento de datos de analítica y publicidad se basa en tu{" "}
        <strong>consentimiento</strong>, que puedes otorgar o revocar en cualquier
        momento a través de las preferencias de cookies. El procesamiento de los datos
        de las calculadoras (en tu navegador) no requiere base legal adicional al no
        implicar transferencia de datos.
      </p>

      <h2>4. Cookies</h2>
      <p>
        Este sitio utiliza cookies. Para información detallada consulta nuestra{" "}
        <Link href="/cookies" className="text-brand-600 underline">
          Política de cookies
        </Link>
        .
      </p>

      <h2>5. Publicidad: Google AdSense</h2>
      <p>
        Utilizamos Google AdSense para mostrar anuncios. Google, como proveedor
        externo, utiliza cookies para mostrar anuncios basados en las visitas anteriores
        de los usuarios al sitio web u otros sitios web. El uso de cookies de
        publicidad por parte de Google permite a Google y a sus socios mostrar anuncios
        a los usuarios basándose en sus visitas a este y/o otros sitios web.
      </p>
      <p>
        Los usuarios pueden inhabilitar la publicidad personalizada accediendo a la{" "}
        <a
          href="https://www.google.com/settings/ads"
          className="text-brand-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Configuración de anuncios de Google
        </a>{" "}
        o a{" "}
        <a
          href="https://www.aboutads.info"
          className="text-brand-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.aboutads.info
        </a>
        .
      </p>

      <h2>6. Google Analytics</h2>
      <p>
        Usamos Google Analytics 4 para analizar el tráfico del sitio. Google Analytics
        recoge información como la dirección IP (anonimizada), el tipo de navegador,
        las páginas visitadas y la duración de la sesión. Esta información se transfiere
        y almacena en servidores de Google en Estados Unidos bajo las salvaguardas
        adecuadas (Cláusulas Contractuales Tipo aprobadas por la Comisión Europea).
      </p>
      <p>
        Puedes optar por no participar instalando el{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          className="text-brand-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          complemento de inhabilitación de Google Analytics
        </a>
        .
      </p>

      <h2>7. Transferencias internacionales de datos</h2>
      <p>
        Los datos de analítica y publicidad pueden transferirse a servidores ubicados
        fuera del Espacio Económico Europeo (EEE), en particular a Estados Unidos.
        Google LLC está adherida al Marco de Privacidad de Datos UE-EE.UU., lo que
        garantiza un nivel de protección adecuado.
      </p>

      <h2>8. Tus derechos</h2>
      <p>
        Conforme al Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica
        3/2018 de Protección de Datos Personales, tienes derecho a:
      </p>
      <ul>
        <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti.</li>
        <li><strong>Rectificación:</strong> corregir datos incorrectos.</li>
        <li><strong>Supresión:</strong> solicitar que eliminemos tus datos.</li>
        <li><strong>Limitación:</strong> restringir el tratamiento en ciertos casos.</li>
        <li><strong>Portabilidad:</strong> recibir tus datos en formato legible por máquina.</li>
        <li><strong>Oposición:</strong> oponerte al tratamiento basado en interés legítimo.</li>
        <li>
          <strong>Retirar el consentimiento</strong> en cualquier momento, sin que ello
          afecte a la licitud del tratamiento previo.
        </li>
      </ul>
      <p>
        Para ejercer tus derechos escríbenos a{" "}
        <a href="mailto:hola@calculadorasclaras.es" className="text-brand-600 underline">
          hola@calculadorasclaras.es
        </a>
        . También tienes derecho a presentar una reclamación ante la{" "}
        <a
          href="https://www.aepd.es"
          className="text-brand-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agencia Española de Protección de Datos (AEPD)
        </a>
        .
      </p>

      <h2>9. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política ocasionalmente. Los cambios se publicarán en
        esta misma página con la fecha de actualización revisada. Te recomendamos
        revisarla periódicamente.
      </p>
    </div>
  );
}
