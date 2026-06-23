import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/config";
import { articles, type ArticleMeta } from "@/lib/articles";

type Props = {
  meta: ArticleMeta;
  children: React.ReactNode;
};

export default function ArticleShell({ meta, children }: Props) {
  const related = articles.filter((a) => a.slug !== meta.slug).slice(0, 3);
  const dateFormatted = new Date(meta.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto grid max-w-5xl gap-8 px-4 py-8 lg:grid-cols-[1fr_300px]">
      <div className="min-w-0">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-brand-600">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{meta.title}</span>
        </nav>

        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{meta.title}</h1>

        <div className="mt-2 flex gap-3 text-sm text-gray-500">
          <time dateTime={meta.date}>{dateFormatted}</time>
          <span>·</span>
          <span>{meta.readTime} min de lectura</span>
        </div>

        <article className="prose-article mt-6 max-w-none">{children}</article>

        <div className="my-8">
          <AdUnit slot={siteConfig.adsense.slots.inArticle} label="Anuncio (in-article)" />
        </div>

        <section className="mt-10">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Artículos relacionados</h2>
          <ul className="space-y-3">
            {related.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="block rounded-lg border border-gray-200 px-4 py-3 hover:border-brand-500"
                >
                  <p className="font-medium text-gray-900 hover:text-brand-600">{a.title}</p>
                  <p className="mt-0.5 text-sm text-gray-500">{a.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-20 space-y-6">
          <AdUnit
            slot={siteConfig.adsense.slots.sidebar}
            label="Anuncio (lateral)"
            className="min-h-[600px]"
          />
        </div>
      </aside>
    </div>
  );
}
