// Configuración central del sitio.
// Cambia estos valores cuando tengas tu dominio y tu cuenta de AdSense aprobada.

export const siteConfig = {
  name: "Calculadoras Claras",
  url: "https://calculadorasclaras.es",
  description:
    "Calculadoras financieras gratuitas: hipoteca, préstamos, IVA, IRPF, interés compuesto y finiquito. Resultados al instante y sin registro.",

  // Google Analytics 4.
  // 1) Crea una propiedad en https://analytics.google.com
  // 2) Copia el Measurement ID (formato G-XXXXXXXXXX)
  // 3) Añádelo como variable de entorno GA_MEASUREMENT_ID en Vercel
  //    (Settings → Environment Variables) o pégalo aquí directamente.
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-QXTERWPX6G",
  locale: "es_ES",

  // Google AdSense.
  // 1) Date de alta en https://adsense.google.com
  // 2) Sustituye ca-pub-0000000000000000 por tu Publisher ID real.
  // 3) Crea bloques de anuncios y pega aquí los "slot" numéricos.
  adsense: {
    enabled: false, // ponlo en true cuando AdSense apruebe el sitio
    client: "ca-pub-0000000000000000",
    slots: {
      inArticle: "0000000000",
      sidebar: "1111111111",
      footer: "2222222222",
    },
  },
};

export type CalculatorMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  // keyword principal + intención de búsqueda (uso interno/SEO)
  keyword: string;
};

// Catálogo de calculadoras. Añadir una nueva aquí + su página la integra en
// home, menú, sitemap y enlaces internos automáticamente.
export const calculators: CalculatorMeta[] = [
  {
    slug: "hipoteca",
    title: "Calculadora de hipoteca",
    shortTitle: "Hipoteca",
    description:
      "Calcula la cuota mensual de tu hipoteca, los intereses totales y la tabla de amortización completa.",
    keyword: "calculadora hipoteca",
  },
  {
    slug: "prestamo",
    title: "Calculadora de préstamo personal",
    shortTitle: "Préstamo",
    description:
      "Calcula la cuota mensual y el coste total de un préstamo personal según importe, plazo y tipo de interés.",
    keyword: "calculadora prestamo personal",
  },
  {
    slug: "iva",
    title: "Calculadora de IVA",
    shortTitle: "IVA",
    description:
      "Suma o quita el IVA de cualquier importe (21%, 10%, 4%) y obtén la base imponible al instante.",
    keyword: "calculadora iva",
  },
  {
    slug: "interes-compuesto",
    title: "Calculadora de interés compuesto",
    shortTitle: "Interés compuesto",
    description:
      "Simula el crecimiento de tus ahorros e inversiones con aportaciones periódicas y la magia del interés compuesto.",
    keyword: "calculadora interes compuesto",
  },
  {
    slug: "finiquito",
    title: "Calculadora de finiquito",
    shortTitle: "Finiquito",
    description:
      "Estima tu finiquito: salario pendiente, vacaciones no disfrutadas y pagas extra prorrateadas.",
    keyword: "calculadora finiquito",
  },
  {
    slug: "irpf",
    title: "Calculadora de IRPF 2026",
    shortTitle: "IRPF",
    description:
      "Calcula la retención de IRPF sobre tu salario bruto según los tramos del impuesto vigentes en 2026.",
    keyword: "calculadora irpf 2026",
  },
  {
    slug: "nomina",
    title: "Calculadora de nómina: de bruto a neto",
    shortTitle: "Nómina",
    description:
      "Calcula tu salario neto a partir del bruto. Descuenta la Seguridad Social y el IRPF y ve exactamente cuánto cobrarás cada mes.",
    keyword: "calculadora nomina bruto neto",
  },
];
