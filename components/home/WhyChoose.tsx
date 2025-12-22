import Image from "next/image";

import { Container, Section } from "@/components/craft";
import HeadingGroup from "@/components/ui/HeadingGroup";
import { AnimatedTextLeftToRight } from "@/components/animation/AnimatedTextLeftToRight";
import { WhyChoose1, WhyChoose2 } from "@/types/image";

export default function WhyChoose() {
  const whyChoose = [
    {
      title: "Quy trình làm việc nhanh chóng",
      description:
        "Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên",
      icon: "flaticon-common-rocket1",
    },

    {
      title: "Quy trình làm việc nhanh chóng",
      description:
        "Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên",
      icon: "flaticon-common-rocket1",
    },

    {
      title: "Quy trình làm việc nhanh chóng",
      description:
        "Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên",
      icon: "flaticon-common-rocket1",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
          <div className="flex justify-center items-end image-hover-effect-shine relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-5">
              <Image
                src={WhyChoose2}
                alt="Why Choose"
                width={500}
                height={500}
                className="w-full h-full object-contain iLynk-animation-spin"
              />
            </div>
            <Image
              src={WhyChoose1}
              alt="Why Choose"
              width={500}
              height={500}
              className="md:max-w-96 max-w-56 w-full h-auto object-contain z-1"
            />
          </div>
          <div className="flex flex-col md:gap-10 gap-7">
            <HeadingGroup subTitle="Tại sao chọn chúng tôi?">
              <AnimatedTextLeftToRight
                text="Lý do chọn công ty agency kỹ thuật số của chúng tôi"
                align="left"
              />
            </HeadingGroup>
            <p className="text-body-style">
              Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị
              thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu
              nhiên
            </p>
            <div className="flex flex-col md:gap-10 gap-5">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="flex md:flex-row flex-col md:gap-6 gap-3 md:items-center items-start"
                >
                  <div className="border border-primary border-dashed rounded-full md:p-3 p-1.5 flex items-center justify-center">
                    <div className="bg-heading rounded-full p-5 md:text-3xl text-2xl text-primary flex items-center justify-center hover:bg-primary hover:text-heading transition-all duration-300">
                      <i
                        aria-hidden="true"
                        className="flaticon-common-rocket1"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-body-style">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
