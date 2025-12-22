import { siteConfig } from "@/types/site.config";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

import PhoneFilled from "@assets/icons/phone-filled.svg";

export function ButtonIconCall() {
  return (
    <Link href={`tel:${siteConfig.site_phone}`} className="flex items-center justify-center gap-3 group">
       
        <div className="group-hover:opacity-75 transition-all">
          <Icon
            icon={PhoneFilled}
            iconSize="w-6 h-6"
            iconBoxSize="w-10 h-10"
            bgColor="bg-primary"
          />
        </div>

      <div className="flex flex-col">
        <span className="text-xs font-regular">Call Anytime</span>
        <span className="text-base font-medium">{siteConfig.site_phone}</span>
      </div>
    </Link>
  );
}
