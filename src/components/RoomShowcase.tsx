import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, ArrowLeft, Home, Utensils, UtensilsCrossed, Bed, Bath, Users, Sun, Camera } from 'lucide-react';

// Room data with images and details
const roomsData = {
  livingRoom: {
    id: 'livingRoom',
    title: 'Living Room',
    description: 'The soul of the penthouse—an expansive sanctuary where handwoven bamboo ceilings meet floor-to-ceiling windows. This open-concept masterpiece seamlessly flows to the pool terrace, creating an uninterrupted dialogue between interior luxury and Bali\'s natural beauty.',
    images: [
      { src: '/compressed_image.jpg', alt: 'Living room with pool view and modern furnishings - the signature luxury experience' },
      { src: '/d751097f-2caa-4d8b-881b-4f0abc0a2f70.jpg', alt: 'Living room with woven bamboo ceiling and panoramic terrace views' },
      { src: '/a1805c4a-c2bd-41b7-b88c-4485bc95480b.jpg', alt: 'Living room with woven ceiling and pool terrace access' },
      { src: '/A7401281-HDR_resized_cropped.jpg', alt: 'Spacious living room with modern sofa and outdoor terrace view' },
      { src: '/a695c05e-4bf2-41c1-86a8-6a9cfde899e2.jpg', alt: 'Living room evening ambiance with modern lighting' },
      { src: '/36e37960-5394-4394-893f-dfb1748b1321.jpg', alt: 'Living room with ceramic vessels and warm natural lighting' },
      { src: '/DSC02238_compressed.jpg', alt: 'Living room with pool view and modern furnishings' }
    ],
    features: ['Handwoven Bamboo Ceiling', 'Panoramic Pool Views', 'Designer Furnishings', 'Seamless Indoor-Outdoor Flow', 'Curated Art Collection', 'Sonos Audio System'],
    icon: <Home size={24} />
  },
  kitchen: {
    id: 'kitchen',
    title: 'Full Kitchen',
    description: 'A fully equipped culinary space featuring dramatic marble walls and warm wood cabinetry. Complete with stove, refrigerator, mini fridge with freezer, microwave, toaster, and hot water kettle. The kitchen includes all cooking basics, dishes and silverware, plus an elegant collection of wine glasses displayed on floating glass shelves—perfect for both everyday cooking and sophisticated entertaining.',
    images: [
      { src: '/compressed_image_1.jpg', alt: 'Stunning kitchen with dramatic marble walls, floating glass shelves, and luxury design books' },
      { src: '/compressed_image_2.jpg', alt: 'Kitchen detail with premium glassware display and marble backsplash' },
      { src: '/compressed_image_3.jpg', alt: 'Elegant champagne glasses and crystal stemware on floating shelves' },
      { src: '/compressed_image_4.jpg', alt: 'Kitchen living area with marble backdrop and designer furnishings' }
    ],
    features: ['Full Stove & Refrigerator', 'Mini Fridge & Freezer', 'Microwave & Toaster', 'Hot Water Kettle', 'Wine Glasses Collection', 'Cooking Basics Included'],
    icon: <Utensils size={24} />
  },
  dining: {
    id: 'dining',
    title: 'Dining Area',
    description: 'A sculptural dining sanctuary where art meets function. The centerpiece oval table is surrounded by avant-garde chairs that blur the line between furniture and sculpture, while dramatic marble walls and floating glass candle arrangements create an atmosphere of refined elegance. This is where culinary experiences become memorable occasions.',
    images: [
      { src: '/79a1221c-bb90-47f0-bd6a-7fcfa4cbde3a_compressed.jpg', alt: 'Dining area overview with sculptural chairs and dramatic marble backdrop' },
      { src: '/f9eb6cff-e362-4c8d-a0d7-bb69dc31df78_compressed.jpg', alt: 'Close-up of sculptural dining chairs with elegant candle centerpiece' },
      { src: '/2e6297a4-f4c3-4c27-91ce-90ecfbcd3651_compressed.jpg', alt: 'Artistic perspective of curved dining chairs and marble table setting' },
      { src: '/compressed_image_1.jpg', alt: 'Dining area with kitchen backdrop showing marble walls and elegant design' }
    ],
    features: ['Sculptural Designer Chairs', 'Oval Marble Dining Table', 'Floating Glass Candles', 'Dramatic Marble Walls', 'Artistic Ambiance', 'Open Kitchen Connection'],
    icon: <UtensilsCrossed size={24} />
  },
  bedroom1: {
    id: 'bedroom1',
    title: 'Bedroom 1 - Master Suite',
    description: 'A serene master sanctuary featuring a king-size bed beneath a stunning handwoven bamboo ceiling. The suite includes a spacious walk-in wardrobe with luxury robes, an elegant ensuite bathroom, and floor-to-ceiling windows offering panoramic views. Complete with air conditioning, premium bed linens, room-darkening shades, smart TV, mini fridge, and private balcony access—every detail designed for ultimate comfort and tranquility.',
    images: [
      { src: '/A7401143-HDR_compressed.jpg', alt: 'Master bedroom with natural materials and panoramic windows' },
      { src: '/c2c9f6fa-3618-44f4-b71b-7944d7e17adb_compressed.jpg', alt: 'Master bedroom with kitchenette area, marble walls, and custom wood cabinetry' },
      { src: '/afd062d6-80be-4895-a382-27ecd552529f_compressed.jpg', alt: 'Walk-in wardrobe with luxury robes and custom wood storage' },
      { src: '/cd0e54aa-b4d8-4dc6-bb0a-4319195f524e_compressed.jpg', alt: 'Master bedroom with handwoven bamboo ceiling and ensuite bathroom view' },
      { src: '/4997a06b-3e67-4f39-b7aa-c5b3adf1f277_compressed.jpg', alt: 'Master bedroom overview with panoramic windows and ensuite access' },
      { src: '/c75f7abd-1551-47f5-ad95-4d0207332403_compressed.jpg', alt: 'Master bedroom with handwoven ceiling, Buddha statue, and panoramic landscape views' }
    ],
    features: ['King-Size Bed', 'Handwoven Bamboo Ceiling', 'Walk-in Wardrobe', 'Ensuite Bathroom', 'Smart TV & Mini Fridge', 'Private Balcony Access'],
    icon: <Bed size={24} />
  },
  bedroom2: {
    id: 'bedroom2',
    title: 'Bedroom 2 - Guest Suite',
    description: 'A sophisticated guest bedroom featuring a king-size bed with premium linens, custom wood cabinetry, and thoughtful amenities. The room includes air conditioning, heating, room-darkening shades for perfect rest, ample clothing storage with hangers, a personal safe, smart TV, and high-speed Wi-Fi. Every detail ensures guests experience the same level of luxury and comfort as the master suite.',
    images: [
      { src: '/optimized_bedroom_1.jpg', alt: 'Guest bedroom with king-size bed, custom wood cabinetry, and smart TV' },
      { src: '/optimized_bedroom_2.jpg', alt: 'Guest bedroom showing walk-in wardrobe with hangers and luxury robes' },
      { src: '/optimized_bedroom_3.jpg', alt: 'Guest bedroom overview with ensuite bathroom access and room-darkening shades' }
    ],
    features: ['King-Size Bed', 'Premium Bed Linens', 'Custom Wood Cabinetry', 'Walk-in Wardrobe', 'Smart TV & Safe', 'Climate Control'],
    icon: <Users size={24} />
  },
  bathroom1: {
    id: 'bathroom1',
    title: 'Full Bathroom 1 - Master Ensuite',
    description: 'A sophisticated spa sanctuary featuring a floating double vanity with natural stone vessels, rainfall shower with glass enclosure, and premium black fixtures throughout. The space includes air conditioning, hot water, and a complete collection of luxury amenities: hair dryer, shampoo, conditioner, body soap, and shower gel. Warm wood accents and under-lit mirrors create an atmosphere of serene indulgence.',
    images: [
      { src: '/d5a10e96-e5cc-4f13-8cf0-46d012678495.png', alt: 'Master ensuite with floating double vanity, natural stone vessels, and warm wood accents' },
      { src: '/2638fcd0-1481-416f-9056-0ca34694db7b.png', alt: 'Rainfall shower with glass enclosure and premium black fixtures' },
      { src: '/c33e314c-d249-46f6-b5f7-6812058d4829.png', alt: 'Vanity detail with natural stone vessels, black fixtures, and luxury amenities' }
    ],
    features: ['Floating Double Vanity', 'Natural Stone Vessels', 'Rainfall Shower', 'Premium Black Fixtures', 'Luxury Amenities Included', 'Climate Controlled'],
    icon: <Bath size={24} />
  },
  bathroom2: {
    id: 'bathroom2',
    title: 'Full Bathroom 2 - Guest Bathroom',
    description: 'A sophisticated guest bathroom featuring a floating stone vanity with premium black fixtures, under-lit mirror, and elegant glass shower enclosure. The space includes air conditioning, hot water, and a complete collection of luxury amenities: hair dryer, shampoo, conditioner, body soap, and shower gel. Warm wood accents and natural stone elements create a spa-like atmosphere for guests.',
    images: [
      { src: '/a1f7ceaa-bb55-4104-b056-02becf8e6605_compressed.jpg', alt: 'Guest bathroom with floating stone vanity, black fixtures, and under-lit mirror' },
      { src: '/bf1342c1-217e-4d99-ba5d-f37d7cbd6f14_compressed.jpg', alt: 'Guest bathroom with glass shower enclosure and warm wood accents' }
    ],
    features: ['Floating Stone Vanity', 'Premium Black Fixtures', 'Glass Shower Enclosure', 'Under-lit Mirror', 'Luxury Amenities Included', 'Climate Controlled'],
    icon: <Bath size={24} />
  },
  halfBath: {
    id: 'halfBath',
    title: 'Half Bathroom - Powder Room',
    description: 'A serene powder room featuring a floating stone vanity with integrated sink, premium black fixtures, and under-lit mirror. The space showcases warm wood slat details, elegant orchid accents, and artisan ceramic vessels. Natural stone elements and sophisticated lighting create a tranquil atmosphere that reflects the penthouse\'s commitment to refined luxury in every detail.',
    images: [
      { src: '/compressed_bathroom.png', alt: 'Elegant powder room with floating stone vanity, orchid accent, and warm wood details' }
    ],
    features: ['Floating Stone Vanity', 'Premium Black Fixtures', 'Under-lit Mirror', 'Warm Wood Slat Details', 'Orchid Accent', 'Artisan Ceramic Vessels'],
    icon: <Bath size={24} />
  },
  rooftop: {
    id: 'rooftop',
    title: 'Rooftop Terrace',
    description: 'The crown jewel of Saridewi Penthouse—a private rooftop sanctuary featuring an infinity edge pool with glass walls and panoramic views of Bali\'s landscape. Elegant teak lounge chairs frame the pool area, while tropical palms in artisan planters create intimate seating areas. Floor-to-ceiling glass doors seamlessly connect the interior to this outdoor paradise, perfect for sunrise yoga, sunset cocktails, or starlit entertaining.',
    images: [
      { src: '/compressed_poolside_view.png', alt: 'Rooftop terrace with infinity pool, teak lounge chairs, and panoramic Bali landscape views' }
    ],
    features: ['Infinity Edge Pool', 'Glass Pool Walls', 'Teak Lounge Furniture', 'Tropical Palm Gardens', 'Panoramic Landscape Views', 'Seamless Indoor-Outdoor Flow'],
    icon: <Sun size={24} />
  },
  additional: {
    id: 'additional',
    title: 'Additional Highlights',
    description: 'Discover the extraordinary details that transform Saridewi Penthouse into a living work of art. From the illuminated floating staircase with warm wood treads to the curated collection of artisan chess sets and handcrafted ceramics, every element tells a story of refined sophistication. The custom wood shelving displays carefully selected design books and sculptural vessels, while the seamless integration of natural materials creates an atmosphere of understated luxury throughout.',
    images: [
      { src: '/a2976a4f-6fbc-4fc6-a1a4-f7e652c92aba_compressed.jpg', alt: 'Illuminated floating staircase with warm wood treads and sophisticated lighting design' },
      { src: '/5975bdbc-3a45-455d-a2a0-0a075d8537c4_compressed.jpg', alt: 'Artisan chess set on marble surface with crystal glassware and curated details' },
      { src: '/f12201e0-4611-4da8-8b8c-e6e0a95a0586_compressed.jpg', alt: 'Custom wood shelving with design books, handcrafted ceramics, and under-cabinet lighting' },
      { src: '/f271ddc3-0568-4c50-ac56-d680e911e804_compressed.jpg', alt: 'Living area detail with sculptural ceramic vessels, luxury seating, and pool terrace views' }
    ],
    features: ['Illuminated Floating Staircase', 'Artisan Chess Collection', 'Curated Design Library', 'Handcrafted Ceramics', 'Custom Wood Shelving', 'Sculptural Art Pieces'],
    icon: <Camera size={24} />
  }
};

