import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: "Quiénes somos y por qué creamos estas calculadoras financieras.",
  alternates: { canonical: "/sobre-nosotros" },
};

export default function Page() {
  return (
    <div className="prose-article mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Sobre nosotros</h1>
      <p>
        {siteConfig.name} nace para que cualquier persona pueda entender sus números
        antes de tomar decisiones de dinero. Creemos que las herramientas
        financieras deben ser claras, rápidas y gratuitas.
      </p>
      <p>
        Todas nuestras calculadoras funcionan directamente en tu navegador, sin
        registros ni complicaciones, y van acompañadas de explicaciones sencillas
        para que entiendas el resultado.
      </p>
      <h2>Nuestro compromiso</h2>
      <ul>
        <li>Cálculos transparentes y bien explicados.</li>
        <li>Sin almacenar tus datos personales.</li>
        <li>Contenido revisado y actualizado.</li>
      </ul>
    </div>
  );
}
