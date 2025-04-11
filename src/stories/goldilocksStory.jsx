// src/stories/goldilocksStory.jsx
import { useState } from "react";
import AnimatedCharacter from "../components/AnimatedCharacter";
import Goldilocks from "../assets/goldilocks.webp";

export const GoldilocksTextpages = [
  <p>Once upon a time, in a cozy cottage deep in the forest, lived three bears: Papa Bear, Mama Bear, and Baby Bear..</p>,
  <p>One morning, they made some porridge for breakfast, but it was too hot to eat. So they decided to go for a walk while it cooled down.</p>,
  <p>Not far away, a curious little girl named <span
  className="cursor-pointer text-blue-500 underline"
  onClick={() => setTrigger(prev => prev + 1)}
>
  &nbsp;Goldilocks
</span> was wandering through the woods.</p>,
  <p>She came across the bears’ house and knocked on the door. When no one answered, she peeked inside—and then she stepped in!</p>,
  <p>In the kitchen, she saw three bowls of porridge. </p>,
  <p>She tasted Papa Bear’s—too hot! Mama Bear’s—too cold! But Baby Bear’s was just right, so she ate it all up.</p>,
  <p>Next, she saw three chairs.</p>,
  <p>Papa Bear’s was too big. Mama Bear’s was still too big. But Baby Bear’s chair was just right… until it broke under her!</p>,
  <p>Feeling tired, Goldilocks went upstairs and found three beds.</p>,
  <p>Papa Bear’s was too hard, Mama Bear’s was too soft, but Baby Bear’s bed was just right. She climbed in and fell fast asleep. </p>,
  <p>Soon after, the three bears came home.</p>,
  <p>“Someone’s been eating my porridge!” said Papa Bear. “And mine!” said Mama Bear. “Someone ate all of mine!” cried Baby Bear.</p>,
  <p>They looked around. “Someone’s been sitting in my chair!” said Papa Bear. “Mine too!” said Mama Bear. “And mine is broken!” said Baby Bear.</p>,
  <p>Upstairs, they found Goldilocks asleep in Baby Bear’s bed. She woke up, saw the three bears staring at her, and ran out of the house as fast as she could!</p>,
  <p>And from that day on, Goldilocks was a little more careful about whose house she entered. </p>,
  <p>The End.</p>
  
];

const useGoldilocksPages = () => {
  const [trigger, setTrigger] = useState({ count: 0, image: null });
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
