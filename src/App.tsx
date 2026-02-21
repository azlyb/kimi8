import { useState, useCallback } from 'react';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { WineShowcase } from './sections/WineShowcase';
import { WineryCarousel } from './sections/WineryCarousel';
import { Museum } from './sections/Museum';
import { News } from './sections/News';
import { ContactForm } from './sections/ContactForm';
import { Footer } from './sections/Footer';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import { FAQ } from './sections/FAQ';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={`min-h-screen bg-[#141414] ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
        <Navigation />

        <main>
          <section id="home">
            <Hero isReady={!isLoading} />
          </section>
          <section id="programs">
            <WineShowcase />
          </section>
          <section id="campus">
            <WineryCarousel />
          </section>
          <section id="about">
            <Museum />
          </section>
          <section id="testimonials">
            <News />
          </section>
          <section id="faq">
            <FAQ />
          </section>
          <section id="contact">
            <ContactForm />
          </section>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
