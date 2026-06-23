import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/config";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Blog de finanzas personales",
  description:
    "Guías y explicaciones sobre hipotecas, préstamos, IVA, finiquitos e inversión. Todo lo que necesitas saber para tomar mejores decisiones con tu dinero.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Blog de finanzas personales</h1>
      <p className="mt-2 text-gray-600">
        Guías prácticas para entender hipotecas, préstamos, impuestos e inversión.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {articles.map((a) => {
          const dateFormatted = new Date(a.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group flex flex-col rounded-xl border border-gray-200 p-5 transition hover:border-brand-500 hover:shadow-md"
            >
              <p className="text-xs text-gray-400">{dateFormatted} · {a.readTime} min</p>
              <h2 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-brand-600">
                {a.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-gray-600">{a.description}</p>
              <span className="mt-3 text-sm font-medium text-brand-600">Leer artículo →</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-10">
        <AdUnit slot={siteConfig.adsense.slots.footer} label="Anuncio" />
      </div>
    </div>
  );
}
