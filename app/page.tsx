import Help from './components/help/help';
import HeroSection from './components/herosection/Herosection';
import Newsletter from './components/newsletter/Newsletter';
import Products from './components/products/Products';

export default function Home() {
  return (
    <section>
      <HeroSection />
      <Products />
      <Newsletter />
      <Help />
    </section>
  );
}
