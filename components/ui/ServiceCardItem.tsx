import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

export default function ServiceCardItem({
  number,
  title,
  thumbnail,
  href,
  icon,
}: {
  number: string;
  title: string;
  thumbnail: string | StaticImageData;
  href: string;
  icon: string;
}) {
  return (
    <div className="border-border overflow-hidden rounded-xl border p-4">
      <a href={href} className="group relative overflow-hidden">
        <Image
          src={thumbnail}
          alt="Service"
          width={350}
          height={350}
          className="aspect-square h-[350px] w-full rounded-xl object-cover"
        />

        <div className="absolute -top-4 -left-4 z-2 rounded-full bg-white p-3 text-5xl">
          <div className="bg-heading text-primary group-hover:text-heading relative flex items-center justify-center rounded-full p-6">
            <div className="bg-primary absolute top-0 left-0 h-full w-full origin-center scale-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-100"></div>
            <i
              aria-hidden="true"
              className={cn("z-1", icon)}
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-start justify-end gap-2 overflow-hidden rounded-xl px-10 py-8">
          <div className="card-overlay"></div>
          <span className="group-hover:text-heading z-1 text-base font-medium text-white">
            {number}
          </span>
          <h3 className="group-hover:text-heading z-1 line-clamp-2 text-2xl font-bold text-white">
            {title}
          </h3>
        </div>
      </a>
    </div>
  );
}
