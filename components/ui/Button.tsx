"use client";

import { m } from 'framer-motion';
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

const variantStyles: Record<string, string> = {
  primary: "bg-primary text-white border-transparent",
  secondary: "bg-dark text-white border-transparent",
  outline: "border-2 border-primary text-primary bg-transparent",
  ghost: "text-gray-700 bg-transparent border-transparent",
  white: "bg-white text-dark border-transparent",
  whiteOutline: "border-2 border-white/30 text-white bg-transparent",
  whatsapp: "bg-[#25D366] text-white border-transparent",
};

const liquidColors: Record<string, string> = {
  primary: "bg-[#CC4F1D]", // primary-hover
  secondary: "bg-primary",
  outline: "bg-primary",
  ghost: "bg-primary",
  white: "bg-primary",
  whiteOutline: "bg-primary",
  whatsapp: "bg-[#1DA851]", // darker green
};

const textHoverColors: Record<string, string> = {
  primary: "group-hover:text-white",
  secondary: "group-hover:text-white",
  outline: "group-hover:text-white",
  ghost: "group-hover:text-white",
  white: "group-hover:text-white",
  whiteOutline: "group-hover:text-white",
  whatsapp: "group-hover:text-white",
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
  // We use Tailwind classes for colors instead of inline styles now for better hover control
  const baseClasses = `relative overflow-hidden group inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 cursor-pointer ${sizes[size]} ${variantStyles[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"}`;

  const liquidBg = liquidColors[variant] || liquidColors.primary;
  const textHover = textHoverColors[variant] || "group-hover:text-white";

  const LiquidLayer = () => (
    <div className={`absolute top-[100%] left-[-20%] w-[140%] h-[200%] rounded-[40%] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:top-[-50%] group-hover:rounded-none z-0 ${liquidBg}`} />
  );

  const ContentLayer = () => (
    <span className={`relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 ${textHover}`}>
      {children}
    </span>
  );

  if (href) {
    return (
      <m.a
        href={href}
        id={id}
        className={baseClasses}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        target={target}
        rel={rel}
      >
        <LiquidLayer />
        <ContentLayer />
      </m.a>
    );
  }

  return (
    <m.button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      <LiquidLayer />
      <ContentLayer />
    </m.button>
  );
}
