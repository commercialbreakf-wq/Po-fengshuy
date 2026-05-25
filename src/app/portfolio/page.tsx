"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Minimize2 } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="bg-[#111111] text-white min-h-screen flex flex-col">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#d4af37]/10 to-transparent pointer-events-none" />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 max-w-7xl pt-40 pb-24 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-3 block"
          >
            Наш практический опыт
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Портфолио <span className="text-[#d4af37] font-light italic">выполненных работ</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 font-light text-lg"
          >
            Реальные фотографии с наших строительных площадок в Санкт-Петербурге и Ленинградской области. Мы гордимся качеством исполнения каждого конструктивного узла и прозрачностью на каждом этапе.
          </motion.p>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col justify-between glass-dark border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#d4af37]/30 transition-all duration-300"
            >
              <div>
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5 border-b border-white/5">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                    <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-white border border-white/10 flex items-center gap-1">
                      <MapPin size={12} className="text-[#d4af37]" />
                      {project.location.split(",")[0]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-white/60 font-light text-sm line-clamp-3 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-white/40 text-xs font-medium border-t border-white/5 pt-4">
                    <div className="flex items-center gap-1.5">
                      <Minimize2 size={14} className="text-[#d4af37]" />
                      Размер: {project.size}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-8 pt-0">
                <Link 
                  href={`/portfolio/${project.id}`}
                  className="inline-flex items-center justify-between w-full bg-white/5 border border-white/10 text-white rounded-xl px-5 py-3 text-sm font-medium group-hover:bg-[#d4af37] group-hover:border-[#d4af37] group-hover:text-white transition-all cursor-pointer"
                >
                  <span>Смотреть фотоотчет</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
