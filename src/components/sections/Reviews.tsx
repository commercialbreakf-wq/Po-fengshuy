"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Александр В.",
    project: "Дом Optima 80",
    text: "Искали надежного подрядчика для небольшого дома. 'По-Феншую' сделали всё быстро и прозрачно. Живем уже год, никаких проблем.",
    image: "/images/review_person1.png",
  },
  {
    id: 2,
    name: "Екатерина М.",
    project: "Резиденция Premium",
    text: "Потрясающий подход к деталям. Архитектор учел все наши пожелания, а качество отделки превзошло ожидания. Настоящий премиум.",
    image: "/images/review_person2.png",
  },
];

export function Reviews() {
  return (
    <section className="py-32 bg-[#111111] text-white overflow-hidden" id="reviews">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Говорят наши <span className="text-[#d4af37]">клиенты</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-dark p-10 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-8 items-start hover:border-[#d4af37]/30 transition-colors"
            >
              <img 
                src={review.image} 
                alt={review.name} 
                className="w-24 h-24 rounded-full object-cover shrink-0"
              />
              <div>
                <div className="flex gap-1 mb-4 text-[#d4af37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/80 font-light italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
                <div>
                  <div className="font-bold text-lg">{review.name}</div>
                  <div className="text-sm text-[#d4af37]">{review.project}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
