import { cn } from '@/lib/utils';

export default function HeadingGroup({
  children,
  subTitle,
  align = 'start',
  textColor = 'dark',
}: {
  children: React.ReactNode;
  subTitle: string;
  align?: 'start' | 'center';
  textColor?: 'light' | 'dark';
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2',
        align === 'center'
          ? 'items-center justify-center'
          : 'items-start justify-start',
      )}
    >
      <div className="flex items-center justify-start gap-2">
        <h3 className="text-primary text-base font-medium uppercase">
          {subTitle}
        </h3>
        <div className="bg-primary h-0.5 w-12"></div>
      </div>
      <h2
        className={cn(
          'text-4xl leading-snug font-bold md:text-[52px]',
          textColor === 'light' ? 'text-white' : 'text-heading',
        )}
      >
        {children}
      </h2>
    </div>
  );
}
