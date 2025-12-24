import { cn } from '@/lib/utils';

export default function NavigationButtons({
  style = 'relative',
  postionLeft = '',
  postionRight = '',
}: {
  style?: 'absolute' | 'relative';
  postionLeft?: string;
  postionRight?: string;
}) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        type="button"
        aria-label="Previous services"
        className={cn(
          'our-services-swiper-prev text-primary hover:bg-primary hover:text-heading flex items-center justify-center rounded-full bg-white p-4 text-base shadow-md transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50',
          style === 'absolute'
            ? `absolute top-1/2 ${postionLeft} -translate-y-1/2 z-1`
            : 'relative',
        )}
      >
        <i className="lnr-icon-arrow-left"></i>
      </button>
      <button
        type="button"
        aria-label="Next services"
        className={cn(
          'our-services-swiper-next text-primary hover:bg-primary hover:text-heading flex items-center justify-center rounded-full bg-white p-4 text-base shadow-md transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50',
          style === 'absolute'
            ? `absolute top-1/2 ${postionRight} -translate-y-1/2 z-1`
            : 'relative',
        )}
      >
        <i className="lnr-icon-arrow-right"></i>
      </button>
    </div>
  );
}
