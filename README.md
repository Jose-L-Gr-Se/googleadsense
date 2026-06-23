# Calculadoras Gratis — Portal financiero monetizado con AdSense

Portal de calculadoras financieras en **Next.js 14 + Tailwind**, optimizado para
SEO y monetización con Google AdSense. Sin base de datos, 100% estático/SSR,
desplegable gratis en Vercel.

## ¿Es viable ganar dinero con esto?

Sí, pero es un juego de paciencia (6–18 meses), no de dinero rápido. El modelo
funciona porque:

1. **Las keywords de finanzas tienen CPC alto** ("hipoteca", "préstamo" pagan
   2–8 € por clic en España).
2. **Las calculadoras retienen al usuario** → más impresiones de anuncios.
3. **El coste de mantenimiento es casi cero** (hosting gratis, sin servidor).

Proyección realista de ingresos:

| Periodo | Visitas/día | Ingresos/mes |
|---|---|---|
| Meses 1–3 | 0–50 | ~0 € (indexación) |
| Meses 4–6 | 100–300 | 15–55 € |
| Meses 7–12 | 500–1.500 | 75–360 € |
| Meses 12–24 | 2.000–5.000 | 360–1.500 € |

El cuello de botella **no es el código, es el SEO y el contenido**. Lo que marca
la diferencia es publicar artículos de cola larga y conseguir enlaces.

## Calculadoras incluidas

- Hipoteca (con tabla de amortización)
- Préstamo personal
- IVA (sumar / quitar 21%, 10%, 4%)
- Interés compuesto
- Finiquito

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Activar Google AdSense

1. Despliega el sitio (ver abajo) con un **dominio propio**.
2. Publica contenido y consigue algo de tráfico real.
3. Solicita el alta en https://adsense.google.com.
4. Cuando te aprueben, edita `lib/config.ts`:
   - `adsense.enabled = true`
   - `adsense.client = "ca-pub-TU_ID"`
   - rellena los `slots` con los IDs de tus bloques de anuncios.
5. Actualiza `public/ads.txt` con tu Publisher ID (sin el prefijo `ca-`).

Mientras `enabled` sea `false`, los anuncios se muestran como placeholders para
poder maquetar sin romper nada.

## Desplegar en Vercel

```bash
npm i -g vercel
vercel
```

O conecta el repo de GitHub en https://vercel.com (deploy automático en cada push).
Después configura tu dominio en Vercel y actualiza `siteConfig.url` en
`lib/config.ts`.

## Hoja de ruta para monetizar (lo importante)

1. **Dominio + despliegue** (hecho con este código).
2. **Google Search Console**: da de alta el sitio y envía el sitemap
   (`/sitemap.xml`).
3. **Contenido**: 2–4 artículos/mes de cola larga ("cuánto pagaré por una
   hipoteca de 200.000€", "cómo se calcula el finiquito por baja voluntaria"…).
4. **Enlaces internos**: ya implementados entre calculadoras.
5. **AdSense**: solicítalo cuando tengas contenido y algo de tráfico.
6. **Itera**: mira en Search Console qué búsquedas traen gente y crea
   calculadoras/artículos para esas intenciones.

## Añadir una calculadora nueva

1. Añade su lógica pura en `lib/finance.ts` (testeable).
2. Crea el componente en `components/calculators/`.
3. Crea la página en `app/calculadora-<slug>/page.tsx`.
4. Regístrala en el array `calculators` de `lib/config.ts`.

Con eso aparece automáticamente en la home, el menú, el footer y el sitemap.

---

Las calculadoras son orientativas y no constituyen asesoramiento financiero.
