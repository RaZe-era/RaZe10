// components/PortfolioShowcase.tsx
import { motion } from 'framer-motion';
import { PortfolioItem } from '../data/portfolio';

// Helper function (can be moved to utils)
const getGlowRgb = (colorName?: string) => {
    switch (colorName) {
        case 'cyan': return '6, 182, 212'; case 'magenta': return '217, 70, 239';
        case 'yellow': return '234, 179, 8'; case 'blue': return '59, 130, 246';
        case 'purple': return '139, 92, 246'; default: return '99, 102, 241';
    }
};

interface PortfolioShowcaseProps {
  items: PortfolioItem[];
}

const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ items }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-800/50 px-4">
      <div className="container mx-auto">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-glow-cyan"> Our Work Showcase </motion.h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id} variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03, boxShadow: `0 10px 30px rgba(0,0,0,0.4), 0 0 20px rgba(${getGlowRgb(item.glowColor)}, 0.6)` }}
              className={`relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700/80 transition-all duration-300 ease-in-out cursor-pointer ${item.glowColor ? `hover:border-${item.glowColor}-500/50` : 'hover:border-indigo-500/50'}`}
            >
              <img
                src={item.imageUrl} // <-- ENSURE THIS IMAGE EXISTS
                alt={item.title} loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className={`text-lg font-semibold text-white mb-1 ${item.glowColor ? `text-glow-${item.glowColor}` : 'text-glow-white'}`}>{item.title}</h3>
                <p className="text-sm text-gray-300">{item.category}</p>
                {item.description && (<p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">{item.description}</p>)}
              </div>
              <div className={`absolute top-2 right-2 bg-${item.glowColor || 'indigo'}-600/80 text-white text-xs font-semibold px-2 py-1 rounded-full opacity-80 group-hover:opacity-100 transition-opacity`}>{item.category}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default PortfolioShowcase;
