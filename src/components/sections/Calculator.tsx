"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { useModalStore } from "@/store/useModalStore";

const STYLES = [
  { id: "scandi", name: "Скандинавский", coef: 1.0 },
  { id: "hightech", name: "Хай-тек", coef: 1.15 },
  { id: "classic", name: "Классика", coef: 1.1 },
  { id: "barn", name: "Барнхаус", coef: 1.05 },
];

const MATERIALS = [
  { id: "frame", name: "Каркас", coef: 1.0 },
  { id: "gasbeton", name: "Газобетон", coef: 1.3 },
  { id: "brick", name: "Кирпич", coef: 1.6 },
  { id: "monolith", name: "Монолит", coef: 1.8 },
];

const BASE_PRICE_PER_SQM = 80000;

export function Calculator() {
  const [area, setArea] = useState<number>(120);
  const [floors, setFloors] = useState<number>(1);
  const [style, setStyle] = useState(STYLES[0]);
  const [material, setMaterial] = useState(MATERIALS[0]);
  const openModal = useModalStore((state) => state.openModal);

  // Real formula logic
  const calculatePrice = () => {
    // Basic calculation
    let total = area * BASE_PRICE_PER_SQM;
    total = total * style.coef;
    total = total * material.coef;
    
    // Floors affect foundation and roof slightly inversely per sqm, but stairs add cost.
    if (floors === 2) total = total * 0.95; // 2 floors slightly cheaper per sqm because smaller foundation/roof
    
    return Math.round(total / 100000) * 100000; // Round to 100k
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  return (
    <section className="py-32 bg-[#111111]" id="calculator">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Interactive Form */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Рассчитайте стоимость
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 mb-12 font-light text-lg"
            >
              Выберите параметры вашего будущего дома, и мы покажем ориентировочную стоимость.
            </motion.p>

            <div className="space-y-10">
              {/* Area Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-white/80 font-medium">Площадь дома</label>
                  <span className="text-2xl font-bold text-[#d4af37]">{area} м²</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="400"
                  step="10"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                />
              </div>

              {/* Floors */}
              <div className="space-y-4">
                <label className="text-white/80 font-medium block">Этажность</label>
                <div className="flex gap-4">
                  {[1, 2].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFloors(f)}
                      className={cn(
                        "flex-1 py-4 rounded-xl border transition-all duration-300 font-medium",
                        floors === f
                          ? "bg-[#d4af37] border-[#d4af37] text-white"
                          : "border-white/20 text-white/60 hover:border-white/40"
                      )}
                    >
                      {f} {f === 1 ? "этаж" : "этажа"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style */}
              <div className="space-y-4">
                <label className="text-white/80 font-medium block">Стиль архитектуры</label>
                <div className="grid grid-cols-2 gap-4">
                  {STYLES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setStyle(s)}
                      className={cn(
                        "py-3 px-4 rounded-xl border text-left transition-all duration-300",
                        style.id === s.id
                          ? "border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10"
                          : "border-white/20 text-white/60 hover:border-white/40"
                      )}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="space-y-4">
                <label className="text-white/80 font-medium block">Технология строительства</label>
                <div className="grid grid-cols-2 gap-4">
                  {MATERIALS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMaterial(m)}
                      className={cn(
                        "py-3 px-4 rounded-xl border text-left transition-all duration-300",
                        material.id === m.id
                          ? "border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10"
                          : "border-white/20 text-white/60 hover:border-white/40"
                      )}
                    >
                      {m.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Result & Animation */}
          <div className="lg:pl-16 mt-12 lg:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/20 to-transparent blur-3xl rounded-full opacity-50" />
            <motion.div 
              key={calculatePrice()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative glass-dark p-10 md:p-14 rounded-3xl border border-white/10 text-center"
            >
              <div className="text-white/60 mb-4 font-medium tracking-wider uppercase text-sm">Ориентировочная стоимость</div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-6">
                ~ {formatPrice(calculatePrice())} <span className="text-[#d4af37]">₽</span>
              </div>
              <p className="text-white/50 text-sm mb-10 max-w-sm mx-auto">
                Финальная цена фиксируется в договоре после выезда инженера и утверждения проекта.
              </p>
              <MagneticButton 
                onClick={() => openModal({
                  type: "calculator",
                  project_type: `Дом ${area}м², ${floors} эт.`,
                  message: `Расчет на калькуляторе: площадь ${area} м², этажей ${floors}, стиль "${style.name}", технология "${material.name}". Стоимость: ~${formatPrice(calculatePrice())} ₽`
                })} 
                variant="primary" 
                className="w-full"
              >
                Получить точную смету
              </MagneticButton>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
