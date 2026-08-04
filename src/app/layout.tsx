import type { Metadata } from "next";
import { Cormorant, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-V7BRW8ZCS5";

/* Figma type spec (nodes 97:40 / 97:45): headings Cormorant, body Manrope. */
const display = Cormorant({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Price List — An Khê Wellness",
  description:
    "Bảng giá dịch vụ An Khê Wellness: head spa, body rituals, facial, nails, lashes, waxing và sauna.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
        {/* Google tag (gtag.js) — GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </body>
    </html>
  );
}
