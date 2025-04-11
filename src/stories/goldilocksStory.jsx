// src/stories/goldilocksStory.jsx
import { useState } from "react";
import AnimatedCharacter from "../components/AnimatedCharacter";
import Goldilocks from "../assets/goldilocks.webp";
import "./books.css";

const useGoldilocksPages = () => {
  const [trigger, setTrigger] = useState(0);
  const highlight = (text) => (
    <span className="word" onClick={() => setTrigger(t => t + 1)}>{text}</span>
  );

  return [
    <p>Once upon a time, in a cozy cottage deep in the forest, lived three bears...</p>,
    <p>{highlight("Goldilocks")} was wandering in the woods when she found the cottage.</p>,
    <p>She tried the porridge, chairs, and beds — some too hot, too big, or too soft...</p>,
    <p>Eventually, {highlight("Goldilocks")} fell asleep in Baby Bear's bed.</p>,
    <p>The bears came home and were surprised to find someone there!</p>,
    <p>She woke up, ran out, and learned her lesson.</p>,
    <AnimatedCharacter triggerKey={trigger} imageSrc={Goldilocks} />
  ];
};

export default useGoldilocksPages;
