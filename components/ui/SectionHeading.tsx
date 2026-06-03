"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium ${
          light
            ? "bg-white/10 text-white/80"
            : "bg-primary-50 text-primary"
        }`}
      >
        {title}
      </div>
      {subtitle && (
        <h2
          className={`text-3xl md:text-4xl font-bold leading-tight ${
            light ? "text-white" : "text-dark"
          }`}
        >
          {subtitle}
        </h2>
      )}
    </motion.div>
  );
}
