```typescript
// components/ServiceCard.tsx
import { motion } from 'framer-motion';
import { ServiceCategoryExpanded } from '../data/services';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const getGlowRgb = (colorName?: string) => {
    switch (colorName) {
        case 'cyan': return '6, 182, 212'; case 'magenta': return '217, 70, 239';
        case 'yellow': return '234, 179, 8'; case 'blue': return '59, 130, 246';
        case 'purple': return '139, 92, 246'; default: return '99, 102, 241'; // Indigo
    }
};

interface ServiceCardProps {
  service: ServiceCategoryExpanded;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const glowColor = service.tiers[0]?.glowColor || 'indigo';
  const hasTiers = service.tiers && service.tiers.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.02, boxShadow: `0 10px 30px rgba(0,0,0,0.3), 0 0 15px rgba(${getGlowRgb(glowColor)}, 0.5)` }}
      className={`relative flex flex-col bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 ease-in-out group hover:border-${glowColor}-500/60 h-full`} // Added h-full for consistent height
    >
      {/* Image or Icon */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        {service.previewImage ? (
          <img
            src={service.previewImage} // <-- ENSURE THIS IMAGE EXISTS
            alt={`${service.name} preview`}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            loading="lazy" // Add lazy loading
          />
        ) : service.icon ? (
          <service.icon className={`w-16 h-16 text-${glowColor}-400 opacity-60`} />
        ) : <div className="h-full w-full bg-gray-700"></div>} {/* Fallback background */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/70 via-gray-800/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className={`text-xl font-bold mb-2 text-white text-glow-${glowColor}`}>{service.name}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{service.description}</p>

        {/* Tags */}
        {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {service.tags.slice(0, 3).map(tag => (
              <span key={tag} className={`text-xs bg-${glowColor}-500/20 text-${glowColor}-300 px-2 py-0.5 rounded-full`}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Button */}
        <Link href={hasTiers ? `#pricing-${service.id}` : '#booking-form'} legacyBehavior>
          <a className={`mt-auto inline-flex items-center justify-center text-sm font-semibold text-center px-4 py-2 rounded-md bg-gradient-to-r from-${glowColor}-600 to-${glowColor}-700 text-white shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-300`}>
             {hasTiers ? 'View Packages' : 'Submit Custom Request'} <FaArrowRight className="ml-2 text-xs"/>
          </a>
        </Link>
      </div>
       <div className={`absolute -top-2 -left-2 w-12 h-12 bg-${glowColor}-500/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
    </motion.div>
  );
};

export default ServiceCard;
```
