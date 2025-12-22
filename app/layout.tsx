import "./globals.css";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

import { siteConfig } from "@/types/site.config";

import type { Metadata } from "next";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const font = localFont({
  src: [
    {
      path: "../assets/fonts/Geomanist/Geomanist-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geomanist/Geomanist-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geomanist/Geomanist-Book.otf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geomanist/Geomanist-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geomanist/Geomanist-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geomanist/Geomanist-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geomanist/Geomanist-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geomanist/Geomanist-Ultra.otf",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const fontIconFlaticon = localFont({
  src: [
    {
      path: "../assets/fonts/Flaticon-Set-Business/flaticon-set-business.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-icon-flaticon",
  display: "block",
});

const fontIconLineariconsFree = localFont({
  src: [
    {
      path: "../assets/fonts/linearicons-free/linearicons-free.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-linearicons-free",
  display: "block",
});

export const metadata: Metadata = {
  title: "iLynk - Digital Agency",
  description:
    "iLynk is a digital agency that provides web development, digital marketing, and SEO services.",
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scrollbar-custom">
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          font.variable,
          fontIconFlaticon.variable,
          fontIconLineariconsFree.variable
        )}
      >
        <SmoothScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
