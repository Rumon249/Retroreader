import StoryPage from '../components/StoryPage';

export default function BedtimeStory() {
  const text = "The stars were shining bright as the little bunny closed its eyes.";
  const handleWordClick = (word) => alert(`Definition for "${word}"`);

  return <StoryPage text={text} onWordClick={handleWordClick} />;
}
