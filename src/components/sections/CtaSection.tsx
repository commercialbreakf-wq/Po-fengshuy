"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useModalStore } from "@/store/useModalStore";

export function CtaSection() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <section className="relative py-40 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/lifestyle_family.png" 
          alt="Фон" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-[#111111] tracking-tight mb-8"
        >
          Ваш будущий дом начинается <span className="text-[#d4af37]">здесь</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[#2d2d2d]/70 font-light mb-12 max-w-2xl mx-auto"
        >
          Оставьте заявку на бесплатную консультацию. Наш архитектор свяжется с вами, чтобы обсудить детали и предложить лучшие решения.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <MagneticButton onClick={openModal} variant="primary" className="text-lg px-12 py-5">
            Получить консультацию
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
