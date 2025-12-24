'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/craft';
import {
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner6,
  Partner7,
  Partner8,
} from '@/types/image';

export default function Partners() {
  const images = [
    { src: Partner1, alt: 'Partner 1' },
    { src: Partner2, alt: 'Partner 2' },
    { src: Partner3, alt: 'Partner 3' },
    { src: Partner4, alt: 'Partner 4' },
    { src: Partner6, alt: 'Partner 6' },
    { src: Partner7, alt: 'Partner 7' },
    { src: Partner8, alt: 'Partner 8' },
  ];

  // nhân đôi để marquee loop mượt
  const marqueeImages = [...images, ...images];

  return (
    <Section className="px-0!">
      <Container>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-15"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 35,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {marqueeImages.map((image, index) => (
              <div
                key={index}
                className="flex h-40 w-40 items-center justify-center"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={160}
                  height={160}
                  className="object-contain opacity-70 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
