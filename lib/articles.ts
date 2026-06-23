// Metadatos de los artículos del blog.
// Para añadir uno nuevo: crea el archivo en app/blog/[slug]/page.tsx
// y registra aquí los metadatos.

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  // keyword principal objetivo (para referencia interna SEO)
  keyword: string;
  // tiempo estimado de lectura en minutos
  readTime: number;
};

export const articles: ArticleMeta[] = [
  {
    slug: "hipoteca-200000-euros-cuota-mensual",
    title: "Hipoteca de 200.000 euros: cuánto se paga al mes en 2026",
    description:
      "Calcula exactamente cuánto pagarás al mes por una hipoteca de 200.000 euros según el plazo y el tipo de interés. Con ejemplos reales y tabla comparativa.",
    date: "2026-06-01",
    keyword: "hipoteca 200000 euros cuota mensual",
    readTime: 6,
  },
  {
    slug: "diferencia-tin-tae",
    title: "Diferencia entre TIN y TAE: qué es y cómo afecta a tu préstamo",
    description:
      "Explicación clara de qué es el TIN y la TAE, en qué se diferencian y cuál debes mirar para comparar hipotecas y préstamos personales.",
    date: "2026-06-08",
    keyword: "diferencia tin tae",
    readTime: 5,
  },
  {
    slug: "calcular-finiquito-baja-voluntaria",
    title: "Cómo calcular el finiquito por baja voluntaria paso a paso",
    description:
      "Guía completa para calcular tu finiquito si te vas por baja voluntaria: qué conceptos incluye, qué no cobra, y cómo revisar que el importe es correcto.",
    date: "2026-06-15",
    keyword: "calcular finiquito baja voluntaria",
    readTime: 7,
  },
  {
    slug: "interes-compuesto-ejemplos",
    title: "Interés compuesto: qué es, cómo funciona y ejemplos reales",
    description:
      "Aprende qué es el interés compuesto con ejemplos numéricos reales. Descubre por qué Einstein lo llamó la octava maravilla del mundo y cómo aprovecharlo.",
    date: "2026-06-22",
    keyword: "interes compuesto ejemplos",
    readTime: 6,
  },
];
