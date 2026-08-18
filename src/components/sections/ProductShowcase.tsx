'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Check, MessageCircle, Award } from 'lucide-react';
import { productsData } from '@/data/products';

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'led' | 'halogen' | 'truck' | 'neolux'>('all');

  const categories = [
    { id: 'all', label: 'Todos los Productos' },
    { id: 'led', label: 'LEDriving® (LED Alta Gama)' },
    { id: 'halogen', label: 'Night Breaker® (Halógena +200%)' },
    { id: 'truck', label: 'Línea Pesados 24V (Camiones)' },
    { id: 'neolux', label: 'NEOLUX® (by OSRAM)' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? productsData
    : productsData.filter((p) => p.category === activeCategory);

  return (
    <section id="productos" className="relative py-20 px-4 sm:px-6 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Catálogo Oficial OSRAM & NEOLUX
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Tecnología de Iluminación Certificada
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Conocé las familias de productos más vendidas del mercado. Rendimiento superior, haz de luz reglamentario y garantía de fábrica directa.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid (High-End Graphite & Titanium Cards with Orange Accents) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#0F172A] text-white border border-slate-800 hover:border-orange-500/50 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-black tracking-wider px-2.5 py-1 rounded-md bg-orange-500/15 text-orange-400 border border-orange-500/30 uppercase">
                      {product.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      Voltaje: <strong className="text-white">{product.voltage}</strong>
                    </span>
                  </div>

                  {/* Product Title & Subtitle */}
                  <h3 className="text-xl font-black text-white group-hover:text-orange-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-bold text-orange-400/90 mt-1">
                    {product.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-2 my-5 p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold">Temperatura:</span>
                      <span className="font-bold text-white text-[11px]">{product.colorTemp}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold">Ganancia Luz:</span>
                      <span className="font-bold text-orange-400 text-[11px]">{product.gainText}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {product.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sockets Available */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Zócalos Disponibles:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sockets.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono font-bold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-orange-400" />
                    {product.warranty}
                  </span>

                  <a
                    href={`https://wa.me/5491161977748?text=Hola%20Distribuidora%20Idara!%20Quiero%20consultar%20por%20la%20línea%20${encodeURIComponent(
                      product.name
                    )}%20(Precios%20y%20Stock).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white border border-orange-500/40 font-bold text-xs transition-all shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Consultar
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
