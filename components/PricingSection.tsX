```typescript
// components/PricingSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCategoryExpanded } from '../data/services';
import PricingCardV2 from './PricingCardV2';
import CountdownTimer from './CountdownTimer';
import Link from 'next/link';
import { FaArrowRight, FaQuestionCircle } from 'react-icons/fa';

interface PricingSectionProps {
  services: ServiceCategoryExpanded[];
  onSelectTier: (serviceId: string, tierLevel: string) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ services, onSelectTier }) => {
    const launchEndDate = new Date();
    launchEndDate.setDate(launchEndDate.getDate() + 7); // Launch duration: 7 days

    const regularServices = services.filter(s => s.id !== 'custom-request');
    const customRequestService = services.find(s => s.id === 'custom-request');

    return (
        <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900 px-4">
            <div className="container mx-auto text-center">
                {/* Headline & Urgency */}
                <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight text-white">
                   Luxury Design, <span className="text-yellow-400 text-glow-yellow">Launch Pricing.</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    <span className='font-bold text-white'>"For Founders Who Move First."</span> Secure your brand's future with premium design, starting from just <span className="font-bold text-white">$15</span> during this limited launch phase.
                </motion.p>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.4, duration: 0.5 }} className="mb-12 md:mb-16 flex justify-center">
                     <CountdownTimer targetDate={launchEndDate} />
                 </motion.div>

                {/* Pricing Tiers Per Category */}
                <div className="space-y-16 md:space-y-24">
                    {regularServices.map((service) => (
                        <motion.div
                            key={service.id}
                            id={`pricing-${service.id}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }} // Adjust viewport for parallax feel
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="scroll-mt-20"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-glow-blue">{service.name}</h3>
                            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">{service.longDescription || service.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                                {service.tiers.map((tier) => (
                                    <PricingCardV2
                                        key={`${service.id}-${tier.level}`}
                                        tier={tier}
                                        serviceName={service.name}
                                        serviceId={service.id}
                                        onSelectTier={onSelectTier}
                                    />
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 mt-6 italic">
                                *Need it faster? Ask about Rush Delivery options when booking Elite Tier.
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Custom Request Section */}
                {customRequestService && (
                     <motion.div
                        id={`pricing-${customRequestService.id}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-16 md:mt-24 pt-12 border-t border-gray-700/50 max-w-3xl mx-auto scroll-mt-20"
                    >
                        {customRequestService.icon ? <customRequestService.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" /> : <FaQuestionCircle className="w-12 h-12 text-purple-400 mx-auto mb-4"/>}
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-glow-purple">{customRequestService.name}</h3>
                         <p className="text-gray-300 mb-8">{customRequestService.longDescription || customRequestService.description}</p>
                         <Link href="#booking-form" legacyBehavior>
                             <motion.a
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                onClick={() => onSelectTier(customRequestService.id, 'Custom')}
                                className={`inline-flex items-center justify-center text-base font-semibold px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:opacity-90 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                            >
                                Submit Your Vision <FaArrowRight className="ml-2"/>
                            </motion.a>
                         </Link>
                     </motion.div>
                )}

                 {/* General Disclaimer/Hook */}
                 <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5, duration: 0.7 }} className="mt-16 text-sm text-yellow-500 italic font-semibold">
                    This launch pricing is strictly temporary. Empires aren't built on discounts – secure your advantage now.
                 </motion.p>
                 <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.6, duration: 0.7 }} className="mt-4 text-xs text-gray-500">
                     Satisfaction Guarantee: "If it doesn’t wow you, we revise until it does. Period."
                 </motion.p>
            </div>
        </section>
    );
}

export default PricingSection;
```
