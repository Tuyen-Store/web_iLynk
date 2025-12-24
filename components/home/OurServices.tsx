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
import { Project4 } from '@/types/image';

export default function OurServices() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const animatedOnceRef = useRef<Set<number>>(new Set());
  const defaultIcon = 'flaticon-business-008-health-check';

  const services = [
    {
      title: 'Website doanh nghiệp Thương mại Điện tử (E-commerce)',
      thumbnail: Project4,
      icon: 'flaticon-business-008-health-check',
      href: '/dich-vu/website-doanh-nghiep',
    },

    {
      title: 'Website thương mại',
      thumbnail: Project4,
      icon: 'flaticon-business-008-health-check',
      href: '/dich-vu/website-thuong-mai',
    },

    {
      title: 'Thiết kế theo yêu cầu',
      thumbnail: Project4,
      icon: 'flaticon-business-008-health-check',
      href: '/dich-vu/thiet-ke-theo-yeu-cau',
    },

    {
      title: 'Landing Page',
      thumbnail: Project4,
      href: '/dich-vu/landing-page',
    },

    {
      title: 'Tư vấn',
      thumbnail: Project4,
      icon: 'flaticon-business-008-health-check',
      href: '/dich-vu/tu-van',
    },

    {
      title: 'Quản trị mạng',
      thumbnail: Project4,
      icon: 'flaticon-business-008-health-check',
      href: '/dich-vu/quan-tri-mang',
    },

    {
      title: 'Quản trị máy chủ',
      thumbnail: Project4,
      icon: 'flaticon-business-008-health-check',
      href: '/dich-vu/quan-tri-may-chu',
    },
  ];

  return (
    <section ref={sectionRef} className="relative z-1">
      <div className="gap-base-element">
        <div className="w-full px-4 pt-12 md:px-12 md:pt-20">
          <div className="container mx-auto grid grid-cols-1 gap-7 lg:grid-cols-[600px_1fr]">
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
              <div className="mr-auto md:mr-0 md:ml-auto">
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
            {services.map((service, index) => (
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
                      <ServiceCardItem
                        number={String(index + 1).padStart(2, '0')}
                        title={service.title}
                        thumbnail={service.thumbnail}
                        href={service.href}
                        icon={service.icon ?? defaultIcon}
                      />
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
