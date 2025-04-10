import StoryPage from '../components/StoryPage'

export default function FairyStory() {
  const text = "Once upon a time, in a magical forest...";
  const handleWordClick = (word) => alert(`Definition for "${word}"`);

  return <StoryPage text={text} onWordClick={handleWordClick} />;
}
