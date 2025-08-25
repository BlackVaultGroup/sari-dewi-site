import React from 'react';
import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '6281803326000'; // Remove spaces and + for WhatsApp URL
    const message = encodeURIComponent('Hello! I\'m interested in booking the Saridewi Penthouse. Could you please provide more information?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-earth-plaster text-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-cormorant text-3xl font-light mb-4">
              Saridewi Penthouse
            </h3>
            <p className="text-linen leading-relaxed mb-6 max-w-md">
              A private two-story designer penthouse nestled in the heart of Bali, the Saridewi Penthouse offers a curated sanctuary of serenity and style. Soak in panoramic views from your rooftop pool overlooking lush rice fields and sunset-drenched balconies. Inside, custom marble and wood interiors frame a space designed for modern elegance.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cormorant text-xl font-medium mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-muted-wood mt-1 flex-shrink-0" />
                <div>
                  <p className="text-linen text-sm">
                    Pererenan, Bali<br />
                    Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={16} className="text-muted-wood flex-shrink-0" />
                <button
                  onClick={openWhatsApp}
                  className="text-linen hover:text-warm-white transition-colors duration-200 text-sm text-left"
                >
                  WhatsApp: +62 81803326000
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-muted-wood flex-shrink-0" />
                <a 
                  href="mailto:Saridewimgmt@gmail.com"
                  className="text-linen hover:text-warm-white transition-colors duration-200 text-sm"
                >
                  Saridewimgmt@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram size={16} className="text-muted-wood flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/saridewipenthouse/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-linen hover:text-warm-white transition-colors duration-200 text-sm"
                >
                  @saridewipenthouse
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant text-xl font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-linen hover:text-warm-white transition-colors duration-200 text-sm text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('description-section')}
                  className="text-linen hover:text-warm-white transition-colors duration-200 text-sm text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('rooms')}
                  className="text-linen hover:text-warm-white transition-colors duration-200 text-sm text-left"
                >
                  Rooms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('amenities')}
                  className="text-linen hover:text-warm-white transition-colors duration-200 text-sm text-left"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="text-linen hover:text-warm-white transition-colors duration-200 text-sm text-left"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-muted-wood border-opacity-20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-linen text-sm mb-4 sm:mb-0">
            © 2024 Saridewi Penthouse. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-linen hover:text-warm-white transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-linen hover:text-warm-white transition-colors duration-200 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;