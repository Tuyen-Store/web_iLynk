'use client';

import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/Icon';
import { IconExpandMore } from '@/types/icon';

const menuLinkVariants = cva(
  'group relative flex items-center transition-colors duration-300',
  {
    variants: {
      variant: {
        default: 'text-heading font-regular text-base',
        menuHeader: 'text-heading font-regular text-base uppercase',
      },
      active: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export function NavMenuLink({
  href,
  children,
  underline = false,
  iconArrow = false,
  variant = 'default',
  className = '',
  customArrowIcon,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'menuHeader';
  underline?: boolean;
  iconArrow?: boolean;
  className?: string;
  customArrowIcon?: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        menuLinkVariants({
          variant: variant,
          active: isActive,
        }),
        className,
      )}
    >
      <div className="relative">
        {children}

        {underline && (
          <span
            className={cn(
              'bg-heading absolute bottom-0 left-0 h-px w-full',
              'origin-left scale-x-0 transition-transform duration-300',
              'group-hover:scale-x-100',
              isActive && 'scale-x-100',
            )}
          />
        )}
      </div>

      {iconArrow &&
        (customArrowIcon ?? (
          <span className="ml-1 inline-flex rotate-0 transition-transform duration-200 ease-out group-hover:rotate-180">
            <Icon
              icon={IconExpandMore}
              iconSize="w-4 h-4"
              iconBoxSize="w-4 h-4"
            />
          </span>
        ))}
    </Link>
  );
}
