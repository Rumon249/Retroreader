import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import BedtimeStory from './stories/BedtimeStory'
import AdventureStory from './stories/AdventureStory'
import FairyStory from './stories/FairyStory'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1 className="title">✨ Y2K Reader ✨</h1>

        <nav>
          <Link to="/story/bedtime">🛏 Bedtime</Link> |{' '}
          <Link to="/story/adventure">🗺 Adventure</Link> |{' '}
          <Link to="/story/fairy">🧚 Fairy</Link>
        </nav>

        <Routes>
          <Route path="/" element={<p>Select a story to begin!</p>} />
          <Route path="/story/bedtime" element={<BedtimeStory />} />
          <Route path="/story/adventure" element={<AdventureStory />} />
          <Route path="/story/fairy" element={<FairyStory />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
