"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "450+", label: "Построенных домов", icon: <Briefcase /> },
  { value: "15 лет", label: "Надежной работы", icon: <Award /> },
  { value: "100%", label: "Точность сроков", icon: <Zap /> },
  { value: "1200+", label: "Счастливых жильцов", icon: <Users /> },
];

export function Trust() {
  return (
    <section className="py-32 bg-[#111111] text-white" id="trust">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Почему нам <span className="text-[#d4af37]">доверяют</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg font-light"
          >
            Мы не просто строим дома, мы создаем фундамент для вашей семейной истории. Наш подход основан на прозрачности и безупречном качестве.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 rounded-3xl glass-dark border border-white/5 hover:border-[#d4af37]/30 transition-colors"
            >
              <div className="text-[#d4af37] flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-white/50 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Certificates or Timeline snippet could go here */}
      </div>
    </section>
  );
}
