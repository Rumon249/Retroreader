import { useNavigate } from 'react-router-dom';

function PrincessStory() {
  const navigate = useNavigate();

  const stories = [
    {
      title: 'The Rose Garden Ball',
      image: 'YOUR_IMAGE_URL_HERE',
      path: '/story/the-rose-garden-ball'
    },
    {
      title: 'Princess Lila and the Star Crown',
      image: 'YOUR_IMAGE_URL_HERE',
      path: '/story/princess-lila'
    },
    {
      title: 'The Magic Mirror',
      image: 'YOUR_IMAGE_URL_HERE',
      path: '/story/the-magic-mirror'
    }
  ];

  return (
    <div className="story-container">
      <h2>Princess Stories!</h2>
      <p>Get ready to read some fun and fabulous princess stories!</p>
      <p>Choose an enchanted story below to bring your fantasies to life ↓</p>

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

export default PrincessStory;

