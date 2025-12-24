'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Section, cn } from '@/components/craft';
import HeadingGroup from '@/components/ui/HeadingGroup';
import { AnimatedTextLeftToRight } from '@/components/animation/AnimatedTextLeftToRight';
import { VideoPlayHome1 } from '@/types/image';

export default function WorkShocase() {
  const DEFAULT_ACTIVE_INDEX = 0;
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE_INDEX);

  return (
    <Section>
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col items-center justify-center gap-7 md:gap-10">
          <HeadingGroup subTitle="Trưng bày tác phẩm" align="center">
            <div className="mx-auto">
              <AnimatedTextLeftToRight
                text="Kiểm tra mục trưng bày các tác phẩm mới nhất của bạn"
                align="center"
              />
            </div>
          </HeadingGroup>

          <div
            className="grid w-full grid-cols-1 gap-4 md:grid-cols-12"
            onMouseLeave={() => setActiveIndex(DEFAULT_ACTIVE_INDEX)}
            onBlur={() => setActiveIndex(DEFAULT_ACTIVE_INDEX)}
          >
            {[1, 2, 3].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                layout
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 34,
                  mass: 1.1,
                }}
                className={cn(
                  'group relative col-span-1 will-change-transform',
                  index === activeIndex ? 'md:col-span-6' : 'md:col-span-3',
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <Image
                  src={VideoPlayHome1}
                  alt="Work Shocase"
                  width={1000}
                  height={1000}
                  className="h-96 w-full rounded-2xl object-cover md:h-120 lg:h-180"
                />

                <div
                  className={cn(
                    'absolute top-0 left-0 h-full w-full',
                    index === activeIndex ? 'visible' : 'hidden',
                  )}
                >
                  <div className="relative flex h-full w-full items-center justify-center">
                    <div className="relative flex flex-col items-center justify-center">
                      <div className="bg-primary outline-primary absolute top-0 left-0 h-full w-full translate-y-1.5 rounded-full outline-2 transition-all duration-300 group-hover:translate-y-0" />
                      <div className="p-full relative z-1 flex items-center justify-center rounded-full bg-white p-10">
                        <i className="lnr-icon-arrow-right text-primary h-6 w-6 -rotate-45 text-2xl transition-all duration-300 group-hover:rotate-0"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
