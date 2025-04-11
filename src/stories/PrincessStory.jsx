import { useNavigate } from 'react-router-dom';

function PrincessStory() {
  const navigate = useNavigate();

  const stories = [
    {
      title: 'Aladdin',
      image: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/images/methode/2019/01/19/a5635224-1ad5-11e9-8ff8-c80f5203e5c9_image_hires_061505.jpg?itok=2qlBJyVI&v=1547849714',
      path: '/story/Aladdin'
    },
    {
      title: 'Beauty and the Beast',
      image: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/7819af4d-404a-47dc-b2cf-ab7f265cecd1?/scale?width=1200&aspectRatio=1.78&format=webp',
      path: '/story/beauty-and-the-beast'
    },
    {
      title: 'The Princess and The Frog',
      image: 'https://images.bauerhosting.com/legacy/empire-tmdb/films/10198/images/wC5xdlg6WceCWUXQzS3pIwTfkEJ.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80',
      path: '/story/the-princess-and-the-frog'
    },
    {
      title: 'The Little Mermaid',
      image: 'https://m.media-amazon.com/images/M/MV5BMTcxNDM3OTMzOV5BMl5BanBnXkFtZTcwODYxMDIyNw@@._V1_.jpg',
      path: '/story/The-Little-Mermaid'
    },
    {
      title: 'Mulan',
      image: 'https://thenerddaily.com/wp-content/uploads/2019/11/Disney-Mulan.jpg?x36838',
      path: '/story/Mulan'
    },
    {
      title: 'Snow White',
      image: 'https://platform.vox.com/wp-content/uploads/sites/2/2025/03/Vox_MCDSNWH_EC013.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100',
      path: '/story/Snow-White'
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

