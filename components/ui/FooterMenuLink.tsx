"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";

const footerMenuLinkVariants = cva(
  "underline-offset-4 text-base hover:text-primary",
  {
    variants: {
      variant: {
        default: "text-white text-base hover:text-primary",
        small: "text-sm hover:text-primary text-body",
      },
    },
  }
);

export function FooterMenuLink({
  href,
  children,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "small";
}) {
  const pathname = usePathname();
  return (
    <Link
      className={`${footerMenuLinkVariants({ variant: variant })} ${
        pathname === href ? "text-primary" : "hover:text-primary"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
