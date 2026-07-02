import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import CaseStudies from '@/components/sections/CaseStudies';
import ContactModal from '@/components/sections/ContactModal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <CaseStudies />
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
