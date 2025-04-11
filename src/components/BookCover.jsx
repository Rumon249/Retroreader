// src/components/BookCover.jsx
import React from "react";
import "./BookCover.css";

const BookCover = ({ onOpen }) => {
  return (
    <div className="book-cover" onClick={onOpen}>
      <img src="/book-cover.jpg" alt="Book Cover" className="cover-img" />
    </div>
  );
};

export default BookCover;
