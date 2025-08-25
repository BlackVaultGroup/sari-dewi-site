import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = Math.min(scrollY * 0.5, 20);

  const scrollToDescription = () => {
    const descriptionSection = document.getElementById('description-section');
    if (descriptionSection) {
      descriptionSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="/compressed_image.jpg"
          alt="Luxury penthouse interior with pool view in Bali"
          className="w-full h-full object-cover scale-110"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <p className="text-sm md:text-base tracking-widest uppercase font-montserrat font-light mb-6 opacity-90 animate-fade-in-up">
            A spiritual and aesthetic sanctuary in Bali
          </p>
          
          {/* Main Title */}
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light mb-8 hero-text animate-fade-in-up-delay">
            Saridewi Penthouse
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up-delay-2">
            More than a place to stay—a state of being.
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={scrollToDescription}
            className="bg-transparent border-2 border-white px-8 py-4 text-sm tracking-widest uppercase font-montserrat font-medium hover:bg-white hover:text-earth-plaster transition-all duration-300 animate-fade-in-up-delay-2"
          >
            Experience Excellence
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;