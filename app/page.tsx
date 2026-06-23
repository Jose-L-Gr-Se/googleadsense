import Link from "next/link";
import { calculators, siteConfig } from "@/lib/config";
import AdUnit from "@/components/AdUnit";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Calculadoras financieras gratis
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Herramientas online para calcular tu hipoteca, préstamos, IVA, IRPF,
          interés compuesto y finiquito. Sin registro y con resultados al instante.
        </p>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {calculators.map((c) => (
          <Link
            key={c.slug}
            href={`/calculadora-${c.slug}`}
            className="group rounded-xl border border-gray-200 p-5 transition hover:border-brand-500 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600">
              {c.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600">{c.description}</p>
            <span className="mt-3 inline-block text-sm font-medium text-brand-600">
              Abrir calculadora →
            </span>
          </Link>
        ))}
      </section>

      <div className="mt-10">
        <AdUnit slot={siteConfig.adsense.slots.footer} />
      </div>

      <section className="prose-article mt-12 max-w-none">
        <h2>¿Por qué usar nuestras calculadoras?</h2>
        <p>
          Tomar decisiones de dinero sin tener los números claros es caro. Estas
          calculadoras te dan en segundos la información que necesitas antes de
          firmar una hipoteca, aceptar un préstamo o planificar tus ahorros. Todas
          funcionan en tu navegador, no guardamos tus datos y son completamente
          gratuitas.
        </p>
      </section>
    </div>
  );
}
