'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { mainMenu } from '@/types/menu.config';
import { siteConfig } from '@/types/site.config';

import { NavMenuLink } from '@/components/ui/NavMenuLink';
import { DesktopHide, DesktopShow } from '@/components/craft';

import { ButtonIconCall } from '@/components/ui/ButtonIconCall';
import Sidebar from '@/components/layouts/Sidebar';
import LogoElement from '@/components/ui/Logo';
import LinkIcon from '@/components/ui/LinkIcon';
import Icon from '@/components/ui/Icon';
import ButtonIcon from '@/components/ui/ButtonIcon';
import {
  IconEmail,
  IconEarthGlobe,
  IconPhoneFilled,
  IconLocation,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconChevronRight,
} from '@/types/icon';

export default function Header({ className, id }: NavProps) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY >= 150);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav
      className={cn(
        'menu-horizontal z-50 w-full border-b border-[#ffffff3b] px-4 sm:px-8',
        'transition-transform duration-300 ease-out',
        isScrolled
          ? 'bg-background fixed top-0 translate-y-0'
          : 'absolute top-0 left-0 w-full',
        className,
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="container flex items-center justify-between gap-8 px-0 py-8"
      >
        <div className="w-full max-w-32">
          <LogoElement width={42} height={28} />
        </div>

        <DesktopShow className="w-full">
          <div className="flex items-center justify-between gap-8">
            <div
              id="menu-header"
              className={cn(
                'mr-auto flex items-center gap-6',
                isScrolled ? 'ml-auto' : '',
              )}
            >
              {mainMenu.map((item) => (
                <div key={item.href} className="group relative">
                  <NavMenuLink
                    href={item.href}
                    variant="menuHeader"
                    underline
                    iconArrow={!!item.children?.length}
                  >
                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                  </NavMenuLink>

                  {item.children?.length && (
                    <>
                      <div className="absolute top-full left-0 z-40 h-14 w-full" />

                      <div className="pointer-events-none invisible absolute top-14 left-0 z-50 translate-y-2 pt-2 opacity-0 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="bg-background min-w-60 origin-top -translate-y-2 opacity-0 shadow-md transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                          {item.children.map((child, idx) => {
                            const isChildActive =
                              pathname === child.href ||
                              pathname.startsWith(`${child.href}/`);

                            return (
                              <div
                                key={child.href}
                                className={cn(
                                  'border-border relative not-last:border-b',
                                  'transition-all duration-200 ease-out',
                                  'translate-y-2 opacity-0',
                                  'hover:bg-primary/5 group-hover:translate-y-0 group-hover:opacity-100',
                                  'group/item',
                                  isChildActive && 'bg-primary/5',
                                )}
                                style={{ transitionDelay: `${idx * 60}ms` }}
                              >
                                <div
                                  className={cn(
                                    `bg-primary absolute top-0 left-0 h-full w-1 origin-center scale-y-0 transition-transform duration-200 ease-out group-hover/item:scale-y-100`,
                                    isChildActive && 'scale-y-100',
                                  )}
                                />

                                <NavMenuLink
                                  href={child.href}
                                  className="py-3 pr-3 pl-4"
                                >
                                  {child.label}
                                </NavMenuLink>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <ButtonIconCall />

            {!isScrolled && (
              <button onClick={() => setOpenMenu(true)} aria-label="Open menu">
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </button>
            )}
          </div>
        </DesktopShow>

        <Sidebar open={openMenu} onClose={() => setOpenMenu(false)}>
          <SidebarInner />
        </Sidebar>

        <DesktopHide>
          <button
            onClick={() => setOpenMenuMobile(true)}
            aria-label="Open menu"
          >
            <div className="relative">
              <div id="iLynk-nav-mobile">
                <div className="iLynk-nav-mobile-button">
                  <span></span>
                </div>
              </div>
            </div>
          </button>
        </DesktopHide>

        <Sidebar
          open={openMenuMobile}
          onClose={() => setOpenMenuMobile(false)}
          side="left"
        >
          <SidebarMobile />
        </Sidebar>
      </div>
    </nav>
  );
}

export function SidebarInner() {
  const contactItems: Array<{
    href: string;
    label: string;
    icon: string | { src: string };
  }> = [
    {
      href: `tel:${siteConfig.site_phone}`,
      label: siteConfig.site_phone,
      icon: IconPhoneFilled,
    },
    {
      href: `mailto:${siteConfig.site_email}`,
      label: siteConfig.site_email,
      icon: IconEmail,
    },
    {
      href: `https://${siteConfig.site_domain}`,
      label: siteConfig.site_domain,
      icon: IconEarthGlobe,
    },
    {
      href: `${siteConfig.google_map_link}`,
      label: siteConfig.site_address,
      icon: IconLocation,
    },
  ];

  const socialItems: Array<{
    href: string;
    label: string;
    icon: string | { src: string };
  }> = [
    {
      href: `${siteConfig.facebook_link}`,
      label: 'Facebook',
      icon: IconFacebook,
    },
    {
      href: `${siteConfig.instagram_link}`,
      label: 'Instagram',
      icon: IconInstagram,
    },
    {
      href: `${siteConfig.linkedin_link}`,
      label: 'Linkedin',
      icon: IconLinkedin,
    },
  ];

  return (
    <>
      <LogoElement width={80} height={70} textSize="text-2xl" />

      <div className="flex flex-col gap-2">
        <h3 className="text-heading text-2xl font-medium">Về chúng tôi</h3>
        <div className="bg-input h-px w-full"></div>
        <span className="text-body mt-4 text-justify text-sm">
          {siteConfig.site_description}
        </span>
      </div>

      <ButtonIcon
        icon={IconChevronRight}
        onClick={() => {
          window.location.href = '/contact';
        }}
        label="Liên hệ"
      />

      <div className="flex flex-col gap-2">
        <h3 className="text-heading text-2xl font-medium">Liên hệ</h3>
        <div className="bg-input h-px w-full"></div>

        <div className="flex flex-col gap-4 pt-4">
          {contactItems.map((item) => (
            <LinkIcon key={item.href} href={item.href} label={item.label}>
              <Icon icon={item.icon} iconSize="w-5 h-5" />
            </LinkIcon>
          ))}
        </div>

        <div className="flex flex-row flex-wrap items-center justify-start gap-4 pt-4">
          {socialItems.map((item) => (
            <Icon
              key={item.href}
              icon={item.icon}
              iconSize="w-5 h-5"
              iconBoxSize="w-10 h-10"
              onClick={() => {
                window.location.href = item.href;
              }}
              bgColor="bg-primary"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function SidebarMobile() {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<Record<string, boolean>>({});

  return (
    <>
      <LogoElement width={80} height={70} textSize="text-2xl" />

      <div
        id="menu-header-mobile"
        className="mr-auto flex w-full flex-col gap-4"
      >
        {mainMenu.map((item) => {
          const hasChildren = !!item.children?.length;
          const isOpen = !!openSubmenu[item.href];

          return (
            <div key={item.href} className="relative">
              {/* Mobile: toggle submenu bằng state, không dùng hover */}
              <NavMenuLink
                href={item.href}
                variant="menuHeader"
                underline
                iconArrow={hasChildren}
                customArrowIcon={
                  hasChildren ? (
                    <div className="ml-auto">
                      <div
                        className={cn(
                          'h-6 rounded-[8px] p-1',
                          isOpen ? 'bg-primary' : 'bg-heading',
                        )}
                        aria-label={isOpen ? 'Đóng submenu' : 'Mở submenu'}
                        aria-expanded={isOpen}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpenSubmenu((prev) => ({
                            ...prev,
                            [item.href]: !prev[item.href],
                          }));
                        }}
                      >
                        <span
                          className={cn(
                            'inline-flex transition-transform duration-200',
                            isOpen ? 'rotate-90' : 'rotate-0',
                          )}
                        >
                          <Icon
                            icon={IconChevronRight}
                            iconSize="w-4 h-4"
                            brightness={isOpen ? false : true}
                          />
                        </span>
                      </div>
                    </div>
                  ) : undefined
                }
              >
                {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
              </NavMenuLink>

              {hasChildren && (
                <div
                  className={cn(
                    'grid transition-[grid-template-rows,opacity] duration-200 ease-out',
                    isOpen
                      ? 'h-full grid-rows-[1fr] opacity-100'
                      : 'pointer-events-none h-0 grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden pt-6">
                    <div className="bg-background min-w-60 shadow-md">
                      {item.children!.map((child, idx) => {
                        const isChildActive =
                          pathname === child.href ||
                          pathname.startsWith(`${child.href}/`);

                        return (
                          <div
                            key={child.href}
                            className={cn(
                              'border-border relative not-last:border-b',
                              'transition-all duration-200 ease-out',
                              'translate-y-2 opacity-0',
                              isOpen && 'translate-y-0 opacity-100',
                              'group/item',
                              isChildActive &&
                                'bg-primary/5 translate-y-0 opacity-100',
                            )}
                            style={{ transitionDelay: `${idx * 60}ms` }}
                          >
                            <div
                              className={cn(
                                `bg-primary absolute top-0 left-0 h-full w-1 origin-center scale-y-0 transition-transform duration-200 ease-out group-hover/item:scale-y-100`,
                                isChildActive && 'scale-y-100',
                              )}
                            />
                            <NavMenuLink
                              href={child.href}
                              className="py-3 pr-3 pl-4"
                            >
                              {child.label}
                            </NavMenuLink>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
