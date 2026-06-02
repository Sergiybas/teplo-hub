import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LogoStrip } from '@/components/LogoStrip';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { Gallery } from '@/components/Gallery';
import { Process } from '@/components/Process';
import { Stats } from '@/components/Stats';
import { Faq } from '@/components/Faq';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <WhyUs />
        <Gallery />
        <Process />
        <Stats />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
