import type { Metadata } from "next";
import { Cormorant, Manrope } from "next/font/google";
import "./globals.css";

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
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
