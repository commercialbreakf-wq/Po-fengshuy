"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactsPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          type: "contacts_page",
        }),
      });

      if (!res.ok) throw new Error("API error");

      setFormData({ name: "", phone: "", message: "" });
      toast.success("Сообщение успешно отправлено!", {
        description: "Наш специалист перезвонит вам в ближайшее время.",
        style: { background: "#111", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }
      });
    } catch (err) {
      toast.error("Ошибка при отправке сообщения", {
        description: "Пожалуйста, попробуйте еще раз позже.",
        style: { background: "#111", color: "#ff4a4a", border: "1px solid rgba(255,74,74,0.1)" }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#111111] text-white min-h-screen flex flex-col">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#d4af37]/5 to-transparent pointer-events-none" />

      <main className="flex-grow container mx-auto px-6 max-w-7xl pt-40 pb-24 relative z-10">
        
        {/* Page Title */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-3 block">СК «По-Феншую»</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Свяжитесь с <span className="text-[#d4af37] font-light italic">нами</span>
          </h1>
          <p className="text-white/60 font-light text-lg">
            Мы готовы обсудить проект вашего будущего дома в любом удобном формате. Посетите наш уютный офис, позвоните нам или заполните форму обратной связи.
          </p>
        </div>

        {/* Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Column: Contacts Info */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Phone & Mail Block */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white tracking-wide uppercase">Контакты</h3>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-1">Телефон</div>
                  <a href="tel:+78120000000" className="text-xl font-semibold hover:text-[#d4af37] transition-colors">
                    +7 (812) 000-00-00
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-1">Email</div>
                  <a href="mailto:info@po-fenshuyu.ru" className="text-xl font-semibold hover:text-[#d4af37] transition-colors">
                    info@po-fenshuyu.ru
                  </a>
                </div>
              </div>
            </div>

            {/* Address Block */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white tracking-wide uppercase">Адрес офиса</h3>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-1">Адрес</div>
                  <div className="text-lg font-light leading-relaxed">
                    г. Санкт-Петербург, ул. Строителей, д. 1, офис 101
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-1">Режим работы</div>
                  <div className="text-lg font-light">
                    Пн-Пт: 10:00 - 19:00 (Суббота по записи)
                  </div>
                </div>
              </div>
            </div>

            {/* Rekvizity */}
            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
              <div className="text-sm font-semibold mb-2">ООО СК «По-Феншую»</div>
              <div className="text-xs text-white/40 space-y-1 font-mono">
                <div>ИНН: 7810123456 / КПП: 781001001</div>
                <div>ОГРН: 1207800123456</div>
              </div>
            </div>

          </div>

          {/* Right Column: Feedback Form */}
          <div className="lg:col-span-7 bg-[#1a1a1a] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-2">Напишите нам</h3>
            <p className="text-white/60 font-light mb-8">
              У вас есть вопросы по проекту или вы хотите обсудить индивидуальное предложение? Заполните форму, и мы ответим в течение 30 минут.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Александр"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">Номер телефона</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">Сообщение / Пожелания</label>
                <textarea
                  rows={4}
                  placeholder="Расскажите немного о вашем будущем доме..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d4af37] text-white py-4 rounded-xl font-medium hover:bg-[#b5952f] transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  <>
                    <span>Отправить сообщение</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Custom Map / Office Visualizer (Premium Placeholder) */}
        <section className="relative overflow-hidden rounded-[2.5rem] h-[450px] border border-white/10 bg-white/5 flex items-center justify-center">
          {/* Styled background to simulate a dark-theme vector map */}
          <div className="absolute inset-0 z-0 bg-[#161616]">
            {/* Abstract grid lines and circles representing streets/points */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-white/5 pointer-events-none" />
            
            {/* The office pin glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="relative flex h-8 w-8">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37]/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-8 w-8 bg-[#d4af37] border-4 border-[#161616] items-center justify-center shadow-lg">
                  <MapPin size={12} className="text-white" />
                </span>
              </span>
              <div className="mt-3 bg-black/90 backdrop-blur-md px-4 py-2 border border-white/10 rounded-xl text-xs font-semibold tracking-wide whitespace-nowrap">
                Офис «По-Феншую»
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
