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
    () =>
      compoundInterest({
        initial,
        monthlyContribution: monthly,
        annualRate: rate,
        years,
      }),
    [initial, monthly, rate, years]
  );

  return (
    <div className="rounded-xl border border-gray-200 p-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field label="Capital inicial" value={initial} onChange={setInitial} suffix="€" step={100} />
        <Field label="Aportación mensual" value={monthly} onChange={setMonthly} suffix="€" step={50} />
        <Field label="Rentabilidad anual" value={rate} onChange={setRate} suffix="%" step={0.5} />
        <Field label="Años" value={years} onChange={setYears} suffix="años" step={1} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="result-card">
          <p className="text-sm text-gray-600">Valor final</p>
          <p className="text-2xl font-bold text-brand-700">{formatEUR(result.finalValue)}</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-gray-600">Total aportado</p>
          <p className="text-2xl font-bold text-brand-700">{formatEUR(result.totalContributed)}</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-gray-600">Intereses ganados</p>
          <p className="text-2xl font-bold text-green-700">{formatEUR(result.totalInterest)}</p>
        </div>
      </div>
    </div>
  );
}
