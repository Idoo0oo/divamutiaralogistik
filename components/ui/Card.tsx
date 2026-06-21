"use client";

import { m } from 'framer-motion';
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  id?: string;
  style?: React.CSSProperties;
}

export default function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
  id,
  style,
}: CardProps) {
  return (
    <m.div
      id={id}
      className={`bg-white rounded-2xl shadow-lg p-6 lg:p-8 ${
        hover ? "hover:shadow-xl" : ""
      } transition-shadow duration-300 ${className}`}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4 } : {}}
    >
      {children}
    </m.div>
  );
}
