import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Goldilocks from '../assets/goldilocks.webp';

const InteractiveStory = () => {
  const [showImage, setShowImage] = useState(false);
  const [trigger, setTrigger] = useState(0); // <- this is the key

  useEffect(() => {
    if (trigger > 0) {
      setShowImage(true);
      const timer = setTimeout(() => {
        setShowImage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <div className="relative p-6 space-x-1">
    <div className="story-container">
      Not far away, a curious little girl named
      <span
        className="cursor-pointer text-blue-500 underline"
        onClick={() => setTrigger(prev => prev + 1)}
      >
      &nbsp;Goldilocks
      </span>
      .

      <AnimatePresence>
        {showImage && (
          <motion.img
            key={trigger} // key ensures it resets on each trigger
            src={Goldilocks}
            alt="Goldilocks"
            className="absolute top-10 right- transform -translate-x-1/2 w-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 0.2, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

export default InteractiveStory;


