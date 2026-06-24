"use client";

import { useMemo, useState } from "react";
import Field from "@/components/ui/Field";
import { amortizationSchedule, monthlyPayment } from "@/lib/finance";
import { formatEUR } from "@/lib/format";

export default function Hipoteca() {
  const [amount, setAmount] = useState(150000);
  const [rate, setRate] = useState(3.0);
  const [years, setYears] = useState(25);
  const [showTable, setShowTable] = useState(false);

  const months = Math.round(years * 12);
  const payment = useMemo(
    () => monthlyPayment(amount, rate, months),
    [amount, rate, months]
  );
  const schedule = useMemo(
    () => amortizationSchedule(amount, rate, months),
    [amount, rate, months]
  );
  const totalPaid = payment * months;
  const totalInterest = totalPaid - amount;

  return (
    <div className="surface-card p-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Importe" value={amount} onChange={setAmount} suffix="€" step={1000} />
        <Field label="Interés anual" value={rate} onChange={setRate} suffix="%" step={0.1} />
        <Field label="Plazo" value={years} onChange={setYears} suffix="años" step={1} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="result-card">
          <p className="text-sm text-ink-600">Cuota mensual</p>
          <p className="text-2xl font-bold text-brand-700">{formatEUR(payment)}</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-ink-600">Intereses totales</p>
          <p className="text-2xl font-bold text-brand-700">{formatEUR(totalInterest)}</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-ink-600">Total a pagar</p>
          <p className="text-2xl font-bold text-brand-700">{formatEUR(totalPaid)}</p>
        </div>
      </div>

      <button
        className="mt-5 text-sm font-medium text-brand-600 hover:underline"
        onClick={() => setShowTable((v) => !v)}
      >
        {showTable ? "Ocultar" : "Ver"} tabla de amortización
      </button>

      {showTable && (
        <div className="mt-4 max-h-96 overflow-auto rounded-xl border border-ink-200">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-ink-50 text-left text-ink-600">
              <tr>
                <th className="px-3 py-2">Mes</th>
                <th className="px-3 py-2">Cuota</th>
                <th className="px-3 py-2">Interés</th>
                <th className="px-3 py-2">Capital</th>
                <th className="px-3 py-2">Pendiente</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((r) => (
                <tr key={r.month} className="border-t border-ink-100">
                  <td className="px-3 py-1.5">{r.month}</td>
                  <td className="px-3 py-1.5">{formatEUR(r.payment)}</td>
                  <td className="px-3 py-1.5 text-red-600">{formatEUR(r.interest)}</td>
                  <td className="px-3 py-1.5 text-green-700">{formatEUR(r.principal)}</td>
                  <td className="px-3 py-1.5">{formatEUR(r.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
