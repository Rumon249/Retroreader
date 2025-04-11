import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BookPages.css";

const pages = [
  "Once upon a time, in a cozy little cottage...",
  "Goldilocks went for a walk in the forest...",
  "She found a house with three bowls of porridge...",
  "One was too hot, one was too cold, one was just right.",
  "She sat in the chairs and lay in the beds..."
];

const BookPages = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const goNext = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const goPrev = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  return (
    <div className="book-layout">
      <div className="book">
        <AnimatePresence mode="wait" initial={false}>
          {/* Left page (static, doesn't move) */}
          <motion.div
            key={`left-${pageIndex}`}
            className="page left"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            <p>{pages[pageIndex]}</p>
          </motion.div>

          {/* Right page (flip effect, moves from right to left) */}
          <motion.div
            key={`right-${pageIndex + 1}`}
            className="page right"
            initial={{ rotateY: 90 }} // Start from 90 degrees (facing backwards)
            animate={{ rotateY: 0 }}  // Rotate to 0 degrees (facing front)
            exit={{ rotateY: -90 }}   // Rotate to -90 degrees (facing backwards)
            transition={{ duration: 0.6 }}
          >
            <p>{pages[pageIndex + 1]}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="nav-buttons">
        <button onClick={goPrev} disabled={pageIndex === 0}>
          ⬅️
        </button>
        <button onClick={goNext} disabled={pageIndex + 1 >= pages.length}>
          ➡️
        </button>
      </div>
    </div>
  );
};

export default BookPages;
