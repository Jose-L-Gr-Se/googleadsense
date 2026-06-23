"use client";

import { useMemo, useState } from "react";
import Field from "@/components/ui/Field";
import { formatEUR } from "@/lib/format";

// Cotizaciones del trabajador a la Seguridad Social 2026
const SS_CONTINGENCIAS = 0.047;
const SS_DESEMPLEO = 0.0155;
const SS_FORMACION = 0.001;
const SS_TOTAL = SS_CONTINGENCIAS + SS_DESEMPLEO + SS_FORMACION; // 6.35%

// Tramos IRPF estatal 2026
const TRAMOS_IRPF = [
  { hasta: 12450, tipo: 0.19 },
  { hasta: 20200, tipo: 0.24 },
  { hasta: 35200, tipo: 0.30 },
  { hasta: 60000, tipo: 0.37 },
  { hasta: 300000, tipo: 0.45 },
  { hasta: Infinity, tipo: 0.47 },
];

// Reducción por rendimientos del trabajo (escala estatal 2026)
function reduccionRendimientos(rentoNeto: number): number {
  if (rentoNeto <= 13115) return 5565;
  if (rentoNeto <= 16825) return Math.max(0, 5565 - 1.5 * (rentoNeto - 13115));
  return 0;
}

function calcularIrpf(baseImponible: number): number {
  if (baseImponible <= 0) return 0;
  let cuota = 0;
  let prev = 0;
  for (const tramo of TRAMOS_IRPF) {
    if (baseImponible <= prev) break;
    cuota += (Math.min(baseImponible, tramo.hasta) - prev) * tramo.tipo;
    prev = tramo.hasta;
  }
  return cuota;
}

type ResultadoNomina = {
  brutoAnual: number;
  ssAnual: number;
  baseImponible: number;
  reduccion: number;
  baseIrpf: number;
  irpfAnual: number;
  netoAnual: number;
  netoPaga: number;
  tipoEfectivoIrpf: number;
  retencionMensual: number;
  ssMensual: number;
};

function calcularNomina(bruto: number, pagas: number): ResultadoNomina {
  const ssAnual = bruto * SS_TOTAL;
  const baseImponible = bruto - ssAnual;
  const reduccion = reduccionRendimientos(baseImponible);
  const baseIrpf = Math.max(0, baseImponible - reduccion);
  const irpfAnual = calcularIrpf(baseIrpf);
  const netoAnual = bruto - ssAnual - irpfAnual;
  return {
    brutoAnual: bruto,
    ssAnual,
    baseImponible,
    reduccion,
    baseIrpf,
    irpfAnual,
    netoAnual,
    netoPaga: netoAnual / pagas,
    tipoEfectivoIrpf: bruto > 0 ? (irpfAnual / bruto) * 100 : 0,
    retencionMensual: irpfAnual / 12,
    ssMensual: ssAnual / 12,
  };
}

export default function Nomina() {
  const [bruto, setBruto] = useState(28000);
  const [pagas, setPagas] = useState<14 | 12>(14);

  const r = useMemo(() => calcularNomina(bruto, pagas), [bruto, pagas]);

  return (
    <div className="rounded-xl border border-gray-200 p-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Salario bruto anual"
          value={bruto}
          onChange={setBruto}
          suffix="€"
          step={500}
        />
        <label className="block">
          <span className="field-label">Número de pagas</span>
          <select
            className="field-input"
            value={pagas}
            onChange={(e) => setPagas(Number(e.target.value) as 14 | 12)}
          >
            <option value={14}>14 pagas</option>
            <option value={12}>12 pagas (prorrateadas)</option>
          </select>
        </label>
      </div>

      {/* Resultado principal */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="result-card border-brand-500 bg-brand-100 lg:col-span-1">
          <p className="text-sm text-gray-700">Neto por paga</p>
          <p className="text-3xl font-bold text-brand-700">{formatEUR(r.netoPaga)}</p>
          <p className="mt-1 text-xs text-gray-500">{pagas} pagas al año</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-gray-600">Neto anual</p>
          <p className="text-xl font-bold text-brand-700">{formatEUR(r.netoAnual)}</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-gray-600">Coste total para empresa</p>
          <p className="text-xl font-bold text-gray-700">
            {formatEUR(r.brutoAnual * 1.3)}
          </p>
          <p className="mt-0.5 text-xs text-gray-400">~30% SS empresa</p>
        </div>
      </div>

      {/* Desglose completo */}
      <div className="mt-5 rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-2">Concepto</th>
              <th className="px-4 py-2 text-right">Anual</th>
              <th className="px-4 py-2 text-right">Mensual</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-100">
              <td className="px-4 py-2 text-gray-700">Salario bruto</td>
              <td className="px-4 py-2 text-right font-medium">{formatEUR(r.brutoAnual)}</td>
              <td className="px-4 py-2 text-right text-gray-500">{formatEUR(r.brutoAnual / 12)}</td>
            </tr>
            <tr className="border-t border-gray-100 bg-red-50/40">
              <td className="px-4 py-2 text-red-700">
                − Seguridad Social (6,35%)
                <span className="ml-1 text-xs text-red-400">CC 4,7% + Des. 1,55% + FP 0,1%</span>
              </td>
              <td className="px-4 py-2 text-right text-red-600">−{formatEUR(r.ssAnual)}</td>
              <td className="px-4 py-2 text-right text-red-400">−{formatEUR(r.ssMensual)}</td>
            </tr>
            <tr className="border-t border-gray-100 bg-red-50/40">
              <td className="px-4 py-2 text-red-700">
                − Retención IRPF
                <span className="ml-1 text-xs text-red-400">
                  tipo ef. {r.tipoEfectivoIrpf.toFixed(1)}%
                </span>
              </td>
              <td className="px-4 py-2 text-right text-red-600">−{formatEUR(r.irpfAnual)}</td>
              <td className="px-4 py-2 text-right text-red-400">−{formatEUR(r.retencionMensual)}</td>
            </tr>
            <tr className="border-t-2 border-brand-200 bg-brand-50">
              <td className="px-4 py-2 font-semibold text-brand-800">= Salario neto</td>
              <td className="px-4 py-2 text-right font-bold text-brand-700">{formatEUR(r.netoAnual)}</td>
              <td className="px-4 py-2 text-right font-bold text-brand-700">{formatEUR(r.netoPaga)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-gray-400">
        Estimación orientativa. Incluye reducción por rendimientos del trabajo según escala estatal 2026.
        La retención real puede variar según situación personal, deducciones y comunidad autónoma.
      </p>
    </div>
  );
}
