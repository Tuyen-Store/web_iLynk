"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

export function NavMenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Button asChild variant={isActive ? "currentGhost" : "ghost"} size="sm">
      <Link href={href}>{children}</Link>
    </Button>
  );
}
