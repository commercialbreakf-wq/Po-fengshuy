"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Заявка и встреча", desc: "Обсуждаем ваши пожелания, бюджет и выбираем оптимальную концепцию дома." },
  { num: "02", title: "Проектирование", desc: "Создаем архитектурный проект, 3D-визуализацию и детальную смету. Фиксируем цену." },
  { num: "03", title: "Производство", desc: "Изготавливаем элементы дома на нашем заводе с контролем качества каждого узла." },
  { num: "04", title: "Строительство", desc: "Возводим фундамент, собираем домокомплект, делаем кровлю и внешнюю отделку." },
  { num: "05", title: "Сдача объекта", desc: "Передаем ключи от готового дома. Вы подписываете акт и получаете гарантию 5 лет." },
];

export function Process() {
  return (
    <section className="py-32 bg-[#fdfbf7]" id="process">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#111111] mb-6"
          >
            Как мы <span className="text-[#d4af37]">строим</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#2d2d2d]/60 font-light max-w-2xl mx-auto"
          >
            Прозрачный процесс от первой встречи до передачи ключей. Вы всегда знаете, что происходит на вашем участке.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#111111]/10 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                  
                  {/* Left Side */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16' : 'md:order-2 md:pl-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-white p-8 rounded-3xl shadow-xl shadow-black/5 border border-black/5 hover:-translate-y-2 transition-transform duration-300 w-full max-w-md"
                    >
                      <div className="text-4xl font-bold text-[#d4af37]/20 mb-4">{step.num}</div>
                      <h3 className="text-2xl font-bold text-[#111111] mb-3">{step.title}</h3>
                      <p className="text-[#2d2d2d]/70 font-light leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#fdfbf7] border-4 border-[#111111] items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-[#d4af37]" />
                  </div>

                  {/* Right Side Empty for offset */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : 'order-1'}`} />
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
