import { ReviewItem } from '@/types';

export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Julián Capasso',
    role: 'Cliente Particular',
    rating: 5,
    date: 'Hace 2 semanas',
    comment: '¡Excelente atención y gran variedad de Lámparas y repuestos! Súper recomendables, me asesoraron con el modelo justo para mi camioneta y la diferencia de luz en ruta es abismal.',
    verified: true,
    avatarText: 'JC',
  },
  {
    id: 'rev-2',
    author: 'Daniel Romeo',
    role: 'Local Guide · 54 opiniones',
    rating: 5,
    date: 'Cliente Frecuente',
    comment: 'Buen surtido en lámparas de calidad OSRAM original, precios lógicos y atención rápida en el mostrador de Warnes. Siempre tienen stock de lo que buscas.',
    verified: true,
    avatarText: 'DR',
  },
  {
    id: 'rev-3',
    author: 'Gunter Cars',
    role: 'Taller Mecánico & Electricidad',
    rating: 5,
    date: 'Comprador Mayorista',
    comment: 'Compramos para nuestro taller hace años. La tranquilidad de saber que vendés OSRAM 100% original y no imitaciones no tiene precio. Los despachos al interior siempre a tiempo.',
    verified: true,
    avatarText: 'GC',
  },
  {
    id: 'rev-4',
    author: 'Marcelo Fernández',
    role: 'Empresa de Transporte & Logística',
    rating: 5,
    date: 'Cliente Flotas 24V',
    comment: 'Compramos las lámparas 24V Truckstar Pro para nuestra flota de camiones. Se terminaron los problemas de lámparas quemadas a mitad de viaje. Excelente relación precio/calidad.',
    verified: true,
    avatarText: 'MF',
  },
];
