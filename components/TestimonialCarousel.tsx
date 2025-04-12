// components/TestimonialCarousel.tsx
import React from 'react';
import { motion } from 'framer-motion';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; // Example effect
import 'swiper/css/autoplay'; // Autoplay CSS

// import required modules
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

interface Testimonial {
  id: number;
  quote: string;
  clientName: string;
  clientTitle: string; // e.g., "CEO, Tech Startup"
  rating?: number; // Optional star rating
}

// Realistic Placeholder Testimonials
const sampleTestimonials: Testimonial[] = [
  { id: 1, quote: "Working with RaZe wasn't just design; it was a strategic transformation. Our new branding commands respect and has directly impacted our bottom line. Truly elite service.", clientName: "Isabelle Moreau", clientTitle: "CEO, Ascend Financial", rating: 5 },
  { id: 2, quote: "The website RaZe built is leagues ahead of our competitors. It's visually stunning, incredibly fast, and the user experience is seamless. The results speak for themselves.", clientName: "Daniel Schmidt", clientTitle: "Founder, Quantum Leap Tech", rating: 5 },
  { id: 3, quote: "From the initial concept to the final flyer design, the process was flawless. RaZe understood our vision perfectly and delivered exceptional quality under a tight deadline.", clientName: "Priya Singh", clientTitle: "Marketing Lead, Solaris Events", rating: 5 },
  { id: 4, quote: "I needed a complex pitch deck that could capture investor attention. RaZe delivered a masterpiece – clear, compelling, and visually breathtaking. We secured funding shortly after.", clientName: "Kenji Tanaka", clientTitle: "Startup Entrepreneur", rating: 5 },
  { id: 5, quote: "The attention to detail in our branding kit was remarkable. RaZe provided not just assets, but a true system for our visual identity. Highly professional and creative.", clientName: "Fatima Al-Sayed", clientTitle: "Creative Director, Artisan Collective", rating: 5 },
];


const TestimonialCarousel = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-800/70 px-4 overflow-hidden">
       <div className="container mx-auto">
           <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-glow-magenta">Brands Reborn With RaZe</motion.h2>
           <Swiper
             effect={'coverflow'}
             grabCursor={true}
             centeredSlides={true}
             slidesPerView={'auto'} // Adjust based on desired look
             loop={true}
             autoplay={{
                 delay: 4500, // Auto-scroll delay
                 disableOnInteraction: false, // Keep playing after user interaction
                 pauseOnMouseEnter: true, // Pause when hovered
             }}
             coverflowEffect={{
                 rotate: 30, // Rotation angle
                 stretch: 0, // Stretch space between slides
                 depth: 100, // Depth offset in px
                 modifier: 1, // Effect multiplier
                 slideShadows: true, // Add shadows
             }}
             pagination={{
                 clickable: true,
                 dynamicBullets: true,
             }}
             navigation={true} // Add navigation arrows
             modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
             className="mySwiper !pb-16 max-w-6xl mx-auto" // Max width for larger screens + Padding bottom
             style={{
                 //@ts-ignore - Swiper uses CSS variables
                '--swiper-navigation-color': '#eab308', // yellow-500
                '--swiper-navigation-size': '30px', // Example size adjustment
                '--swiper-pagination-color': '#eab308', // yellow-500
                '--swiper-pagination-bullet-inactive-color': '#9ca3af', // gray-400
                '--swiper-pagination-bullet-inactive-opacity': '0.5',
                '--swiper-pagination-bullet-size': '8px',
                '--swiper-pagination-bullet-horizontal-gap': '6px'
             } as React.CSSProperties } // Type assertion for CSS vars
           >
              {sampleTestimonials.map((testimonial) => (
                 <SwiperSlide key={testimonial.id} className="!w-[85%] sm:!w-[70%] md:!w-[55%] lg:!w-[45%] xl:!w-[35%] !h-auto pb-4"> {/* Padding bottom inside slide for shadow */}
                     <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-gray-700/50 text-center h-full flex flex-col justify-between min-h-[300px]"> {/* Increased min-height */}
                         <FaQuoteLeft className="text-purple-500 text-4xl opacity-40 mb-4 mx-auto"/>
                         {/* Optional Rating */}
                         {testimonial.rating && <div className="flex justify-center mb-4">{Array.from({ length: testimonial.rating }).map((_, i) => <FaStar key={i} className="text-yellow-400 w-5 h-5"/>)}</div>}
                         <p className="text-base md:text-lg italic text-gray-200 mb-6 flex-grow">"{testimonial.quote}"</p>
                         <div className='mt-auto'> {/* Push name/title to bottom */}
                             <p className="font-bold text-white text-glow-purple">{testimonial.clientName}</p>
                             <p className="text-sm text-gray-400">{testimonial.clientTitle}</p>
                         </div>
                     </div>
                 </SwiperSlide>
              ))}
           </Swiper>
       </div>
    </section>
  );
};

export default TestimonialCarousel;
