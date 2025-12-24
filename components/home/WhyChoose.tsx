import Image from 'next/image';

import { Container, Section } from '@/components/craft';
import HeadingGroup from '@/components/ui/HeadingGroup';
import { AnimatedTextLeftToRight } from '@/components/animation/AnimatedTextLeftToRight';
import { WhyChoose1, WhyChoose2 } from '@/types/image';

export default function WhyChoose() {
  const whyChoose = [
    {
      title: 'Quy trình làm việc nhanh chóng',
      description:
        'Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên',
      icon: 'flaticon-common-rocket1',
    },

    {
      title: 'Quy trình làm việc nhanh chóng',
      description:
        'Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên',
      icon: 'flaticon-common-rocket1',
    },

    {
      title: 'Quy trình làm việc nhanh chóng',
      description:
        'Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên',
      icon: 'flaticon-common-rocket1',
    },
  ];

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="image-hover-effect-shine relative flex items-end justify-center overflow-hidden">
            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center p-5">
              <Image
                src={WhyChoose2}
                alt="Why Choose"
                width={500}
                height={500}
                className="iLynk-animation-spin h-full w-full object-contain"
              />
            </div>
            <Image
              src={WhyChoose1}
              alt="Why Choose"
              width={500}
              height={500}
              className="z-1 h-auto w-full max-w-56 object-contain md:max-w-96"
            />
          </div>
          <div className="flex flex-col gap-7 md:gap-10">
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
            <div className="flex flex-col gap-5 md:gap-10">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-6"
                >
                  <div className="border-primary flex items-center justify-center rounded-full border border-dashed p-1.5 md:p-3">
                    <div className="bg-heading text-primary hover:bg-primary hover:text-heading flex items-center justify-center rounded-full p-5 text-2xl transition-all duration-300 md:text-3xl">
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
