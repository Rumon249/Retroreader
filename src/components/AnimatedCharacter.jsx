// src/components/AnimatedCharacter.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedCharacter = ({ triggerKey, imageSrc, alt = "Character", duration = 3000, className = "" }) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (triggerKey > 0) {
      setShowImage(true);
      const timer = setTimeout(() => {
        setShowImage(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [triggerKey, duration]);

  return (
    <AnimatePresence>
      {showImage && (
        <motion.img
          key={triggerKey}
          src={imageSrc}
          alt={alt}
          className={`absolute top-10 left-1/2 transform -translate-x-1/2 w-40 ${className}`}
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedCharacter;
