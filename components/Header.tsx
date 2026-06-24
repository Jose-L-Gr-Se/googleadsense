"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { calculators } from "@/lib/config";
import Logo from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    ...calculators.map((c) => ({ href: `/calculadora-${c.slug}`, label: c.shortTitle })),
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-ink-200/70 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Inicio">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm font-medium text-ink-600 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 transition hover:bg-ink-100 hover:text-brand-600 ${
                  active ? "bg-brand-50 text-brand-700" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-6 bg-ink-700 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink-700 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink-700 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="border-t border-ink-100 bg-white lg:hidden">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-5 py-3 text-sm font-medium transition hover:bg-ink-50 hover:text-brand-600 ${
                  active ? "text-brand-700" : "text-ink-700"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
