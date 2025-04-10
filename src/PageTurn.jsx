// src/PageTurn.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./PageTurn.css";

const PageTurn = () => {
  const [turned, setTurned] = useState(false);

  return (
    <div className="book-container">
      <motion.div
        className="page"
        animate={{ rotateY: turned ? 180 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onClick={() => setTurned(!turned)}
      >
        <div className="page-front">Page Front</div>
        <div className="page-back">Page Back</div>
      </motion.div>
    </div>
  );
};

export default PageTurn;
