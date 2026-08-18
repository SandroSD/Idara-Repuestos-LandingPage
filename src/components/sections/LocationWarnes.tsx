'use client';

import { MapPin, Clock, Phone, Navigation, CheckCircle2, Mail } from 'lucide-react';

export default function LocationWarnes() {
  return (
    <section id="local" className="relative py-20 px-4 sm:px-6 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Punto de Retiro y Mostrador Oficial
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Vení a Nuestro Local en Warnes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Estamos ubicados en el corazón del polo comercial de autopartes más importante de la Argentina. Retirá tu compra en el acto con asesoría personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Store Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block mb-1">
                  Distribuidora Idara
                </span>
                <h3 className="text-2xl font-black text-slate-900">Av. Warnes 729 / 731</h3>
                <p className="text-xs text-slate-500 mt-1">
                  C1414 Cdad. Autónoma de Buenos Aires (CABA), Argentina
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 rounded-xl bg-orange-100 text-orange-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Horarios de Atención:</span>
                    <span className="text-slate-700">Lunes a Viernes de 9:30 a 15:00 hs.</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Sábados y Domingos: Cerrado</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 rounded-xl bg-orange-100 text-orange-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Teléfonos Fijos de Mostrador:</span>
                    <a href="tel:01148544011" className="text-orange-600 font-bold hover:underline">
                      (011) 4854-4011
                    </a>
                    {' / '}
                    <a href="tel:01148544078" className="text-orange-600 font-bold hover:underline">
                      (011) 4854-4078
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 rounded-xl bg-orange-100 text-orange-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Correo Electrónico:</span>
                    <a href="mailto:MoroIdara@gmail.com" className="text-slate-700 hover:text-black font-semibold">
                      MoroIdara@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="space-y-2 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Retiro inmediato de pedidos mayoristas y minoristas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Asesoramiento y verificación de zócalo en el momento</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://maps.google.com/?q=Av.+Warnes+729+CABA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.01]"
              >
                <Navigation className="w-4 h-4" />
                Cómo Llegar en Google Maps ↗
              </a>
            </div>
          </div>

          {/* Interactive Google Map Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 min-h-[380px] shadow-lg relative bg-slate-100">
            <iframe
              title="Ubicación Distribuidora Idara Warnes"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5428456885233!2d-58.44474712349717!3d-34.59042655679469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb597284f1837%3A0x6b63d76b1f22e86c!2sAv.%20Warnes%20729%2C%20C1414%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
