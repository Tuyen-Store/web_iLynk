import { siteConfig } from '@/types/site.config';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

import PhoneFilled from '@assets/icons/phone-filled.svg';

export function ButtonIconCall() {
  return (
    <Link
      href={`tel:${siteConfig.site_phone}`}
      className="group flex items-center justify-center gap-3"
    >
      <div className="transition-all group-hover:opacity-75">
        <Icon
          icon={PhoneFilled}
          iconSize="w-6 h-6"
          iconBoxSize="w-10 h-10"
          bgColor="bg-primary"
        />
      </div>

      <div className="flex flex-col">
        <span className="font-regular text-xs">Call Anytime</span>
        <span className="text-base font-medium">{siteConfig.site_phone}</span>
      </div>
    </Link>
  );
}
