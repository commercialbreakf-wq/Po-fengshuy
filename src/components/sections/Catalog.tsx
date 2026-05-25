"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Expand } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import Link from "next/link";

type Category = "Эконом" | "Комфорт" | "Premium";

export function Catalog() {
  const [activeTab, setActiveTab] = useState<Category>("Комфорт");

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  return (
    <section className="py-32 bg-[#fdfbf7]" id="projects">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#111111] mb-6 tracking-tight"
            >
              Проекты для любой жизни
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#2d2d2d]/70 font-light"
            >
              От эргономичных домов для небольших участков до впечатляющих резиденций. Выберите свой идеальный формат.
            </motion.p>
          </div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex p-1.5 bg-gray-200/50 rounded-full self-start md:self-auto"
          >
            {(["Эконом", "Комфорт", "Premium"] as Category[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                  activeTab === tab ? "text-white" : "text-[#111111]/60 hover:text-[#111111]"
                )}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#111111] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                      <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold text-[#111111]">
                        {project.price}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#111111] group-hover:bg-[#d4af37] group-hover:text-white transition-colors">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#111111] mb-3 group-hover:text-[#d4af37] transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-6 text-[#2d2d2d]/60 text-sm font-medium">
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
      </div>
    </section>
  );
}
