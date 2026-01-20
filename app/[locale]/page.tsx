import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Products from '../components/Products';
import Collaboration from '../components/Collaboration';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <main className="scroll-smooth pt-[140px]">
      <Navigation />
      <Hero />
      <About />
      <WhyUs />
      <Products />
      <Collaboration />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
