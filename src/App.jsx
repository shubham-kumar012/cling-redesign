import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import GlobalPresence from './components/GlobalPresence';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Technology from './components/Technology';
import Clients from './components/Clients';
import Leadership from './components/Leadership';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

export default function App() {
  // Attach scroll observer for entrance animations
  useScrollReveal();

  return (
    <div className="app-layout">
      <Navbar />

      <main id="main-content">
        <Hero />
        <Stats />
        <Services />
        <FeaturedWork />
        <GlobalPresence />
        <About />
        <VisionMission />
        <Technology />
        <Clients />
        <Leadership />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
