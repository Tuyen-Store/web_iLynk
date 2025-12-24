import { cva } from 'class-variance-authority';
import Link from 'next/link';

const linkIconVariants = cva('group flex items-center justify-start gap-3', {
  variants: {
    variant: {
      default: 'text-heading hover:text-primary group text-base',
      light: 'text-heading hover:text-primary group text-base text-white',
      dark: 'text-heading hover:text-primary group text-base',
    },
  },
});

export default function LinkIcon({
  href,
  children,
  label,
  variant = 'default',
}: {
  href: string;
  children: React.ReactNode;
  label: string;
  variant?: 'default' | 'light' | 'dark';
}) {
  return (
    <Link href={href} className={linkIconVariants({ variant })}>
      {children}
      <span>{label}</span>
    </Link>
  );
}
