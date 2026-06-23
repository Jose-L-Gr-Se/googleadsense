"use client";

import { useMemo, useState } from "react";
import Field from "@/components/ui/Field";
import { formatEUR } from "@/lib/format";

/**
 * Estimación simplificada de finiquito:
 * - Salario de los días trabajados del último mes
 * - Vacaciones no disfrutadas
 * - Parte proporcional de pagas extra (si no están prorrateadas)
 */
export default function Finiquito() {
  const [monthlySalary, setMonthlySalary] = useState(1800);
  const [daysWorked, setDaysWorked] = useState(15);
  const [vacationDays, setVacationDays] = useState(10);
  const [extraMonths, setExtraMonths] = useState(6); // meses generados de pagas extra

  const result = useMemo(() => {
    const dailySalary = monthlySalary / 30;
    const pendingSalary = dailySalary * daysWorked;
    const vacationPay = dailySalary * vacationDays;
    // 2 pagas extra/año -> cada mes genera (2/12) de salario en pagas extra
    const extraPay = (monthlySalary * 2 * extraMonths) / 12;
    const total = pendingSalary + vacationPay + extraPay;
    return { pendingSalary, vacationPay, extraPay, total };
  }, [monthlySalary, daysWorked, vacationDays, extraMonths]);

  return (
    <div className="rounded-xl border border-gray-200 p-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field label="Salario bruto mensual" value={monthlySalary} onChange={setMonthlySalary} suffix="€" step={50} />
        <Field label="Días trabajados sin cobrar" value={daysWorked} onChange={setDaysWorked} suffix="días" step={1} />
        <Field label="Días de vacaciones no disfrutadas" value={vacationDays} onChange={setVacationDays} suffix="días" step={1} />
        <Field label="Meses de paga extra generados" value={extraMonths} onChange={setExtraMonths} suffix="meses" step={1} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="result-card">
          <p className="text-sm text-gray-600">Salario pendiente</p>
          <p className="text-lg font-bold text-brand-700">{formatEUR(result.pendingSalary)}</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-gray-600">Vacaciones</p>
          <p className="text-lg font-bold text-brand-700">{formatEUR(result.vacationPay)}</p>
        </div>
        <div className="result-card">
          <p className="text-sm text-gray-600">Pagas extra</p>
          <p className="text-lg font-bold text-brand-700">{formatEUR(result.extraPay)}</p>
        </div>
        <div className="result-card border-brand-500 bg-brand-100">
          <p className="text-sm text-gray-700">Total finiquito (bruto)</p>
          <p className="text-lg font-bold text-brand-700">{formatEUR(result.total)}</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Cálculo orientativo en bruto. No incluye indemnización por despido ni
        retenciones de IRPF. Consulta tu convenio colectivo.
      </p>
    </div>
  );
}
