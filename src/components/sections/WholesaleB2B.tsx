'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Download, ShieldCheck, Truck, Percent, FileText, CheckCircle2, Building2 } from 'lucide-react';

export default function WholesaleB2B() {
  const [formData, setFormData] = useState({
    businessName: '',
    city: '',
    phone: '',
    businessType: 'Repuestera / Casa de Autopartes',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6600', '#000000', '#25d366'],
    });

    const msg = `Hola Distribuidora Idara! Solicito la Lista de Precios Mayorista y condiciones comerciales.
• Negocio/Razón Social: ${formData.businessName || 'No especificado'}
• Localidad/Provincia: ${formData.city || 'No especificado'}
• Teléfono: ${formData.phone || 'No especificado'}
• Rubro: ${formData.businessType}
Muchas gracias!`;

    const url = `https://wa.me/5491161977748?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const b2bBenefits = [
    {
      icon: Percent,
      title: 'Márgenes de Reventa Rentables',
      description: 'Precios de distribuidor oficial escalonados por volumen para maximizar tu ganancia en mostrador.',
    },
    {
      icon: Truck,
      title: 'Despacho a Expresos en 24/48hs',
      description: 'Entregamos tu pedido en el transporte de tu confianza (Cruz del Sur, Vía Cargo, Expreso Luján, etc.).',
    },
    {
      icon: FileText,
      title: 'Facturación Oficial A y B',
      description: 'Comprobantes fiscales inmediatos y respaldo legal en todas tus compras comerciales.',
    },
    {
      icon: ShieldCheck,
      title: 'Stock Permanente en Warnes',
      description: 'Línea completa 12V y 24V disponible de forma continua para que nunca pierdas una venta.',
    },
  ];

  return (
    <section id="mayorista" className="relative py-20 px-4 sm:px-6 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Canal Mayorista B2B
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            ¿Tenés Repuestera, Taller o Flota de Transporte?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Abastecé tu negocio con el distribuidor oficial de OSRAM y NEOLUX en Warnes. Solicitá la lista de precios mayorista actualizada y condiciones de cuenta comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: B2B Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {b2bBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-300 hover:bg-white transition-all shadow-sm group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <p className="text-xs text-emerald-900 font-medium">
                <strong>Atención prioritaria B2B:</strong> Asignamos un ejecutivo comercial para coordinar pedidos frecuentes y presupuestos a medida.
              </p>
            </div>
          </div>

          {/* Right: Quick Wholesale Request Form (Clean Light Theme) */}
          <div className="lg:col-span-5 bg-slate-50 text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <h3 className="text-xl font-black text-slate-900 mb-1">
              Solicitar Lista Mayorista
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Completá los datos y te enviamos la lista digital actualizada en el acto.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nombre del Negocio o Titular *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Repuestos Warnes Sur"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ciudad y Provincia *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Córdoba Capital, Santa Fe, CABA..."
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ej: 11 1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tipo de Actividad
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-sm"
                >
                  <option value="Repuestera / Casa de Autopartes">Repuestera / Casa de Autopartes</option>
                  <option value="Taller Mecánico / Electricidad">Taller Mecánico / Electricidad</option>
                  <option value="Empresa de Transporte / Flotas">Empresa de Transporte / Flotas (24V)</option>
                  <option value="Distribuidor Regional">Distribuidor Regional</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black text-sm shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.01]"
              >
                <Download className="w-4 h-4" />
                Descargar Lista Mayorista por WhatsApp
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Tus datos están protegidos. Respuesta comercial inmediata.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
