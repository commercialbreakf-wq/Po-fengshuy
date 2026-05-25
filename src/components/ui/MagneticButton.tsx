"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-[#d4af37] text-white hover:bg-[#b5952f]",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "border border-white/30 text-white hover:bg-white/10",
  };

  const sharedProps = {
    ref,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    animate: { x: position.x, y: position.y },
    transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
    className: cn(
      "relative px-8 py-4 rounded-full font-medium tracking-wide transition-colors duration-300 overflow-hidden inline-flex items-center justify-center cursor-pointer select-none",
      variants[variant],
      disabled && "opacity-50 pointer-events-none",
      className
    ),
  };

  if (href) {
    if (href.startsWith("http") || href.startsWith("#")) {
      return (
        <motion.a 
          href={href} 
          onClick={onClick as any} 
          {...sharedProps}
          {...(props as any)}
        >
          <span className="relative z-10">{children}</span>
        </motion.a>
      );
    }
    const MotionLink = motion(Link);
    return (
      <MotionLink 
        href={href} 
        onClick={onClick as any} 
        {...sharedProps}
        {...(props as any)}
      >
        <span className="relative z-10">{children}</span>
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...sharedProps}
      {...(props as any)}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

