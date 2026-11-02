import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TickerStrip from '@/components/TickerStrip';
import FeaturedWork from '@/components/FeaturedWork';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import WhoWeAre from '@/components/WhoWeAre';
import Process from '@/components/Process';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import RoomVisualizer from '@/components/RoomVisualizer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TickerStrip />
      <FeaturedWork />
      <BeforeAfterSlider />
      <WhoWeAre />
      <Process />
      <ContactCTA />
      <Footer />
      <RoomVisualizer />
    </main>
  );
}
