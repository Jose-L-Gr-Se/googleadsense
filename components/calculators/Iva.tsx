"use client";

import { useState } from "react";
import { formatEUR } from "@/lib/format";

const RATES = [21, 10, 4];

export default function Iva() {
  const [amount, setAmount] = useState(100);
  const [rate, setRate] = useState(21);
  const [mode, setMode] = useState<"add" | "remove">("add");

  let base = 0;
  let vat = 0;
  let total = 0;

  if (mode === "add") {
    base = amount;
    vat = (amount * rate) / 100;
    total = base + vat;
  } else {
    base = amount / (1 + rate / 100);
    vat = amount - base;
    total = amount;
  }

  return (
    <div className="rounded-xl border border-gray-200 p-5">
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setMode("add")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            mode === "add" ? "bg-brand-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          Añadir IVA
        </button>
        <button
          onClick={() => setMode("remove")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            mode === "remove" ? "bg-brand-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          Quitar IVA
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="field-label">
            {mode === "add" ? "Importe sin IVA" : "Importe con IVA"}
          </span>
          <input
            type="number"
            className="field-input"
            value={Number.isNaN(amount) ? "" : amount}
            min={0}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </label>
        <label className="block">
          <span className="field-label">Tipo de IVA</span>
          <select
            className="field-input"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
          >
            {RATES.map((r) => (
              <option key={r} value={r}>{r}%</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="result-card">
          <p className="text-sm text-gray-600">Base imponible</p>
          <p className="text-xl font-bold text-brand-700">{formatEUR(base)}</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-gray-600">IVA ({rate}%)</p>
          <p className="text-xl font-bold text-brand-700">{formatEUR(vat)}</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-gray-600">Total con IVA</p>
          <p className="text-xl font-bold text-brand-700">{formatEUR(total)}</p>
        </div>
      </div>
    </div>
  );
}
