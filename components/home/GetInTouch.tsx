import { Container, Section } from '@/components/craft';
import HeadingGroup from '@/components/ui/HeadingGroup';
import { AnimatedTextLeftToRight } from '@/components/animation/AnimatedTextLeftToRight';
import GoogleMapIframe from '@/components/ui/GoogleMapIframe';

export default function GetInTouch() {
  return (
    <Section className="relative z-2 -mt-72">
      <Container>
        <div className="grid grid-cols-1 gap-15 rounded-[6rem] bg-white p-15 shadow-lg md:grid-cols-2">
          <div className="">
            <GoogleMapIframe address="Landmark 81, Bình Thạnh, Hồ Chí Minh" />
          </div>
          <div className="flex flex-col gap-7 md:gap-10">
            <HeadingGroup subTitle="Liên hệ">
              <AnimatedTextLeftToRight text="Đặt lịch hẹn ngay" />
            </HeadingGroup>
          </div>
        </div>
      </Container>
    </Section>
  );
}
