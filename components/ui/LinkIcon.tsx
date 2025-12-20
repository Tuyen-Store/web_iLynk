import { cva } from "class-variance-authority";
import Link from "next/link";

const linkIconVariants = cva(
  "flex items-center justify-start gap-3 group",
  {
    variants: {
      variant: {
        default: "text-base text-heading group hover:text-primary",
        light: "text-base text-heading group hover:text-primary text-white",
        dark: "text-base text-heading group hover:text-primary",
      },
    },
  });

export default function LinkIcon({
  href,
  children,
  label,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  label: string;
  variant?: "default" | "light" | "dark";
}) {
  return (
    <Link href={href} className={linkIconVariants({ variant })}>
      {children}
      <span>{label}</span>
    </Link>
  );
}
