"use client";

import { useMemo, useState } from "react";
import Field from "@/components/ui/Field";
import { formatEUR } from "@/lib/format";

// Tramos IRPF estatal 2026 (escala general aplicable a rendimientos del trabajo).
// La retención real depende también del tramo autonómico y la situación personal.
const TRAMOS = [
  { hasta: 12450, tipo: 0.19 },
  { hasta: 20200, tipo: 0.24 },
  { hasta: 35200, tipo: 0.3 },
  { hasta: 60000, tipo: 0.37 },
  { hasta: 300000, tipo: 0.45 },
  { hasta: Infinity, tipo: 0.47 },
];

function calcularIrpf(bruto: number): { cuota: number; tipo: number } {
  if (bruto <= 0) return { cuota: 0, tipo: 0 };
  let cuota = 0;
  let anterior = 0;
  for (const tramo of TRAMOS) {
    if (bruto <= anterior) break;
    const base = Math.min(bruto, tramo.hasta) - anterior;
    cuota += base * tramo.tipo;
    anterior = tramo.hasta;
  }
  return { cuota, tipo: (cuota / bruto) * 100 };
}

export default function Irpf() {
  const [bruto, setBruto] = useState(30000);
  const [pagas, setPagas] = useState(14);

  const result = useMemo(() => {
    const { cuota, tipo } = calcularIrpf(bruto);
    const neto = bruto - cuota;
    const mensual = neto / pagas;
    const retencionMensual = cuota / 12;
    return { cuota, tipo, neto, mensual, retencionMensual };
  }, [bruto, pagas]);

  return (
    <div className="rounded-xl border border-gray-200 p-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Salario bruto anual" value={bruto} onChange={setBruto} suffix="€" step={500} />
        <label className="block">
          <span className="field-label">Número de pagas</span>
          <select
            className="field-input"
            value={pagas}
            onChange={(e) => setPagas(Number(e.target.value))}
          >
            <option value={12}>12 pagas</option>
            <option value={14}>14 pagas</option>
          </select>
        </label>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="result-card">
          <p className="text-sm text-gray-600">IRPF anual</p>
          <p className="text-xl font-bold text-red-600">{formatEUR(result.cuota)}</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-gray-600">Tipo efectivo</p>
          <p className="text-xl font-bold text-red-600">{result.tipo.toFixed(1)}%</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-gray-600">Neto anual</p>
          <p className="text-xl font-bold text-brand-700">{formatEUR(result.neto)}</p>
        </div>
        <div className="result-card border-brand-500 bg-brand-100">
          <p className="text-sm text-gray-700">Neto por paga</p>
          <p className="text-xl font-bold text-brand-700">{formatEUR(result.mensual)}</p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-gray-50 p-3">
        <p className="text-sm font-medium text-gray-700 mb-2">Desglose por tramos</p>
        <div className="space-y-1">
          {TRAMOS.filter((_, i) => {
            const prev = i === 0 ? 0 : TRAMOS[i - 1].hasta;
            return bruto > prev;
          }).map((tramo, i) => {
            const prev = i === 0 ? 0 : TRAMOS[i - 1].hasta;
            const base = Math.min(bruto, tramo.hasta) - prev;
            const cuota = base * tramo.tipo;
            return (
              <div key={i} className="flex justify-between text-xs text-gray-600">
                <span>
                  {formatEUR(prev + 1)} – {tramo.hasta === Infinity ? "+" : formatEUR(tramo.hasta)} ({(tramo.tipo * 100).toFixed(0)}%)
                </span>
                <span className="font-medium">{formatEUR(cuota)}</span>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Cálculo orientativo basado en la escala estatal 2026. No incluye deducciones personales,
        autonómicas ni cotizaciones a la Seguridad Social.
      </p>
    </div>
  );
}
