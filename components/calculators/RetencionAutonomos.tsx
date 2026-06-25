"use client";

import { useState } from "react";

// Tramos IRPF 2026 (escala general estatal + autonómica media orientativa)
// Usamos la escala estatal × 2 como aproximación del tipo integrado medio
const TRAMOS = [
  { hasta: 12450, tipo: 19 },
  { hasta: 20200, tipo: 24 },
  { hasta: 35200, tipo: 30 },
  { hasta: 60000, tipo: 37 },
  { hasta: 300000, tipo: 45 },
  { hasta: Infinity, tipo: 47 },
];

function calcularTipoMedioIRPF(base: number): number {
  if (base <= 0) return 0;
  let cuota = 0;
  let anterior = 0;
  for (const t of TRAMOS) {
    if (base <= anterior) break;
    const tramo = Math.min(base, t.hasta) - anterior;
    cuota += tramo * (t.tipo / 100);
    anterior = t.hasta;
  }
  return (cuota / base) * 100;
}

function fmt(n: number) {
  return n.toLocaleString("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
}

export default function RetencionAutonomos() {
  const [ingresos, setIngresos] = useState(15000);
  const [gastos, setGastos] = useState(3000);
  const [retencionesRecibidas, setRetencionesRecibidas] = useState(0);
  const [pagosPrevios, setPagosPrevios] = useState(0);
  const [trimestre, setTrimestre] = useState<1 | 2 | 3 | 4>(1);
  const [modoPago, setModoPago] = useState<"20" | "tipo">("20");

  const rendimientoTrimestre = Math.max(0, ingresos - gastos);
  const rendimientoAnualEstimado = rendimientoTrimestre * 4;

  // Pago fraccionado modelo 130
  // 20% sobre rendimiento neto acumulado - retenciones recibidas - pagos previos
  const basePago = rendimientoTrimestre * trimestre; // acumulado hasta este trimestre
  const pago130 = Math.max(0, basePago * 0.2 - retencionesRecibidas - pagosPrevios);

  // Tipo medio estimado sobre el anual
  const tipoMedioEstimado = calcularTipoMedioIRPF(rendimientoAnualEstimado);
  const cuotaAnualEstimada = rendimientoAnualEstimado * (tipoMedioEstimado / 100);
  const totalPagadoFin = pago130 + pagosPrevios;
  const restoDiciembre = Math.max(0, cuotaAnualEstimada - totalPagadoFin - retencionesRecibidas);

  return (
    <div className="surface-card p-6 space-y-6">
      {/* Trimestre */}
      <div>
        <label className="block text-sm font-medium text-ink-700 mb-2">Trimestre que vas a presentar</label>
        <div className="grid grid-cols-4 gap-2">
          {([1, 2, 3, 4] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTrimestre(t)}
              className={`rounded-xl border py-2 text-sm font-semibold transition ${
                trimestre === t
                  ? "border-brand-400 bg-brand-50 text-brand-700"
                  : "border-ink-200 bg-white text-ink-600 hover:border-brand-300"
              }`}
            >
              {t}T
            </button>
          ))}
        </div>
        <p className="mt-1.5 text-xs text-ink-400">
          1T: enero-marzo · 2T: abril-junio · 3T: julio-septiembre · 4T: octubre-diciembre
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Ingresos del trimestre */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            Ingresos del trimestre
          </label>
          <div className="relative">
            <input
              type="number"
              min={0}
              value={ingresos}
              onChange={(e) => setIngresos(Number(e.target.value))}
              className="field-input pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">€</span>
          </div>
          <p className="mt-1 text-xs text-ink-400">Facturación total emitida en el trimestre (sin IVA)</p>
        </div>

        {/* Gastos */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            Gastos deducibles del trimestre
          </label>
          <div className="relative">
            <input
              type="number"
              min={0}
              value={gastos}
              onChange={(e) => setGastos(Number(e.target.value))}
              className="field-input pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">€</span>
          </div>
          <p className="mt-1 text-xs text-ink-400">Cuota autónomos, suministros, material, gestoría…</p>
        </div>

        {/* Retenciones recibidas acumuladas */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            Retenciones acumuladas del año (facturas con retención)
          </label>
          <div className="relative">
            <input
              type="number"
              min={0}
              value={retencionesRecibidas}
              onChange={(e) => setRetencionesRecibidas(Number(e.target.value))}
              className="field-input pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">€</span>
          </div>
          <p className="mt-1 text-xs text-ink-400">Si todas tus facturas llevan retención del 15%, quizás no tengas obligación de presentar el 130</p>
        </div>

        {/* Pagos previos */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            Pagos fraccionados ingresados en trimestres anteriores
          </label>
          <div className="relative">
            <input
              type="number"
              min={0}
              value={pagosPrevios}
              onChange={(e) => setPagosPrevios(Number(e.target.value))}
              className="field-input pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">€</span>
          </div>
          <p className="mt-1 text-xs text-ink-400">Lo que ya pagaste en el 1T, 2T y/o 3T de este año</p>
        </div>
      </div>

      {/* Resultados */}
      <div className="space-y-3">
        {/* Pago principal */}
        <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-6 text-white">
          <p className="text-sm text-brand-200">Pago fraccionado modelo 130 — {trimestre}T</p>
          <p className="mt-1 text-4xl font-bold">{fmt(pago130)}</p>
          <p className="text-xs text-brand-200 mt-1">20% × {fmt(rendimientoTrimestre * trimestre)} (acumulado) − retenciones − pagos previos</p>

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/20 pt-4 text-center text-sm">
            <div>
              <p className="text-brand-200 text-xs">Rdto. neto trimestre</p>
              <p className="font-bold">{fmt(rendimientoTrimestre)}</p>
            </div>
            <div>
              <p className="text-brand-200 text-xs">Tipo aplicado</p>
              <p className="font-bold">20%</p>
            </div>
            <div>
              <p className="text-brand-200 text-xs">Rdto. anual estimado</p>
              <p className="font-bold">{fmt(rendimientoAnualEstimado)}</p>
            </div>
          </div>
        </div>

        {/* Estimación IRPF anual */}
        <div className="rounded-xl border border-ink-200 bg-white p-4">
          <p className="text-sm font-semibold text-ink-700 mb-3">Estimación IRPF anual (orientativa)</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-ink-50 p-3">
              <p className="text-ink-500 text-xs">Rendimiento neto anual estimado</p>
              <p className="font-bold text-ink-900 mt-0.5">{fmt(rendimientoAnualEstimado)}</p>
            </div>
            <div className="rounded-lg bg-ink-50 p-3">
              <p className="text-ink-500 text-xs">Tipo medio IRPF estimado</p>
              <p className="font-bold text-ink-900 mt-0.5">{tipoMedioEstimado.toFixed(1)}%</p>
            </div>
            <div className="rounded-lg bg-ink-50 p-3">
              <p className="text-ink-500 text-xs">Cuota anual estimada</p>
              <p className="font-bold text-ink-900 mt-0.5">{fmt(cuotaAnualEstimada)}</p>
            </div>
            <div className="rounded-lg bg-brand-50 p-3 border border-brand-100">
              <p className="text-brand-600 text-xs">Resto a pagar en la Renta</p>
              <p className="font-bold text-brand-700 mt-0.5">{fmt(restoDiciembre)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-blue-50 border border-blue-200 p-4 text-sm text-blue-800">
        <strong>¿Cuándo no hay que presentar el modelo 130?</strong> Si más del 70% de tus ingresos del año anterior fueron con retención en factura (ej. trabajas solo para empresas que te retienen el 15%), estás exento de presentar el pago fraccionado. Consúltalo con tu gestor/a.
      </div>
    </div>
  );
}
