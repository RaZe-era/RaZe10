```typescript
// components/Preloader.tsx
import { motion } from 'framer-motion';

const Preloader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 } }, // Add delay to exit
  };

  const logoVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.2, } },
     exit: { scale: 1.2, opacity: 0, transition: { duration: 0.4 } } // Different exit animation
  };

  const barVariants = {
     hidden: { x: '-101%' }, // Start fully hidden
     visible: { x: '0%', transition: { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.1 }}, // Custom easing
     exit: { opacity: 0 }
  }

  return (
    <motion.div
      key="preloader" // Add key for AnimatePresence
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900"
    >
      <motion.div variants={logoVariants}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-glow-purple">RaZe</h1>
      </motion.div>
       <div className="absolute bottom-10 left-0 right-0 h-1 w-1/3 max-w-xs mx-auto bg-purple-800/50 rounded-full overflow-hidden">
         <motion.div variants={barVariants} className="h-full bg-gradient-to-r from-purple-500 to-indigo-500" />
       </div>
    </motion.div>
  );
};

export default Preloader;
```
