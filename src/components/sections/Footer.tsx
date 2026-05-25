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
