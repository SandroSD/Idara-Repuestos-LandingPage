import { MapPin, Phone, Mail, Clock, ArrowUp, MessageCircle } from 'lucide-react';
import IdaraLogo from '@/components/common/IdaraLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070b12] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <IdaraLogo size="md" theme="dark" />

            <p className="text-xs text-slate-400 leading-relaxed">
              Distribuidora especializada en iluminación automotriz para autos, motos y transporte pesado 24V. Abasteciendo al mercado argentino desde 1997.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/idara_osram/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 border border-white/10 flex items-center justify-center text-slate-300 transition-colors"
                aria-label="Instagram de Idara"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/5491161977748"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/10 flex items-center justify-center text-slate-300 transition-colors"
                aria-label="WhatsApp de Idara"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <a href="#buscador" className="hover:text-orange-400 transition-colors">
                  Buscador de Lámparas por Vehículo
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-orange-400 transition-colors">
                  Líneas OSRAM LEDriving & Halógenas
                </a>
              </li>
              <li>
                <a href="#comparador" className="hover:text-orange-400 transition-colors">
                  Comparador LED vs Genéricos
                </a>
              </li>
              <li>
                <a href="#mayorista" className="hover:text-orange-400 transition-colors">
                  Venta Mayorista y Lista de Precios
                </a>
              </li>
              <li>
                <a href="#local" className="hover:text-orange-400 transition-colors">
                  Local en Av. Warnes 729
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Lineas de Producto */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Líneas de Producto</h4>
            <ul className="space-y-2 text-slate-400">
              <li>OSRAM LEDriving® HL Easy (1:1 Plug & Play)</li>
              <li>OSRAM Night Breaker® 200 (+200% Brillo)</li>
              <li>OSRAM Truckstar® Pro 24V (Pesados)</li>
              <li>OSRAM Cool Blue® Intense (5000K)</li>
              <li>NEOLUX® Automotor (by OSRAM)</li>
              <li>Unidades Canbus & Canceladores de Error</li>
            </ul>
          </div>

          {/* Col 4: Contact & Local */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contacto & Local</h4>
            <div className="space-y-2.5">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Av. Warnes 729 / 731, CABA, Argentina</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>(011) 4854-4011 / (011) 4854-4078</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Lu a Vi de 9:30 a 15:00 hs.</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>MoroIdara@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-slate-500">
          <p>
            © {currentYear} Distribuidora Idara. Todos los derechos reservados. Distribuidor Oficial OSRAM & NEOLUX en Argentina.
          </p>
          <a
            href="#"
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
