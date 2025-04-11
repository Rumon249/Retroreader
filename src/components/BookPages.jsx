// src/components/BookPages.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BookPages.css";

const BookPages = ({ pages }) => {
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
          {/* Left page */}
          <motion.div
            key={`left-${pageIndex}`}
            className="page left"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            {pages[pageIndex]}
          </motion.div>

          {/* Right page */}
          {pageIndex + 1 < pages.length && (
            <motion.div
              key={`right-${pageIndex + 1}`}
              className="page right"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -90 }}
              transition={{ duration: 0.6 }}
            >
              {pages[pageIndex + 1]}
            </motion.div>
          )}
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
