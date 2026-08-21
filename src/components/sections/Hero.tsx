'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Zap, Truck, Search, Download, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle Background Lighting & Radial Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Warm Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-b from-orange-400/15 via-amber-200/20 to-transparent blur-[100px] rounded-full" />

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs sm:text-sm font-bold mb-6 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          <span>DISTRIBUIDOR OFICIAL OSRAM & NEOLUX · WARNES</span>
          <span className="hidden sm:inline text-orange-300">|</span>
          <span className="hidden sm:inline text-slate-600 font-semibold">Desde 1997</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0B0F19] mb-6 leading-[1.1]"
        >
          Iluminación de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">Precisión Alemana</span> para el Automotor
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Lámparas <strong className="text-slate-900 font-bold">LED de alto rendimiento</strong>, halógenas premium y xenón original para autos, motos y línea pesada 24V. Abastecemos a <strong className="text-slate-900 font-bold">repuesteras, talleres y particulares</strong> con stock inmediato y envíos a todo el país.
        </motion.p>

        {/* Dual High-Conversion CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#productos"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Search className="w-5 h-5" />
            Buscar en el Catálogo Oficial
          </a>
          <a
            href="#mayorista"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 hover:border-orange-400 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-5 h-5 text-orange-600" />
            Solicitar Lista Mayorista B2B
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-200"
        >
          <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-900">100% Original</p>
              <p className="text-[11px] text-slate-500 font-medium">Garantía oficial OSRAM</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <Truck className="w-5 h-5 text-orange-500 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-900">Envíos en 24hs</p>
              <p className="text-[11px] text-slate-500 font-medium">A todo el país vía expreso</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <Zap className="w-5 h-5 text-orange-500 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-900">Stock Permanente</p>
              <p className="text-[11px] text-slate-500 font-medium">Línea 12V y 24V pesados</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-orange-500 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-900">+27 Años en Warnes</p>
              <p className="text-[11px] text-slate-500 font-medium">Local comercial en CABA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
