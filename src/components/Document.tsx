import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import "@/app/globals.css";
import "@/app/site.css";
import "@/app/products.css";
import "@/app/industries.css";
import "@/app/company.css";
import "@/app/design.css";
import "@/app/inner.css";
import "@/app/products-refined.css";
import "@/app/industries-refined.css";
import "@/app/company-refined.css";
import "@/app/localization.css";

export default function Document({ children, locale }: { children: ReactNode; locale: Locale }) {
  const cyrillic = ["uk", "be", "kk"].includes(locale);
  const headingFont = cyrillic ? "manrope-cyrillic.woff2" : "manrope-latin.woff2";
  const bodyFont = cyrillic ? "ibm-plex-sans-cyrillic.woff2" : "ibm-plex-sans-latin.woff2";
  return (
    <html lang={locale}>
      <head>
        <link rel="preload" href={`/fonts/${headingFont}`} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href={`/fonts/${bodyFont}`} as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
