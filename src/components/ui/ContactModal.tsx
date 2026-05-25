"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useModalStore } from "@/store/useModalStore";
import { useState } from "react";
import { toast } from "sonner";

export function ContactModal() {
  const { isOpen, closeModal, leadData } = useModalStore();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name, 
          phone, 
          type: leadData?.type || "callback",
          message: leadData?.message || "",
          project_type: leadData?.project_type || null
        }),
      });

      if (!res.ok) throw new Error("API error");

      setName("");
      setPhone("");
      closeModal();
      toast.success("Ваша заявка успешно отправлена!", {
        description: "Наш менеджер свяжется с вами в течение 15 минут.",
        style: { background: "#111", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }
      });
    } catch (err) {
      toast.error("Ошибка при отправке заявки", {
        description: "Пожалуйста, попробуйте еще раз позже.",
        style: { background: "#111", color: "#ff4a4a", border: "1px solid rgba(255,74,74,0.1)" }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm cursor-pointer"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#1a1a1a] border border-white/10 w-full max-w-lg rounded-[2rem] p-8 md:p-12 relative pointer-events-auto shadow-2xl"
            >
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <h3 className="text-3xl font-bold text-white mb-2">Оставьте заявку</h3>
              <p className="text-white/60 font-light mb-8">
                Мы свяжемся с вами, чтобы обсудить проект вашего будущего дома.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ваше имя" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+7 (999) 000-00-00" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-[#d4af37] text-white rounded-xl px-5 py-4 font-medium hover:bg-[#b5952f] transition-colors disabled:opacity-50 mt-4 flex justify-center items-center"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : "Отправить заявку"}
                </button>
              </form>
              <div className="text-xs text-white/30 text-center mt-6">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
