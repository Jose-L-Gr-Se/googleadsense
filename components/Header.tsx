import Link from "next/link";
import { calculators, siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-brand-600">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">
            €
          </span>
          <span className="text-lg">{siteConfig.name}</span>
        </Link>
        <nav className="hidden gap-5 text-sm font-medium text-gray-600 md:flex">
          {calculators.map((c) => (
            <Link
              key={c.slug}
              href={`/calculadora-${c.slug}`}
              className="hover:text-brand-600"
            >
              {c.shortTitle}
            </Link>
          ))}
          <Link href="/blog" className="hover:text-brand-600">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
