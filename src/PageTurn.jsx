// src/PageTurn.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./PageTurn.css";

// Image for the book cover
import bookCoverImage from "./assets/book-cover.jpg"; // Make sure to place your image in the 'assets' folder

const PageTurn = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;

  const pages = [
    "Goldilocks and the Three Bears",
    "Page 1: Once upon a time, there were three bears...",
    "Page 2: They lived in a cozy little house in the woods...",
    "Page 3: One day, Goldilocks came to visit...",
    "Page 4: She tried the porridge, the chairs, and the beds...",
    "Page 5: And in the end, she learned the bears' lesson!",
  ];

  const flipPageForward = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages); // Move to the next page
  };

  const flipPageBackward = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    ); // Move to the previous page
  };

  return (
    <div className="book-container">
      <motion.div
        className="book"
        animate={{
          rotateY: currentPage * -180, // Rotate based on the current page
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        {/* Book Cover */}
        <div className="book-cover">
          <img src={bookCoverImage} alt="Book Cover" className="cover-image" />
          <div className="book-title">Goldilocks and the Three Bears</div>
        </div>

        {/* Pages */}
        {pages.map((content, index) => (
          <div
            className={`page ${index === currentPage ? "active" : ""}`}
            key={index}
          >
            <div className="page-front">{content}</div>
            <div className="page-back">
              {index === currentPage + 1 ? pages[index + 1] : ""}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Navigation */}
      <div className="navigation">
        <button className="prev-page" onClick={flipPageBackward}>
          Previous Page
        </button>
        <button className="next-page" onClick={flipPageForward}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PageTurn;
