export const dynamic = 'force-dynamic'

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ValuePropositionSection } from '@/components/ValuePropositionSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ValuePropositionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}