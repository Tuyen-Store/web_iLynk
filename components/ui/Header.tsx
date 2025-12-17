import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/logo.svg";
import { siteConfig } from "@/types/site.config";
import { mainMenu } from "@/types/menu.config";
import { Button } from "@/components/ui/Button";

import { NavMenuLink } from "@/components/nav/NavMenuLink";
import { MobileNavNoSSR } from "@/components/nav/MobileNavNoSSR";

const Nav = ({ className, children, id }: NavProps) => {
    return (
      <nav
        className={cn("sticky z-50 top-0 bg-background menu-horizontal", "border-b", className)}
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
              style={{ width: "42px", height: "28px" }}
              width={42}
              height={28}
            ></Image>
            <h2 className="text-sm">{siteConfig.site_name}</h2>
          </Link>
          {children}
          <div className="flex items-center gap-2">
            <div className="mx-2 hidden md:flex  gap-0.5">
              {mainMenu.map((item) => (
                <NavMenuLink key={item.href} href={item.href}>
                  {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                </NavMenuLink>
              ))}
            </div>
            <Button asChild className="hidden sm:flex">
              <Link href="/">Tư vấn ngay</Link>
            </Button>
            <MobileNavNoSSR />
          </div>
        </div>
      </nav>
    );
  };

export default Nav;