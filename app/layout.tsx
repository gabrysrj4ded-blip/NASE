import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AppBackground from "@/components/layout/AppBackground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NASE",
  description: "ALL IN ONE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBackground>
          {children}
        </AppBackground>
      </body>
    </html>
  );
}