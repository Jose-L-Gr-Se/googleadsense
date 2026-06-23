import Link from "next/link";
import { calculators, siteConfig } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-bold text-brand-600">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-gray-500">
            Calculadoras financieras gratuitas, rápidas y sin registro.
          </p>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold text-gray-700">Calculadoras</p>
          <ul className="space-y-1 text-sm text-gray-500">
            {calculators.map((c) => (
              <li key={c.slug}>
                <Link href={`/calculadora-${c.slug}`} className="hover:text-brand-600">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold text-gray-700">Legal</p>
          <ul className="space-y-1 text-sm text-gray-500">
            <li><Link href="/privacidad" className="hover:text-brand-600">Política de privacidad</Link></li>
            <li><Link href="/aviso-legal" className="hover:text-brand-600">Aviso legal</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-brand-600">Sobre nosotros</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-400">
        © {year} {siteConfig.name}. Las calculadoras son orientativas y no constituyen
        asesoramiento financiero.
      </div>
    </footer>
  );
}
