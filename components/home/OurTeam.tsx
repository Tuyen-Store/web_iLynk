'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion, useInView } from 'framer-motion';
import { AnimatedTextLeftToRight } from '@/components/animation/AnimatedTextLeftToRight';
import { Container, Section } from '@/components/craft';
import HeadingGroup from '@/components/ui/HeadingGroup';
import { Lightning1, Project4 } from '@/types/image';
import { siteConfig } from '@/types/site.config';
import { IconInstagram, IconFacebook, IconLinkedin } from '@/types/icon';
import Icon from '@/components/ui/Icon';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import NavigationButtons from '@/components/ui/NavigationButtons';

export default function OurTeam() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const animatedOnceRef = useRef<Set<number>>(new Set());

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

  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      image: Project4,
    },

    {
      name: 'John Doe',
      position: 'CEO',
      image: Project4,
    },
    {
      name: 'John Doe',
      position: 'CEO',
      image: Project4,
    },
    {
      name: 'John Doe',
      position: 'CEO',
      image: Project4,
    },

    {
      name: 'John Doe',
      position: 'CEO',
      image: Project4,
    },
  ];

  return (
    <Section>
      <Container>
        <div ref={sectionRef} className="gap-base-element">
          <div className="mx-auto">
            <HeadingGroup subTitle="Đội ngũ của chúng tôi" align="center">
              <div className="mx-auto max-w-220">
                <AnimatedTextLeftToRight
                  text="Đội ngũ của chúng tôi là những người có kinh nghiệm và tài năng"
                  align="center"
                />
              </div>
            </HeadingGroup>
          </div>

          <div className="relative w-full">
            <Swiper
              modules={[Navigation]}
              className="w-full"
              navigation={{
                prevEl: '.our-team-swiper-nav button:nth-of-type(1)',
                nextEl: '.our-team-swiper-nav button:nth-of-type(2)',
              }}
              watchSlidesProgress
              spaceBetween={28}
              slidesPerView={1.1}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 28 },
                768: { slidesPerView: 2, spaceBetween: 28 },
                1024: { slidesPerView: 3, spaceBetween: 28 },
              }}
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index} className="h-auto">
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
                        <div
                          className="bg-accent flex flex-col rounded-2xl p-3.5"
                          style={{
                            backgroundImage: `url(${Lightning1.src})`,
                            backgroundSize: '65%',
                            backgroundPosition: 'top center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        >
                          <div className="relative">
                            <div className="group absolute right-0 -bottom-8 z-10 flex flex-col items-end gap-2">
                              <div className="flex flex-col gap-2">
                                {socialItems.map((item, idx) => (
                                  <Link
                                    href={item.href}
                                    key={item.href}
                                    aria-label={item.label}
                                    title={item.label}
                                    style={{ transitionDelay: `${idx * 80}ms` }}
                                    className="bg-popover hover:bg-primary pointer-events-none flex w-max translate-y-3 rounded-full p-2.5 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
                                  >
                                    <Icon
                                      icon={item.icon}
                                      iconSize="w-4 h-4"
                                      bgColor="bg-none"
                                      brightness={true}
                                    />
                                  </Link>
                                ))}
                              </div>

                              <div className="bg-popover hover:bg-primary flex w-max cursor-pointer items-center justify-center rounded-full p-2">
                                <i className="flaticon-common-plus flex h-5 w-5 items-center justify-center text-base text-white" />
                              </div>
                            </div>

                            <Image
                              src={member.image}
                              alt="Team 1"
                              width={1000}
                              height={1000}
                              className="h-full w-full rounded-2xl object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-1 px-8 pt-6 pb-3">
                            <h3 className="text-heading line-clamp-1 text-2xl font-bold">
                              {member.name}
                            </h3>
                            <p className="text-body/80 line-clamp-1 text-sm font-medium">
                              {member.position}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  }}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="our-team-swiper-nav">
              <NavigationButtons
                style="absolute"
                postionLeft="-left-[16px]"
                postionRight="-right-[16px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
