"use client";

import { PremiumCard } from "@/components/ui/PremiumCard";
import { CheckCircle2, Home, Wrench, ShieldCheck, Ruler, Coins } from "lucide-react";
import { motion } from "framer-motion";

export function Benefits() {
  const benefits = [
    {
      title: "Строительство под ключ",
      description: "Берем на себя всё: от геологии участка до финальной уборки перед вашим заездом. Вы только согласовываете этапы.",
      icon: <CheckCircle2 size={32} strokeWidth={1.5} />,
    },
    {
      title: "От эконом до premium",
      description: "Адаптируем проекты под ваш бюджет без потери качества. Строим как уютные дачи, так и элитные резиденции.",
      icon: <Home size={32} strokeWidth={1.5} />,
    },
    {
      title: "Собственное производство",
      description: "Контролируем качество каждого элемента на собственном заводе. Никаких наценок посредников.",
      icon: <Wrench size={32} strokeWidth={1.5} />,
    },
    {
      title: "Фиксированная цена",
      description: "Смета не меняется в процессе стройки. Цена фиксируется в договоре до начала всех работ.",
      icon: <Coins size={32} strokeWidth={1.5} />,
    },
    {
      title: "Гарантия 5 лет",
      description: "Уверены в качестве своей работы и материалов, поэтому даем официальную расширенную гарантию.",
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    },
    {
      title: "Персональный архитектор",
      description: "Индивидуальное проектирование или бесплатная адаптация типового проекта под ваши пожелания.",
      icon: <Ruler size={32} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-32 bg-[#111111] relative overflow-hidden" id="about">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#d4af37]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Почему выбирают <span className="text-[#d4af37]">По-Феншую</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 font-light"
          >
            Мы объединяем премиальный подход с доступными решениями, делая загородную жизнь вашей мечты реальностью.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <PremiumCard
              key={idx}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
