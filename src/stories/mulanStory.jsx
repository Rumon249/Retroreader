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
  const [triggers, setTriggers] = useState({
    mulan: 0,
    trained: 0,
    attack: 0,
    disguise: 0,
    honor: 0,
    hero: 0,
  });

  const highlight = (key, label, gif) => (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        className="word cursor-pointer text-blue-500 underline font-semibold"
        onClick={() => setTriggers(prev => ({ ...prev, [key]: prev[key] + 1 }))}
      >
        {label}
      </span>
      <AnimatedCharacter
        triggerKey={triggers[key]}
        imageSrc={gif}
        alt={label}
        className="absolute left-full top-1 w-24 ml-4"
      />
    </span>
  );

  return [
    <p>When her father was called to war, {highlight("mulan", "Mulan", Mulan)} disguised herself as a man.</p>,
    <p>She {highlight("trained", "trained", trained)} hard, fought bravely, and earned the respect of her fellow soldiers.</p>,
    <p>With courage and wit, she saved the army from a surprise Hun {highlight("attack", "attack", attack)}.</p>,
    <p>In battle, her secret was revealed — but her bravery spoke louder than her {highlight("disguise", "disguise", disguise)}.</p>,
    <p>She defeated Shan Yu and brought {highlight("honor", "honor", honor)} to her name and her family.</p>,
    <p>At home, she was welcomed not as a soldier — but as a true {highlight("hero", "hero", hero)}.</p>,
  ];
};

export default useMulanPages;
