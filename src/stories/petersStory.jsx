import { useState } from "react";
import AnimatedCharacter from "../components/AnimatedCharacter";
import Peterpan from "../assets/Peterpan.gif";
import "./books.css";

const usePanPages = () => {
  const [trigger, setTrigger] = useState(0);
  const highlight = (text) => (
    <span className="word" onClick={() => setTrigger(t => t + 1)}>{text}</span>
  );

  return [
    <p>One starry night in London, Wendy and her brothers met a flying boy named<span
    className="cursor-pointer text-blue-500 underline"
    onClick={() => setTrigger(prev => prev + 1)}
    >
        &nbsp;{highlight("Peter Pan")}
    </span>.
    <AnimatedCharacter
        triggerKey={trigger}
        imageSrc={Peterpan}
        alt="Peterpan"
    /></p>,
    <p>He whisked them off to {highlight("Neverland")}, a place of pirates, fairies, and adventure.</p>,
    <p>They met the {highlight("Lost Boys")} and soared through the skies with pixie dust and dreams.</p>,
    <p>Captain {highlight("Hook")} and his crew plotted revenge, fearing the tick-tock of the crocodile.</p>,
    <p>A daring battle broke out, and Peter saved his friends with cleverness and courage.</p>,
    <p>In the end, Wendy chose home — but {highlight("Peter Pan")} stayed young, forever chasing the stars.</p>,

    <AnimatedCharacter triggerKey={trigger} imageSrc={Peterpan} />
  ];
};

export default usePanPages;
