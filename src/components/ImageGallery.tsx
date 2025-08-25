import React from 'react';
import { useInView } from 'react-intersection-observer';

const DescriptionSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="description-section" className="py-40 bg-light-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-20 items-center ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Left Side - Text Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-earth-plaster mb-8">
                The Divine Essence
              </h2>
              
              <div className="space-y-6 text-muted-wood leading-relaxed">
                <p>
                  Sari Dewi is a name rich with meaning. In Indonesian, "Sari" translates to 
                  "essence" or "core beauty," while "Dewi" means "goddess"—a divine 
                  feminine presence associated with grace, wisdom, and nature.
                </p>
                
                <p>
                  Together, Sari Dewi represents "the divine essence"—a perfect reflection 
                  of our mission to offer not just a place to stay, but a spiritual and 
                  aesthetic sanctuary.
                </p>
              </div>
            </div>
            
            {/* Quote */}
            <div className="border-l-4 border-muted-wood pl-6 py-4">
              <blockquote className="font-cormorant text-2xl md:text-3xl font-light text-earth-plaster italic leading-relaxed">
                "She came for the view.<br />
                But stayed for the silence."
              </blockquote>
            </div>
          </div>

          {/* Right Side - Master Bedroom Image - Now takes up 3/5 of the width */}
          <div className="lg:col-span-3 relative">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/A7401143-HDR_compressed.jpg"
                alt="Luxurious master bedroom in Saridewi Penthouse with panoramic windows, natural wood finishes, and serene ambiance"
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-muted-wood bg-opacity-10 rounded-full blur-xl"></div>
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-earth-plaster bg-opacity-10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;