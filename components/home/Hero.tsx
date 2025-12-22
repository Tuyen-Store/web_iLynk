"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { IconChevronRight } from "@/types/icon";
import { BgOverlay, SiliconeBall } from "@/types/image";

import { AnimatedTextLeftToRight } from "@/components/animation/AnimatedTextLeftToRight";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { craftStyles, Section } from "@/components/craft";
import { CountUp } from "@/components/animation/CountUp";

export const Hero = () => {
  return (
    <Section
      className={cn(
        "relative bg-linear-primary-top-bottom min-h-screen flex items-center",
        craftStyles.layout.sectionHero
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={BgOverlay}
          alt="BgOverlay"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="max-w-[1600px] mx-auto z-1 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-7 xl:gap-0 gap-6 lg:items-center items-end relative min-h-[600px] pb-10 lg:pb-0">
          <div className="col-span-5 flex flex-col gap-12">
            <h1 className="text-heading uppercase">
              <span className="font-bold block lg:text-[118px] md:text-6xl text-4xl leading-none">
                <AnimatedTextLeftToRight text="Your ultimate" />
              </span>
              <span className="font-regular tracking-wider lg:text-8xl md:text-6xl text-3xl leading-tight">
                <AnimatedTextLeftToRight text="digital agency" gap="lg:gap-4 gap-1" />
              </span>
            </h1>
            <div className="grid lg:grid-cols-10 lg:gap-20 gap-6 max-w-5xl">
              <div className="md:col-span-5 lg:col-span-3 col-span-full">
                <div className="flex gap-2">
                  <h2 className="lg:text-8xl text-5xl font-medium text-heading">
                    <CountUp value={90} />
                  </h2>
                  <p className="lg:text-4xl text-2xl font-medium">%</p>
                </div>
                <span className="text-body lg:text-lg text-base">
                  Sự hài lòng của khách hàng và thành công chiến lược
                </span>
              </div>
              <div className="md:col-span-3 lg:col-span-3 col-span-full">
                <div className="flex gap-2">
                  <h2 className="lg:text-8xl text-5xl font-medium text-heading">
                    <CountUp value={100} />
                  </h2>
                  <p className="lg:text-4xl text-2xl font-medium">+</p>
                </div>
                <span className="text-body lg:text-lg text-base">
                  Các dự án đã hoàn thành tại 24 quốc gia
                </span>
              </div>
              <div className="lg:col-span-4 col-span-full flex flex-col gap-8">
                <span className="text-body lg:text-lg text-base">
                  Công ty TNHH Acacy là một đơn vị chuyên cung cấp giải pháp
                  nhân sự (HR outsourcing).
                </span>

                <ButtonIcon
                  icon={IconChevronRight}
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                  label="Khám phá thêm"
                  maxWidth="max-w-64"
                />
              </div>
            </div>
          </div>
          <div className="hidden xl:block col-span-2">
            <div className="absolute bottom-1/2 translate-y-1/2">
              <Image
                src={SiliconeBall}
                alt="Silicone Ball"
                width={500}
                height={500}
                className="object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
