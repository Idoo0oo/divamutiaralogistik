"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white" | "whiteOutline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: { backgroundColor: "#E55C24", color: "#ffffff" },
  secondary: { backgroundColor: "#302725", color: "#ffffff" },
  outline: { border: "2px solid #E55C24", color: "#E55C24", backgroundColor: "transparent" },
  ghost: { color: "#374151", backgroundColor: "transparent" },
  white: { backgroundColor: "#ffffff", color: "#302725" },
  whiteOutline: { border: "2px solid rgba(255,255,255,0.3)", color: "#ffffff", backgroundColor: "transparent" },
  whatsapp: { backgroundColor: "#25D366", color: "#ffffff" },
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  id,
  type = "button",
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""} hover:opacity-90 hover:shadow-lg`;

  const style = variantStyles[variant] || variantStyles.primary;

  if (href) {
    return (
      <motion.a
        href={href}
        id={id}
        className={baseClasses}
        style={style}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        target={target}
        rel={rel}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      style={style}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
