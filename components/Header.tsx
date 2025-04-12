// components/Header.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-[60] py-4 px-6 md:px-10 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl md:text-3xl font-bold text-glow-purple cursor-pointer hover:opacity-80 transition-opacity">
            RaZe
          </a>
        </Link>
        <nav className="flex items-center space-x-4 md:space-x-6">
           {/* Optional Nav Links */}
           <Link href="#about" legacyBehavior><a className="text-sm text-gray-300 hover:text-white transition-colors hidden md:inline">About</a></Link>
           <Link href="#categories-overview" legacyBehavior><a className="text-sm text-gray-300 hover:text-white transition-colors hidden md:inline">Services</a></Link>
           <Link href="#pricing" legacyBehavior><a className="text-sm text-gray-300 hover:text-white transition-colors hidden md:inline">Pricing</a></Link>

          <motion.button
             whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 92, 246, 0.7)" }}
             whileTap={{ scale: 0.95 }}
             onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-sm md:text-base"
          >
            Book Now
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
