"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Expand, SlidersHorizontal, Search } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [maxPrice, setMaxPrice] = useState<number>(50000000);
  const [minArea, setMinArea] = useState<number>(60);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "Все" || project.category === selectedCategory;
    const matchesPrice = project.numericPrice <= maxPrice;
    
    // Parse area numeric value
    const numericArea = parseInt(project.area);
    const matchesArea = numericArea >= minArea;

    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesArea && matchesSearch;
  });

  const categories = ["Все", "Эконом", "Комфорт", "Premium"];

  return (
    <div className="bg-[#111111] text-white min-h-screen flex flex-col">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#d4af37]/10 to-transparent pointer-events-none" />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 max-w-7xl pt-40 pb-24 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-3 block"
          >
            Архитектурные решения
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Каталог <span className="text-[#d4af37] font-light italic">проектов</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 font-light text-lg"
          >
            Изучите готовые концепции домов от СК «По-Феншую». Каждый проект может быть полностью адаптирован под рельеф вашего участка и индивидуальные потребности вашей семьи.
          </motion.p>
        </div>

        {/* Filter Controls Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-dark border border-white/10 rounded-[2rem] p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
            <SlidersHorizontal className="text-[#d4af37]" size={20} />
            <h3 className="font-semibold text-lg">Фильтрация проектов</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Search Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/50">Поиск</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Название или описание..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] text-white transition-colors"
                />
                <Search className="absolute left-3 top-3.5 text-white/30" size={16} />
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/50 block">Категория</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#d4af37] text-white"
                        : "bg-white/5 hover:bg-white/10 border border-white/5 text-white/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Filter */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <label className="font-medium text-white/50">Площадь</label>
                <span className="text-[#d4af37] font-semibold">от {minArea} м²</span>
              </div>
              <input
                type="range"
                min="60"
                max="300"
                step="10"
                value={minArea}
                onChange={(e) => setMinArea(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
            </div>

            {/* Price Filter */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <label className="font-medium text-white/50">Бюджет</label>
                <span className="text-[#d4af37] font-semibold">до {maxPrice / 1000000} млн ₽</span>
              </div>
              <input
                type="range"
                min="3900000"
                max="50000000"
                step="1000000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="min-h-[400px]">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <Link href={`/projects/${project.id}`} className="block">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 border border-white/5 bg-white/5">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                        <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold text-white border border-white/10">
                          {project.price}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-white transition-colors">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#d4af37] transition-colors">
                          {project.name}
                        </h3>
                        <span className="text-xs text-[#d4af37] border border-[#d4af37]/30 px-2.5 py-0.5 rounded-full font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-white/50 text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <Expand size={16} />
                          {project.area}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          {project.time}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl"
            >
              <SlidersHorizontal className="mx-auto text-white/20 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Проекты не найдены</h3>
              <p className="text-white/40 max-w-sm mx-auto font-light">
                Попробуйте изменить параметры фильтрации или сбросить их для просмотра всех доступных вариантов.
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory("Все");
                  setMaxPrice(50000000);
                  setMinArea(60);
                  setSearchQuery("");
                }}
                className="mt-6 text-[#d4af37] hover:underline text-sm font-medium cursor-pointer"
              >
                Сбросить фильтры
              </button>
            </motion.div>
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
}
