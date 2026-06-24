import Link from "next/link";
import { calculators, siteConfig } from "@/lib/config";
import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-ink-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-ink-500">
            Calculadoras financieras gratuitas, rápidas y sin registro. Tus números
            claros antes de decidir.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-ink-800">Calculadoras</p>
          <ul className="space-y-2 text-sm text-ink-500">
            {calculators.map((c) => (
              <li key={c.slug}>
                <Link href={`/calculadora-${c.slug}`} className="transition hover:text-brand-600">
                  {c.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-ink-800">Blog</p>
          <ul className="space-y-2 text-sm text-ink-500">
            <li><Link href="/blog/hipoteca-200000-euros-cuota-mensual" className="transition hover:text-brand-600">Hipoteca 200.000 €</Link></li>
            <li><Link href="/blog/diferencia-tin-tae" className="transition hover:text-brand-600">Diferencia TIN y TAE</Link></li>
            <li><Link href="/blog/calcular-finiquito-baja-voluntaria" className="transition hover:text-brand-600">Finiquito baja voluntaria</Link></li>
            <li><Link href="/blog/interes-compuesto-ejemplos" className="transition hover:text-brand-600">Interés compuesto</Link></li>
            <li><Link href="/blog" className="font-medium text-brand-600 transition hover:text-brand-700">Ver todo el blog →</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-ink-800">Legal</p>
          <ul className="space-y-2 text-sm text-ink-500">
            <li><Link href="/sobre-nosotros" className="transition hover:text-brand-600">Sobre nosotros</Link></li>
            <li><Link href="/privacidad" className="transition hover:text-brand-600">Política de privacidad</Link></li>
            <li><Link href="/cookies" className="transition hover:text-brand-600">Política de cookies</Link></li>
            <li><Link href="/aviso-legal" className="transition hover:text-brand-600">Aviso legal</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100 py-5 text-center text-xs text-ink-400">
        © {year} {siteConfig.name}. Las calculadoras son orientativas y no constituyen
        asesoramiento financiero.
      </div>
    </footer>
  );
}
