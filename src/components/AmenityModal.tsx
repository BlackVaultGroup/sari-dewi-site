import React, { useEffect, useRef } from 'react';
import { X, Bath, Bed, Tv, Thermometer, Shield, Wifi, UtensilsCrossed, Sun } from 'lucide-react';

interface AmenityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AmenityCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const amenityCategories: AmenityCategory[] = [
  {
    title: 'Bathroom',
    icon: <Bath size={20} />,
    items: [
      'Hair dryer',
      'Shampoo',
      'Conditioner',
      'Body soap',
      'Shower gel',
      'Hot water'
    ]
  },
  {
    title: 'Bedroom & Laundry',
    icon: <Bed size={20} />,
    items: [
      'Bed linens',
      'Room-darkening shades',
      'Hangers',
      'Drying rack',
      'Safe',
      'Clothing storage'
    ]
  },
  {
    title: 'Entertainment',
    icon: <Tv size={20} />,
    items: [
      'TV',
      'Sonos sound system'
    ]
  },
  {
    title: 'Heating & Cooling',
    icon: <Thermometer size={20} />,
    items: [
      'Air conditioning',
      'Heating'
    ]
  },
  {
    title: 'Security & Safety',
    icon: <Shield size={20} />,
    items: [
      'Smart lock',
      'Exterior security cameras',
      'Smoke alarm',
      'Carbon monoxide alarm',
      'Fire extinguisher',
      'First aid kit'
    ]
  },
  {
    title: 'Internet & Office',
    icon: <Wifi size={20} />,
    items: [
      'High-speed Wi-Fi',
      'Dedicated workspace'
    ]
  },
  {
    title: 'Kitchen & Dining',
    icon: <UtensilsCrossed size={20} />,
    items: [
      'Full kitchen with stove, mini fridge, and freezer',
      'Refrigerator, microwave',
      'Cooking basics (pots, pans, oil, salt, pepper)',
      'Dishes & silverware (bowls, chopsticks, cups, etc.)',
      'Wine glasses, hot water kettle, toaster',
      'Dining table'
    ]
  },
  {
    title: 'Outdoor & Property Features',
    icon: <Sun size={20} />,
    items: [
      'Rooftop pool',
      'Sunset balconies & patio',
      'Outdoor furniture',
      'Private entrance',
      'Free parking on premises'
    ]
  }
];

const notIncludedItems = [
  'Washer and dryer',
  'Essentials kit (toiletries may vary)'
];

const AmenityModal: React.FC<AmenityModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl mx-4 bg-warm-white rounded-lg shadow-2xl max-h-[calc(100vh-100px)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-linen bg-light-beige">
          <div>
            <h2 className="font-cormorant text-3xl font-medium text-earth-plaster">
              Complete Amenity List
            </h2>
            <p className="text-muted-wood text-sm mt-1">
              Everything included for your perfect stay at Saridewi Penthouse
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted-wood hover:text-earth-plaster hover:bg-warm-white rounded-full transition-colors duration-200"
            aria-label="Close amenity modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(100vh-220px)]">
          {/* Included Amenities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {amenityCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-light-beige rounded-lg p-6 border border-linen"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-muted-wood">
                    {category.icon}
                  </div>
                  <h3 className="font-cormorant text-xl font-medium text-earth-plaster">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start space-x-2 text-muted-wood text-sm leading-relaxed"
                    >
                      <span className="text-earth-plaster mt-1.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Not Included Section */}
          <div className="bg-warm-white border-2 border-dashed border-linen rounded-lg p-6">
            <h3 className="font-cormorant text-xl font-medium text-earth-plaster mb-4 flex items-center space-x-2">
              <X size={20} className="text-muted-wood" />
              <span>Not Included</span>
            </h3>
            <ul className="space-y-2">
              {notIncludedItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-2 text-muted-wood text-sm leading-relaxed opacity-75"
                >
                  <span className="text-muted-wood mt-1.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-muted-wood text-sm italic">
              All amenities are subject to availability and may vary by season. 
              Please contact us for specific requests or questions.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-linen bg-light-beige p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onClose}
              className="bg-earth-plaster text-warm-white px-8 py-3 text-sm tracking-widest uppercase font-montserrat font-medium hover:bg-muted-wood transition-colors duration-300 rounded"
            >
              Close
            </button>
            <button className="border-2 border-earth-plaster text-earth-plaster px-8 py-3 text-sm tracking-widest uppercase font-montserrat font-medium hover:bg-earth-plaster hover:text-warm-white transition-all duration-300 rounded">
              Contact for Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenityModal;