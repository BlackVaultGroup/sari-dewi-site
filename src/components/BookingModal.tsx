import React, { useEffect, useRef } from 'react';
import { X, Calendar, Users, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      // Clear any existing widget content
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
      }

      // Create fresh widget element
      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'ownerrez-widget';
      widgetDiv.setAttribute('data-propertyId', '90fff70bdf234fd79eb12153e3f4dcde');
      widgetDiv.setAttribute('data-widget-type', 'Booking/Inquiry');
      widgetDiv.setAttribute('data-widgetId', '24eb10c93bba477d8180fcaecee869cb');

      // Append widget to container
      if (widgetContainerRef.current) {
        widgetContainerRef.current.appendChild(widgetDiv);
      }

      // Remove any existing OwnerRez script
      const existingScript = document.querySelector('script[src="https://app.ownerrez.com/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Load fresh OwnerRez widget script
      const script = document.createElement('script');
      script.src = 'https://app.ownerrez.com/widget.js';
      script.defer = true;
      document.head.appendChild(script);

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    } else {
      // Clean up when modal closes
      const existingScript = document.querySelector('script[src="https://app.ownerrez.com/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
      }
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-6xl bg-warm-white rounded-lg shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-linen flex-shrink-0">
          <div>
            <h2 className="font-cormorant text-2xl font-medium text-earth-plaster">
              Reserve Your Stay
            </h2>
            <p className="text-muted-wood text-sm mt-1">
              Saridewi Penthouse - Luxury Living in Bali
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted-wood hover:text-earth-plaster hover:bg-light-beige rounded-full transition-colors duration-200"
            aria-label="Close booking modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Booking Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Property Info Banner */}
            <div className="bg-gradient-to-br from-warm-white to-light-beige rounded-lg p-6 border border-linen mb-6">
              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-earth-plaster/10 rounded-full flex-shrink-0">
                  <Calendar className="w-6 h-6 text-earth-plaster" />
                </div>
                <div className="flex-1">
                  <h3 className="font-cormorant text-xl font-medium text-earth-plaster mb-2">
                    Sari Dewi Private Designer Penthouse
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-wood">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Pererenan, Bali</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Up to 4 guests</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>From $240/night</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* OwnerRez Widget Container - This will be dynamically populated */}
            <div 
              ref={widgetContainerRef}
              className="bg-white rounded-lg border border-linen p-6 min-h-[600px]"
            >
              {/* Widget will be inserted here dynamically */}
            </div>

            {/* Additional Info */}
            <div className="mt-6 bg-earth-plaster/5 rounded-lg p-4 border border-earth-plaster/10">
              <h4 className="font-medium text-earth-plaster text-sm mb-2">Booking Information</h4>
              <ul className="text-xs text-muted-wood space-y-1">
                <li>• Instant confirmation for available dates</li>
                <li>• Secure payment processing</li>
                <li>• 24/7 guest support</li>
                <li>• Flexible cancellation policies available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;