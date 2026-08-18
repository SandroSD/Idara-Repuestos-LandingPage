'use client';

import { useState } from 'react';
import { ShieldCheck, XCircle, CheckCircle2, AlertTriangle, Eye } from 'lucide-react';

export default function BeamComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const comparisonPoints = [
    {
      feature: 'Patrón y Corte de Haz',
      generic: 'Luz difusa y dispersa. Encandila a otros conductores y no ilumina el asfalto.',
      osram: 'Línea de corte perfecta ("Cut-off"). Réplica exacta 1:1 del foco original.',
    },
    {
      feature: 'Control Térmico',
      generic: 'Sobrecalienta a los 10 minutos perdiendo hasta 40% de potencia lumínica.',
      osram: 'Cuerpo de aluminio aeronáutico y gestión térmica activa constante.',
    },
    {
      feature: 'Lúmenes Reales vs Marketing',
      generic: 'Promesas falsas de "30.000 LM" que solo iluminan copas de árboles.',
      osram: 'Lúmenes reales medidos en laboratorio con máxima penetración en ruta.',
    },
    {
      feature: 'Homologación y VTV / RTO',
      generic: 'Rebotes frecuentes en la inspección técnica por encandilamiento.',
      osram: 'Haz homologado que respeta los ángulos reglamentarios de circulación.',
    },
    {
      feature: 'Durabilidad Real',
      generic: 'Queman chips o hacen ruido de ventilador a los pocos meses.',
      osram: 'Hasta 5.000 horas de uso continuo con respaldo y garantía oficial.',
    },
  ];

  return (
    <section id="comparador" className="relative py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Eye className="w-3.5 h-3.5" />
            La Verdad del LED Automotor
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            ¿Por qué Elegir OSRAM Original vs. Genéricos?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            No caigas en la trampa de los lúmenes falsos de internet. Conocé por qué la óptica, el control térmico y el corte de luz marcan la diferencia entre viajar seguro o sufrir en la ruta.
          </p>
        </div>

        {/* Interactive Comparison Simulator */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 mb-12 shadow-2xl">
          <div className="relative h-[260px] sm:h-[360px] w-full select-none">
            {/* Base Image / Generic / Stock Halogen Side (Left) */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-yellow-950/60 to-slate-950 flex items-center justify-start p-6 sm:p-10">
              <div className="max-w-xs text-left z-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold mb-2">
                  <AlertTriangle className="w-3.5 h-3.5" /> Lámpara Halógena / LED Genérico
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white mb-2">Luz Difusa & Amarilla</h4>
                <p className="text-xs text-slate-300">
                  Haz desparramado, baja penetración en noche cerrada y pérdida de potencia con calor.
                </p>
              </div>
            </div>

            {/* Revealing OSRAM LEDriving Side (Right, clipped by slider) */}
            <div
              className="absolute inset-0 bg-gradient-to-l from-orange-950/90 via-blue-950/70 to-slate-900 flex items-center justify-end p-6 sm:p-10"
              style={{
                clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
              }}
            >
              <div className="max-w-xs text-right z-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/25 text-orange-400 border border-orange-500/50 text-xs font-bold mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> OSRAM LEDriving® 6000K
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white mb-2">Luz Blanca & Corte Láser</h4>
                <p className="text-xs text-slate-200">
                  Luz blanca pura 6000K, enfoque 100% en asfalto y banquina sin encandilar.
                </p>
              </div>
            </div>

            {/* Drag Handle Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-white to-orange-400 shadow-[0_0_15px_rgba(255,102,0,0.8)] cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange-500 border-2 border-white shadow-xl flex items-center justify-center text-white text-xs font-bold">
                ⇄
              </div>
            </div>

            {/* Invisible Range Input for Full Touch/Mouse control */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Deslizar para comparar haz de luz"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          <div className="bg-slate-900 p-3 text-center text-xs text-slate-400 border-t border-slate-800">
            💡 <em>Deslizá el control hacia la izquierda o derecha para ver la comparativa de haz de luz.</em>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-100 p-4 text-xs font-black tracking-wider uppercase border-b border-slate-200 text-slate-700">
            <div className="md:col-span-4">Aspecto Técnico</div>
            <div className="md:col-span-4 text-red-600 flex items-center gap-1.5">
              <XCircle className="w-4 h-4" /> LED Genérico / Copia
            </div>
            <div className="md:col-span-4 text-orange-600 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> OSRAM Original Oficial
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisonPoints.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 text-xs gap-3 sm:gap-2 hover:bg-slate-50 transition-colors">
                <div className="md:col-span-4 font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  {item.feature}
                </div>
                <div className="md:col-span-4 text-slate-500 leading-relaxed">
                  <span className="md:hidden font-bold text-red-600 block mb-1">LED Genérico:</span>
                  {item.generic}
                </div>
                <div className="md:col-span-4 text-slate-800 font-semibold leading-relaxed">
                  <span className="md:hidden font-bold text-orange-600 block mb-1">OSRAM Oficial:</span>
                  {item.osram}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
