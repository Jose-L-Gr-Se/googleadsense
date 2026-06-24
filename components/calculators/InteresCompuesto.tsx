"use client";

import { useMemo, useState } from "react";
import Field from "@/components/ui/Field";
import { compoundInterest } from "@/lib/finance";
import { formatEUR } from "@/lib/format";

export default function InteresCompuesto() {
  const [initial, setInitial] = useState(1000);
  const [monthly, setMonthly] = useState(100);
  const [rate, setRate] = useState(6);
  const [years, setYears] = useState(20);

  const result = useMemo(
    () => compoundInterest({ initial, monthlyContribution: monthly, annualRate: rate, years }),
    [initial, monthly, rate, years]
  );

  const pctAportado = result.finalValue > 0
    ? (result.totalContributed / result.finalValue) * 100
    : 100;
  const pctIntereses = 100 - pctAportado;

  return (
    <div className="surface-card p-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field label="Capital inicial" value={initial} onChange={setInitial} suffix="€" step={100} min={0} />
        <Field label="Aportación mensual" value={monthly} onChange={setMonthly} suffix="€" step={50} min={0} />
        <Field label="Rentabilidad anual" value={rate} onChange={setRate} suffix="%" step={0.5} min={0.1} />
        <Field label="Años de inversión" value={years} onChange={setYears} suffix="años" step={1} min={1} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="result-card border-brand-500 bg-brand-100">
          <p className="text-sm text-ink-700">Valor final estimado</p>
          <p className="text-2xl font-bold text-brand-700">{formatEUR(result.finalValue)}</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-ink-600">Total aportado</p>
          <p className="text-2xl font-bold text-brand-700">{formatEUR(result.totalContributed)}</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-ink-600">Intereses generados</p>
          <p className="text-2xl font-bold text-green-700">{formatEUR(result.totalInterest)}</p>
        </div>
      </div>

      {/* Barra visual aportado vs intereses */}
      <div className="mt-5">
        <div className="mb-1.5 flex justify-between text-xs text-ink-600">
          <span>Tu dinero: <strong>{pctAportado.toFixed(0)}%</strong></span>
          <span>Intereses: <strong className="text-green-700">{pctIntereses.toFixed(0)}%</strong></span>
        </div>
        <div className="flex h-3 w-full overflow-hidden rounded-full bg-ink-200">
          <div
            className="bg-brand-500 transition-all duration-500"
            style={{ width: `${pctAportado}%` }}
          />
          <div
            className="bg-green-500 transition-all duration-500"
            style={{ width: `${pctIntereses}%` }}
          />
        </div>
        <p className="mt-1.5 text-center text-xs text-ink-500">
          De cada 100€ finales, {pctIntereses.toFixed(0)}€ son intereses que no pusiste tú
        </p>
      </div>

      <p className="mt-4 text-xs text-ink-400">
        Rentabilidad media histórica de fondos indexados globales: ~7% anual. Los resultados pasados no garantizan
        rentabilidades futuras. No incluye inflación ni impuestos sobre plusvalías.
      </p>
    </div>
  );
}
