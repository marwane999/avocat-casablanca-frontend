import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import PracticeAreasGrid from '@/components/sections/PracticeAreasGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTAFinal from '@/components/sections/CTAFinal';
import ContactQuick from '@/components/sections/ContactQuick';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PracticeAreasGrid />
      <WhyChooseUs />
      <CTAFinal />
      <ContactQuick />
    </>
  );
}
