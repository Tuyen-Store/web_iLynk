'use client';
import { Section, Container } from '@/components/craft';
import ButtonIcon from '@/components/ui/ButtonIcon';
import { IconChevronRight } from '@/types/icon';

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold">
            404 - Không tìm thấy trang
          </h1>
          <p className="mb-8">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
          </p>
          <ButtonIcon
            icon={IconChevronRight}
            onClick={() => {
              window.location.href = '/';
            }}
            label="Trang chủ"
          />
        </div>
      </Container>
    </Section>
  );
}
