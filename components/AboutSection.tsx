```typescript
// components/AboutSection.tsx
import { motion } from 'framer-motion';
import { FaRocket, FaRegLightbulb } from 'react-icons/fa'; // Example Icons

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-800/40 overflow-hidden px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4, margin: "-10% 0px -20% 0px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
            <span className="text-glow-purple">RaZe:</span> Your Brand's <span className="text-purple-400">Rebirth</span>.
          </h2>
          <motion.blockquote
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.8 }}
             transition={{ delay: 0.2, duration: 0.5 }}
             className="border-l-4 border-purple-500 pl-4 italic text-purple-300 text-xl mb-6"
           >
            “RaZe isn’t a design agency. It’s your brand’s rebirth.”
           </motion.blockquote>
          <p className="text-lg text-gray-300 mb-4">
            We are architects of impact, crafting visual identities and digital experiences that don't just look good—they command attention, build empires, and drive results.
          </p>
          <p className="text-gray-400 mb-6">
            <FaRegLightbulb className="inline mr-1 text-yellow-400"/> Our philosophy blends <strong className='text-gray-200'>audacious creativity</strong> with <strong className='text-gray-200'>strategic precision</strong>. We value collaboration, bold ideas, and a relentless pursuit of quality that elevates brands beyond the ordinary.
          </p>
           <motion.button
             whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 92, 246, 0.7)" }}
             whileTap={{ scale: 0.95 }}
             onClick={() => document.getElementById('categories-overview')?.scrollIntoView({ behavior: 'smooth' })}
             className="mt-4 inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Explore Our Craft <FaRocket className="ml-2"/>
          </motion.button>
        </motion.div>

        {/* Video/Reel Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative aspect-video bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-purple-500/30 box-glow-purple"
        >
          {/* --- REPLACE THIS DIV WITH YOUR VIDEO EMBED --- */}
          <div className="absolute inset-0 flex items-center justify-center">
             <p className="text-gray-500 text-center p-4">
               [Your Intro Video/Reel Here: Showcase Vision & Past Work]
             </p>
             {/* Example: HTML <video> tag
             <video
               className="absolute inset-0 w-full h-full object-cover"
               src="/videos/raze-intro-reel.mp4" // <-- REPLACE path if using video
               poster="/images/video-poster.jpg" // Optional poster image
               // controls loop muted playsInline autoPlay
             /> */}
          </div>
          {/* --- END OF VIDEO PLACEHOLDER --- */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutSection;
```
