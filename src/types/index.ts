export type VehicleType = 'auto' | 'moto' | 'camion';

export type BulbSocket = 'H1' | 'H3' | 'H4' | 'H7' | 'H8' | 'H11' | 'H15' | 'H16' | 'HB3' | 'HB4' | 'HIR2' | 'D1S' | 'D2S' | 'D3S' | 'W5W' | 'T10' | 'P21W' | 'PY21W' | 'R5W' | 'T4W' | string;

export interface Product {
  id: string;
  name: string;
  category: 'led' | 'halogen' | 'xenon' | 'truck' | 'neolux';
  tag: string;
  subtitle: string;
  description: string;
  colorTemp: string;
  voltage: '12V' | '24V' | '12V / 24V';
  gainText: string;
  lifespan: string;
  warranty: string;
  sockets: BulbSocket[];
  highlights: string[];
  isPopular?: boolean;
  isOfficial?: boolean;
}

export interface VehicleCompatibility {
  id: string;
  brand: string;
  model: string;
  years: string;
  type: VehicleType;
  lowBeam: BulbSocket;
  highBeam: BulbSocket;
  fogLight?: BulbSocket;
  notes?: string;
  recommendedProduct: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatarText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'tecnica' | 'mayorista' | 'envios';
}
