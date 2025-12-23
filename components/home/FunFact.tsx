import Image from 'next/image';

import HeadingGroup from '@/components/ui/HeadingGroup';
import { AnimatedTextLeftToRight } from '@/components/animation/AnimatedTextLeftToRight';
import { CountUp } from '@/components/animation/CountUp';

import {
  ElementBubble2,
  ElementBubble3,
  ElementBubble4,
  ElementBubble5,
  Pattern2,
} from '@/types/image';

export default function FunFact() {
  const funFacts = [
    {
      value: 1,
      unit: 'M',
      title: 'Kinh doanh toàn cầu Phát triển',
    },

    {
      value: 52,
      unit: '+',
      title: 'Khách hàng hài lòng',
    },

    {
      value: 100,
      unit: '+',
      title: 'Dịch vụ được tin tưởng',
    },
  ];

  return (
    <section className="px-2 py-12 md:px-7 md:py-20">
      <div className="bg-heading relative overflow-hidden rounded-4xl">
        <div className="absolute top-0 left-0 z-1 h-full w-full bg-[radial-gradient(circle_400px,peru_0%,transparent_70%)] opacity-30 md:bg-[radial-gradient(circle_800px,peru_0%,transparent_70%)]" />
        <div className="relative z-2 flex flex-col items-center justify-center gap-10 px-4 pt-12 md:pt-32">
          <div className="z-1">
            <HeadingGroup
              subTitle="Sự thật thú vị"
              align="center"
              textColor="light"
            >
              <div className="mx-auto max-w-208">
                <AnimatedTextLeftToRight
                  text="Chúng tôi cam kết tạo ra những trải nghiệm web công nghệ cao"
                  align="center"
                />
              </div>
            </HeadingGroup>
          </div>

          <div className="container grid w-full grid-cols-1 gap-6 pb-9 lg:grid-cols-3">
            {funFacts.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center gap-5 border-t border-white/10 pt-12 text-center text-white md:flex-row md:text-left"
              >
                <h3 className="text-6xl font-bold md:text-8xl">
                  <CountUp value={item.value} />
                  {item.unit}
                </h3>
                <p className="text-base font-medium md:max-w-40 md:text-xl">
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
            className="z-1 h-full w-full max-w-4/5 object-cover md:max-w-2xl"
          />

          <div className="absolute top-16 right-16 hidden h-20 w-20 lg:block">
            <Image
              src={ElementBubble3}
              alt="Element Bubble 3"
              width={1000}
              height={1000}
              className="animate-float h-full w-full object-cover"
            />
          </div>

          <div className="absolute -top-16 -left-20 hidden h-80 w-80 lg:block">
            <Image
              src={ElementBubble2}
              alt="Element Bubble 2"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-28 left-14 hidden h-24 w-24 lg:block">
            <Image
              src={ElementBubble4}
              alt="Element Bubble 4"
              width={1000}
              height={1000}
              className="animate-float h-full w-full object-cover"
            />
          </div>

          <div className="absolute -right-28 -bottom-40 h-96 w-96 opacity-50">
            <Image
              src={Pattern2}
              alt="Pattern 2"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
