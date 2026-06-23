import Link from "next/link";
import { calculators, siteConfig } from "@/lib/config";
import AdUnit from "@/components/AdUnit";

type Props = {
  slug: string;
  title: string;
  intro: string;
  calculator: React.ReactNode;
  article: React.ReactNode;
};

/**
 * Plantilla común de una página de calculadora:
 * breadcrumb + título + herramienta + anuncios + artículo SEO + enlaces internos.
 */
export default function CalculatorShell({
  slug,
  title,
  intro,
  calculator,
  article,
}: Props) {
  const related = calculators.filter((c) => c.slug !== slug);

  return (
    <div className="mx-auto grid max-w-5xl gap-8 px-4 py-8 lg:grid-cols-[1fr_300px]">
      <div className="min-w-0">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-brand-600">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{title}</span>
        </nav>

        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1>
        <p className="mt-2 text-gray-600">{intro}</p>

        <div className="mt-6">{calculator}</div>

        <div className="my-8">
          <AdUnit slot={siteConfig.adsense.slots.inArticle} label="Anuncio (in-article)" />
        </div>

        <article className="prose-article max-w-none">{article}</article>

        <section className="mt-10">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Otras calculadoras</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {related.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/calculadora-${c.slug}`}
                  className="block rounded-lg border border-gray-200 px-4 py-2 text-sm hover:border-brand-500 hover:text-brand-600"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-20 space-y-6">
          <AdUnit slot={siteConfig.adsense.slots.sidebar} label="Anuncio (lateral)" className="min-h-[600px]" />
        </div>
      </aside>
    </div>
  );
}
