'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerMenuLinkVariants = cva(
  'hover:text-primary text-base underline-offset-4',
  {
    variants: {
      variant: {
        default: 'hover:text-primary text-base text-white',
        small: 'hover:text-primary text-body text-sm',
      },
    },
  },
);

export function FooterMenuLink({
  href,
  children,
  variant = 'default',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'small';
}) {
  const pathname = usePathname();
  return (
    <Link
      className={`${footerMenuLinkVariants({ variant: variant })} ${
        pathname === href ? 'text-primary' : 'hover:text-primary'
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
