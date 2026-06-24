"use client";

import { useMemo, useState } from "react";
import Field from "@/components/ui/Field";
import { monthlyPayment } from "@/lib/finance";
import { formatEUR } from "@/lib/format";

export default function Prestamo() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(7.5);
  const [months, setMonths] = useState(48);

  const payment = useMemo(
    () => monthlyPayment(amount, rate, months),
    [amount, rate, months]
  );
  const totalPaid = payment * months;
  const totalInterest = totalPaid - amount;

  return (
    <div className="surface-card p-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Importe" value={amount} onChange={setAmount} suffix="€" step={500} min={100} />
        <Field label="Interés (TIN) anual" value={rate} onChange={setRate} suffix="%" step={0.1} min={0.01} />
        <Field label="Plazo" value={months} onChange={setMonths} suffix="meses" step={1} min={1} />
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
          <p className="text-sm text-ink-600">Total a devolver</p>
          <p className="text-2xl font-bold text-brand-700">{formatEUR(totalPaid)}</p>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-500">
        Introduce el <strong>TIN</strong> (tipo de interés nominal) que figura en el contrato.
        La <strong>TAE</strong> es siempre mayor porque incluye comisiones y gastos adicionales —
        úsala para comparar ofertas entre bancos.
      </p>
    </div>
  );
}
