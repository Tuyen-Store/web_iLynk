'use client';

import { useRef } from 'react';
import Image from 'next/image';

import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import NavigationButtons from '@/components/ui/NavigationButtons';
import HeadingGroup from '@/components/ui/HeadingGroup';
import { BgOverlay2, ElementBubble6, Project4 } from '@/types/image';

import { AnimatedTextLeftToRight } from '@/components/animation/AnimatedTextLeftToRight';
import { IconStar } from '@/types/icon';
import Icon from '@/components/ui/Icon';

export default function Feedback() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const animatedOnceRef = useRef<Set<number>>(new Set());

  const feedbacks = [
    {
      name: 'John Doe',
      role: 'Founder & Leader',
      comment:
        'Gần đây tôi đã hợp tác với Dixom trong dự án cải tạo nhà của mình, và tôi vô cùng hài lòng với kết quả.',
      rating: 5,
    },

    {
      name: 'John Doe',
      role: 'Founder & Leader',
      comment:
        'Gần đây tôi đã hợp tác với Dixom trong dự án cải tạo nhà của mình, và tôi vô cùng hài lòng với kết quả. Dịch vụ của họ rất chuyên nghiệp và đáng tin cậy.',
      rating: 5,
    },

    {
      name: 'John Doe',
      role: 'Founder & Leader',
      comment:
        'Gần đây tôi đã hợp tác với Dixom trong dự án cải tạo nhà của mình, và tôi vô cùng hài lòng với kết quả.',
      rating: 5,
    },

    {
      name: 'John Doe',
      role: 'Founder & Leader',
      comment:
        'Gần đây tôi đã hợp tác với Dixom trong dự án cải tạo nhà của mình, và tôi vô cùng hài lòng với kết quả.',
      rating: 5,
    },

    {
      name: 'John Doe',
      role: 'Founder & Leader',
      comment:
        'Gần đây tôi đã hợp tác với Dixom trong dự án cải tạo nhà của mình, và tôi vô cùng hài lòng với kết quả.',
      rating: 5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-2 py-7 pt-12 md:px-7 md:py-20"
    >
      <Image
        src={ElementBubble6}
        alt="ElementBubble6"
        width={100}
        height={100}
        className="animate-float absolute -top-[20%] -right-[6%] z-1 h-full w-full max-w-40 object-contain opacity-70 md:max-w-[16rem]"
      />
      <div className="bg-secondary relative overflow-hidden rounded-4xl px-4">
        <div className="absolute -bottom-[20%] -left-[20%] h-full w-full opacity-70">
          <Image
            src={BgOverlay2}
            alt="BgOverlay2"
            width={100}
            height={100}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="relative z-2 container flex flex-col items-center justify-center gap-7 py-12 md:gap-10 md:py-32">
          <div className="z-1 grid w-full grid-cols-1 items-center gap-4 md:grid-cols-[9fr_3fr]">
            <div className="md:max-w-148">
              <HeadingGroup subTitle="Ý kiến khách hàng" textColor="light">
                <div className="mx-auto">
                  <AnimatedTextLeftToRight text="Những gì khách hàng nói về chúng tôi" />
                </div>
              </HeadingGroup>
            </div>
            <div className="mr-auto md:mr-0 md:ml-auto">
              <NavigationButtons />
            </div>
          </div>

          <div className="mb:pt-12 w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              className="feedback-swiper"
              navigation={{
                prevEl: '.our-services-swiper-prev',
                nextEl: '.our-services-swiper-next',
              }}
              pagination={false}
              watchSlidesProgress
              spaceBetween={16}
              slidesPerView={1.1}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 32 },
                1024: { slidesPerView: 4, spaceBetween: 32 },
              }}
            >
              {feedbacks.map((feedback, index) => (
                <SwiperSlide key={index} className="feedback-swiper-slide">
                  {({ isVisible }) => {
                    const hasAnimated = animatedOnceRef.current.has(index);
                    if (sectionInView && isVisible && !hasAnimated) {
                      animatedOnceRef.current.add(index);
                    }
                    const shouldShow = isVisible || hasAnimated;

                    return (
                      <motion.div
                        className="h-full"
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
                        <div className="bg-popover border-glass flex h-full flex-col gap-8 rounded-2xl px-7 py-10">
                          <div className="flex flex-row items-center gap-4">
                            <Image
                              src={Project4}
                              alt="Feedback"
                              width={100}
                              height={100}
                              className="h-14 w-14 rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                              <h3 className="text-xl font-medium text-white">
                                {feedback.name}
                              </h3>
                              <p className="text-body text-sm">
                                {feedback.role}
                              </p>
                            </div>
                          </div>
                          <p className="text-base text-white md:text-xl">
                            {feedback.comment}
                          </p>

                          <div className="mt-auto flex flex-row gap-0.5">
                            {Array.from({ length: feedback.rating }).map(
                              (_, index) => (
                                <Icon
                                  key={index}
                                  icon={IconStar}
                                  iconSize="w-5 h-5"
                                  iconBoxSize="w-5 h-5"
                                  bgColor="bg-none"
                                />
                              ),
                            )}
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
