// Funciones financieras puras (sin dependencias de UI). Fáciles de testear.

export type AmortizationRow = {
  month: number;
  payment: number;
  interest: number;
  principal: number;
  balance: number;
};

/**
 * Cuota mensual de un préstamo francés (cuota constante).
 * @param principal capital prestado
 * @param annualRate tipo de interés nominal anual en % (ej. 3.5)
 * @param months número de mensualidades
 */
export function monthlyPayment(
  principal: number,
  annualRate: number,
  months: number
): number {
  if (months <= 0) return 0;
  const i = annualRate / 100 / 12;
  if (i === 0) return principal / months;
  return (principal * i) / (1 - Math.pow(1 + i, -months));
}

/** Tabla de amortización completa de un préstamo francés. */
export function amortizationSchedule(
  principal: number,
  annualRate: number,
  months: number
): AmortizationRow[] {
  const rows: AmortizationRow[] = [];
  const i = annualRate / 100 / 12;
  const payment = monthlyPayment(principal, annualRate, months);
  let balance = principal;
  for (let m = 1; m <= months; m++) {
    const interest = balance * i;
    const principalPart = payment - interest;
    balance = Math.max(0, balance - principalPart);
    rows.push({
      month: m,
      payment,
      interest,
      principal: principalPart,
      balance,
    });
  }
  return rows;
}

/**
 * Valor final de una inversión con aportación inicial + aportaciones
 * periódicas mensuales e interés compuesto.
 */
export function compoundInterest(params: {
  initial: number;
  monthlyContribution: number;
  annualRate: number;
  years: number;
}): { finalValue: number; totalContributed: number; totalInterest: number } {
  const { initial, monthlyContribution, annualRate, years } = params;
  const months = Math.round(years * 12);
  const i = annualRate / 100 / 12;
  let balance = initial;
  for (let m = 0; m < months; m++) {
    balance = balance * (1 + i) + monthlyContribution;
  }
  const totalContributed = initial + monthlyContribution * months;
  return {
    finalValue: balance,
    totalContributed,
    totalInterest: balance - totalContributed,
  };
}
