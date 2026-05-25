"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioProjects } from "@/data/portfolio";
import { Footer } from "@/components/sections/Footer";
import { useModalStore } from "@/store/useModalStore";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ChevronLeft, MapPin, Minimize2, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PortfolioDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const project = portfolioProjects.find((p) => p.id === id);
  const openModal = useModalStore((state) => state.openModal);

  const [activeImage, setActiveImage] = useState<string>(project?.images[0] || "");

  if (!project) {
    return (
      <div className="bg-[#111111] text-white min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Объект не найден</h1>
        <p className="text-white/60 mb-8 max-w-sm">
          Запрашиваемый отчет о выполненных работах не существует или был удален.
        </p>
        <Link href="/portfolio" className="bg-[#d4af37] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#b5952f] transition-colors">
          Вернуться в портфолио
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#111111] text-white min-h-screen flex flex-col">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <main className="flex-grow container mx-auto px-6 max-w-7xl pt-36 pb-24 relative z-10">
        
        {/* Breadcrumbs */}
        <div className="mb-10">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#d4af37] transition-colors text-sm font-medium"
          >
            <ChevronLeft size={16} />
            <span>Назад в портфолио</span>
          </Link>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Active Preview image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              key={activeImage || project.images[0]}
              className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] border border-white/10 shadow-2xl bg-white/5"
            >
              <img 
                src={activeImage || project.images[0]} 
                alt={project.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnail Gallery (12 Images) */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {project.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    activeImage === imgUrl || (!activeImage && idx === 0)
                      ? "border-[#d4af37] opacity-100 scale-95" 
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img 
                    src={imgUrl} 
                    alt={`${project.name} фото ${idx + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-wider block mb-3">
                Фотоотчет с объекта
              </span>
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              >
                {project.name}
              </motion.h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="text-[#d4af37]" size={20} />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Minimize2 className="text-[#d4af37]" size={20} />
                  <span>Размеры: {project.size}</span>
                </div>
              </div>

              <p className="text-white/70 font-light leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Tasks completed */}
              <div className="space-y-4 border-t border-white/10 pt-8 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Выполненные работы:</h3>
                {project.details.map((detail, index) => (
                  <div key={index} className="flex gap-3 items-start text-white/75 font-light text-sm">
                    <CheckCircle2 className="text-[#d4af37] shrink-0 mt-0.5" size={16} />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <MagneticButton 
                onClick={() => openModal({
                  type: "portfolio_cta",
                  project_type: project.name,
                  message: `Интересует объект "${project.name}" в ${project.location}.`
                })} 
                variant="primary" 
                className="w-full text-center py-4"
              >
                Хочу похожий проект
              </MagneticButton>
              <div className="flex items-center justify-center gap-2 text-xs text-white/40">
                <ShieldCheck size={14} className="text-[#d4af37]" />
                <span>Гарантия на общестроительные работы до 5 лет</span>
              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
