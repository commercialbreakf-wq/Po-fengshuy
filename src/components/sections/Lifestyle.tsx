"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Lifestyle() {
  return (
    <section className="py-32 bg-[#fdfbf7] overflow-hidden" id="lifestyle">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden aspect-[4/5] mt-12"
              >
                <img 
                  src="/images/lifestyle_family.png" 
                  alt="Счастливая семья" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="rounded-3xl overflow-hidden aspect-[4/5]"
              >
                <img 
                  src="/images/lifestyle_interior.png" 
                  alt="Интерьер" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#d4af37]/10 blur-[100px] rounded-full" />
          </div>

          <div className="order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-8 tracking-tight"
            >
              Продаем не стены, а <span className="text-[#d4af37] italic font-light">образ жизни</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#2d2d2d]/80 font-light leading-relaxed mb-8"
            >
              Представьте: утренний кофе на деревянной террасе в лучах рассветного солнца, панорамные окна, впускающие природу прямо в гостиную, и уютные семейные вечера у камина.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#2d2d2d]/60 font-light leading-relaxed mb-12"
            >
              Мы продумываем каждый сценарий жизни в доме, чтобы вам было комфортно с первой минуты. Роскошная загородная жизнь доступнее, чем вам кажется.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <MagneticButton variant="primary">
                Записаться на экскурсию
              </MagneticButton>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
