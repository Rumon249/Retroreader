import { useState } from "react";
import AnimatedCharacter from "../components/AnimatedCharacter";
import Peterpan from "../assets/Peterpan.gif";
import battle from "../assets/battle.gif";
import neverland from "../assets/neverland.png";
import Hook from "../assets/cap hook.gif";
import "./books.css";

const usePanPages = () => {
  const [showPeter, setShowPeter] = useState(false);
  const [showNeverland, setShowNeverland] = useState(false);
  const [showHook, setShowHook] = useState(false);
  const [showBattle, setShowBattle] = useState(false);

  const highlight = (text, onClick) => (
    <span className="word" onClick={onClick}>{text}</span>
  );

  return [
    <p>
      One starry night in London, Wendy and her brothers met a flying boy named{" "}
      {highlight("Peter Pan", () => setShowPeter(true))}.
      {showPeter && (
        <AnimatedCharacter
          imageSrc={Peterpan}
          alt="Peter Pan"
        />
      )}
    </p>,

    <p>
      He whisked them off to{" "}
      {highlight("Neverland", () => setShowNeverland(true))}, a place of pirates,
      fairies, and adventure.
      {showNeverland && (
        <AnimatedCharacter
          imageSrc={neverland}
          alt="Neverland"
          className="smaller-animation"
        />
      )}
    </p>,

    <p>
      They met the {highlight("Lost Boys")} and soared through the skies with pixie
      dust and dreams.
    </p>,

    <p>
      Captain {highlight("Hook", () => setShowHook(true))} and his crew plotted revenge,
      fearing the tick-tock of the crocodile.
      {showHook && (
        <AnimatedCharacter
          imageSrc={Hook}
          alt="Captain Hook"
        />
      )}
    </p>,

    <p>
      A daring {highlight("battle", () => setShowBattle(true))} broke out, and Peter saved
      his friends with cleverness and courage.
      {showBattle && (
        <AnimatedCharacter
          imageSrc={battle}
          alt="Battle"
          className="smaller-animation"
        />
      )}
    </p>,

    <p>
      In the end, Wendy chose home — but Peter Pan stayed young, forever chasing
      the stars.
    </p>
  ];
};

export default usePanPages;



