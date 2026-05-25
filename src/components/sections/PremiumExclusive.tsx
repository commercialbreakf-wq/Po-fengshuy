"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useModalStore } from "@/store/useModalStore";

export function PremiumExclusive() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <section className="relative py-32 bg-black overflow-hidden flex items-center min-h-[900px]">
      {/* Background with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
          <img
            src="/images/house_premium.png"
            alt="Премиальная резиденция"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/30 text-[#d4af37] text-sm font-medium tracking-widest uppercase mb-8">
              Premium Exclusive
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Индивидуальные <br />резиденции
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 font-light leading-relaxed mb-12"
          >
            Архитектура без компромиссов. Создаем уникальные проекты, отражающие ваш статус и видение идеального пространства. От 32 млн ₽.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 mb-12 text-white/80 font-light"
          >
            <li className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              Личный VIP-архитектор
            </li>
            <li className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              Эксклюзивные материалы отделки
            </li>
            <li className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              Интеграция "Умного дома" премиум класса
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MagneticButton onClick={openModal} variant="primary">
              Обсудить премиум проект
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
