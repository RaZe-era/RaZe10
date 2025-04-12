```typescript
// components/PricingCardV2.tsx
import { motion } from 'framer-motion';
import { PricingTierUSD } from '../data/services';
import { FaCheckCircle, FaStar, FaBolt, FaUsers } from 'react-icons/fa';

interface PricingCardV2Props {
  tier: PricingTierUSD;
  serviceName: string;
  serviceId: string;
  onSelectTier: (serviceId: string, tierLevel: string) => void;
}

// Add this helper function within the component file or import from a utils file
const getGlowRgb = (colorName?: string) => {
    switch (colorName) {
        case 'cyan': return '6, 182, 212'; case 'magenta': return '217, 70, 239';
        case 'yellow': return '234, 179, 8'; case 'blue': return '59, 130, 246';
        case 'purple': return '139, 92, 246'; default: return '99, 102, 241'; // Indigo
    }
};

const PricingCardV2: React.FC<PricingCardV2Props> = ({ tier, serviceName, serviceId, onSelectTier }) => {
  const isElite = tier.level === 'Elite';
  const isPopular = tier.isMostPopular;
  const glowColor = tier.glowColor || 'indigo';
  const glowRgb = getGlowRgb(glowColor); // Get RGB for boxShadow

  // Using CSS variables defined in globals.css is cleaner for glows:
  const textGlowClass = `text-glow-${glowColor}`;
  const buttonGradient = `from-${glowColor}-500 to-${glowColor}-700`;

  // Determine border style based on popular/elite
  const cardBorderStyle = isElite ? `border-2 border-${glowColor}-500 box-glow-${glowColor}`
                         : isPopular ? `border-2 border-purple-500 box-glow-purple`
                         : 'border border-gray-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      // Use CSS variable for hover glow if defined in globals.css
      whileHover={{ y: -10, scale: 1.02, boxShadow: `0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(${glowRgb}, 0.5)` }}
      className={`relative flex flex-col bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 ${cardBorderStyle} shadow-lg transition-all duration-300 ease-in-out overflow-hidden h-full`}
    >
      {/* Popular/Elite Badge */}
      {(isElite || isPopular) && (
         <div className={`absolute top-0 right-0 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md z-10 ${isElite ? 'bg-gradient-to-bl from-yellow-400 to-yellow-600' : 'bg-gradient-to-bl from-purple-400 to-purple-600 text-white'}`}>
           {isElite ? <><FaStar className="inline mr-1 mb-0.5" /> ELITE TIER</> : <><FaUsers className="inline mr-1 mb-0.5" /> BEST VALUE</>}
         </div>
      )}
      {isElite && <div className={`absolute top-0 left-0 w-16 h-16 bg-${glowColor}-500/30 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse`}></div>}

      {/* Tier Title */}
      <h3 className={`text-2xl font-bold mb-1 ${textGlowClass}`}>{tier.level}</h3>
      <p className="text-gray-400 text-sm mb-4">{serviceName}</p>

      {/* Pricing Block */}
      <div className="mb-5">
        <p className="text-gray-500 line-through text-lg">
          ${tier.originalPriceUSD} USD
        </p>
        <p className="text-4xl font-extrabold text-white mb-1">
          ${tier.launchPriceUSD} <span className="text-xl font-semibold text-gray-300">USD</span>
        </p>
        <p className="text-xs text-yellow-400 font-semibold">Limited Launch Offer!</p>
      </div>

      {/* Quick Details */}
      <div className="text-sm text-gray-400 space-y-1 mb-5 border-t border-b border-gray-700 py-3">
         <p><FaBolt className="inline mr-2 text-gray-500 w-3"/>Concepts: <span className="text-gray-200 font-medium">{tier.concepts}</span></p>
         <p><FaBolt className="inline mr-2 text-gray-500 w-3"/>Revisions: <span className="text-gray-200 font-medium">{tier.revisions}</span></p>
         <p><FaBolt className="inline mr-2 text-gray-500 w-3"/>Delivery: <span className="text-gray-200 font-medium">{tier.deliveryEstimate}</span></p>
      </div>

      {/* Features List */}
      <ul className="space-y-2 mb-6 text-gray-300 text-sm flex-grow min-h-[100px]">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FaCheckCircle className={`text-${glowColor}-400 mr-2 mt-0.5 flex-shrink-0 w-4 h-4`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

       {/* Bonus & Scarcity */}
       {tier.bonus && <p className="text-sm text-green-400 font-semibold mb-2 text-center bg-green-900/30 p-2 rounded"><FaStar className="inline mr-1"/> BONUS: {tier.bonus}</p>}
       {tier.scarcity && <p className="text-xs text-red-400 font-semibold mt-2 mb-4 text-center">{tier.scarcity}</p>}

      {/* Action Button */}
      <motion.button
        onClick={() => onSelectTier(serviceId, tier.level)}
        whileHover={{ scale: 1.05, filter: 'brightness(1.1)'}}
        whileTap={{ scale: 0.95 }}
        className={`mt-auto w-full bg-gradient-to-r ${buttonGradient} text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out`}
      >
        {`Claim ${tier.level} Offer ($${tier.launchPriceUSD})`}
      </motion.button>
    </motion.div>
  );
};

export default PricingCardV2;
```
