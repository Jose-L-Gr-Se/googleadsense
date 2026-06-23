// Utilidades de formato para España (euros, porcentajes).

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const num = new Intl.NumberFormat("es-ES", {
  maximumFractionDigits: 2,
});

export function formatEUR(value: number): string {
  if (!isFinite(value)) return "—";
  return eur.format(value);
}

export function formatNumber(value: number): string {
  if (!isFinite(value)) return "—";
  return num.format(value);
}
