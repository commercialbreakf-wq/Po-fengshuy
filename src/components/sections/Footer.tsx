import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/10 pt-20 pb-10 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-widest uppercase mb-6 block hover:text-[#d4af37] transition-colors">По-Феншую</Link>
            <p className="text-white/50 font-light max-w-sm mb-8">
              Строительство современных загородных домов под ключ. От уютных дач до премиальных резиденций.
            </p>
            <div className="text-xl font-bold text-[#d4af37]">+7 (812) 000-00-00</div>
            <div className="text-white/50 mt-2">info@po-fenshuyu.ru</div>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              <a href="https://t.me/po_fenshuyu_support" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.97-.74 3.79-1.65 6.32-2.73 7.57-3.26 3.6-1.5 4.34-1.76 4.83-1.77.11 0 .35.03.5.15.13.1.17.24.18.35-.01.08 0 .17-.02.26z"/></svg>
                Telegram Поддержка
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <a href="https://wa.me/78120000000" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.689 1.972 14.217.95 11.59.95c-5.438 0-9.863 4.37-9.866 9.8.001 2.028.536 4.015 1.55 5.795l-1.011 3.693 3.794-.984zm11.053-7.54c-.26-.13-1.536-.759-1.773-.846-.237-.087-.41-.13-.58.13-.17.26-.66.846-.808 1.011-.148.165-.297.186-.557.056-.26-.13-1.1-.407-2.096-1.294-.775-.69-1.3-1.543-1.452-1.802-.152-.26-.016-.4.114-.53.116-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.399-.796-1.919-.21-.506-.42-.437-.58-.445-.148-.007-.32-.008-.493-.008-.173 0-.455.065-.693.325-.238.26-.91.889-.91 2.167 0 1.277.928 2.511 1.058 2.684.13.173 1.826 2.79 4.425 3.911.618.267 1.1.426 1.475.545.621.197 1.186.169 1.632.102.497-.074 1.536-.628 1.752-1.234.217-.606.217-1.126.152-1.234-.065-.108-.237-.173-.497-.303z"/></svg>
                WhatsApp Поддержка
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Навигация</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><Link href="/#projects" className="hover:text-white transition-colors">Проекты</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Каталог</Link></li>
              <li><Link href="/#calculator" className="hover:text-white transition-colors">Калькулятор</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">О компании</Link></li>
              <li><Link href="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Офис</h4>
            <p className="text-white/60 font-light leading-relaxed">
              г. Санкт-Петербург,<br />
              ул. Строителей, д. 1, оф. 101<br />
              Пн-Пт: 10:00 - 19:00
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <div>© 2026 СК «По-Феншую». Все права защищены.</div>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
