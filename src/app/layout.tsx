import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { languages } from '@/i18n/settings'
import { I18nProvider } from '@/i18n/i18n'


export async function generateStaticParams() {
  return languages.map((lng) => ({ locale: lng }))
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '今、バンクーバー何時？',
  description: 'バンクーバーと日本の時差を計算するアプリ',
};

type Props = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function RootLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <html lang={locale} dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
        {children}
        </I18nProvider>
      </body>
    </html>
  );
}
