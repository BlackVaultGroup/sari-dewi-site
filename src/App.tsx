import React from 'react';
import Hero from './components/Hero';
import DescriptionSection from './components/ImageGallery';
import RoomShowcase from './components/RoomShowcase';
import Amenities from './components/Amenities';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <DescriptionSection />
      <RoomShowcase />
      <Amenities />
      <BookingCTA />
      <Footer />
    </div>
  );
}

export default App;