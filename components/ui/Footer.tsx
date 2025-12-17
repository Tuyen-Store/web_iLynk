import { siteConfig } from "@/types/site.config";
import { Container, Section } from "../craft";
import Link from "next/link";
import { mainMenu, servicesMenu } from "@/types/menu.config";
import { FooterMenuLink } from "@/components/nav/FooterMenuLink";
import Image from "next/image";
import Logo from "@/public/logo.svg";

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
                  style={{ width: "42px", height: "28px" }}
                  width={42}
                  height={28}
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

export default Footer;