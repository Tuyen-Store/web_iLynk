'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedTextLeftToRight } from '@/components/animation/AnimatedTextLeftToRight';
import ServiceCardItem from '@/components/ui/ServiceCardItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavigationButtons from '@/components/ui/NavigationButtons';
import HeadingGroup from '@/components/ui/HeadingGroup';

export default function OurServices() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const animatedOnceRef = useRef<Set<number>>(new Set());

  return (
    <section ref={sectionRef} className="relative z-1">
      <div className="flex flex-col items-start justify-center gap-10">
        <div className="w-full px-4 pt-12 md:px-12 md:pt-20">
          <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-[600px_1fr]">
            <HeadingGroup subTitle="Dịch vụ của chúng tôi">
              <AnimatedTextLeftToRight text="Dịch vụ chúng tôi đang" />
              <AnimatedTextLeftToRight text="cung cấp cho khách hàng" />
            </HeadingGroup>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-[7fr_5fr] lg:pl-10 xl:pt-10">
              <p className="text-body-style">
                Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã
                bị thay đổi theo một hình thức, bởi sự thêm vào của con người
                ngẫu nhiên
              </p>
              <div className="ml-auto">
                <NavigationButtons />
              </div>
            </div>
          </div>
        </div>
        <div className="mb:pt-12 w-full pb-12 md:pb-20">
          <Swiper
            modules={[Navigation, Pagination]}
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
                      <ServiceCardItem />
                    </motion.div>
                  );
                }}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
