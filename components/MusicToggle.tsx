// components/MusicToggle.tsx
import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction
  const audioRef = useRef<HTMLAudioElement>(null);

  // Attempt to play audio only after user interaction or if already playing
  const playAudio = () => {
     if (!audioRef.current) return;
     audioRef.current.play().then(() => {
         setIsPlaying(true);
     }).catch(error => {
         console.warn("Audio autoplay prevented:", error);
         // Need user interaction to start audio
         setIsPlaying(false);
     });
  };

  const togglePlay = () => {
    if (!hasInteracted) setHasInteracted(true); // Mark interaction on first click
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      playAudio(); // Use the playAudio function
    }
  };

   const toggleMute = () => {
     if (!audioRef.current) return;
     const newMutedState = !isMuted;
     audioRef.current.muted = newMutedState;
     setIsMuted(newMutedState);
   }

  useEffect(() => {
    // Set initial volume
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Start at 20% volume
    }
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
       {/* --- AUDIO ELEMENT (Hidden) --- */}
       {/* MAKE SURE this file exists in /public/audio/ */}
       <audio ref={audioRef} src="/audio/your-luxury-track.mp3" loop playsInline />
       {/* --- END AUDIO ELEMENT --- */}

      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        className="p-2.5 bg-gray-800/70 backdrop-blur-sm text-white rounded-full shadow-lg border border-gray-600/50 hover:bg-purple-600/50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        <AnimatePresence mode="wait">
           {isPlaying ? (
                <motion.div key="pause" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}><FaPause size={14} /></motion.div>
            ) : (
                <motion.div key="play" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}><FaPlay size={14} className='ml-0.5'/></motion.div> // Slight offset for play icon alignment
            )}
        </AnimatePresence>
      </motion.button>

      {/* Mute Button - Show only if playing */}
       <AnimatePresence>
        {isPlaying && (
            <motion.button
                key="mute-button"
                initial={{ opacity: 0, scale: 0.8, x: -10 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0.8, x: -10 }} transition={{ delay: 0.1 }}
                onClick={toggleMute}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="p-2.5 bg-gray-800/70 backdrop-blur-sm text-white rounded-full shadow-lg border border-gray-600/50 hover:bg-purple-600/50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label={isMuted ? "Unmute Music" : "Mute Music"}
            >
                {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
            </motion.button>
       )}
       </AnimatePresence>
    </div>
  );
};

export default MusicToggle;
