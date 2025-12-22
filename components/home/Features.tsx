import { Container, Section } from "@/components/craft";
import HeadingGroup from "@/components/ui/HeadingGroup";
import { AnimatedTextLeftToRight } from "@/components/animation/AnimatedTextLeftToRight";

export default function Features() {
  const features = [
    {
      icon: "flaticon-business-3956725",
      title: "Phát triển ứng dụng di động",
      description: "Đề cập đến sự tích hợp giữa phần cứng và phần mềm.",
    },

    {
      icon: "flaticon-business-3956725",
      title: "Phát triển ứng dụng di động",
      description: "Đề cập đến sự tích hợp giữa phần cứng và phần mềm.",
    },

    {
      icon: "flaticon-business-3956725",
      title: "Phát triển ứng dụng di động",
      description: "Đề cập đến sự tích hợp giữa phần cứng và phần mềm.",
    },

    {
      icon: "flaticon-business-3956725",
      title: "Phát triển ứng dụng di động",
      description: "Đề cập đến sự tích hợp giữa phần cứng và phần mềm.",
    },
  ];
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-start justify-center gap-10">
          <div className="grid lg:grid-cols-[1fr_512px] grid-cols-1 gap-8 md:gap-24 container mx-auto items-center">
            <HeadingGroup subTitle="Đặc trưng">
              <AnimatedTextLeftToRight text="Chúng tôi cung cấp dịch vụ hỗ trợ cho sự phát triển chiến lược." />
            </HeadingGroup>

            <p className="text-body-style">
              Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị
              thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu
              nhiên
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 w-full">
            {features.map((feature, index) => (
              <div className="pb-12 flex w-full" key={index}>
                <a
                  href="#"
                  className="group relative bg-white shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] rounded-2xl w-full"
                >
                  <div className="relative overflow-hidden px-9 py-9 pt-12 rounded-2xl ">
                    <div className="card-overlay-2"></div>

                    <div className="relative z-2 pb-10">
                      <div className="front-icon relative w-max">
                        <i
                          aria-hidden="true"
                          className={`${feature.icon} text-6xl text-body z-1`}
                        />
                      </div>

                      <div className="absolute -top-5 -right-5 opacity-10">
                        <i
                          aria-hidden="true"
                          className={`${feature.icon} text-7xl text-body`}
                        />
                      </div>

                      <h3 className="text-2xl font-bold mt-6 mb-6">
                        {feature.title}
                      </h3>

                      <p className="text-body-style group-hover:text-heading!">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <button className="bg-secondary rounded-full p-3 group flex items-center justify-center absolute -bottom-7 left-9 z-2">
                    <i className="lnr-icon-arrow-right text-2xl text-white w-6 h-6 -rotate-45"></i>
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
