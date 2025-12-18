"use client";

import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/types/site.config";
import { Logo } from "@/types/icon";

type LogoElementProps = {
  width?: number;
  height?: number;
  textSize?: string;
};

export default function LogoElement({
  width = 42,
  height = 28,
  textSize = "text-sm",
}: LogoElementProps) {
  return (
    <Link
      href="/"
      className="hover:opacity-75 transition-all flex gap-4 items-center"
    >
      <Image
        src={Logo}
        alt={siteConfig.site_name}
        priority
        className="dark:invert"
        width={width}
        height={height}
      />
      <h2 className={textSize}>{siteConfig.site_name}</h2>
    </Link>
  );
}
