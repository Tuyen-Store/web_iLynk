"use client";

import Image from "next/image";
import { useId, useState } from "react";

import { AnimatedTextLeftToRight } from "@/components/animation/AnimatedTextLeftToRight";
import { Container, Section } from "@/components/craft";
import HeadingGroup from "@/components/ui/HeadingGroup";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { IconChevronRight } from "@/types/icon";
import { Project4 } from "@/types/image";

export default function Faq() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      question: "Việc lập kế hoạch được thực hiện như thế nào?",
      answer:
        "Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên",
    },

    {
      question: "Việc lập kế hoạch được thực hiện như thế nào?",
      answer:
        "Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên",
    },
    {
      question: "Việc lập kế hoạch được thực hiện như thế nào?",
      answer:
        "Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên",
    },
    {
      question: "Việc lập kế hoạch được thực hiện như thế nào?",
      answer:
        "Có rất nhiều biến đổi của các đoạn văn có sẵn nhưng phần lớn đã bị thay đổi theo một hình thức, bởi sự thêm vào của con người ngẫu nhiên",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
          <div className="flex flex-col gap-10 md:pr-10 pr-0">
            <HeadingGroup subTitle="FAQ">
              <AnimatedTextLeftToRight text="Dẫn dắt công ty agency kỹ thuật số hàng đầu tại thành phố chúng ta" />
            </HeadingGroup>

            <div className="flex flex-col gap-3">
              {items.map((item, idx) => {
                const isOpen = openIndex === idx;
                const contentId = `${baseId}-faq-content-${idx}`;

                return (
                  <div
                    key={contentId}
                    className="bg-accent p-5 rounded-2xl flex flex-col"
                  >
                    <button
                      type="button"
                      className="flex items-center justify-between gap-3 text-left"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                    >
                      <h3 className="text-lg font-bold">{item.question}</h3>
                      <span
                        className={cn(
                          "flex items-center justify-center bg-heading rounded-full p-1",
                          isOpen ? "bg-primary" : "bg-heading"
                        )}
                      >
                        <span
                          className={[
                            "transition-transform duration-200",
                            isOpen ? "rotate-90" : "rotate-0",
                          ].join(" ")}
                        >
                          <Icon
                            icon={IconChevronRight}
                            iconSize="w-5 h-5"
                            brightness={isOpen ? false : true}
                          />
                        </span>
                      </span>
                    </button>

                    <div
                      id={contentId}
                      className={[
                        "grid transition-all duration-200 ease-out",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pt-5"
                          : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className="text-body-style">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <Image
              src={Project4}
              alt="Faq"
              width={500}
              height={500}
              className="w-full h-full max-h-[540px] object-cover rounded-4xl"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
