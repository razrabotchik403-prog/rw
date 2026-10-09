
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Road Wizard — умный мониторинг дорог",
    template: "%s | Road Wizard",
  },
  description:
    "Road Wizard — платформа мониторинга состояния дорожного покрытия с помощью данных GPS и датчиков смартфона.",
  applicationName: "Road Wizard",
  keywords: [
    "Road Wizard",
    "мониторинг дорог",
    "дорожная инфраструктура",
    "GPS",
    "анализ дорожного покрытия",
  ],
  openGraph: {
    title: "Road Wizard — умный мониторинг дорог",
    description:
      "Превращаем данные смартфона в информацию о состоянии дорожного покрытия.",
    siteName: "Road Wizard",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
