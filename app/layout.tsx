import type { Metadata } from "next";
import { Unbounded, Onest, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const onest = Onest({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ТеплоХаб — інженерні системи опалення, водопостачання та каналізації",
  description:
    "ТеплоХаб — проєктування, монтаж та сервіс інженерних систем «під ключ». Опалення, теплові насоси, котли, тепла підлога, водопостачання та каналізація. Нововолинськ, Волинська область.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${unbounded.variable} ${onest.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
