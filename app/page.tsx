import Help from './components/help/help';
import HeroSection from './components/herosection/Herosection';
import Newsletter from './components/newsletter/Newsletter';

export default function Home() {
  return (
    <section>
      <HeroSection />
      <Newsletter />
      <Help />
    </section>
  );
}
