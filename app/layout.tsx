import "./globals.css";

import { Section, Container } from "@/components/craft";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MobileNav } from "@/components/nav/MobileNav";
import { NavMenuLink } from "@/components/nav/NavMenuLink";
import { FooterMenuLink } from "@/components/nav/FooterMenuLink";
import { Analytics } from "@vercel/analytics/react";
// import LumaButton from "./framer/LumaButton";
import { Button } from "@/components/ui/Button";

import { mainMenu, contentMenu, servicesMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WordPress & Next.js Starter by 9d8",
  description:
    "A starter template for Next.js with WordPress as a headless CMS.",
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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen font-sans antialiased", font.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn("sticky z-50 top-0 bg-background", "border-b", className)}
      id={id}
    >
      <div
        id="nav-container"
        className="container py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-4 items-center"
          href="/"
        >
          <Image
            src={Logo}
            alt="Logo"
            loading="eager"
            className="dark:invert"
            width={42}
            height={26.44}
          ></Image>
          <h2 className="text-sm">{siteConfig.site_name}</h2>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            {mainMenu.map((item) => (
              <NavMenuLink key={item.href} href={item.href}>
                {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
              </NavMenuLink>
            ))}
          </div>
          <Button asChild className="hidden sm:flex">
            {/* <LumaButton variant="primary">Tư vấn ngay</LumaButton> */}
            <Link href="/">Tư vấn ngay</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer>
      <Section className="md:pb-0">
        <Container className="grid lg:grid-cols-[1fr_300px_200px_200px] grid-cols-1 gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">{siteConfig.site_name}</h3>
              <Image
                src={Logo}
                alt="Logo"
                className="dark:invert"
                width={42}
                height={26.44}
              ></Image>
            </Link>
            <p className="text-sm">{siteConfig.site_description}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base">Dịch vụ</h5>
            {servicesMenu.map((item) => (
              <Link
                className="hover:underline underline-offset-4"
                key={item.href}
                href={item.href}
              >
                {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base">Menu</h5>
            {mainMenu.map((item) => (
              <FooterMenuLink key={item.href} href={item.href}>
                {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
              </FooterMenuLink>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base">Liên hệ</h5>
            <div className="">
              <p className="">{siteConfig.site_phone}</p>
              <p className="">{siteConfig.site_email}</p>
            </div>
          </div>
        </Container>
        <div className="border-t"></div>
        <Container className="not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <p className="text-muted-foreground text-xs">
            © 2025 iLynk. All rights reserved.
          </p>
        </Container>
      </Section>
    </footer>
  );
};
