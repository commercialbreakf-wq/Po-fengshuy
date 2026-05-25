"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

export function PremiumCard({ title, description, icon, className, delay = 0 }: PremiumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10 }}
      className={cn(
        "bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20",
        className
      )}
    >
      {icon && <div className="mb-6 text-[#d4af37]">{icon}</div>}
      <h3 className="text-2xl font-medium mb-4 text-white">{title}</h3>
      <p className="text-white/60 leading-relaxed font-light">{description}</p>
    </motion.div>
  );
}
