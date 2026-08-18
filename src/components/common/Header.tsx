'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Menu, X, ShieldCheck, MessageCircle } from 'lucide-react';
import IdaraLogo from '@/components/common/IdaraLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { name: 'Buscador', id: 'buscador', href: '#buscador' },
    { name: 'Productos OSRAM', id: 'productos', href: '#productos' },
    { name: 'Comparador LED', id: 'comparador', href: '#comparador' },
    { name: 'Venta Mayorista', id: 'mayorista', href: '#mayorista' },
    { name: 'Local Warnes', id: 'local', href: '#local' },
    { name: 'Preguntas', id: 'faq', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sectionElements = navLinks
        .map((link) => ({
          id: link.id,
          element: document.getElementById(link.id),
        }))
        .filter((item) => item.element !== null);

      const scrollPosition = window.scrollY + 180; // Offset for header

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.element && item.element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          return;
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner de Confianza */}
      <div className="bg-[#0b0f19] text-xs text-slate-300 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-orange-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Distribuidor Oficial OSRAM & NEOLUX
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              Av. Warnes 729, CABA
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden md:inline-block text-slate-400">
              Envíos a todo el país en 24/48hs
            </span>
            <a
              href="tel:01148544011"
              className="flex items-center gap-1 text-slate-200 hover:text-orange-400 font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              (011) 4854-4011
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Light Navigation */}
      <nav
        className={`px-4 sm:px-6 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2.5 border-b border-slate-200 shadow-md'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center group">
            <IdaraLogo size="md" theme="light" />
          </a>

          {/* Desktop Nav Links with Real-time Active Indicator */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-orange-600 bg-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-orange-200 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#mayorista"
              className="text-xs font-bold px-3.5 py-2 rounded-lg text-orange-600 bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-all"
            >
              Lista Mayorista
            </a>
            <a
              href="https://wa.me/5491161977748?text=Hola%20Distribuidora%20Idara!%20Vengo%20desde%20la%20web%20y%20quiero%20hacer%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp Directo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-black rounded-lg bg-slate-100 border border-slate-200"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-bold py-2.5 px-3 rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? 'text-orange-600 bg-orange-50 border border-orange-200'
                        : 'text-slate-800 hover:text-orange-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                  </a>
                );
              })}
              <div className="flex flex-col gap-3 pt-3 border-t border-slate-100 mt-2">
                <a
                  href="#mayorista"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center text-sm font-bold py-2.5 rounded-lg text-orange-600 bg-orange-50 border border-orange-200"
                >
                  📥 Descargar Lista Mayorista
                </a>
                <a
                  href="https://wa.me/5491161977748?text=Hola%20Distribuidora%20Idara!%20Vengo%20desde%20la%20web%20y%20quiero%20hacer%20una%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-lg bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  WhatsApp Directo (11 6197-7748)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
