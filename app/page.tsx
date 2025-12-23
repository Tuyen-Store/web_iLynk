// Icons
import { Hero } from '@/components/home/Hero';
import VideoPlay from '@/components/home/VideoPlay';
import OurServices from '@/components/home/OurServices';
import { ElementBubble } from '@/types/image';
import Image from 'next/image';
import FunFact from '@/components/home/FunFact';
import WhyChoose from '@/components/home/WhyChoose';
import Faq from '@/components/home/Faq';
import Feedback from '@/components/home/Feedback';
import WorkShocase from '@/components/home/WorkShocase';
import Features from '@/components/home/Features';

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <>
      <Hero />
      <div className="pb-10 md:pb-20 z-1 relative">
        <VideoPlay />
      </div>
      <div className="relative">
        <div className="absolute -top-96 -left-32">
          <Image
            src={ElementBubble}
            alt="Element Bubble"
            className="animate-float h-[690px] w-full object-contain"
          />
        </div>
      </div>
      <OurServices />
      <FunFact />
      <WhyChoose />
      <Faq />
      <Feedback />
      <WorkShocase />
      <Features />
    </>
  );
}
