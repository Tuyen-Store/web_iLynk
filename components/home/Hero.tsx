'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { IconChevronRight } from '@/types/icon';
import { BgOverlay, SiliconeBall } from '@/types/image';

import { AnimatedTextLeftToRight } from '@/components/animation/AnimatedTextLeftToRight';
import ButtonIcon from '@/components/ui/ButtonIcon';
import { craftStyles, Section } from '@/components/craft';
import { CountUp } from '@/components/animation/CountUp';

export const Hero = () => {
  return (
    <Section
      className={cn(
        'bg-linear-primary-top-bottom relative flex min-h-screen items-center',
        craftStyles.layout.sectionHero,
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
      <div className="z-1 mx-auto w-full max-w-[1600px]">
        <div className="relative grid min-h-[600px] grid-cols-1 items-end gap-6 pb-10 lg:items-center lg:pb-0 xl:grid-cols-7 xl:gap-0">
          <div className="col-span-5 flex flex-col gap-12">
            <h1 className="text-heading uppercase">
              <span className="block text-4xl leading-none font-bold md:text-6xl lg:text-[118px]">
                <AnimatedTextLeftToRight text="Your ultimate" />
              </span>
              <span className="font-regular text-3xl leading-tight tracking-wider md:text-6xl lg:text-8xl">
                <AnimatedTextLeftToRight
                  text="digital agency"
                  gap="lg:gap-4 gap-1"
                />
              </span>
            </h1>
            <div className="grid max-w-5xl gap-6 lg:grid-cols-10 lg:gap-20">
              <div className="col-span-full md:col-span-5 lg:col-span-3">
                <div className="flex gap-2">
                  <h2 className="text-heading text-5xl font-medium lg:text-8xl">
                    <CountUp value={90} />
                  </h2>
                  <p className="text-2xl font-medium lg:text-4xl">%</p>
                </div>
                <span className="text-body text-base lg:text-lg">
                  Sự hài lòng của khách hàng và thành công chiến lược
                </span>
              </div>
              <div className="col-span-full md:col-span-3 lg:col-span-3">
                <div className="flex gap-2">
                  <h2 className="text-heading text-5xl font-medium lg:text-8xl">
                    <CountUp value={100} />
                  </h2>
                  <p className="text-2xl font-medium lg:text-4xl">+</p>
                </div>
                <span className="text-body text-base lg:text-lg">
                  Các dự án đã hoàn thành tại 24 quốc gia
                </span>
              </div>
              <div className="col-span-full flex flex-col gap-8 lg:col-span-4">
                <span className="text-body text-base lg:text-lg">
                  Công ty TNHH Acacy là một đơn vị chuyên cung cấp giải pháp
                  nhân sự (HR outsourcing).
                </span>

                <ButtonIcon
                  icon={IconChevronRight}
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                  label="Khám phá thêm"
                  maxWidth="max-w-64"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 hidden xl:block">
            <div className="absolute bottom-1/2 translate-y-1/2">
              <Image
                src={SiliconeBall}
                alt="Silicone Ball"
                width={500}
                height={500}
                className="animate-float object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
