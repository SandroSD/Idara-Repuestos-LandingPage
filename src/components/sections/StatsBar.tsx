'use client';

import { motion } from 'motion/react';
import { Calendar, PackageCheck, Star, Award } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: '+27 Años',
    label: 'Trayectoria en Warnes',
    description: 'Abasteciendo al mercado automotor desde 1997',
  },
  {
    icon: Award,
    value: 'Distribuidor Oficial',
    label: 'OSRAM & NEOLUX',
    description: '100% productos legítimos con garantía de fábrica',
  },
  {
    icon: PackageCheck,
    value: '24 Provincias',
    label: 'Cobertura Nacional',
    description: 'Despachos diarios y logística a expresos',
  },
  {
    icon: Star,
    value: '4.8 ★★★★★',
    label: 'Opiniones en Google',
    description: 'Excelente atención, stock y precios lógicos',
  },
];

export default function StatsBar() {
  return (
    <section className="relative py-12 px-4 sm:px-6 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-300 hover:shadow-md hover:bg-white transition-all group"
              >
                <div className="p-3 rounded-xl bg-orange-100/70 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
