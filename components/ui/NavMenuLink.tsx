"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { IconExpandMore } from "@/types/icon";

const menuLinkVariants = cva(
  "relative flex items-center transition-colors duration-300 group",
  {
    variants: {
      variant: {
        default: "text-base font-regular text-heading",
        menuHeader: "text-base font-regular uppercase text-heading",
      },
      active: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function NavMenuLink({
  href,
  children,
  underline = false,
  iconArrow = false,
  variant = "default",
  className = "",
  customArrowIcon,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "menuHeader";
  underline?: boolean;
  iconArrow?: boolean;
  className?: string;
  customArrowIcon?: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        menuLinkVariants({
          variant: variant,
          active: isActive,
        }),
        className
      )}
    >
      <div className="relative">
        {children}

        {underline && (
          <span
            className={cn(
              "absolute left-0 bottom-0 h-px w-full bg-heading",
              "scale-x-0 origin-left transition-transform duration-300",
              "group-hover:scale-x-100",
              isActive && "scale-x-100"
            )}
          />
        )}
      </div>

      {iconArrow && (
        customArrowIcon ?? (
          <span className="ml-1 inline-flex rotate-0 transition-transform duration-200 ease-out group-hover:rotate-180">
            <Icon icon={IconExpandMore} iconSize={16} width={16} height={16} />
          </span>
        )
      )}
    </Link>
  );
}
