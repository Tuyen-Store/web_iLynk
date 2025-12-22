import Image from "next/image";

import { Section } from "@/components/craft";
import HeadingGroup from "@/components/ui/HeadingGroup";
import { AnimatedTextLeftToRight } from "@/components/animation/AnimatedTextLeftToRight";
import { CountUp } from "@/components/animation/CountUp";

import {
  ElementBubble2,
  ElementBubble3,
  ElementBubble4,
  ElementBubble5,
  Pattern2,
} from "@/types/image";


export default function FunFact() {
  const funFacts = [
    {
      value: 1,
      unit: "M",
      title: "Kinh doanh toàn cầu Phát triển",
    },

    {
      value: 52,
      unit: "+",
      title: "Khách hàng hài lòng",
    },

    {
      value: 100,
      unit: "+",
      title: "Dịch vụ được tin tưởng",
    },
  ];

  return (
    <Section>
      <div className="relative overflow-hidden bg-heading rounded-4xl">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 z-1 md:bg-[radial-gradient(circle_800px,peru_0%,transparent_70%)] bg-[radial-gradient(circle_400px,peru_0%,transparent_70%)]" />
        <div className="flex flex-col items-center justify-center gap-10 z-2 px-4 md:pt-32 pt-12 relative">
          <HeadingGroup
            subTitle="Sự thật thú vị"
            align="center"
            textColor="light"
          >
            <div className="max-w-208 mx-auto">
              <AnimatedTextLeftToRight
                text="Chúng tôi cam kết tạo ra những trải nghiệm web công nghệ cao"
                align="center"
              />
            </div>
          </HeadingGroup>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pb-9 w-full container">
            {funFacts.map((item) => (
              <div key={item.title} className="flex flex-col md:flex-row items-center md:text-left text-center justify-center text-white gap-5 pt-12 border-t border-white/10">
                <h3 className="md:text-8xl text-6xl font-bold">
                  <CountUp value={item.value} />
                  {item.unit}
                </h3>
                <p className="md:text-xl text-base font-medium md:max-w-40">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <Image
            src={ElementBubble5}
            alt="Element Bubble 5"
            width={1000}
            height={1000}
            className="w-full h-full object-cover md:max-w-2xl max-w-4/5 z-1"
          />

          <div className="absolute top-16 right-16 w-20 h-20 lg:block hidden">
            <Image
              src={ElementBubble3}
              alt="Element Bubble 3"
              width={1000}
              height={1000}
              className="w-full h-full object-cover animate-float"
            />
          </div>

          <div className="absolute -top-16 -left-20 w-80 h-80 lg:block hidden">
            <Image
              src={ElementBubble2}
              alt="Element Bubble 2"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-28 left-14 w-24 h-24 lg:block hidden">
            <Image
              src={ElementBubble4}
              alt="Element Bubble 4"
              width={1000}
              height={1000}
              className="w-full h-full object-cover animate-float"
            />
          </div>

          <div className="absolute -bottom-40 -right-28 w-96 h-96 opacity-50">
            <Image
              src={Pattern2}
              alt="Pattern 2"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
