import StoryPage from '../components/StoryPage'

export default function AdventureStory() {
  const text = "This is an exciting adventure story. Stay tuned for more!";
  const handleWordClick = (word) => alert(`Definition for "${word}"`);

  return <StoryPage text={text} onWordClick={handleWordClick} />;
}
