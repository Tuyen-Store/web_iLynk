"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { mainMenu } from "@/types/menu.config";
import { siteConfig } from "@/types/site.config";

import { NavMenuLink } from "@/components/nav/NavMenuLink";
import { DesktopHide, DesktopShow } from "@/components/craft";

import { ButtonIconCall } from "@/components/ui/ButtonIconCall";
import Sidebar from "@/components/ui/Sidebar";
import LogoElement from "@/components/ui/Logo";
import LinkIcon from "@/components/ui/LinkIcon";
import Icon from "@/components/ui/Icon";
import ButtonIcon from "@/components/ui/ButtonIcon";
import {
  IconEmail,
  IconEarthGlobe,
  IconPhoneFilled,
  IconLocation,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconChevronRight,
} from "@/types/icon";

export default function Header({ className, id }: NavProps) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY >= 150);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={cn(
        "z-50 menu-horizontal w-full px-4 sm:px-8 border-b border-[#ffffff3b]",
        "transition-transform duration-300 ease-out",
        isScrolled
          ? "fixed top-0 bg-background translate-y-0"
          : "absolute top-0 left-0 w-full",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="container px-0 py-8 flex justify-between items-center gap-8"
      >
        <div className="w-full max-w-32">
          <LogoElement width={42} height={28} />
        </div>

        <DesktopShow className="w-full">
          <div className="flex justify-between items-center gap-8">
            <div
              id="menu-header"
              className={cn(
                "flex gap-6 items-center mr-auto ",
                isScrolled ? "ml-auto" : ""
              )}
            >
              {mainMenu.map((item) => (
                <div key={item.href} className="relative group">
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
                      <div
                        className="
                      absolute left-0 top-full
                      h-14 w-full z-40
                    "
                      />

                      <div
                        className="
                      absolute left-0 top-14 pt-2 z-50
                      pointer-events-none opacity-0 invisible translate-y-2
                      transition-all duration-200 ease-out
                      group-hover:visible group-hover:opacity-100
                      group-hover:translate-y-0 group-hover:pointer-events-auto
                    "
                      >
                        <div
                          className="
                        min-w-60 bg-background shadow-md origin-top
                        transition-all duration-200 ease-out
                        opacity-0 -translate-y-2
                        group-hover:opacity-100 group-hover:translate-y-0
                      "
                        >
                          {item.children.map((child, idx) => {
                            const isChildActive =
                              pathname === child.href ||
                              pathname.startsWith(`${child.href}/`);

                            return (
                              <div
                                key={child.href}
                                className={cn(
                                  "relative not-last:border-b border-border",
                                  "transition-all duration-200 ease-out",
                                  "opacity-0 translate-y-2",
                                  "group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/5",
                                  "group/item ",
                                  isChildActive && "bg-primary/5"
                                )}
                                style={{ transitionDelay: `${idx * 60}ms` }}
                              >
                                <div
                                  className={cn(
                                    `
                                absolute left-0 top-0 h-full w-1 bg-primary
                                origin-center transition-transform duration-200 ease-out
                                scale-y-0
                                group-hover/item:scale-y-100
                              `,
                                    isChildActive && "scale-y-100"
                                  )}
                                />

                                <NavMenuLink
                                  href={child.href}
                                  className="pr-3 py-3 pl-4"
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
            <Sidebar open={openMenu} onClose={() => setOpenMenu(false)}>
              <SidebarInner />
            </Sidebar>
          </div>
        </DesktopShow>

        <DesktopHide>
          <button
            onClick={() => setOpenMenuMobile(true)}
            aria-label="Open menu"
          >
            <div className="relative">
              <div id="tm-nav-mobile">
                <div className="tm-nav-mobile-button">
                  <span></span>
                </div>
              </div>
            </div>
          </button>
          <Sidebar
            open={openMenuMobile}
            onClose={() => setOpenMenuMobile(false)}
            side="left"
          >
            <SidebarMobile />
          </Sidebar>
        </DesktopHide>
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
      label: "Facebook",
      icon: IconFacebook,
    },
    {
      href: `${siteConfig.instagram_link}`,
      label: "Instagram",
      icon: IconInstagram,
    },
    {
      href: `${siteConfig.linkedin_link}`,
      label: "Linkedin",
      icon: IconLinkedin,
    },
  ];

  return (
    <>
      <LogoElement width={80} height={70} textSize="text-2xl" />

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-medium text-heading">Về chúng tôi</h3>
        <div className="w-full h-px bg-input"></div>
        <span className="text-body text-sm mt-4 text-justify">
          Công ty TNHH Acacy là một đơn vị chuyên cung cấp giải pháp nhân sự (HR
          outsourcing), tư vấn quản lý và tuyển dụng, đặc biệt mạnh trong lĩnh
          vực Hàng tiêu dùng nhanh (FMCG), sản xuất, phân phối, điện tử, với các
          đối tác lớn như Unilever, Pepsi, Samsung, Abbott, Heineken, và là đối
          tác tuyển dụng Sales, trưng bày cho nhiều thương hiệu quốc tế tại Việt
          Nam, hoạt động chính tại TP. HCM, Hà Nội và các tỉnh thành khác.
        </span>
      </div>

      <ButtonIcon
        icon={IconChevronRight}
        onClick={() => {
          window.location.href = "/contact";
        }}
        label="Liên hệ"
      />

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-medium text-heading">Liên hệ</h3>
        <div className="w-full h-px bg-input"></div>

        <div className="flex flex-col gap-4 pt-4">
          {contactItems.map((item) => (
            <LinkIcon key={item.href} href={item.href} label={item.label}>
              <Icon icon={item.icon} iconSize={20} width={20} height={20} />
            </LinkIcon>
          ))}
        </div>

        <div className="flex flex-row flex-wrap items-center justify-start gap-4 pt-4">
          {socialItems.map((item) => (
            <Icon
              key={item.href}
              icon={item.icon}
              iconSize={18}
              width={44}
              height={44}
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
        className="flex flex-col gap-4 mr-auto w-full"
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
                          "rounded-[8px] p-1 h-6",
                          isOpen ? "bg-primary" : "bg-heading"
                        )}
                        aria-label={isOpen ? "Đóng submenu" : "Mở submenu"}
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
                            "inline-flex transition-transform duration-200",
                            isOpen ? "rotate-90" : "rotate-0"
                          )}
                        >
                          <Icon
                            icon={IconChevronRight}
                            iconSize={16}
                            width={16}
                            height={16}
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
                    "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 h-full"
                      : "grid-rows-[0fr] opacity-0 pointer-events-none h-0"
                  )}
                >
                  <div className="overflow-hidden pt-6">
                    <div className="min-w-60 bg-background shadow-md">
                      {item.children!.map((child, idx) => {
                        const isChildActive =
                          pathname === child.href ||
                          pathname.startsWith(`${child.href}/`);

                        return (
                          <div
                            key={child.href}
                            className={cn(
                              "relative not-last:border-b border-border",
                              "transition-all duration-200 ease-out",
                              "opacity-0 translate-y-2",
                              isOpen && "opacity-100 translate-y-0",
                              "group/item ",
                              isChildActive && "bg-primary/5 opacity-100 translate-y-0"
                            )}
                            style={{ transitionDelay: `${idx * 60}ms` }}
                          >
                            <div
                              className={cn(
                                `
                                absolute left-0 top-0 h-full w-1 bg-primary
                                origin-center transition-transform duration-200 ease-out
                                scale-y-0
                                group-hover/item:scale-y-100
                              `,
                                isChildActive && "scale-y-100"
                              )}
                            />
                            <NavMenuLink
                              href={child.href}
                              className="pr-3 py-3 pl-4"
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
