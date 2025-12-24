'use client';

import Image from 'next/image';
import { AnimatedTextLeftToRight } from '@/components/animation/AnimatedTextLeftToRight';
import { Container, Section } from '@/components/craft';
import HeadingGroup from '@/components/ui/HeadingGroup';
import { Project4 } from '@/types/image';
import {
  IconArrowNarrowRight,
  IconCalendarLinesAlt,
  IconChatBubbles,
  IconCircleUser,
} from '@/types/icon';
import Icon from '@/components/ui/Icon';

export default function Blogs() {
  const blogs = [
    {
      title: 'Công nghệ blockchain trong năm 2025',
      date: '2025-06-03T08:40:13+00:00',
      author: 'John Doe',
      image: Project4,
      link: '/blogs/1',
    },

    {
      title: 'Công nghệ blockchain trong năm 2025',
      date: '2025-06-03T08:40:13+00:00',
      author: 'John Doe',
      image: Project4,
      link: '/blogs/2',
    },

    {
      title: 'Công nghệ blockchain trong năm 2025',
      date: '2025-06-03T08:40:13+00:00',
      author: 'John Doe',
      image: Project4,
      link: '/blogs/3',
    },
  ];
  return (
    <Section>
      <Container>
        <div className="gap-base-element">
          <div className="mx-auto">
            <HeadingGroup subTitle="Tin tức" align="center">
              <div className="mx-auto max-w-220">
                <AnimatedTextLeftToRight
                  text="Tin tức và Sự kiện"
                  align="center"
                />
              </div>
            </HeadingGroup>
          </div>

          <div className="grid w-full gap-8 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
            {blogs.map((blog, index) => (
              <div className="bg-accent w-full rounded-4xl" key={index}>
                <div className="flex flex-col overflow-hidden rounded-4xl bg-white shadow-md">
                  <Image
                    src={blog.image}
                    alt="Blog 1"
                    width={1000}
                    height={1000}
                    className="h-52 w-full rounded-t-4xl rounded-l-2xl rounded-b-none object-cover md:h-80"
                  />

                  <div className="flex flex-col gap-5 px-4 py-8 md:px-8">
                    <div className="align-center flex gap-6">
                      <div className="flex items-center gap-2">
                        <Icon
                          icon={IconCalendarLinesAlt}
                          iconSize="w-4 h-4 mb-0.5"
                        />
                        <time
                          className="text-body text-sm"
                          dateTime={blog.date}
                        >
                          {new Date(blog.date).toLocaleDateString('vi-VN', {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric',
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon icon={IconCircleUser} iconSize="w-4 h-4 mb-0.5" />
                        <p className="text-body text-sm">{blog.author}</p>
                      </div>
                    </div>
                    <a href={blog.link} className="group transition-all">
                      <h3 className="text-heading group-hover:text-primary md:text-2xl text-xl font-bold">
                        {blog.title}
                      </h3>
                    </a>
                  </div>
                </div>

                <div className="px-8 py-5">
                  <div className="align-center flex justify-between gap-6">
                    <a
                      href={blog.link}
                      className="group flex items-center gap-2"
                    >
                      <p className="text-body group-hover:text-primary text-sm font-medium uppercase">
                        Xem thêm
                      </p>
                      <Icon
                        icon={IconArrowNarrowRight}
                        iconSize="w-4 h-4 mb-0.5"
                      />
                    </a>
                    <div className="flex items-center gap-2">
                      <Icon icon={IconChatBubbles} iconSize="w-4 h-4 mb-0.5" />
                      <p className="text-body text-sm">Chưa có bình luận</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
