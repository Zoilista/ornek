/**
 * 42Torque Detail Lab — Site Configuration
 *
 * This file centralizes all brand and contact information.
 * When adapting this demo for a real client, update the values below.
 * Fields marked DEMO should be replaced with real data before going live.
 */

export const siteConfig = {
  // Brand
  brandName: "42Torque",
  brandSuffix: "DETAIL LAB",
  slogan: "Aracınızın en iyi hâli, detaylarda başlar.",
  description:
    "42Torque Detail Lab için hazırlanan kurgusal premium otomotiv detailing demosu. Araç bakımı, pasta-cila, seramik kaplama ve boya koruma hizmetlerini keşfedin.",

  // Meta
  pageTitle: "42Torque Detail Lab | Premium Araç Detaylandırma",
  metaDescription:
    "42Torque Detail Lab için hazırlanan kurgusal premium otomotiv detailing demosu. Araç bakımı, pasta-cila, seramik kaplama ve boya koruma hizmetlerini keşfedin.",

  // Contact — DEMO: Replace with real values for production
  phone: null as string | null,           // e.g. "+90 332 000 00 00"
  whatsapp: null as string | null,        // e.g. "+905320000000"
  email: null as string | null,           // e.g. "info@42torque.com"
  location: null as string | null,        // e.g. "Selçuklu, Konya"
  locationMapUrl: null as string | null,  // e.g. Google Maps URL
  openingHours: null as string | null,    // e.g. "Pzt–Cmt 09:00–18:00"

  // Social — DEMO: Replace with real URLs
  instagram: null as string | null,       // e.g. "https://instagram.com/42torque"
  facebook: null as string | null,
  youtube: null as string | null,

  // Demo flag — set to false when deploying for a real client
  isDemo: true,
  demoNotice: "42Torque Detail Lab — Kurgusal portföy çalışmasıdır.",
} as const;

export type SiteConfig = typeof siteConfig;
