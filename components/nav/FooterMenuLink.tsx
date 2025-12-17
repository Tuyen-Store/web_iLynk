"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FooterMenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <Link
      className={`underline-offset-4 ${pathname === href ? "underline" : "hover:underline"}`}
      href={href}
    >
      {children}
    </Link>
  );
}
