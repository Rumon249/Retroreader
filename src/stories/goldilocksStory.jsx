// src/stories/GoldilocksStory.jsx
import { useState } from "react";
import AnimatedCharacter from "../components/AnimatedCharacter";
import GoldilocksImg from "../assets/goldilocks.webp";
import "../components/Story.css";

const GoldilocksStory = () => {
  const [trigger, setTrigger] = useState(0);

  const handleClick = () => {
    setTrigger(prev => prev + 1);
  };

  const highlight = (text) => (
    <span className="word" onClick={handleClick}>{text}</span>
  );

  return (
    <div className="story-page relative">
      <p>
        Once upon a time, in a cozy cottage deep in the forest, lived three bears:
        Papa Bear, Mama Bear, and Baby Bear. (1)
      </p>
      <p>
        One morning, they made some porridge for breakfast, but it was too hot to eat.
        So they decided to go for a walk while it cooled down. (2)
      </p>
      <p>
        Not far away, a curious little girl named {highlight("Goldilocks")} was wandering through the woods. (3)
        She came across the bears’ house and knocked on the door. When no one answered,
        she peeked inside—and then she stepped in! (4)
      </p>
      <p>
        In the kitchen, she saw three bowls of porridge. (5) She tasted Papa Bear’s—too hot!
        Mama Bear’s—too cold! But Baby Bear’s was just right, so she ate it all up. (6)
      </p>
      <p>
        Next, she saw three chairs. (7) Papa Bear’s was too big. Mama Bear’s was still too big.
        But Baby Bear’s chair was just right… until it broke under her! (8)
      </p>
      <p>
        Feeling tired, {highlight("Goldilocks")} went upstairs and found three beds. (9)
        Papa Bear’s was too hard, Mama Bear’s was too soft, but Baby Bear’s bed was just right.
        She climbed in and fell fast asleep. (10)
      </p>
      <p>
        Soon after, the three bears came home. (11) “Someone’s been eating my porridge!” said Papa Bear.
        “And mine!” said Mama Bear. “Someone ate all of mine!” cried Baby Bear. (12)
      </p>
      <p>
        They looked around. “Someone’s been sitting in my chair!” said Papa Bear.
        “Mine too!” said Mama Bear. “And mine is broken!” said Baby Bear. (13)
      </p>
      <p>
        Upstairs, they found {highlight("Goldilocks")} asleep in Baby Bear’s bed. She woke up,
        saw the three bears staring at her, and ran out of the house as fast as she could! (14)
      </p>
      <p>
        And from that day on, {highlight("Goldilocks")} was a little more careful
        about whose house she entered. (15)
      </p>
      <p>The End. (16)</p>

      <AnimatedCharacter
        triggerKey={trigger}
        imageSrc={GoldilocksImg}
        alt="Goldilocks"
      />
    </div>
  );
};

export default GoldilocksStory;
