import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
// const inter = Inter({ subsets: ["latin"] });

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
// import GoogleAnalytics from "./GoogleAnalytic";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GPTs Store",
  description: "create useful magic creator with others and share with others",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body
        className={cn(
          "min-h-screen bg-slate-100 font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
        <Toaster />
        <Analytics />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XPLK21FMNR"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XPLK21FMNR');
          `}
        </Script>
        <Script
          defer
          data-domain="gpts-store.net"
          src="https://plausible.io/js/script.js"
        ></Script>
      </body>
    </html>
  );
}
