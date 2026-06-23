"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { calculators, siteConfig } from "@/lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    ...calculators.map((c) => ({ href: `/calculadora-${c.slug}`, label: c.shortTitle })),
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-brand-600" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white font-bold">
            €
          </span>
          <span className="text-lg">{siteConfig.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-5 text-sm font-medium text-gray-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-brand-600 ${pathname === item.href ? "text-brand-600" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="border-t border-gray-100 bg-white md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-600"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
