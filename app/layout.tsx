import type { Metadata } from "next";
import { Urbanist } from "next/font/google"
import "./globals.css";
import Header from "@/components/common/header";

const urbanist = Urbanist({weight: ["400", "500", "600", "700"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "learnoo",
  description: "Learning DZ platform",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="ltr" lang="en">
      <head>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      </head>
      <body className={urbanist.className}>
        {children}
      </body>
    </html>
  );
}