// Navigation structure
const roomNavigation = {
  livingRoom: { next: 'kitchen', label: 'View Kitchen' },
  kitchen: { next: 'dining', label: 'View Dining Area', prev: 'livingRoom' },
  dining: { next: 'bedroom1', label: 'View Bedroom 1', prev: 'kitchen' },
  bedroom1: { next: 'bedroom2', label: 'View Bedroom 2', prev: 'dining' },
  bedroom2: { next: 'bathroom1', label: 'View Bathroom 1', prev: 'bedroom1' },
  bathroom1: { next: 'bathroom2', label: 'View Bathroom 2', prev: 'bathroom2' },
  bathroom2: { next: 'halfBath', label: 'View Half Bath', prev: 'bathroom1' },
  halfBath: { next: 'rooftop', label: 'View Rooftop', prev: 'bathroom2' },
  rooftop: { next: 'additional', label: 'View Additional', prev: 'halfBath' },
  additional: { prev: 'rooftop' }
};

interface RoomCardProps {
  room: typeof roomsData.livingRoom;
  onNextRoom?: () => void;
  onPrevRoom?: () => void;
  nextLabel?: string;
  showBackButton?: boolean;
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
  room,
  onNextRoom,
  onPrevRoom,
  nextLabel,
  showBackButton = false,
  currentImageIndex,
  setCurrentImageIndex
}) => {
  // Reset image index when room changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [room.id, setCurrentImageIndex]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % room.images.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="group card-hover w-full animate-fade-in-up lg:flex">
      <div className="bg-warm-white rounded-lg shadow-lg border border-linen overflow-hidden h-full lg:flex lg:w-full">
        {/* Image Carousel - with proper padding to create visual border */}
        <div className="relative overflow-hidden lg:w-3/5 p-4 lg:p-6">
          <div className="relative h-96 lg:h-[650px] bg-light-beige rounded-lg overflow-hidden border border-linen">
            {room.images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentImageIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  loading={index <= 1 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
            
            {/* Navigation Buttons - Only show if more than 1 image */}
            {room.images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-warm-white bg-opacity-50 backdrop-blur-sm rounded-full p-2 text-earth-plaster hover:bg-opacity-70 transition-all duration-200"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-warm-white bg-opacity-50 backdrop-blur-sm rounded-full p-2 text-earth-plaster hover:bg-opacity-70 transition-all duration-200"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
            
            {/* Room Icon */}
            <div className="absolute top-4 left-4 bg-warm-white bg-opacity-90 rounded-full p-2">
              <div className="text-muted-wood">
                {room.icon}
              </div>
            </div>
            
            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-warm-white bg-opacity-90 rounded-full px-3 py-1">
              <span className="text-muted-wood text-sm font-medium">
                {currentImageIndex + 1} / {room.images.length}
              </span>
            </div>
            
            {/* Progress Dots - Always show if more than 1 image, with better visibility */}
            {room.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-20 rounded-full px-3 py-2 backdrop-blur-sm">
                {room.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-warm-white scale-125 shadow-sm' 
                        : 'bg-warm-white bg-opacity-50 hover:bg-opacity-75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="p-6 lg:w-2/5 lg:flex lg:flex-col lg:justify-center border-l border-linen">
          {/* Back Button */}
          {showBackButton && onPrevRoom && (
            <div className="pb-4 border-b border-light-beige mb-4 lg:hidden">
              <button
                onClick={onPrevRoom}
                className="flex items-center space-x-2 text-muted-wood hover:text-earth-plaster transition-colors duration-200"
              >
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Previous Room</span>
              </button>
            </div>
          )}

          <h3 className="font-cormorant text-2xl lg:text-3xl font-medium text-earth-plaster mb-3">
            {room.title}
          </h3>
          <p className="text-muted-wood mb-4 leading-relaxed text-sm lg:text-base">
            {room.description}
          </p>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            {room.features.map((feature) => (
              <span
                key={feature}
                className="text-xs bg-light-beige px-2 py-1 rounded-full text-earth-plaster font-medium text-center"
              >
                {feature}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-cormorant text-xl font-medium text-earth-plaster">
              {room.title.split(' - ')[0]}
            </span>
            {nextLabel && onNextRoom && (
              <button 
                onClick={onNextRoom}
                className="bg-earth-plaster text-warm-white px-4 py-2 text-sm font-medium hover:bg-muted-wood transition-colors duration-200 rounded"
              >
                {nextLabel} →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomShowcase: React.FC = () => {
  const [currentRoom, setCurrentRoom] = useState<keyof typeof roomsData>('livingRoom');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const navigateToRoom = (roomId: keyof typeof roomsData) => {
    setCurrentRoom(roomId);
    // Image index will be reset by the useEffect in RoomCard
  };

  const currentRoomData = roomsData[currentRoom];
  const navigation = roomNavigation[currentRoom];

  return (
    <section id="rooms" className="py-12" style={{ backgroundColor: '#EFEDE6' }}>
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-8 ${
            headerInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-earth-plaster mb-4">
            The Saridewi Penthouse
          </h2>
          <p className="text-muted-wood max-w-2xl mx-auto leading-relaxed">
            Designer Luxury with Soul, in the Heart of Bali
          </p>
        </div>

        {/* Centered Content Layout */}
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
            {/* Left Side Navigation */}
            <div className="lg:w-64 w-full order-2 lg:order-1">
              <div className="bg-warm-white rounded-lg shadow-lg border border-linen p-4 sticky top-8">
                <h3 className="font-cormorant text-xl font-medium text-earth-plaster mb-4">
                  Explore Rooms
                </h3>
                <div className="space-y-2">
                  {Object.entries(roomsData).map(([roomId, room]) => (
                    <button
                      key={roomId}
                      onClick={() => navigateToRoom(roomId as keyof typeof roomsData)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                        currentRoom === roomId
                          ? 'bg-earth-plaster text-warm-white'
                          : 'text-muted-wood hover:bg-light-beige hover:text-earth-plaster'
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {room.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">
                          {room.title.split(' - ')[0]}
                        </div>
                        {room.title.includes(' - ') && (
                          <div className="text-xs opacity-75 truncate">
                            {room.title.split(' - ')[1]}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Room Card */}
            <div className="flex-1 order-1 lg:order-2">
              <RoomCard
                room={currentRoomData}
                onNextRoom={navigation.next ? () => navigateToRoom(navigation.next as keyof typeof roomsData) : undefined}
                onPrevRoom={navigation.prev ? () => navigateToRoom(navigation.prev as keyof typeof roomsData) : undefined}
                nextLabel={navigation.label}
                showBackButton={!!navigation.prev}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;