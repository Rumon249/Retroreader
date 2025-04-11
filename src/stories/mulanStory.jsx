// src/stories/goldilocksStory.jsx
import { useState } from "react";
import AnimatedCharacter from "../components/AnimatedCharacter";
import Mulan from "../assets/Mulan.gif";
import "./books.css";

const useMulanPages = () => {
  const [trigger, setTrigger] = useState(0);
  const highlight = (text) => (
    <span className="word" onClick={() => setTrigger(t => t + 1)}>{text}</span>
  );

  return [
    <p>When her father was called to war, {highlight("Mulan")} disguised herself as a man.</p>,
    <p>She trained hard, fought bravely, and earned the respect of her fellow soldiers.</p>,
    <p>With courage and wit, she saved the army from a surprise {highlight("Hun")} attack.</p>,
    <p>In battle, her secret was revealed — but her bravery spoke louder than her disguise.</p>,
    <p>She defeated {highlight("Shan Yu")} and brought honor to her name and her family.</p>,
    <p>At home, she was welcomed not as a soldier — but as a true {highlight("hero")}.</p>,


    <AnimatedCharacter triggerKey={trigger} imageSrc={Mulan} />
  ];
};

export default useMulanPages;
