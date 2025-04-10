import { useNavigate } from 'react-router-dom';

function AdventureStory() {
  const navigate = useNavigate();

  const stories = [
    {
      title: 'The Lost Map',
      image: 'YOUR_IMAGE_URL_HERE',
      path: '/story/the-lost-map'
    },
    {
      title: 'Pirate Pete',
      image: 'YOUR_IMAGE_URL_HERE',
      path: '/story/pirate-pete'
    },
    {
      title: 'Jungle Explorer',
      image: 'YOUR_IMAGE_URL_HERE',
      path: '/story/jungle-explorer'
    }
  ];

  return (
    <div className="story-container">
      <h2>Adventure Stories!</h2>
      <p>Grab your backpack! These stories are full of quests, treasure, and excitement.</p>
      <p>Choose an awesome story below to get ready to join an adventure ↓</p>

      <div className="story-grid">
        {stories.map((story, index) => (
          <div
            key={index}
            className="story-box"
            onClick={() => navigate(story.path)}
          >
            <img
              className="story-img-placeholder"
              src={story.image}
              alt={story.title}
            />
            <p className="story-label">{story.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdventureStory;

