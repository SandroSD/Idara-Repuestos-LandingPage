'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { faqsData } from '@/data/faqs';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('todas');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = activeCategory === 'todas'
    ? faqsData
    : faqsData.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Centro de Ayuda y Preguntas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Respuestas Claras a Dudas Habituales
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Todo lo que necesitás saber sobre compatibilidad, normativas de ruta, envíos y condiciones comerciales.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'todas', label: 'Todas las Preguntas' },
            { id: 'tecnica', label: 'Técnicas & Compatibilidad' },
            { id: 'mayorista', label: 'Venta Mayorista' },
            { id: 'envios', label: 'Envíos y Despachos' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-orange-600 transition-colors gap-4"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-900 font-bold mb-1">
            ¿Tenés alguna consulta técnica específica sobre tu vehículo?
          </p>
          <p className="text-xs text-slate-500 mb-4">
            Escribinos directamente y te ayudamos a chequear el encastre exacto en minutos.
          </p>
          <a
            href="https://wa.me/5491161977748?text=Hola%20Distribuidora%20Idara!%20Tengo%20una%20consulta%20técnica%20sobre%20lámparas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Consultar a un Asesor por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
