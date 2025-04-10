import { useState } from 'react';
import StoryPage from './components/StoryPage';
import './App.css'; // Optional: for styling

function App() {
  const [clickedWord, setClickedWord] = useState(null);

  const storyText = "Once upon a time in a colorful world, children loved reading magical stories filled with wonder.";

  const handleWordClick = (word) => {
    setClickedWord(word);
    alert(`Definition for "${word}" will go here!`);
    // Later you can replace alert with a modal or fetch from an API
  };

  return (
    <div className="app-container">
      <h1 className="title">✨ Y2K Reader ✨</h1>
      <StoryPage text={storyText} onWordClick={handleWordClick} />
    </div>
  );
}

export default App;
