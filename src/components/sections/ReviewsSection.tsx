'use client';

import { Star, Quote } from 'lucide-react';
import { reviewsData } from '@/data/reviews';

export default function ReviewsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            Opiniones Reales Verificadas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            La Confianza de Nuestros Clientes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Calificación <strong>4.8 de 5 estrellas en Google Maps</strong>. Particulares, talleristas y casas de repuestos confían en nuestro asesoramiento y productos oficiales.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-orange-300 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200 pointer-events-none" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-6 italic font-medium">
                  "{review.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold flex items-center justify-center text-xs shadow-md">
                    {review.avatarText}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{review.author}</h4>
                    <p className="text-xs text-orange-600 font-semibold">{review.role}</p>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge Footer */}
        <div className="mt-10 p-4 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4 max-w-2xl mx-auto text-xs text-slate-700 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-slate-900">4.8</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-500 font-medium">Puntaje verificado en Google Business</span>
          </div>

          <a
            href="https://maps.google.com/?q=Av.+Warnes+729+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 font-bold underline underline-offset-2"
          >
            Ver reseñas en Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
}
