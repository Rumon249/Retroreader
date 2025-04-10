import './Story.css'; // Optional: for custom styling

export default function StoryPage({ text, onWordClick }) {
  return (
    <div className="story-page">
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className="word"
          onClick={() => onWordClick(word.replace(/[.,]/g, ''))}
        >
          {word + ' '}
        </span>
      ))}
    </div>
  );
}
