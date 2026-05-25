"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useModalStore } from "@/store/useModalStore";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openModal = useModalStore((state) => state.openModal);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Проекты", href: "/#projects" },
    { label: "Каталог", href: "/projects" },
    { label: "Портфолио", href: "/portfolio" },
    { label: "Калькулятор", href: "/#calculator" },
    { label: "О компании", href: "/#about" },
    { label: "Отзывы", href: "/#reviews" },
    { label: "Контакты", href: "/contacts" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-4" : "py-8",
          className
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-8 py-4 transition-all duration-500",
              scrolled ? "glass-dark shadow-xl" : "glass"
            )}
          >
            {/* Logo */}
            <Link href="/" className="text-xl font-bold tracking-widest text-white uppercase hover:text-[#d4af37] transition-colors">
              По-Феншую
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-[#d4af37] transition-colors text-sm font-medium tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden md:block">
              <button 
                onClick={openModal}
                className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#d4af37] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Связаться с нами
              </button>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-[#d4af37] transition-colors p-1"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-45 w-[280px] bg-[#111111]/95 backdrop-blur-md border-l border-white/10 p-8 pt-24 md:hidden flex flex-col justify-between"
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white/80 hover:text-[#d4af37] transition-colors text-lg font-medium tracking-wide border-b border-white/5 pb-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal();
                  }}
                  className="w-full bg-[#d4af37] text-white py-3 rounded-xl font-medium hover:bg-[#b5952f] transition-colors text-center cursor-pointer"
                >
                  Связаться с нами
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
