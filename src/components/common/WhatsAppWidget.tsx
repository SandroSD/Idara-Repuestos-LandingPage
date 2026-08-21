'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Building2, Car, MapPin } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const channels = [
    {
      id: 'mayorista',
      title: 'Venta Mayorista (B2B)',
      subtitle: 'Repuesteras, talleres y flotas de transporte',
      icon: Building2,
      msg: 'Hola Distribuidora Idara! Me contacto para solicitar la Lista de Precios Mayorista y condiciones comerciales.',
    },
    {
      id: 'particular',
      title: 'Consulta Particular / Técnico',
      subtitle: 'Asesoramiento por modelo de auto o moto',
      icon: Car,
      msg: 'Hola Idara! Quisiera consultar qué lámparas OSRAM le van a mi vehículo y qué opciones tienen.',
    },
    {
      id: 'local',
      title: 'Retiro en Warnes 729',
      subtitle: 'Consultar disponibilidad y horarios de mostrador',
      icon: MapPin,
      msg: 'Hola Idara! Quiero consultar stock para retirar personalmente por el local de Warnes 729.',
    },
  ];

  const handleOpenChannel = (text: string) => {
    const url = `https://wa.me/5491161977748?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Pop-up Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[340px] sm:w-[380px] rounded-3xl bg-white border border-slate-200 p-5 shadow-2xl backdrop-blur-xl text-slate-900 pointer-events-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">Distribuidora Idara</h4>
                  <p className="text-[11px] text-emerald-600 font-bold">Asesor online en Warnes</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              ¿En qué podemos ayudarte hoy? Elegí una opción para iniciar el chat:
            </p>

            {/* Channels List */}
            <div className="space-y-2">
              {channels.map((ch) => {
                const Icon = ch.icon;
                return (
                  <button
                    key={ch.id}
                    onClick={() => handleOpenChannel(ch.msg)}
                    className="w-full text-left p-3 rounded-2xl bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-300 transition-all flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-xl bg-white text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0 shadow-sm border border-slate-100">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-orange-600 transition-colors">
                        {ch.title}
                      </span>
                      <span className="text-[11px] text-slate-500 block truncate">
                        {ch.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-3 pt-2 text-center border-t border-slate-100 text-[10px] text-slate-400">
              ⚡ Respuesta inmediata de Lunes a Viernes de 9:30 a 15:00 hs.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-500 text-white shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 transition-all pointer-events-auto"
        aria-label="Abrir chat de WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7 fill-white" />}
      </motion.button>
    </div>
  );
}
