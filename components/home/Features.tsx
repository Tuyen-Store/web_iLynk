import { Container, Section } from '@/components/craft';
import HeadingGroup from '@/components/ui/HeadingGroup';
import { AnimatedTextLeftToRight } from '@/components/animation/AnimatedTextLeftToRight';

export default function Features() {
  const features = [
    {
      icon: 'flaticon-business-3956725',
      title: 'Phát triển ứng dụng di động',
      description: 'Đề cập đến sự tích hợp giữa phần cứng và phần mềm.',
    },

    {
      icon: 'flaticon-business-3956725',
      title: 'Phát triển ứng dụng di động',
      description: 'Đề cập đến sự tích hợp giữa phần cứng và phần mềm.',
    },

    {
      icon: 'flaticon-business-3956725',
      title: 'Phát triển ứng dụng di động',
      description: 'Đề cập đến sự tích hợp giữa phần cứng và phần mềm.',
    },

    {
      icon: 'flaticon-business-3956725',
      title: 'Phát triển ứng dụng di động',
      description: 'Đề cập đến sự tích hợp giữa phần cứng và phần mềm.',
    },
  ];
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-start justify-center gap-10">
          <div className="container mx-auto grid grid-cols-1 items-center gap-8 md:gap-24 lg:grid-cols-[1fr_512px]">
            <HeadingGroup subTitle="Đặc trưng">
              <AnimatedTextLeftToRight text="Chúng tôi cung cấp dịch vụ hỗ trợ cho sự phát triển chiến lược." />
            </HeadingGroup>

            <p className="text-body-style">
              Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị
              thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu
              nhiên
            </p>
          </div>

          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
            {features.map((feature, index) => (
              <div className="flex w-full pb-12" key={index}>
                <a
                  href="#"
                  className="group relative w-full rounded-2xl bg-white shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]"
                >
                  <div className="relative overflow-hidden rounded-2xl px-9 py-9 pt-12">
                    <div className="card-overlay-2"></div>

                    <div className="relative z-2 pb-10">
                      <div className="front-icon relative w-max">
                        <i
                          aria-hidden="true"
                          className={`${feature.icon} text-body z-1 text-6xl`}
                        />
                      </div>

                      <div className="absolute -top-5 -right-5 opacity-10">
                        <i
                          aria-hidden="true"
                          className={`${feature.icon} text-body text-7xl`}
                        />
                      </div>

                      <h3 className="mt-6 mb-6 text-2xl font-bold">
                        {feature.title}
                      </h3>

                      <p className="text-body-style group-hover:text-heading!">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <button className="bg-secondary group absolute -bottom-7 left-9 z-2 flex items-center justify-center rounded-full p-3">
                    <i className="lnr-icon-arrow-right h-6 w-6 -rotate-45 text-2xl text-white"></i>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
