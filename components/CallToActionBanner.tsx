// components/CallToActionBanner.tsx
import { motion } from 'framer-motion';
import { FaEmpire, FaWhatsapp, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const CallToActionBanner = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 relative overflow-hidden">
       <div className="absolute inset-0 opacity-10 bg-[url('/images/patterns/geometric.svg')]"></div> {/* Optional: Add pattern */}
       <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto text-center relative z-10 px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight shadow-text">Let's Build Your <FaEmpire className="inline text-yellow-400 mx-1" /> Empire.</motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-lg md:text-xl text-indigo-200 mb-8 max-w-xl mx-auto">Ready to elevate your brand with design that commands power? Connect with RaZe today and secure your launch advantage.</motion.p>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ staggerChildren: 0.15, delayChildren: 0.3 }} className="flex flex-wrap justify-center items-center gap-4">
           {/* Main Booking Button */}
          <motion.button variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"> <FaPaperPlane className="inline mr-2"/> Book Your Project </motion.button>
          {/* WhatsApp Link */}
          <motion.a variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} href="https://wa.me/YOUR_NUMBER" /* <-- REPLACE YOUR_NUMBER */ whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 ease-in-out"> <FaWhatsapp className="mr-2"/> Chat Now </motion.a>
          {/* Instagram Link */}
           <motion.a variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} href="https://www.instagram.com/raze.era1?igsh=MWhxb3VmbDMyN2lyaQ==" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300 ease-in-out"> <FaInstagram className="mr-2"/> DM on Insta </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
export default CallToActionBanner;
