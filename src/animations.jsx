import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rainbowImg from './assets/rainbow.png.webp';

const InteractiveStory = () => {
  const [activeWord, setActiveWord] = useState(null);

  return (
    <div className="relative p-6 space-x-1">
      <span
        className="cursor-pointer text-red-500 underline"
        onClick={() => setActiveWord("dragon")}
      >
        dragon
      </span>
      flew over the
      <span
        className="cursor-pointer text-blue-500 underline"
        onClick={() => setActiveWord("rainbow")}
      >
        rainbow
      </span>
      .

      <AnimatePresence>
        {activeWord === "rainbow" && (
          <motion.img
            key="rainbow"
            src={rainbowImg}
            alt="Rainbow"
            className="absolute top-20 left-1/2 w-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

<p> uwefhoi3fj</p>
export default InteractiveStory;
