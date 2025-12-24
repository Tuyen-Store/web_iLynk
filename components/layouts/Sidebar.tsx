'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, type ReactNode } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  side?: 'left' | 'right';
};

import { IconClose } from '@/types/icon';

import Icon from '@/components/ui/Icon';

export default function Sidebar({
  open,
  onClose,
  children,
  side = 'right',
}: Props) {
  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPaddingRight = body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.paddingRight = prevBodyPaddingRight;
    };
  }, [open]);

  const isLeft = side === 'left';

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 h-screen bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className={`fixed top-0 ${isLeft ? 'left-0' : 'right-0'} bg-background z-50 h-screen w-[80%] max-w-sm shadow-lg`}
            initial={{ x: isLeft ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isLeft ? '-100%' : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="sidebar-innner-container flex flex-col gap-6 px-6 pt-6">
              <div className="self-end">
                <Icon
                  icon={IconClose}
                  iconSize="w-6 h-6"
                  onClick={onClose}
                  iconBoxSize="w-10 h-10"
                  bgColor="bg-accent"
                />
              </div>

              <div className="no-scrollbar flex max-h-[calc(100vh-100px)] flex-col gap-10 overflow-y-auto px-2 pb-10">
                {children}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
