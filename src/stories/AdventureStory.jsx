import { useNavigate } from 'react-router-dom';

function AdventureStory() {
  const navigate = useNavigate();

  const stories = [
    {
      title: 'Peter Pan',
      image: 'https://variety.com/wp-content/uploads/2016/04/peter-pan.jpg',
      path: '/story/the-lost-map'
    },
    {
      title: 'A Christmas Carol',
      image: 'https://cdn.prod.website-files.com/63c03e257f43688614b2e63f/63fe527dae944cddd900a2a1_ACC%20-%20Show%20Graphic.opt.webp',
      path: '/story/pirate-pete'
    },
    {
      title: 'Green Eggs and Ham',
      image: 'https://variety.com/wp-content/uploads/2015/03/green-eggs-and-ham-netflix.jpg?w=980&h=551&crop=1',
      path: '/story/jungle-explorer'
    },
    {
      title: 'The Rainbow Fish',
      image: 'https://northsouth.com/wp-content/uploads/2022/06/Der-Regenbogenfisch-1200x560-2-1200x560.jpg',
      path: '/story/the-lost-map'
    },
    {
      title: 'The Gingerbread Man',
      image: 'https://i.ytimg.com/vi/YoQyyB5xvLk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB97atfCwHzW63_he1H02HbKrxWEw',
      path: '/story/pirate-pete'
    },
    {
      title: 'Thumbelina',
      image: 'https://www.all-about-fairies.com/images/Thumbelina_1.jpg',
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

