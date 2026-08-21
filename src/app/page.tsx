import Header from '@/components/common/Header';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import ProductShowcase from '@/components/sections/ProductShowcase';
import WholesaleB2B from '@/components/sections/WholesaleB2B';
import ReviewsSection from '@/components/sections/ReviewsSection';
import LocationWarnes from '@/components/sections/LocationWarnes';
import FaqSection from '@/components/sections/FaqSection';
import Footer from '@/components/common/Footer';
import WhatsAppWidget from '@/components/common/WhatsAppWidget';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Header />
      <Hero />
      <StatsBar />
      <ProductShowcase />
      <WholesaleB2B />
      <ReviewsSection />
      <LocationWarnes />
      <FaqSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
