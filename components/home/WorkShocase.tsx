"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Section, cn } from "@/components/craft";
import HeadingGroup from "@/components/ui/HeadingGroup";
import { AnimatedTextLeftToRight } from "@/components/animation/AnimatedTextLeftToRight";
import { VideoPlayHome1 } from "@/types/image";

export default function WorkShocase() {
  const DEFAULT_ACTIVE_INDEX = 0;
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE_INDEX);

  return (
    <Section>
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center justify-center md:gap-14 gap-7">
          <HeadingGroup subTitle="Trưng bày tác phẩm" align="center">
            <div className="mx-auto">
              <AnimatedTextLeftToRight text="Kiểm tra mục trưng bày các tác phẩm mới nhất của bạn" />
            </div>
          </HeadingGroup>

          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full"
            onMouseLeave={() => setActiveIndex(DEFAULT_ACTIVE_INDEX)}
            onBlur={() => setActiveIndex(DEFAULT_ACTIVE_INDEX)}
          >
            {[1, 2, 3].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                layout
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 34,
                  mass: 1.1,
                }}
                className={cn(
                  "col-span-1 relative group will-change-transform",
                  index === activeIndex ? "md:col-span-6" : "md:col-span-3"
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <Image
                  src={VideoPlayHome1}
                  alt="Work Shocase"
                  width={1000}
                  height={1000}
                  className="w-full h-96 md:h-180 object-cover rounded-2xl"
                />

                <div
                  className={cn(
                    "absolute top-0 left-0 w-full h-full",
                    index === activeIndex ? "visible" : "hidden"
                  )}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center relative">
                      <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-full outline-2 outline-primary translate-y-1.5 group-hover:translate-y-0 transition-all duration-300" />
                      <div className="bg-white rounded-full p-full p-10 relative flex items-center justify-center z-1">
                        <i className="lnr-icon-arrow-right text-2xl text-primary w-6 h-6 -rotate-45 group-hover:rotate-0 transition-all duration-300"></i>
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
