"use client";

import { useMemo, useState } from "react";
import Field from "@/components/ui/Field";
import { formatEUR } from "@/lib/format";

/**
 * Tabla oficial de tramos del RETA (sistema de cotización por ingresos reales).
 * Valores de cuota mínima mensual según la última tabla aprobada (2025).
 * Cada tramo permite elegir una base entre el mínimo y el máximo; aquí se
 * muestra la cuota correspondiente a la base mínima (la opción más habitual).
 * Fuente: Seguridad Social, tabla de bases y cuotas RETA 2025.
 */
type Tramo = { hasta: number; cuota: number; label: string };

const TRAMOS: Tramo[] = [
  // Tabla reducida
  { hasta: 670, cuota: 200, label: "Hasta 670 €" },
  { hasta: 900, cuota: 220, label: "670 – 900 €" },
  { hasta: 1166.7, cuota: 260, label: "900 – 1.166,70 €" },
  // Tabla general
  { hasta: 1300, cuota: 291, label: "1.166,70 – 1.300 €" },
  { hasta: 1500, cuota: 294, label: "1.300 – 1.500 €" },
  { hasta: 1700, cuota: 294, label: "1.500 – 1.700 €" },
  { hasta: 1850, cuota: 310, label: "1.700 – 1.850 €" },
  { hasta: 2030, cuota: 315, label: "1.850 – 2.030 €" },
  { hasta: 2330, cuota: 320, label: "2.030 – 2.330 €" },
  { hasta: 2760, cuota: 330, label: "2.330 – 2.760 €" },
  { hasta: 3190, cuota: 350, label: "2.760 – 3.190 €" },
  { hasta: 3620, cuota: 370, label: "3.190 – 3.620 €" },
  { hasta: 4050, cuota: 390, label: "3.620 – 4.050 €" },
  { hasta: 6000, cuota: 420, label: "4.050 – 6.000 €" },
  { hasta: Infinity, cuota: 460, label: "Más de 6.000 €" },
];

function tramoPara(rendimientoMensual: number): Tramo {
  return TRAMOS.find((t) => rendimientoMensual <= t.hasta) ?? TRAMOS[TRAMOS.length - 1];
}

export default function Autonomos() {
  // El usuario puede meter ingresos y gastos, o directamente el rendimiento neto
  const [modo, setModo] = useState<"detallado" | "directo">("detallado");
  const [ingresos, setIngresos] = useState(2500);
  const [gastos, setGastos] = useState(500);
  const [rendimientoDirecto, setRendimientoDirecto] = useState(2000);

  const r = useMemo(() => {
    // Rendimiento neto mensual antes de la deducción por gastos genéricos
    const brutoNeto = modo === "detallado" ? Math.max(0, ingresos - gastos) : rendimientoDirecto;
    // Deducción del 7% por gastos de difícil justificación (5% si societario)
    const rendimientoNeto = brutoNeto * 0.93;
    const tramo = tramoPara(rendimientoNeto);
    return {
      rendimientoNeto,
      cuotaMensual: tramo.cuota,
      cuotaAnual: tramo.cuota * 12,
      tramo,
    };
  }, [modo, ingresos, gastos, rendimientoDirecto]);

  return (
    <div className="surface-card p-5">
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setModo("detallado")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            modo === "detallado" ? "bg-brand-600 text-white" : "bg-ink-100 text-ink-700"
          }`}
        >
          Ingresos y gastos
        </button>
        <button
          onClick={() => setModo("directo")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            modo === "directo" ? "bg-brand-600 text-white" : "bg-ink-100 text-ink-700"
          }`}
        >
          Sé mi rendimiento neto
        </button>
      </div>

      {modo === "detallado" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Ingresos mensuales (facturación)" value={ingresos} onChange={setIngresos} suffix="€" step={100} min={0} />
          <Field label="Gastos deducibles mensuales" value={gastos} onChange={setGastos} suffix="€" step={50} min={0} />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Rendimiento neto mensual" value={rendimientoDirecto} onChange={setRendimientoDirecto} suffix="€" step={100} min={0} />
        </div>
      )}

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="result-card border-brand-500 bg-brand-100">
          <p className="text-sm text-ink-700">Cuota mensual estimada</p>
          <p className="text-3xl font-bold text-brand-700">{formatEUR(r.cuotaMensual)}</p>
          <p className="mt-1 text-xs text-ink-500">a la base mínima de tu tramo</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-ink-600">Cuota anual</p>
          <p className="text-xl font-bold text-brand-700">{formatEUR(r.cuotaAnual)}</p>
          <p className="mt-1 text-xs text-ink-400">12 meses</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-ink-600">Rendimiento neto computable</p>
          <p className="text-xl font-bold text-ink-700">{formatEUR(r.rendimientoNeto)}</p>
          <p className="mt-1 text-xs text-ink-400">tras deducción del 7%</p>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-ink-200">
        <table className="w-full text-sm">
          <thead className="bg-ink-50 text-left text-ink-600">
            <tr>
              <th className="px-4 py-2">Tu tramo de rendimientos</th>
              <th className="px-4 py-2 text-right">Cuota mensual</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-brand-50">
              <td className="px-4 py-2 font-semibold text-brand-800">{r.tramo.label}</td>
              <td className="px-4 py-2 text-right font-bold text-brand-700">{formatEUR(r.cuotaMensual)}/mes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
        <strong>¿Eres nuevo autónomo?</strong> Durante los primeros 12 meses puedes acogerte a la
        <strong> tarifa plana de 80 €/mes</strong> (prorrogable otros 12 meses si tus rendimientos son bajos),
        independientemente de tu tramo.
      </div>

      <p className="mt-2 text-xs text-ink-400">
        Estimación basada en la tabla de cotización por ingresos reales (RETA) de 2025, última oficialmente
        aprobada. La cuota mostrada corresponde a la base mínima de cada tramo; puedes cotizar por una base
        superior para mejorar tu pensión. El rendimiento neto se calcula deduciendo un 7% por gastos de difícil
        justificación (5% para autónomos societarios).
      </p>
    </div>
  );
}
