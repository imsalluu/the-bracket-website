import About from '@/components/About';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <About />
      <Partners />
      <CTA />
    </div>
  );
}
