'use client';
import { siteConfig } from '@/types/site.config';
import { Container, Section } from '../craft';
import Link from 'next/link';
import { mainMenu, servicesMenu, termsMenu } from '@/types/menu.config';
import { FooterMenuLink } from '@/components/ui/FooterMenuLink';
import Image from 'next/image';

import LinkIcon from '@/components/ui/LinkIcon';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

import {
  IconDoubleArrowUp,
  IconMailOutline,
  IconMapOutline,
  IconPhoneOutline,
  Logo,
} from '@/types/icon';

import { Image1, Image2, Pattern1, Scribble1 } from '@/types/image';

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
          <div className="relative pt-20">
            <div className="overflow-hidden rounded-3xl bg-white">
              <div className="absolute bottom-0 left-10 z-2 hidden h-full xl:block">
                <Image
                  src={Image1}
                  alt="Image"
                  width={240}
                  height={150}
                  className="h-full object-contain"
                />
              </div>
              <div className="relative grid grid-cols-1 items-center gap-8 p-6 md:grid-cols-10 md:p-14 xl:grid-cols-5">
                <div
                  className="absolute top-0 right-0 hidden h-full w-full md:block"
                  style={{
                    backgroundImage: `url(${Image2.src})`,
                    backgroundSize: '600px',
                    backgroundPosition: 'right bottom',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
                <div className="absolute top-0 left-0 z-1 h-full w-full">
                  <Image
                    src={Pattern1}
                    alt="Image"
                    className="h-full w-full object-cover opacity-30"
                  />
                </div>
                <div className="bg-primary absolute bottom-0 left-0 h-full w-full md:bg-transparent md:bg-[linear-gradient(270deg,#FFFFFF40_12%,#FFAA17_30%)]"></div>
                <div className="hidden xl:block"></div>
                <div className="relative z-1 col-span-1 md:col-span-7 xl:col-span-3">
                  <h2 className="max-w-152 text-3xl leading-snug font-bold text-black md:text-4xl">
                    Bạn đang tìm kiếm chuyên gia tư vấn kinh doanh chuyên
                    nghiệp?
                  </h2>

                  <div className="animate-float absolute right-24 -bottom-6 z-2 hidden h-full xl:block">
                    <Image
                      src={Scribble1}
                      alt="Image"
                      width={100}
                      height={100}
                      className="h-full object-contain"
                    />
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="btn-slide-primary relative z-1 w-full max-w-52 md:col-span-3 md:ml-auto xl:col-span-1"
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
        <Container className="grid grid-cols-1 gap-20 pt-28 pb-10 xl:grid-cols-[400px_1fr]">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">{siteConfig.site_name}</h3>
              <div className="brightness-0 invert">
                <Image src={Logo} alt="Logo" width={42} height={28} />
              </div>
            </Link>
            <p className="text-justify text-base text-white">
              {siteConfig.site_description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-7">
            <div className="col-span-2 flex flex-col gap-2 text-sm">
              <h5 className="text-2xl font-medium text-white">Dịch vụ</h5>
              <div className="flex flex-col gap-3 pt-4">
                {servicesMenu.map((item) => (
                  <FooterMenuLink key={item.href} href={item.href}>
                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                  </FooterMenuLink>
                ))}
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-2 text-sm">
              <h5 className="text-2xl font-medium text-white">Menu</h5>
              <div className="flex flex-col gap-3 pt-4">
                {mainMenu.map((item) => (
                  <FooterMenuLink key={item.href} href={item.href}>
                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                  </FooterMenuLink>
                ))}
              </div>
            </div>
            <div className="col-span-3 flex flex-col gap-2 text-sm">
              <h5 className="text-2xl font-medium text-white">Liên hệ</h5>
              <div className="flex flex-col gap-3 pt-4">
                {contactItems.map((item) => (
                  <LinkIcon
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    variant="light"
                  >
                    <Icon icon={item.icon} iconSize="w-7 h-7" />
                  </LinkIcon>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <div className="relative py-10">
          <div className="border-border border-t opacity-5"></div>
          <div className="bg-primary absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl">
            <Icon
              icon={IconDoubleArrowUp}
              iconSize="w-8 h-8"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            />
          </div>
        </div>
        <Container className="not-prose flex flex-col-reverse justify-between gap-6 pt-6 md:flex-row md:items-center md:gap-2">
          <p className="text-body text-sm">
            © 2025 iLynk. All rights reserved.
          </p>

          <div className="flex flex-col gap-3 md:flex-row">
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
