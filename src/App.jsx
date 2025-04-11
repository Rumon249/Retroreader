import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BedtimeStory from './stories/BedtimeStory';
import AdventureStory from './stories/AdventureStory';
import FairyStory from './stories/PrincessStory';
import InteractiveStory from './stories/animations';
import PopUpads from './components/PopUpads';
import StoryPage from './components/StoryPage';
import StarTrail from './components/StarTrail'; // ✅ add this import
import './App.css';

function App() {
  return (
    <Router>
      {/* ✅ Star Trail floating in the background */}
      <StarTrail />

      <div className="app-container">
        <h1 className="title">✨ Retro Reader ✨</h1>

        <nav>
          <Link to="/story/bedtime">🛏 Bedtime</Link> |{' '}
          <Link to="/story/adventure">🗺 Adventure</Link> |{' '}
          <Link to="/story/fairy">👑 Princess</Link> |{' '}
          <Link to="/story/animations">🎬 Interactive Story</Link>
        </nav>

        {/* LEFT SIDE ADS */}
        <div className="popup-stack left">
          <PopUpads gifUrl="https://shortpixel.com/blog/wp-content/uploads/2023/12/nyan-cat.gif" width={200} height={200} />
          <PopUpads gifUrl="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3p2ODF1eHdlbGJxa2dmYzV0eDYyeHoweGRzZHo3aGVtbnR1dHIzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8a3DrjC3CHuso/giphy.gif" width={300} height={240} />
          <PopUpads gifUrl="https://media1.tenor.com/m/CQGvY8aF_akAAAAd/download-button.gif" width={400} height={100} />
          <PopUpads gifUrl="https://media1.tenor.com/m/f-xNEbmbDRYAAAAC/pokemon-mewtwo.gif" width={280} height={160} />
        </div>

        {/* RIGHT SIDE ADS */}
        <div className="popup-stack right">
          <PopUpads gifUrl="https://img1.picmix.com/output/pic/normal/3/4/5/8/11178543_d62d5.gif" width={120} height={160} />
          <PopUpads gifUrl="https://i.kym-cdn.com/photos/images/original/001/866/171/14d.gifv" width={200} height={200} />
          <PopUpads gifUrl="https://i.gifer.com/7WDh.gif" width={160} height={200} />
        </div>

        <Routes>
          <Route path="/" element={<p>Select a story to begin!</p>} />
          <Route path="/story/bedtime" element={<BedtimeStory />} />
          <Route path="/story/adventure" element={<AdventureStory />} />
          <Route path="/story/fairy" element={<FairyStory />} />
          <Route path="/story/animations" element={<InteractiveStory />} />
          <Route path="/story/:storyId" element={<StoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


