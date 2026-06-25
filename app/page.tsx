import Link from "next/link";
import { calculators, siteConfig } from "@/lib/config";
import AdUnit from "@/components/AdUnit";
import CalculatorIcon from "@/components/CalculatorIcon";

const trustBadges = ["100% gratis", "Sin registro", "Resultados al instante", "Tus datos no se guardan"];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-glow">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            {calculators.length} calculadoras financieras actualizadas a 2026
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Tus números claros antes de{" "}
            <span className="text-brand-600">tomar decisiones de dinero</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-600">
            Calcula tu hipoteca, préstamos, IVA, IRPF, nómina, cuota de autónomos,
            interés compuesto y finiquito. Resultados al instante, con el desglose
            completo y explicado.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {trustBadges.map((b) => (
              <span
                key={b}
                className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-600 shadow-sm ring-1 ring-ink-200"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Grid de calculadoras */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">
            Elige tu calculadora
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {calculators.map((c) => (
              <Link
                key={c.slug}
                href={`/calculadora-${c.slug}`}
                className="group surface-card flex flex-col p-5 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <CalculatorIcon slug={c.slug} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink-900 group-hover:text-brand-600">
                  {c.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm text-ink-600">{c.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Abrir calculadora
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <AdUnit slot={siteConfig.adsense.slots.footer} />
        </div>

        {/* Sección de valor */}
        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Cálculos transparentes",
              text: "No solo te damos el número final: ves el desglose completo de cómo se llega a él, paso a paso.",
            },
            {
              title: "Actualizado a 2026",
              text: "Tramos de IRPF, cotizaciones a la Seguridad Social y normativa vigente revisados y al día.",
            },
            {
              title: "Privado de verdad",
              text: "Todo se calcula en tu navegador. No enviamos ni guardamos los datos que introduces.",
            },
          ].map((item) => (
            <div key={item.title} className="surface-card p-6">
              <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="prose-article mt-16 max-w-none">
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
    </div>
  );
}
