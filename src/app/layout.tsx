import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Distribuidora Idara | Distribuidor Oficial OSRAM & NEOLUX Warnes',
  description:
    'Distribuidor oficial de lámparas y repuestos de iluminación automotriz OSRAM y NEOLUX en Warnes 729, CABA. Venta mayorista y minorista con envíos a todo el país.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
