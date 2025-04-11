// src/stories/goldilocksStory.jsx
import { useState } from "react";
import AnimatedCharacter from "../components/AnimatedCharacter";

// Import image assets
import GoldilocksImg from "../assets/goldi_walking.png";
import CottageImg from "../assets/no_background_cottage.png";
import ForestImg from "../assets/forest.png";
import PapaBearImg from "../assets/pap.png";
import MamaBearImg from "../assets/mam.png";
import BabyBearImg from "../assets/bebe.png";
import PorridgeImg from "../assets/hot porridge.png";

// Map keywords to image sources
const imageMap = {
  Goldilocks: GoldilocksImg,
  cottage: CottageImg,
  forest: ForestImg,
  "Papa Bear": PapaBearImg,
  "Mama Bear": MamaBearImg,
  "Baby Bear": BabyBearImg,
  porridge: PorridgeImg,
};

const useGoldilocksPages = () => {
  const [popupImage, setPopupImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Show image with fade-in
  const handleImageClick = (src) => {
    setPopupImage(src);
    setIsVisible(true);
  
    // Auto-hide after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setPopupImage(null), 300); // fade-out delay
    }, 1000);
  };
  

  // Hide image with fade-out
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setPopupImage(null), 300); // Delay for fade-out
  };

  // Highlight keywords and make them clickable
  const highlightKeywords = (text) => {
    const words = Object.keys(imageMap);
    const regex = new RegExp(`\\b(${words.join("|")})\\b`, "gi");

    const parts = text.split(regex);

    return parts.map((part, i) => {
      const key = Object.keys(imageMap).find(
        (k) => k.toLowerCase() === part.toLowerCase()
      );

      if (key) {
        return (
          <span
            key={i}
            className="cursor-pointer text-blue-500 underline"
            onClick={() => handleImageClick(imageMap[key])}
          >
            {part}
          </span>
        );
      } else {
        return <span key={i}>{part}</span>;
      }
    });
  };

  // Image popup modal
  const imagePopup = popupImage && (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <img
        src={popupImage}
        alt="popup"
        style={{
        width: "100px",
        height: "100px",
        objectFit: "contain",
      }}
    />
    </div>
  );

  return [
    <>
      {imagePopup}
      <div className="relative">
        <p>
          {highlightKeywords(
            "Once upon a time, in a cozy cottage deep in the forest, lived three bears: Papa Bear, Mama Bear, and Baby Bear..."
          )}
        </p>
        <AnimatedCharacter imageSrc={CottageImg} alt="cottage" />
      </div>
    </>,
    <p>
      {highlightKeywords(
        "One morning, they made some porridge for breakfast, but it was too hot to eat. So they decided to go for a walk while it cooled down."
      )}
    </p>,
    <>
      {imagePopup}
      <div className="relative">
        <p>
          {highlightKeywords(
            "Not far away, a curious little girl named Goldilocks was wandering through the woods."
          )}
        </p>
        <AnimatedCharacter imageSrc={GoldilocksImg} alt="Goldilocks" />
      </div>
    </>,
    <p>
      {highlightKeywords(
        "She came across the bears’ house and knocked on the door. When no one answered, she peeked inside—and then she stepped in!"
      )}
    </p>,
    <p>{highlightKeywords("In the kitchen, she saw three bowls of porridge.")}</p>,
    <p>
      {highlightKeywords(
        "She tasted Papa Bear’s—too hot! Mama Bear’s—too cold! But Baby Bear’s was just right, so she ate it all up."
      )}
    </p>,
    <p>{highlightKeywords("Next, she saw three chairs.")}</p>,
    <p>
      {highlightKeywords(
        "Papa Bear’s was too big. Mama Bear’s was still too big. But Baby Bear’s chair was just right… until it broke under her!"
      )}
    </p>,
    <p>
      {highlightKeywords(
        "Feeling tired, Goldilocks went upstairs and found three beds."
      )}
    </p>,
    <p>
      {highlightKeywords(
        "Papa Bear’s was too hard, Mama Bear’s was too soft, but Baby Bear’s bed was just right. She climbed in and fell fast asleep."
      )}
    </p>,
    <p>{highlightKeywords("Soon after, the three bears came home.")}</p>,
    <p>
      {highlightKeywords(
        "“Someone’s been eating my porridge!” said Papa Bear. “And mine!” said Mama Bear. “Someone ate all of mine!” cried Baby Bear."
      )}
    </p>,
    <p>
      {highlightKeywords(
        "They looked around. “Someone’s been sitting in my chair!” said Papa Bear. “Mine too!” said Mama Bear. “And mine is broken!” said Baby Bear."
      )}
    </p>,
    <p>
      {highlightKeywords(
        "Upstairs, they found Goldilocks asleep in Baby Bear’s bed. She woke up, saw the three bears staring at her, and ran out of the house as fast as she could!"
      )}
    </p>,
    <p>
      {highlightKeywords(
        "And from that day on, Goldilocks was a little more careful about whose house she entered."
      )}
    </p>,
    <p>The End.</p>,
  ];
};

export default useGoldilocksPages;
