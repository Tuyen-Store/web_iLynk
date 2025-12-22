"use client";

import { useRef } from "react";
import Image from "next/image";

import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import NavigationButtons from "@/components/ui/NavigationButtons";
import HeadingGroup from "@/components/ui/HeadingGroup";
import { Project4 } from "@/types/image";

import { AnimatedTextLeftToRight } from "@/components/animation/AnimatedTextLeftToRight";
import { IconStar } from "@/types/icon";
import Icon from "@/components/ui/Icon";

export default function Feedback() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const animatedOnceRef = useRef<Set<number>>(new Set());

  return (
    <section ref={sectionRef} className="pt-12 md:pt-20 px-4 md:px-12">
      <div className="relative overflow-hidden bg-secondary rounded-4xl px-4">
        <div className="container flex flex-col items-center justify-center gap-10 z-2 md:pt-32 pt-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <HeadingGroup subTitle="Ý kiến khách hàng" textColor="light">
              <div className="mx-auto">
                <AnimatedTextLeftToRight text="Những gì khách hàng nói về chúng tôi" />
              </div>
            </HeadingGroup>
            <div className="md:ml-auto mr-auto md:mr-0">
              <NavigationButtons />
            </div>
          </div>

          <div className="w-full mb:pt-12 md:pb-20 pb-12">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".our-services-swiper-prev",
                nextEl: ".our-services-swiper-next",
              }}
              pagination={false}
              watchSlidesProgress
              spaceBetween={16}
              slidesPerView={1.1}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 4, spaceBetween: 16 },
              }}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <SwiperSlide key={index}>
                  {({ isVisible }) => {
                    const hasAnimated = animatedOnceRef.current.has(index);
                    if (sectionInView && isVisible && !hasAnimated) {
                      animatedOnceRef.current.add(index);
                    }
                    const shouldShow = isVisible || hasAnimated;

                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={
                          sectionInView && shouldShow
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 24 }
                        }
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.12,
                        }}
                      >
                        <div className="flex flex-col gap-8 p-7 bg-heading rounded-2xl">
                          <div className="flex flex-row gap-4 items-center">
                            <Image
                              src={Project4}
                              alt="Feedback"
                              width={100}
                              height={100}
                              className="rounded-full w-14 h-14 object-cover"
                            />
                            <div className="flex flex-col ">
                              <h3 className="text-xl font-medium text-white">
                                John Doe
                              </h3>
                              <p className="text-sm text-body">
                                Founder & Leader
                              </p>
                            </div>
                          </div>
                          <p className="md:text-xl text-base text-white">
                            Gần đây tôi đã hợp tác với Dixom trong dự án cải tạo
                            nhà của mình, và tôi vô cùng hài lòng với kết quả.
                          </p>

                          <div className="flex flex-row gap-0.5">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <Icon key={index} icon={IconStar} iconSize="w-5 h-5" iconBoxSize="w-5 h-5" bgColor="bg-none" />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  }}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
