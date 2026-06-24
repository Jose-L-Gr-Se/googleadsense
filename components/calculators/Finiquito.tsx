"use client";

import { useMemo, useState } from "react";
import Field from "@/components/ui/Field";
import { formatEUR } from "@/lib/format";

export default function Finiquito() {
  const [monthlySalary, setMonthlySalary] = useState(1800);
  const [daysWorked, setDaysWorked] = useState(15);
  const [vacationDays, setVacationDays] = useState(10);
  // Meses transcurridos desde el cobro de la última paga extra (0-6)
  const [monthsSinceExtra, setMonthsSinceExtra] = useState(4);
  // Si las pagas extra están prorrateadas en nómina ya están cobradas
  const [extrasProrrateadas, setExtrasProrrateadas] = useState(false);

  const result = useMemo(() => {
    const dailySalary = monthlySalary / 30;
    const pendingSalary = dailySalary * daysWorked;
    const vacationPay = dailySalary * vacationDays;
    // 2 pagas extra/año: cada semestre genera 1. Si no están prorrateadas,
    // se calcula la parte proporcional del semestre en curso.
    const extraPay = extrasProrrateadas
      ? 0
      : (monthlySalary * monthsSinceExtra) / 6;
    const total = pendingSalary + vacationPay + extraPay;
    return { pendingSalary, vacationPay, extraPay, total };
  }, [monthlySalary, daysWorked, vacationDays, monthsSinceExtra, extrasProrrateadas]);

  return (
    <div className="surface-card p-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field
          label="Salario bruto mensual"
          value={monthlySalary}
          onChange={setMonthlySalary}
          suffix="€"
          step={50}
          min={1}
        />
        <Field
          label="Días trabajados sin cobrar"
          value={daysWorked}
          onChange={setDaysWorked}
          suffix="días"
          step={1}
          min={0}
        />
        <Field
          label="Días de vacaciones pendientes"
          value={vacationDays}
          onChange={setVacationDays}
          suffix="días"
          step={1}
          min={0}
        />
        <div>
          <label className="block">
            <span className="field-label">
              Meses desde última paga extra
              <span className="ml-1 text-ink-400 font-normal">(0–6)</span>
            </span>
            <input
              type="range"
              min={0}
              max={6}
              step={1}
              value={extrasProrrateadas ? 0 : monthsSinceExtra}
              disabled={extrasProrrateadas}
              onChange={(e) => setMonthsSinceExtra(Number(e.target.value))}
              className="mt-2 w-full accent-brand-600 disabled:opacity-40"
            />
            <span className="mt-1 block text-center text-sm font-medium text-brand-700">
              {extrasProrrateadas ? "—" : `${monthsSinceExtra} ${monthsSinceExtra === 1 ? "mes" : "meses"}`}
            </span>
          </label>
          <label className="mt-2 flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={extrasProrrateadas}
              onChange={(e) => setExtrasProrrateadas(e.target.checked)}
              className="accent-brand-600"
            />
            <span className="text-xs text-ink-600">Mis pagas extra ya están prorrateadas en nómina</span>
          </label>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="result-card">
          <p className="text-sm text-ink-600">Salario pendiente</p>
          <p className="text-lg font-bold text-brand-700">{formatEUR(result.pendingSalary)}</p>
          <p className="text-xs text-ink-400">{daysWorked} días a {formatEUR(monthlySalary / 30)}/día</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-ink-600">Vacaciones</p>
          <p className="text-lg font-bold text-brand-700">{formatEUR(result.vacationPay)}</p>
          <p className="text-xs text-ink-400">{vacationDays} días pendientes</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-ink-600">Pagas extra proporcionales</p>
          <p className="text-lg font-bold text-brand-700">{formatEUR(result.extraPay)}</p>
          <p className="text-xs text-ink-400">
            {extrasProrrateadas ? "Incluidas en nómina mensual" : `${monthsSinceExtra} meses del semestre`}
          </p>
        </div>
        <div className="result-card border-brand-500 bg-brand-100">
          <p className="text-sm font-semibold text-ink-700">Total finiquito (bruto)</p>
          <p className="text-xl font-bold text-brand-700">{formatEUR(result.total)}</p>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">
        <strong>Importante:</strong> Este importe es el finiquito (salario pendiente + vacaciones + pagas extra).
        La <strong>indemnización por despido</strong> es adicional y depende del tipo de despido:
        20 días/año (objetivo) o 33 días/año (improcedente). En baja voluntaria no hay indemnización.
        El total está en bruto; Hacienda aplicará la retención de IRPF correspondiente.
      </div>

      <p className="mt-2 text-xs text-ink-400">
        Cálculo orientativo según el Estatuto de los Trabajadores. Consulta tu convenio colectivo,
        puede establecer condiciones más favorables.
      </p>
    </div>
  );
}
