"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { Footer } from "@/components/sections/Footer";
import { useModalStore } from "@/store/useModalStore";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ChevronLeft, Expand, Clock, BedDouble, Bath, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const project = projects.find((p) => p.id === id);
  const openModal = useModalStore((state) => state.openModal);

  const [activeImage, setActiveImage] = useState<string>(project?.image || "");

  if (!project) {
    return (
      <div className="bg-[#111111] text-white min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Проект не найден</h1>
        <p className="text-white/60 mb-8 max-w-sm">
          Запрашиваемый проект не существует или был перемещен.
        </p>
        <Link href="/projects" className="bg-[#d4af37] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#b5952f] transition-colors">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  // Find other projects as recommendations
  const recommendations = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="bg-[#111111] text-white min-h-screen flex flex-col">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <main className="flex-grow container mx-auto px-6 max-w-7xl pt-36 pb-24 relative z-10">
        {/* Back Link / Breadcrumbs */}
        <div className="mb-10">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#d4af37] transition-colors text-sm font-medium"
          >
            <ChevronLeft size={16} />
            <span>Назад в каталог</span>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden rounded-[2rem] aspect-[4/3] border border-white/10"
            >
              <img 
                src={activeImage || project.image} 
                alt={project.name} 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-6 left-6 bg-[#d4af37] text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                {project.category}
              </span>
            </motion.div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-3 gap-4">
              {project.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    activeImage === imgUrl || (!activeImage && idx === 0)
                      ? "border-[#d4af37] opacity-100" 
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={imgUrl} alt={`${project.name} галерея ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              >
                {project.name}
              </motion.h1>
              
              <div className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-8">
                {project.price}
              </div>

              <p className="text-white/70 font-light leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Main Technical Properties Grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-8 pb-8 border-b border-white/10 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37]">
                    <Expand size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">Площадь</div>
                    <div className="font-semibold text-lg">{project.area}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">Срок стройки</div>
                    <div className="font-semibold text-lg">{project.time}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37]">
                    <BedDouble size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">Спальни</div>
                    <div className="font-semibold text-lg">{project.bedrooms} спальни</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37]">
                    <Bath size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">Санузлы</div>
                    <div className="font-semibold text-lg">{project.bathrooms} санузла</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <MagneticButton onClick={openModal} variant="primary" className="w-full text-center py-4">
                Заказать консультацию
              </MagneticButton>
              <div className="flex items-center justify-center gap-2 text-xs text-white/40">
                <ShieldCheck size={14} className="text-[#d4af37]" />
                <span>Фиксированная цена по договору</span>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Specs Block */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-white/10">Технические характеристики</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-white/5">
                <span className="text-white/50">Фундамент</span>
                <span className="font-medium text-right max-w-xs">{project.specifications.foundation}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-white/5">
                <span className="text-white/50">Технология стен</span>
                <span className="font-medium text-right max-w-xs">{project.specifications.walls}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-white/5">
                <span className="text-white/50">Кровля</span>
                <span className="font-medium text-right max-w-xs">{project.specifications.roof}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-white/5">
                <span className="text-white/50">Утепление</span>
                <span className="font-medium text-right max-w-xs">{project.specifications.insulation}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-white/5">
                <span className="text-white/50">Отделка фасада</span>
                <span className="font-medium text-right max-w-xs">{project.specifications.facade}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-white/5">
                <span className="text-white/50">Этажность</span>
                <span className="font-medium text-right max-w-xs">{project.floors} этаж(а)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section>
          <h2 className="text-3xl font-bold mb-10">Похожие проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((rec) => (
              <Link key={rec.id} href={`/projects/${rec.id}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 border border-white/5 bg-white/5">
                  <img 
                    src={rec.image} 
                    alt={rec.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-[#d4af37] transition-colors mb-1">{rec.name}</h3>
                <div className="text-[#d4af37] font-semibold text-sm mb-2">{rec.price}</div>
                <div className="flex items-center gap-4 text-white/40 text-xs font-medium">
                  <span className="flex items-center gap-1"><Expand size={12} /> {rec.area}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {rec.time}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
