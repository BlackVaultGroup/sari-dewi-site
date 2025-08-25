import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Wifi, 
  Car, 
  Coffee, 
  Waves, 
  UtensilsCrossed,
  Wind,
  Shield,
  Sparkles,
  Sun,
  Phone,
  Bed,
  Tv,
  DoorOpen,
  Archive
} from 'lucide-react';
import AmenityModal from './AmenityModal';

interface Amenity {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    icon: <Waves size={32} />,
    name: 'Rooftop Pool',
    description: 'Private temperature-controlled pool with views of rice fields and sunsets'
  },
  {
    icon: <Sparkles size={32} />,
    name: 'Sonos Audio System',
    description: 'Premium whole-home sound system for immersive ambiance'
  },
  {
    icon: <Archive size={32} />,
    name: 'Designer Interiors',
    description: 'Custom marble countertops and handcrafted wood finishes'
  },
  {
    icon: <Sun size={32} />,
    name: 'Sunset Balconies',
    description: 'Relax and unwind with west-facing panoramic views'
  },
  {
    icon: <UtensilsCrossed size={32} />,
    name: 'Luxury Kitchen',
    description: 'Fully equipped with high-end appliances, cookware, and dining essentials'
  },
  {
    icon: <Wifi size={32} />,
    name: 'High-Speed Wi-Fi',
    description: 'Fiber internet ideal for streaming, calls, and remote work'
  },
  {
    icon: <Wind size={32} />,
    name: 'Climate Control',
    description: 'Air conditioning and ceiling fans throughout'
  },
  {
    icon: <Bed size={32} />,
    name: 'Comfort-First Bedding',
    description: 'High-quality linens, blackout curtains, and plush bedding'
  },
  {
    icon: <Tv size={32} />,
    name: 'Smart Entertainment',
    description: 'Smart TV and streaming-ready setup in the living room'
  },
  {
    icon: <Car size={32} />,
    name: 'Private Parking',
    description: 'Secured on-premise parking space included'
  },
  {
    icon: <Shield size={32} />,
    name: 'Enhanced Security',
    description: 'Remote smart-lock system with outdoor cameras'
  },
  {
    icon: <DoorOpen size={32} />,
    name: 'Private Entrance',
    description: 'Discreet, dedicated access from a separate street or building entrance'
  }
];

const AmenityCard: React.FC<{ amenity: Amenity; index: number }> = ({ amenity, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`text-center group ${
        inView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="amenity-icon text-muted-wood mb-4 flex justify-center">
        {amenity.icon}
      </div>
      <h3 className="font-cormorant text-xl font-medium text-earth-plaster mb-2">
        {amenity.name}
      </h3>
      <p className="text-muted-wood text-sm leading-relaxed">
        {amenity.description}
      </p>
    </div>
  );
};

const Amenities: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="amenities" className="py-32 bg-light-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className={`text-center mb-16 ${
              inView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-earth-plaster mb-6">
              Refined Amenities for a Serene Escape
            </h2>
            <p className="text-muted-wood max-w-2xl mx-auto leading-relaxed">
              Every detail of the Saridewi Penthouse is thoughtfully selected to elevate your stay{'\u00A0'}—balancing modern luxury with natural tranquility, just minutes from Bali's most vibrant beaches and nightlife.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
            {amenities.map((amenity, index) => (
              <AmenityCard key={amenity.name} amenity={amenity} index={index} />
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={openModal}
              className="bg-earth-plaster text-warm-white px-8 py-4 text-sm tracking-widest uppercase font-montserrat font-medium hover:bg-muted-wood transition-colors duration-300"
            >
              Request Full Amenity List
            </button>
          </div>
        </div>
      </section>

      {/* Amenity Modal */}
      <AmenityModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Amenities;