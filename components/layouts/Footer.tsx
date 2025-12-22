"use client";
import { siteConfig } from "@/types/site.config";
import { Container, Section } from "../craft";
import Link from "next/link";
import { mainMenu, servicesMenu, termsMenu } from "@/types/menu.config";
import { FooterMenuLink } from "@/components/ui/FooterMenuLink";
import Image from "next/image";

import LinkIcon from "@/components/ui/LinkIcon";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

import {
  IconDoubleArrowUp,
  IconMailOutline,
  IconMapOutline,
  IconPhoneOutline,
  Logo,
} from "@/types/icon";

import { Image1, Image2, Pattern1, Scribble1 } from "@/types/image";

const contactItems: Array<{
  href: string;
  label: string;
  icon: string | { src: string };
}> = [
  {
    href: `tel:${siteConfig.site_phone}`,
    label: siteConfig.site_phone,
    icon: IconPhoneOutline,
  },
  {
    href: `mailto:${siteConfig.site_email}`,
    label: siteConfig.site_email,
    icon: IconMailOutline,
  },
  {
    href: `${siteConfig.google_map_link}`,
    label: siteConfig.site_address,
    icon: IconMapOutline,
  },
];

const Footer = () => {
  return (
    <footer>
      <Section className="bg-secondary">
        <div className="container">
          <div className="pt-20 relative">
            <div className="rounded-3xl overflow-hidden bg-white">
              <div className="absolute bottom-0 left-10 h-full z-2 hidden xl:block">
                <Image
                  src={Image1}
                  alt="Image"
                  width={240}
                  height={150}
                  className="object-contain h-full"
                />
              </div>
              <div className="md:p-14 p-6 grid grid-cols-1 md:grid-cols-10 xl:grid-cols-5 gap-8 items-center relative">
                <div
                  className="absolute top-0 right-0 w-full h-full hidden md:block"
                  style={{
                    backgroundImage: `url(${Image2.src})`,
                    backgroundSize: "600px",
                    backgroundPosition: "right bottom",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full z-1">
                  <Image
                    src={Pattern1}
                    alt="Image"
                    className="object-cover w-full h-full opacity-30"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-primary md:bg-transparent md:bg-[linear-gradient(270deg,#FFFFFF40_12%,#FFAA17_30%)]"></div>
                <div className="hidden xl:block "></div>
                <div className="col-span-1 md:col-span-7 xl:col-span-3 z-1 relative">
                  <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug max-w-152">
                    Bạn đang tìm kiếm chuyên gia tư vấn kinh doanh chuyên
                    nghiệp?
                  </h2>

                  <div className="absolute -bottom-6 right-24 h-full z-2 animate-float hidden xl:block">
                    <Image
                      src={Scribble1}
                      alt="Image"
                      width={100}
                      height={100}
                      className="object-contain h-full"
                    />
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="max-w-52 btn-slide-primary relative md:ml-auto w-full z-1 md:col-span-3 xl:col-span-1"
                  size="lg"
                  rounded="none"
                  font="medium"
                  uppercase={true}
                >
                  <div className="z-1">Bắt đầu miễn phí</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Container className="grid xl:grid-cols-[400px_1fr] grid-cols-1 gap-20 pb-10 pt-28">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">{siteConfig.site_name}</h3>
              <div className="brightness-0 invert">
                <Image src={Logo} alt="Logo" width={42} height={28} />
              </div>
            </Link>
            <p className="text-base text-white text-justify">
              {siteConfig.site_description}
            </p>
          </div>

          <div className="grid lg:grid-cols-7 grid-cols-1 gap-16">
            <div className="flex flex-col gap-2 text-sm col-span-2">
              <h5 className="font-medium text-2xl text-white">Dịch vụ</h5>
              <div className="flex flex-col gap-3 pt-4">
                {servicesMenu.map((item) => (
                  <FooterMenuLink key={item.href} href={item.href}>
                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                  </FooterMenuLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm col-span-2">
              <h5 className="font-medium text-2xl text-white">Menu</h5>
              <div className="flex flex-col gap-3 pt-4">
                {mainMenu.map((item) => (
                  <FooterMenuLink key={item.href} href={item.href}>
                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                  </FooterMenuLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm col-span-3">
              <h5 className="font-medium text-2xl text-white">Liên hệ</h5>
              <div className="flex flex-col gap-3 pt-4">
                {contactItems.map((item) => (
                  <LinkIcon
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    variant="light"
                  >
                    <Icon
                      icon={item.icon}
                      iconSize="w-7 h-7"
                    />
                  </LinkIcon>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <div className="relative py-10">
          <div className="border-t border-border opacity-5"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary rounded-2xl w-14 h-14 flex items-center justify-center">
            <Icon
              icon={IconDoubleArrowUp}
              iconSize="w-8 h-8"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </div>
        </div>
        <Container className="not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center pt-6">
          <p className="text-sm text-body">
            © 2025 iLynk. All rights reserved.
          </p>

          <div className="flex md:flex-row flex-col gap-3">
            {termsMenu.map((item) => (
              <FooterMenuLink key={item.href} href={item.href} variant="small">
                {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
              </FooterMenuLink>
            ))}
          </div>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
