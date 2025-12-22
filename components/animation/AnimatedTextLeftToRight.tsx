"use client";

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

export function AnimatedTextLeftToRight({ text, gap = "" }: { text: string, gap?: string }) {
    return (
        <motion.span
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className={`flex flex-wrap ${gap}`}
            
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
