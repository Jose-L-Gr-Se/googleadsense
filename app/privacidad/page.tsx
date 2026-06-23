import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad y uso de cookies del sitio.",
  alternates: { canonical: "/privacidad" },
};

export default function Page() {
  return (
    <div className="prose-article mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Política de privacidad</h1>
      <h2>Datos que recogemos</h2>
      <p>
        {siteConfig.name} no requiere registro. Los cálculos se realizan en tu
        propio navegador y no almacenamos los datos que introduces en las
        calculadoras.
      </p>
      <h2>Cookies y publicidad</h2>
      <p>
        Este sitio utiliza Google AdSense para mostrar anuncios. Google y sus
        socios pueden usar cookies para personalizar los anuncios en función de tus
        visitas a este y otros sitios web. Puedes gestionar tus preferencias de
        anuncios en{" "}
        <a href="https://www.google.com/settings/ads" className="text-brand-600 underline">
          la configuración de anuncios de Google
        </a>
        .
      </p>
      <h2>Analítica</h2>
      <p>
        Podemos utilizar herramientas de analítica web para entender de forma
        agregada y anónima cómo se usa el sitio y mejorarlo.
      </p>
      <h2>Contacto</h2>
      <p>Para cualquier cuestión sobre privacidad, escríbenos a través de la página de contacto.</p>
    </div>
  );
}
