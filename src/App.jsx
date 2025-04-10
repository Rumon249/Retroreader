import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Goldilocks from './stories/BedtimeStory';
import AdventureStory from './stories/AdventureStory';
import FairyStory from './stories/PrincessStory';
import InteractiveStory from './stories/animations';
import StoryPage from './components/StoryPage'; // <-- NEW
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1 className="title">✨ Retro Reader ✨</h1>

        <nav>
          <Link to="/story/bedtime">🛏 Bedtime</Link> |{' '}
          <Link to="/story/adventure">🗺 Adventure</Link> |{' '}
          <Link to="/story/fairy">🧚 Princess</Link> |{' '}
          <Link to="/story/animations">✨ Interactive Story</Link>
        </nav>

        <Routes>
          <Route path="/" element={<p>Select a story to begin!</p>} />
          <Route path="/story/bedtime" element={<Goldilocks />} />
          <Route path="/story/adventure" element={<AdventureStory />} />
          <Route path="/story/fairy" element={<FairyStory />} />
          <Route path="/story/animations" element={<InteractiveStory />} />

          {/* 🔥 NEW dynamic route */}
          <Route path="/story/:storyId" element={<StoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
