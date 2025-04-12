// components/CountdownTimer.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps { targetDate: Date; }
interface TimeLeft { days: number; hours: number; minutes: number; seconds: number; }

const calculateTimeLeft = (targetDate: Date): TimeLeft | null => {
    const difference = +targetDate - +new Date();
    if (difference <= 0) return null;
    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() => calculateTimeLeft(targetDate)); // Calculate initial state directly

  useEffect(() => {
    // Set interval only if timeLeft is not null initially
    if (timeLeft === null) return;

    const timer = setInterval(() => {
        const newTimeLeft = calculateTimeLeft(targetDate);
        setTimeLeft(newTimeLeft);
        // Clear interval if timer runs out
        if (newTimeLeft === null) {
            clearInterval(timer);
        }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate, timeLeft]); // Re-run effect if targetDate changes or timeLeft becomes null

  if (!timeLeft) {
    return ( <div className="text-center p-4 bg-red-900/30 border border-red-500/50 rounded-lg shadow-md"> <p className="text-xl font-bold text-red-400">Launch Offer Ended!</p> </div> );
  }

  const timerComponents = [
      { value: timeLeft.days, label: 'Days' }, { value: timeLeft.hours, label: 'Hours' },
      { value: timeLeft.minutes, label: 'Minutes' }, { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
     <div className="text-center p-4 bg-gray-800/50 border border-yellow-500/50 rounded-lg shadow-lg inline-block">
        <p className="text-sm font-semibold text-yellow-400 mb-3 uppercase tracking-wider">Launch Offer Ends In:</p>
        <div className="flex justify-center space-x-3 md:space-x-5">
            {timerComponents.map((comp, i) => (
                 <motion.div
                    key={comp.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                >
                    <span className="text-3xl md:text-4xl font-bold text-white block w-[60px] md:w-[70px]">
                        {comp.value.toString().padStart(2, '0')}
                    </span>
                    <span className="text-xs text-gray-400 uppercase">{comp.label}</span>
                 </motion.div>
             ))}
        </div>
    </div>
  );
};
export default CountdownTimer;
