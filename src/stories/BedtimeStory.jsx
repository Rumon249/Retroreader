import { useNavigate } from 'react-router-dom';

function BedtimeStory() {
  const navigate = useNavigate();

  const stories = [
    {
      title: 'Goldilocks and the Three Bears',
      image: 'https://review.firstround.com/content/images/2056/firstround/blnsblcpqlmvgr2vvnf1_goldilocks-20--20hires.jpg',
      path: '/story/Goldilocks-and-the-Three-Bears'
    },
    {
      title: 'The Three Little Pigs',
      image: 'https://assets.isu.pub/document-structure/231005000325-16d0f20553a0da0b7c1015b94ae50ffd/v1/bad9c9d042887ace5dc22f910ffa6e26.jpeg',
      path: '/story/The-Three-Little-Pigs'
    },
    {
      title: 'The Tortoise and the Hare',
      image: 'https://i0.wp.com/doodlewash.com/wp-content/uploads/2020/08/Day-5-Tortoise-And-The-Hare-Watercolor-Painting-Illustration.jpg?fit=1024%2C720&ssl=1',
      path: '/story/The-Tortoise-and-the-Hare'
    },
    {
      title: 'The Ants and the Grasshopper',
      image: 'https://mediashower.com/blog/wp-content/uploads/2020/05/ant.png',
      path: '/story/The-Ants-and-the-Grasshopper'
    },
    {
      title: 'The Boy who Cried Wolf',
      image: 'https://fairytales.love/wp-content/uploads/2023/04/the-boy-who-cried-wolf.jpg',
      path: '/story/The-Boy-who-Cried-Wolf'
    },
    {
      title: 'The Ugly Duckling',
      image: 'https://images.penguinrandomhouse.com/cover/9781465491787',
      path: '/story/The-Tortoise-and-the-Hare'
    }



  ];

  return (
    <div className="story-container">
      <h2>Bedtime Stories!</h2>
      <p>Get cozy and drift off with calming bedtime tales.</p>
      <p>Choose a story below to be immersed in a calming tale ↓</p>

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

export default BedtimeStory;



