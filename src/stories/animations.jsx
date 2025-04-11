// src/stories/InteractiveStory.jsx
import { useState } from "react";
import Goldilocks from '../assets/goldilocks.webp';
import AnimatedCharacter from '../components/AnimatedCharacter';

const InteractiveStory = () => {
  const [trigger, setTrigger] = useState(0);

  return (
    <div className="relative p-6 space-x-1">
      Not far away, a curious little girl named
      <span
        className="cursor-pointer text-blue-500 underline"
        onClick={() => setTrigger(prev => prev + 1)}
      >
        &nbsp;Goldilocks
      </span>
      

      <AnimatedCharacter
        triggerKey={trigger}
        imageSrc={Goldilocks}
        alt="Goldilocks"
      />
    </div>
  );
};

export default InteractiveStory;