import Image from 'next/image';
import { AnimatedTextLeftToRight } from '@/components/animation/AnimatedTextLeftToRight';
import HeadingGroup from '@/components/ui/HeadingGroup';
import { BgOverlay3, Project4 } from '@/types/image';

export default function HowItWork() {
  const data = [
    {
      title: 'Liên hệ',
      description:
        'Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên',
      image: Project4,
    },
    {
      title: 'Liên hệ',
      description:
        'Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên',
      image: Project4,
    },
    {
      title: 'Liên hệ',
      description:
        'Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên',
      image: Project4,
    },
    {
      title: 'Liên hệ',
      description:
        'Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên',
      image: Project4,
    },
  ];
  return (
    <section className="px-2 py-12 md:px-7 md:py-20">
      <div className="bg-secondary relative overflow-hidden rounded-4xl">
        <div
          className="relative z-2 flex flex-col items-center justify-center gap-7 px-4 py-12 md:gap-10 md:py-32"
          style={{
            backgroundImage: `url(${BgOverlay3.src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="container mx-auto grid grid-cols-1 items-center gap-7 lg:grid-cols-[1fr_512px] lg:gap-24">
            <HeadingGroup subTitle="Cách làm việc" textColor="light">
              <AnimatedTextLeftToRight text="Chúng tôi cung cấp dịch vụ hỗ trợ cho sự phát triển chiến lược" />
            </HeadingGroup>

            <p className="text-body-style text-white!">
              Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị
              thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu
              nhiên
            </p>
          </div>

          <div className="container grid grid-cols-1 gap-x-6 md:gap-y-10 gap-y-5 pb-30 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {data.map((item, index) => (
              <div className="flex items-center justify-center" key={index}>
                <div className="group relative flex max-w-[316px] flex-col items-center justify-center gap-10 rounded-4xl bg-white/10 px-12 pt-12 pb-16 even:flex-col-reverse md:rounded-[9rem]">
                  <div className="relative">
                    <div className="bg-primary item absolute -top-5 left-1/2 z-1 flex h-13 w-13 -translate-x-1/2 items-center justify-center rounded-full p-2 group-even:top-auto group-even:-bottom-5">
                      <div className="text-heading pt-1 text-lg leading-none font-medium">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                    </div>
                    <Image
                      src={item.image}
                      alt="Image 1"
                      width={100}
                      height={1000}
                      className="h-52 w-52 rounded-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-2 text-center text-white">
                    <h3 className="line-clamp-1 text-2xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-body-style line-clamp-2 text-white!">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
