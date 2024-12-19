import type { Metadata } from "next";
import { Urbanist } from "next/font/google"
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";

const urbanist = Urbanist({weight: ["400", "500", "600", "700"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Learnoo",
  description: "Learning DZ platform",
};

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale} >
      <head>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      </head>
      <body className={urbanist.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
