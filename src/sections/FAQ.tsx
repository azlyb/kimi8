import { useState, useEffect, useRef } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqConfig } from '../config';

export function FAQ() {
  // Null check: if config is empty, render nothing
  if (!faqConfig.mainTitle || faqConfig.faqs.length === 0) return null;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d2a855 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Title */}
        <div className="fade-up text-center mb-16">
          <span className="font-script text-3xl text-gold-400 block mb-2">{faqConfig.scriptText}</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            {faqConfig.subtitle}
          </span>
          <h2 className="font-serif text-h1 text-white">{faqConfig.mainTitle}</h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqConfig.faqs.map((faq, index) => (
            <div
              key={index}
              className={`fade-up ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`bg-white/[0.03] border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'border-gold-500/30 bg-white/[0.05]' : 'hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-start gap-4 text-left"
                  aria-expanded={openIndex === index}
                >
                  <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4 text-gold-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-white pr-8 relative">
                      {faq.question}
                      <ChevronDown
                        className={`absolute right-0 top-1 w-5 h-5 text-gold-500 transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </h3>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pl-[4.5rem]">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="fade-up text-center mt-12" style={{ transitionDelay: '0.6s' }}>
          <p className="text-white/60 mb-4">Still have questions?</p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary rounded-sm"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
