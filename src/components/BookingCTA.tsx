import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle, Mail } from 'lucide-react';
import BookingModal from './BookingModal';
import CalendarModal from './CalendarModal';

const BookingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const openCalendarModal = () => {
    setIsCalendarModalOpen(true);
  };

  const closeCalendarModal = () => {
    setIsCalendarModalOpen(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = '6281803326000'; // Remove spaces and + for WhatsApp URL
    const message = encodeURIComponent('Hello! I\'m interested in booking the Saridewi Penthouse. Could you please provide more information?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Sticky Booking Bar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 bg-warm-white border-t border-linen shadow-lg sticky-cta ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <p className="font-cormorant text-lg font-medium text-earth-plaster">
                Saridewi Penthouse
              </p>
              <p className="text-muted-wood text-sm">
                From $240/night
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={openWhatsApp}
              className="flex items-center space-x-2 bg-muted-wood text-warm-white px-4 py-2 rounded text-sm font-medium hover:bg-earth-plaster transition-colors duration-200"
            >
              <MessageCircle size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
            <button 
              onClick={openBookingModal}
              className="flex items-center space-x-2 bg-earth-plaster text-warm-white px-4 py-2 rounded text-sm font-medium hover:bg-muted-wood transition-colors duration-200"
            >
              <Calendar size={16} />
              <span>Reserve</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Booking Section */}
      <section id="booking" className="py-32 bg-earth-plaster text-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Begin Your Journey
          </h2>
          <p className="text-warm-white opacity-90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Connect with our team to craft your perfect Balinese retreat. 
            Each stay is tailored to your desires for an unforgettable experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-warm-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <Mail className="w-8 h-8 text-warm-white mx-auto mb-4" />
              <h3 className="font-cormorant text-xl font-medium mb-2 text-warm-white">Personalized Inquiry</h3>
              <p className="text-warm-white opacity-80 text-sm mb-4">For bespoke requests and tailored experiences</p>
              <p className="text-warm-white hover:text-light-beige transition-colors duration-200 text-sm font-medium">
                Saridewimgmt@gmail.com
              </p>
            </div>

            <div className="bg-warm-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <MessageCircle className="w-8 h-8 text-warm-white mx-auto mb-4" />
              <h3 className="font-cormorant text-xl font-medium mb-2 text-warm-white">WhatsApp Direct</h3>
              <p className="text-warm-white opacity-80 text-sm mb-4">Instant messaging and support</p>
              <button 
                onClick={openWhatsApp}
                className="text-warm-white hover:text-light-beige transition-colors duration-200 text-sm font-medium flex items-center justify-center space-x-2 mx-auto"
              >
                <MessageCircle size={16} />
                <span>Message Us</span>
              </button>
            </div>

            <div className="bg-warm-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <Calendar className="w-8 h-8 text-warm-white mx-auto mb-4" />
              <h3 className="font-cormorant text-xl font-medium mb-2 text-warm-white">Instant Booking</h3>
              <p className="text-warm-white opacity-80 text-sm mb-4">Check availability and reserve</p>
              <button 
                onClick={openCalendarModal}
                className="text-warm-white hover:text-light-beige transition-colors duration-200 text-sm font-medium flex items-center justify-center space-x-2 mx-auto"
              >
                <Calendar size={16} />
                <span>View Calendar</span>
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={openBookingModal}
              className="bg-warm-white text-earth-plaster px-8 py-4 text-sm tracking-widest uppercase font-montserrat font-medium hover:bg-light-beige hover:text-earth-plaster transition-all duration-300"
            >
              Reserve Now
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={closeBookingModal} 
      />

      {/* Calendar Modal */}
      <CalendarModal 
        isOpen={isCalendarModalOpen} 
        onClose={closeCalendarModal} 
      />
    </>
  );
};

export default BookingCTA;