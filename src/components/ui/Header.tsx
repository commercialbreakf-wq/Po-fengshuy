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
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[101] w-[320px] bg-[#111111]/98 backdrop-blur-xl border-l border-white/10 p-8 md:hidden flex flex-col justify-between"
            >
              <div className="flex flex-col gap-8">
                {/* Header inside drawer */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-lg font-bold tracking-widest text-white uppercase">По-Феншую</span>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white/80 hover:text-[#d4af37] transition-colors p-1"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-5">
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
              </div>

              <div className="flex flex-col gap-6">
                {/* Support & Contacts Info */}
                <div className="border-t border-white/10 pt-6">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-3 font-semibold">Техническая поддержка</div>
                  <div className="flex flex-col gap-3">
                    <a href="https://t.me/po_fenshuyu_support" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#d4af37] transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.97-.74 3.79-1.65 6.32-2.73 7.57-3.26 3.6-1.5 4.34-1.76 4.83-1.77.11 0 .35.03.5.15.13.1.17.24.18.35-.01.08 0 .17-.02.26z"/></svg>
                      Telegram Support
                    </a>
                    <a href="https://wa.me/78120000000" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#d4af37] transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.689 1.972 14.217.95 11.59.95c-5.438 0-9.863 4.37-9.866 9.8.001 2.028.536 4.015 1.55 5.795l-1.011 3.693 3.794-.984zm11.053-7.54c-.26-.13-1.536-.759-1.773-.846-.237-.087-.41-.13-.58.13-.17.26-.66.846-.808 1.011-.148.165-.297.186-.557.056-.26-.13-1.1-.407-2.096-1.294-.775-.69-1.3-1.543-1.452-1.802-.152-.26-.016-.4.114-.53.116-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.399-.796-1.919-.21-.506-.42-.437-.58-.445-.148-.007-.32-.008-.493-.008-.173 0-.455.065-.693.325-.238.26-.91.889-.91 2.167 0 1.277.928 2.511 1.058 2.684.13.173 1.826 2.79 4.425 3.911.618.267 1.1.426 1.475.545.621.197 1.186.169 1.632.102.497-.074 1.536-.628 1.752-1.234.217-.606.217-1.126.152-1.234-.065-.108-.237-.173-.497-.303z"/></svg>
                      WhatsApp Support
                    </a>
                  </div>
                </div>

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
