"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full bg-[#111] -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero_bg.jpg"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/40 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass border border-white/20 text-white/90 text-sm font-medium tracking-wider mb-6">
              PREMIUM REAL ESTATE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            <a href="#projects" className="hover:text-white/80 transition-colors cursor-pointer">
              Строим дома, в которые <span className="text-[#d4af37] italic font-light hover:text-[#b5952f] transition-colors">хочется возвращаться</span>
            </a>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed mb-12"
          >
            От доступных уютных домов до премиальных резиденций под ключ. Мы создаем пространство для вашей лучшей жизни.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 items-start"
          >
            <MagneticButton href="#calculator" variant="primary">
              Рассчитать стоимость
            </MagneticButton>
            <MagneticButton href="#projects" variant="outline">
              Смотреть проекты
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Floating Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-12 right-6 md:right-12 hidden lg:flex gap-8 glass px-8 py-6 rounded-2xl"
      >
        <div>
          <div className="text-3xl font-bold text-white mb-1">15+</div>
          <div className="text-sm text-white/60">Лет на рынке</div>
        </div>
        <div className="w-[1px] bg-white/20" />
        <div>
          <div className="text-3xl font-bold text-white mb-1">450+</div>
          <div className="text-sm text-white/60">Сданных объектов</div>
        </div>
        <div className="w-[1px] bg-white/20" />
        <div>
          <div className="text-3xl font-bold text-white mb-1">5 Лет</div>
          <div className="text-sm text-white/60">Гарантия на дом</div>
        </div>
      </motion.div>
    </section>
  );
}
