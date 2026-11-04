import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TickerStrip from '@/components/TickerStrip';
import FeaturedWork from '@/components/FeaturedWork';
import ServicesPreview from '@/components/ServicesPreview';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Process from '@/components/Process';
import WhoWeAre from '@/components/WhoWeAre';
import ConsultationBanner from '@/components/ConsultationBanner';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export const revalidate = 0;

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TickerStrip />
      <FeaturedWork />
      <ServicesPreview />
      <BeforeAfterSlider />
      <Process />
      <WhoWeAre />
      <ConsultationBanner />
      <ContactCTA />
      <Footer />
    </main>
  );
}
