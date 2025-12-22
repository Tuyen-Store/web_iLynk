"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letterVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function AnimatedTextLeftToRight({
  text,
  gap = "",
  align = "left",
}: {
  text: string;
  gap?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.span
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className={cn(
        "flex flex-wrap",
        gap,
        align === "center" ? "justify-center" : "justify-start"
      )}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariant}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
