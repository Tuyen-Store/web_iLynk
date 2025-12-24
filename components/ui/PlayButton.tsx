'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, ReactNode, useEffect } from 'react';
import { useSmoothScroll } from '@/components/providers/SmoothScrollProvider';

type PlayButtonProps = {
  children?: ReactNode;
  videoId: string;
  className?: string;
};

export default function PlayButton({
  children,
  videoId,
  className = '',
}: PlayButtonProps) {
  const [open, setOpen] = useState(false);
  const { stop: stopSmoothScroll, start: startSmoothScroll } =
    useSmoothScroll();

  useEffect(() => {
    if (!open) return;

    stopSmoothScroll();

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
      startSmoothScroll();
    };
  }, [open, startSmoothScroll, stopSmoothScroll]);

  return (
    <>
      {/* Nút bấm */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Play video"
        className={className}
      >
        {children}
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-0.5 right-0.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white p-2 text-black shadow-md hover:bg-gray-200"
                aria-label="Close video"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4L4 20M20 20L4 4"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div className="aspect-video overflow-hidden rounded-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="h-full w-full rounded-2xl border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
