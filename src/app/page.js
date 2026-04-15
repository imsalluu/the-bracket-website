import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Page() {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
