import { useState } from "react";
import AnimatedCharacter from "../components/AnimatedCharacter";
import Mulan from "../assets/Mulan.gif";
import trained from "../assets/training.gif";
import attack from "../assets/attack.gif";
import disguise from "../assets/disguise.gif";
import honor from "../assets/honor.gif";
import hero from "../assets/hero.gif";
import "./books.css";

const useMulanPages = () => {
    const [showMulan, setShowMulan] = useState(false);
    const [showTrained, setShowTrained] = useState(false);
    const [showAttack, setShowAttack] = useState(false);
    const [showDisguise, setShowDisguise] = useState(false);
    const [showHonor, setShowHonor] = useState(false);
    const [showHero, setShowHero] = useState(false);
  
    const highlight = (text, onClick) => (
      <span className="word" onClick={onClick}>{text}</span>
    );
  return [
    <p>When her father was called to war, {" "}
    {highlight("Mulan", () => setShowMulan(true))}, disguised herself as a man.
    {showMulan && (
        <AnimatedCharacter
            imageSrc={Mulan}
            alt = "Mulan"
            className = "smaller-animation"
        />
    )}
    </p>,
    <p>She {" "}
    {highlight("trained", () => setShowTrained(true))} hard, fought bravely, and earned the respect of her fellow soldiers.
    {showTrained && (
        <AnimatedCharacter
            imageSrc={trained}
            alt = "trained"
            className = "smaller-animation"
        />
    )}
    </p>,
    <p>With courage and wit, she saved the army from a surprise Hun {" "} 
    {highlight("attack", () => setShowAttack(true))}
    .
    {showAttack && (
        <AnimatedCharacter
            imageSrc={attack}
            alt = "attack"
            className = "smaller-animation"
        />
    )}
    </p>,
    <p>In battle, her secret was revealed — but her bravery spoke louder than her {" "}
    {highlight("disguise", () => setShowDisguise(true))}
    .
    {showDisguise && (
        <AnimatedCharacter
            imageSrc={disguise}
            alt = "disguise"
            className = "smaller-animation"
        />
    )}
    </p>,
    <p>She defeated Shan Yu and brought {" "}
    {highlight("honor", () => setShowHonor(true))} to her name and her family.
    {showHonor && (
        <AnimatedCharacter
            imageSrc={honor}
            alt = "honor"
            className = "smaller-animation"
        />
    )}
    </p>,
    <p>At home, she was welcomed not as a soldier — but as a true {" "}{highlight("hero", () => setShowHero(true))}.
    {showHero && (
        <AnimatedCharacter
            imageSrc={hero}
            alt = "hero"
            className = "smaller-animation"
        />
    )}
    </p>,
  ];
};

export default useMulanPages;
