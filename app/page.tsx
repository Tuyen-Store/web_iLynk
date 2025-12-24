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
import OurTeam from '@/components/home/OurTeam';
import HowItWork from '@/components/home/HowItWork';
import GetInTouch from '@/components/home/GetInTouch';
import Partners from '@/components/home/Partners';
import Blogs from '@/components/home/Blogs';

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-2 pb-10 md:pb-20">
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
      <OurTeam />
      <HowItWork />
      <GetInTouch />
      <Partners />
      <Blogs />
    </>
  );
}
