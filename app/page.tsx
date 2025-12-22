// Icons
import { Hero } from "@/components/home/Hero";
import VideoPlay from "@/components/home/VideoPlay";
import OurServices from "@/components/home/OurServices";
import { ElementBubble } from "@/types/image";
import Image from "next/image";
import FunFact from "@/components/home/FunFact";

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <>
      <Hero />
      <VideoPlay />
      <div className="relative">
        <div className="absolute -top-96 -left-32">
          <Image
            src={ElementBubble}
            alt="Element Bubble"
            className="object-contain animate-float w-full h-[690px]"
          />
        </div>
      </div>
      <OurServices />
      <FunFact />
    </>
  );
}
