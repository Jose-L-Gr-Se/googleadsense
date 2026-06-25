"use client";

import { useState } from "react";

type TipoDespido = "improcedente" | "objetivo" | "colectivo";

const TIPOS: { value: TipoDespido; label: string; dias: number; maxMeses: number; desc: string }[] = [
  {
    value: "improcedente",
    label: "Despido improcedente",
    dias: 33,
    maxMeses: 24,
    desc: "Sin causa justificada o con defectos formales. 33 días/año, máx. 24 mensualidades.",
  },
  {
    value: "objetivo",
    label: "Despido objetivo / procedente",
    dias: 20,
    maxMeses: 12,
    desc: "Por causas económicas, técnicas, organizativas o productivas. 20 días/año, máx. 12 mensualidades.",
  },
  {
    value: "colectivo",
    label: "Despido colectivo (ERE)",
    dias: 20,
    maxMeses: 12,
    desc: "Afecta a varios trabajadores por causas empresariales. 20 días/año, máx. 12 mensualidades.",
  },
];

function calcular(salarioBrutoAnual: number, añosTrabajados: number, tipo: TipoDespido) {
  const t = TIPOS.find((x) => x.value === tipo)!;
  const salarioDiario = salarioBrutoAnual / 365;
  const salarioMensual = salarioBrutoAnual / 12;

  const indemnizacionBruta = salarioDiario * t.dias * añosTrabajados;
  const topeMensualidades = salarioMensual * t.maxMeses;
  const indemnizacion = Math.min(indemnizacionBruta, topeMensualidades);
  const aplicaTope = indemnizacionBruta > topeMensualidades;

  return {
    indemnizacion,
    indemnizacionBruta,
    topeMensualidades,
    aplicaTope,
    salarioDiario,
    diasIndemnizacion: t.dias,
  };
}

export default function IndemnizacionDespido() {
  const [salario, setSalario] = useState(30000);
  const [anos, setAnos] = useState(5);
  const [meses, setMeses] = useState(0);
  const [tipo, setTipo] = useState<TipoDespido>("improcedente");

  const añosTotales = anos + meses / 12;
  const r = calcular(salario, añosTotales, tipo);
  const tipoInfo = TIPOS.find((x) => x.value === tipo)!;

  const fmt = (n: number) =>
    n.toLocaleString("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  return (
    <div className="surface-card p-6 space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Salario */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            Salario bruto anual
          </label>
          <div className="relative">
            <input
              type="number"
              min={1000}
              value={salario}
              onChange={(e) => setSalario(Number(e.target.value))}
              className="field-input pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">€</span>
          </div>
          <p className="mt-1 text-xs text-ink-400">Incluye pagas extras y complementos anuales</p>
        </div>

        {/* Tiempo trabajado */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            Tiempo trabajado en la empresa
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <input
                type="number"
                min={0}
                max={50}
                value={anos}
                onChange={(e) => setAnos(Number(e.target.value))}
                className="field-input pr-12"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-xs">años</span>
            </div>
            <div className="relative">
              <input
                type="number"
                min={0}
                max={11}
                value={meses}
                onChange={(e) => setMeses(Number(e.target.value))}
                className="field-input pr-14"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-xs">meses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tipo de despido */}
      <div>
        <label className="block text-sm font-medium text-ink-700 mb-2">Tipo de despido</label>
        <div className="grid gap-2 sm:grid-cols-3">
          {TIPOS.map((t) => (
            <button
              key={t.value}
              onClick={() => setTipo(t.value)}
              className={`rounded-xl border p-3 text-left text-sm transition ${
                tipo === t.value
                  ? "border-brand-400 bg-brand-50 text-brand-700"
                  : "border-ink-200 bg-white text-ink-600 hover:border-brand-300"
              }`}
            >
              <span className="font-semibold block">{t.label}</span>
              <span className="text-xs mt-0.5 block opacity-80">{t.dias} días/año · máx. {t.maxMeses} meses</span>
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-ink-400">{tipoInfo.desc}</p>
      </div>

      {/* Resultado */}
      {añosTotales > 0 && salario > 0 && (
        <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-6 text-white">
          <p className="text-sm text-brand-200">Indemnización estimada</p>
          <p className="mt-1 text-4xl font-bold">{fmt(r.indemnizacion)}</p>

          {r.aplicaTope && (
            <div className="mt-3 rounded-lg bg-white/10 px-3 py-2 text-xs text-brand-100">
              Se aplica el tope legal de {tipoInfo.maxMeses} mensualidades ({fmt(r.topeMensualidades)}).
              El cálculo sin tope sería {fmt(r.indemnizacionBruta)}.
            </div>
          )}

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/20 pt-4 text-center text-sm">
            <div>
              <p className="text-brand-200 text-xs">Días/año</p>
              <p className="font-bold text-lg">{tipoInfo.dias}</p>
            </div>
            <div>
              <p className="text-brand-200 text-xs">Salario diario</p>
              <p className="font-bold text-lg">{r.salarioDiario.toLocaleString("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 2 })}</p>
            </div>
            <div>
              <p className="text-brand-200 text-xs">Años computados</p>
              <p className="font-bold text-lg">{añosTotales.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
        <strong>Importante:</strong> Esta calculadora aplica la normativa vigente desde la reforma laboral de 2012 (33 días/año para contratos post 12/02/2012). Para contratos anteriores a esa fecha, los años previos se calculan a 45 días/año. El resultado es orientativo — consúltalo con un asesor laboral antes de firmar nada.
      </div>
    </div>
  );
}
