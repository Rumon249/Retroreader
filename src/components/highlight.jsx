// src/components/Highlight.jsx
import React from "react";

const Highlight = ({ text, onClick }) => (
  <span
    className={` cursor-pointer text-blue-500 underline ${className}`}
    onClick={onClick}
  >
    {text}
  </span>
);

export default Highlight;
