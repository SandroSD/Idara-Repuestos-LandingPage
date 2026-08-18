import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/common/SmoothScroll';
import JsonLd from '@/components/common/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://idara.com.ar'),
  title: 'Distribuidora Idara | Distribuidor Oficial OSRAM & NEOLUX Warnes',
  description:
    'Distribuidor oficial de lámparas y repuestos de iluminación automotriz OSRAM y NEOLUX en Av. Warnes 729, CABA. Venta mayorista y minorista de lámparas LED 12V y 24V con envíos a todo el país.',
  keywords: [
    'Distribuidora Idara',
    'OSRAM Warnes',
    'Distribuidor oficial OSRAM Argentina',
    'Lámparas LED automotor',
    'OSRAM LEDriving HL Easy',
    'Night Breaker 200',
    'Lámparas 24V camiones Warnes',
    'Repuestos de iluminación Warnes',
    'NEOLUX automotor',
    'Lámparas H4 H7 H11 H15',
    'Venta mayorista lámparas automotor',
  ],
  authors: [{ name: 'Distribuidora Idara' }],
  creator: 'Distribuidora Idara',
  publisher: 'Distribuidora Idara',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://idara.com.ar',
    title: 'Distribuidora Idara | Iluminación Automotriz OSRAM & NEOLUX Warnes',
    description:
      'Lámparas LED de alto rendimiento, halógenas premium y xenón original en Warnes 729. Venta mayorista y minorista para todo el país.',
    siteName: 'Distribuidora Idara',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Distribuidora Idara | Distribuidor Oficial OSRAM Warnes',
    description:
      'Iluminación automotriz de precisión alemana. Venta mayorista a repuesteras y talleres con envíos a todo el país.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className="bg-white text-slate-900 selection:bg-orange-500 selection:text-white"
        suppressHydrationWarning
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
