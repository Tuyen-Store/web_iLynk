import { Container, Section } from "@/components/craft";
import HeadingGroup from "@/components/ui/HeadingGroup";
import { AnimatedTextLeftToRight } from "@/components/animation/AnimatedTextLeftToRight";
import FunFactItem from "@/components/ui/FunFactItem";
import Image from "next/image";
import { ElementBubble2, ElementBubble3, ElementBubble4, ElementBubble5, Pattern2 } from "@/types/image";

export default function FunFact() {
  return (
    <Section>
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center justify-center bg-heading rounded-4xl lg:px-20 px-4 md:pt-32 pt-12 gap-10 relative overflow-hidden">
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
            <FunFactItem
              value={1}
              unit="M"
              title="Kinh doanh toàn cầu Phát triển"
            />

            <FunFactItem
              value={52}
              unit="+"
              title="Khách hàng hài lòng"
            />

            <FunFactItem
              value={100}
              unit="+"
              title="Dịch vụ được tin tưởng"
            />

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
