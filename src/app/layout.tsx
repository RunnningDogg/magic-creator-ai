import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
// const inter = Inter({ subsets: ["latin"] });

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster as ShadnCnToaster } from "@/components/ui/toaster";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import Header from "@/components/ui-tony/general/header";
import Footer from "@/components/ui-tony/footer";
// import GoogleAnalytics from "./GoogleAnalytic";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GPT Store: find out the useful GPTs by OPENAI",
  keywords:
    "gpts store, gpts, gpts shop,ai chat,ai,chap gpt,chat gbt,chat gpt 3,chat gpt login,chat gpt website,chat gpt,chat gtp,chat openai,chat,chatai,chatbot gpt,chatg,chatgpt login,chatgpt,gpt chat,open ai,openai chat,openai chatgpt,openai",
  description:
    "Explore GPTs-Store.net for the latest in GPT advancements. Uncover unique insights and harness the power of GPTs in AI. Your gateway to the GPT universe!",
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
        <Header />
        {children}
        <Footer />

        {/* toaster & analytic */}
        <ShadnCnToaster />
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

        {/* heatmap */}
        {/* <!-- Hotjar Tracking Code for https://www.gpts-store.net/ --> */}
        <Script id="heatmap">
          {` 
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3731587,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `}
        </Script>
      </body>
    </html>
  );
}
