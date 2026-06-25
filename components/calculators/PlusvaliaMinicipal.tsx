"use client";

import { useState } from "react";

// Coeficientes máximos del valor del suelo por años de tenencia
// Fuente: RDL 26/2021 y actualización anual LIRPF. Valores 2024-2025.
const COEFICIENTES: Record<number, number> = {
  1: 0.14, 2: 0.13, 3: 0.15, 4: 0.16, 5: 0.17,
  6: 0.17, 7: 0.16, 8: 0.12, 9: 0.10, 10: 0.09,
  11: 0.08, 12: 0.08, 13: 0.08, 14: 0.08, 15: 0.10,
  16: 0.12, 17: 0.16, 18: 0.20, 19: 0.26, 20: 0.45,
};

function getCoeficiente(anos: number): number {
  const n = Math.min(Math.max(Math.round(anos), 1), 20);
  return COEFICIENTES[n] ?? 0.45;
}

function fmt(n: number) {
  return n.toLocaleString("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
}

export default function PlusvaliaMinicipal() {
  const [valorCatastralTotal, setValorCatastralTotal] = useState(120000);
  const [porcentajeSuelo, setPorcentajeSuelo] = useState(40);
  const [anostenencia, setAnosTenencia] = useState(8);
  const [tipoAyuntamiento, setTipoAyuntamiento] = useState(29);
  const [precioCompra, setPrecioCompra] = useState(200000);
  const [precioVenta, setPrecioVenta] = useState(280000);
  const [metodo, setMetodo] = useState<"objetivo" | "real">("objetivo");

  const valorCatastralSuelo = valorCatastralTotal * (porcentajeSuelo / 100);
  const coef = getCoeficiente(anostenencia);
  const tipo = tipoAyuntamiento / 100;

  // Método objetivo
  const baseImponibleObjetivo = valorCatastralSuelo * coef;
  const cuotaObjetivo = baseImponibleObjetivo * tipo;

  // Método real (plusvalía real del suelo)
  const gananciaTotal = precioVenta - precioCompra;
  const baseImponibleReal = gananciaTotal > 0
    ? gananciaTotal * (porcentajeSuelo / 100)
    : 0;
  const cuotaReal = baseImponibleReal * tipo;

  // Se aplica el menor (contribuyente puede elegir)
  const cuotaFinal = Math.min(cuotaObjetivo, cuotaReal);
  const metodoPaga = cuotaObjetivo <= cuotaReal ? "objetivo" : "real";
  const hayPerdida = gananciaTotal <= 0;

  return (
    <div className="surface-card p-6 space-y-6">
      {/* Método */}
      <div>
        <label className="block text-sm font-medium text-ink-700 mb-2">Datos que quieres introducir</label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { value: "objetivo", label: "Valor catastral + años (método objetivo)" },
            { value: "real", label: "Precio compra/venta (método real)" },
          ].map((m) => (
            <button
              key={m.value}
              onClick={() => setMetodo(m.value as "objetivo" | "real")}
              className={`rounded-xl border p-3 text-left text-sm transition ${
                metodo === m.value
                  ? "border-brand-400 bg-brand-50 text-brand-700"
                  : "border-ink-200 bg-white text-ink-600 hover:border-brand-300"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <p className="mt-1.5 text-xs text-ink-400">
          Puedes rellenar ambos para que la calculadora muestre cuál te conviene más.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Valor catastral */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            Valor catastral total del inmueble
          </label>
          <div className="relative">
            <input
              type="number"
              min={0}
              value={valorCatastralTotal}
              onChange={(e) => setValorCatastralTotal(Number(e.target.value))}
              className="field-input pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">€</span>
          </div>
          <p className="mt-1 text-xs text-ink-400">En el recibo del IBI → valor catastral</p>
        </div>

        {/* % suelo */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            Porcentaje de suelo sobre valor catastral
          </label>
          <div className="relative">
            <input
              type="number"
              min={1}
              max={99}
              value={porcentajeSuelo}
              onChange={(e) => setPorcentajeSuelo(Number(e.target.value))}
              className="field-input pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">%</span>
          </div>
          <p className="mt-1 text-xs text-ink-400">En el recibo del IBI aparece separado. Media España: 35-50%</p>
        </div>

        {/* Años de tenencia */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            Años de tenencia del inmueble
          </label>
          <div className="relative">
            <input
              type="number"
              min={1}
              max={20}
              value={anostenencia}
              onChange={(e) => setAnosTenencia(Number(e.target.value))}
              className="field-input pr-14"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">años</span>
          </div>
          <p className="mt-1 text-xs text-ink-400">Máximo 20 años computable. Redondea al año completo.</p>
        </div>

        {/* Tipo ayuntamiento */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            Tipo impositivo del ayuntamiento
          </label>
          <div className="relative">
            <input
              type="number"
              min={0}
              max={30}
              step={0.1}
              value={tipoAyuntamiento}
              onChange={(e) => setTipoAyuntamiento(Number(e.target.value))}
              className="field-input pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">%</span>
          </div>
          <p className="mt-1 text-xs text-ink-400">Madrid: 29% · Barcelona: 30% · Límite legal: 30%</p>
        </div>

        {/* Precio compra */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            Precio de compra (escritura)
          </label>
          <div className="relative">
            <input
              type="number"
              min={0}
              value={precioCompra}
              onChange={(e) => setPrecioCompra(Number(e.target.value))}
              className="field-input pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">€</span>
          </div>
        </div>

        {/* Precio venta */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            Precio de venta (escritura)
          </label>
          <div className="relative">
            <input
              type="number"
              min={0}
              value={precioVenta}
              onChange={(e) => setPrecioVenta(Number(e.target.value))}
              className="field-input pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">€</span>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Método objetivo */}
          <div className={`rounded-xl border p-4 ${metodoPaga === "objetivo" && !hayPerdida ? "border-brand-400 bg-brand-50" : "border-ink-200 bg-white"}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-ink-700">Método objetivo</span>
              {metodoPaga === "objetivo" && !hayPerdida && (
                <span className="text-xs bg-brand-600 text-white px-2 py-0.5 rounded-full">Se aplica</span>
              )}
            </div>
            <p className="text-2xl font-bold text-ink-900">{fmt(cuotaObjetivo)}</p>
            <p className="text-xs text-ink-400 mt-1">
              Suelo: {fmt(valorCatastralSuelo)} × coef. {coef} × {tipoAyuntamiento}%
            </p>
          </div>

          {/* Método real */}
          <div className={`rounded-xl border p-4 ${metodoPaga === "real" && !hayPerdida ? "border-brand-400 bg-brand-50" : "border-ink-200 bg-white"}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-ink-700">Método real</span>
              {metodoPaga === "real" && !hayPerdida && (
                <span className="text-xs bg-brand-600 text-white px-2 py-0.5 rounded-full">Se aplica</span>
              )}
            </div>
            {hayPerdida ? (
              <>
                <p className="text-2xl font-bold text-green-600">0 €</p>
                <p className="text-xs text-green-700 mt-1">Vendiste con pérdidas → no hay plusvalía que declarar</p>
              </>
            ) : (
              <>
                <p className="text-2xl font-bold text-ink-900">{fmt(cuotaReal)}</p>
                <p className="text-xs text-ink-400 mt-1">
                  Ganancia suelo: {fmt(baseImponibleReal)} × {tipoAyuntamiento}%
                </p>
              </>
            )}
          </div>
        </div>

        {!hayPerdida && (
          <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-5 text-white flex items-center justify-between">
            <div>
              <p className="text-sm text-brand-200">Plusvalía a pagar (método más favorable)</p>
              <p className="mt-1 text-3xl font-bold">{fmt(cuotaFinal)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-brand-200">Coeficiente aplicado</p>
              <p className="text-2xl font-bold">{coef}</p>
              <p className="text-xs text-brand-200">{anostenencia} año{anostenencia !== 1 ? "s" : ""}</p>
            </div>
          </div>
        )}

        {hayPerdida && (
          <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-800">
            <strong>No hay plusvalía que pagar.</strong> Al vender por menos de lo que compraste, no existe incremento de valor y el impuesto es 0 €. Guarda los documentos que lo acrediten.
          </div>
        )}
      </div>

      <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
        <strong>Nota:</strong> La plusvalía municipal la paga el vendedor (salvo pacto en contrario). El resultado es orientativo — cada ayuntamiento puede aplicar tipos inferiores a los máximos legales. Confirma el tipo exacto en tu ayuntamiento antes de la venta.
      </div>
    </div>
  );
}
