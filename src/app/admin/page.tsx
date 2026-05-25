"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, KeyRound, Database, RefreshCw, Phone, User, MessageSquare, Calendar, 
  Trash2, CheckCircle2, AlertCircle, Clock, Check, X, Search, Filter, Clipboard
} from "lucide-react";
import { toast } from "sonner";

interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  message: string;
  type: string;
  created_at: string;
  status: string;
  project_type: string | null;
}

export default function AdminPage() {
  const [passwordInput, setPasswordInput] = useState("");
  const [adminPass, setAdminPass] = useState<string | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // Try to load password from localStorage on mount
  useEffect(() => {
    const savedPass = localStorage.getItem("pf_admin_pass");
    if (savedPass) {
      handleLogin(savedPass);
    }
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(passwordInput);
  };

  const handleLogin = async (pass: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "list", adminPass: pass }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Неверный пароль");
      }

      setAdminPass(pass);
      setLeads(data.leads || []);
      localStorage.setItem("pf_admin_pass", pass);
      toast.success("Вход в панель администратора выполнен!");
    } catch (err: any) {
      toast.error(err.message || "Ошибка входа");
      localStorage.removeItem("pf_admin_pass");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setAdminPass(null);
    setLeads([]);
    setPasswordInput("");
    localStorage.removeItem("pf_admin_pass");
    toast.success("Вы вышли из системы");
  };

  const fetchLeads = async () => {
    if (!adminPass) return;
    setLoading(true);
    try {
      const res = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "list", adminPass }),
      });
      const data = await res.json();
      if (res.ok) {
        setLeads(data.leads || []);
        toast.success("Данные обновлены");
      } else {
        throw new Error(data.error);
      }
    } catch (err: any) {
      toast.error("Не удалось обновить данные: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (leadId: number, newStatus: string) => {
    if (!adminPass) return;
    try {
      const res = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update", adminPass, leadId, newStatus }),
      });
      if (res.ok) {
        setLeads(leads.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
        toast.success(`Статус заявки #${leadId} успешно изменен`);
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Не удалось обновить статус");
    }
  };

  const deleteLead = async (leadId: number) => {
    if (!adminPass) return;
    if (!confirm("Вы уверены, что хотите удалить эту заявку?")) return;
    try {
      const res = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete", adminPass, leadId }),
      });
      if (res.ok) {
        setLeads(leads.filter(l => l.id !== leadId));
        toast.success(`Заявка #${leadId} удалена`);
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Не удалось удалить заявку");
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} скопирован в буфер обмена`);
  };

  const getSourceBadge = (type: string) => {
    switch (type) {
      case "calculator":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Калькулятор</span>;
      case "contacts_page":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Контакты</span>;
      case "portfolio_cta":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Портфолио</span>;
      default:
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Обратный звонок</span>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"><CheckCircle2 size={12} /> Закрыта</span>;
      case "in_progress":
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"><Clock size={12} /> В обработке</span>;
      default:
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20"><AlertCircle size={12} /> Новая</span>;
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      (lead.message && lead.message.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesType = typeFilter === "all" || lead.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const newLeadsCount = leads.filter(l => l.status === "new" || !l.status).length;
  const inProgressCount = leads.filter(l => l.status === "in_progress").length;
  const completedCount = leads.filter(l => l.status === "completed").length;

  if (!adminPass) {
    return (
      <div className="bg-[#111111] text-white min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md glass-dark border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative z-10 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mx-auto mb-6">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Админ-панель</h1>
          <p className="text-white/50 font-light mb-8 text-sm">
            Панель управления входящими заявками СК «По-Феншую».
          </p>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                required
                placeholder="Введите пароль администратора"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-all"
              />
              <KeyRound className="absolute left-4 top-4.5 text-white/30" size={18} />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-[#d4af37] text-white rounded-xl py-4 font-semibold hover:bg-[#b5952f] transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : "Войти в систему"}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#111111] text-white min-h-screen flex flex-col font-sans">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 bg-[#161616]/80 backdrop-blur-md border-b border-white/10 py-5">
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Database size={18} />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-wide uppercase">Панель лидов</h1>
              <div className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                SUPABASE CONNECTED
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={fetchLeads}
              disabled={loading}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all disabled:opacity-50 cursor-pointer"
              title="Обновить"
            >
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            </button>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white transition-all cursor-pointer"
            >
              Выйти
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Section */}
      <main className="flex-grow container mx-auto px-6 max-w-7xl py-10">
        
        {/* Quick Statistics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          <div className="glass-dark border border-white/10 p-6 rounded-2xl">
            <div className="text-sm text-white/50 mb-1">Всего заявок</div>
            <div className="text-4xl font-bold">{leads.length}</div>
          </div>

          <div className="glass-dark border border-rose-500/10 p-6 rounded-2xl bg-rose-500/5">
            <div className="text-sm text-rose-400/80 mb-1">Новые</div>
            <div className="text-4xl font-bold text-rose-400">{newLeadsCount}</div>
          </div>

          <div className="glass-dark border border-amber-500/10 p-6 rounded-2xl bg-amber-500/5">
            <div className="text-sm text-amber-400/80 mb-1">В обработке</div>
            <div className="text-4xl font-bold text-amber-400">{inProgressCount}</div>
          </div>

          <div className="glass-dark border border-emerald-500/10 p-6 rounded-2xl bg-emerald-500/5">
            <div className="text-sm text-emerald-400/80 mb-1">Закрытые</div>
            <div className="text-4xl font-bold text-emerald-400">{completedCount}</div>
          </div>

        </div>

        {/* Filters and Controls Panel */}
        <div className="glass-dark border border-white/10 p-6 rounded-2xl mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              placeholder="Поиск по имени, телефону, описанию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] text-white"
            />
            <Search className="absolute left-3.5 top-3.5 text-white/30" size={16} />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 w-full md:w-auto justify-end">
            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter size={14} className="text-white/40" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37]"
              >
                <option value="all">Все статусы</option>
                <option value="new">Новые</option>
                <option value="in_progress">В обработке</option>
                <option value="completed">Закрытые</option>
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37]"
              >
                <option value="all">Все источники</option>
                <option value="callback">Обратный звонок</option>
                <option value="calculator">Калькулятор</option>
                <option value="contacts_page">Контакты</option>
                <option value="portfolio_cta">Портфолио</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lead Table Container */}
        <div className="glass-dark border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#161616]/60 text-xs font-semibold text-white/50 uppercase tracking-wider">
                  <th className="py-4 px-6">ID / Дата</th>
                  <th className="py-4 px-6">Клиент</th>
                  <th className="py-4 px-6">Источник</th>
                  <th className="py-4 px-6">Сообщение / Расчет</th>
                  <th className="py-4 px-6">Статус</th>
                  <th className="py-4 px-6 text-right">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                <AnimatePresence mode="popLayout">
                  {filteredLeads.map((lead) => (
                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hover:bg-white/5 transition-colors"
                    >
                      {/* ID / Date */}
                      <td className="py-5 px-6 whitespace-nowrap">
                        <div className="font-mono text-white/40">#{lead.id}</div>
                        <div className="text-xs text-white/60 mt-1 flex items-center gap-1.5">
                          <Calendar size={12} />
                          {new Date(lead.created_at).toLocaleString("ru-RU")}
                        </div>
                      </td>

                      {/* Client Info */}
                      <td className="py-5 px-6">
                        <div className="font-bold flex items-center gap-1.5">
                          <User size={14} className="text-[#d4af37]" />
                          {lead.name}
                        </div>
                        <div className="mt-1 flex items-center gap-1">
                          <Phone size={12} className="text-white/40" />
                          <span className="font-mono text-white/80">{lead.phone}</span>
                          <button 
                            onClick={() => copyToClipboard(lead.phone, "Телефон")}
                            className="p-1 text-white/30 hover:text-white transition-colors cursor-pointer"
                            title="Копировать номер"
                          >
                            <Clipboard size={10} />
                          </button>
                        </div>
                      </td>

                      {/* Source */}
                      <td className="py-5 px-6 whitespace-nowrap">
                        {getSourceBadge(lead.type)}
                        {lead.project_type && (
                          <div className="text-xs text-white/40 mt-1 italic">{lead.project_type}</div>
                        )}
                      </td>

                      {/* Message / Details */}
                      <td className="py-5 px-6 max-w-md">
                        <div className="flex gap-2 items-start text-white/80 font-light leading-relaxed">
                          <MessageSquare size={16} className="text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{lead.message || <span className="italic text-white/30">Без сообщения</span>}</span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-5 px-6 whitespace-nowrap">
                        {getStatusBadge(lead.status)}
                      </td>

                      {/* Actions */}
                      <td className="py-5 px-6 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          {/* Set In Progress */}
                          {lead.status === "new" && (
                            <button
                              onClick={() => updateLeadStatus(lead.id, "in_progress")}
                              className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500 hover:text-white transition-all cursor-pointer"
                              title="Взять в работу"
                            >
                              <Clock size={14} />
                            </button>
                          )}
                          
                          {/* Close Lead */}
                          {lead.status !== "completed" && (
                            <button
                              onClick={() => updateLeadStatus(lead.id, "completed")}
                              className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                              title="Закрыть сделку"
                            >
                              <Check size={14} />
                            </button>
                          )}

                          {/* Reopen lead */}
                          {lead.status === "completed" && (
                            <button
                              onClick={() => updateLeadStatus(lead.id, "new")}
                              className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white transition-all cursor-pointer"
                              title="Вернуть в новые"
                            >
                              <X size={14} />
                            </button>
                          )}

                          {/* Delete Lead */}
                          <button
                            onClick={() => deleteLead(lead.id)}
                            className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                            title="Удалить заявку"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
                
                {filteredLeads.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-20 text-center text-white/30">
                      <Database size={48} className="mx-auto mb-4 text-white/10" />
                      <h3 className="text-lg font-bold">Лиды не найдены</h3>
                      <p className="text-sm font-light text-white/20">Попробуйте скорректировать фильтры или строку поиска</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
