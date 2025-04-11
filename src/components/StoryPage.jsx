// src/components/StoryPage.jsx
import { useParams } from 'react-router-dom';
import GoldilocksStory from '../stories/goldilocksStory';
// import EReader from './EReader'; // Reserved for future use

const storyMap = {
  'Goldilocks-and-the-Three-Bears': GoldilocksStory,
  // Add additional stories here as needed
};

const StoryPage = () => {
  const { storyId } = useParams();
  const title = storyId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const StoryComponent = storyMap[storyId];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      
      {StoryComponent ? (
        <StoryComponent />
      ) : (
        <p className="text-lg">This story is still being written…</p>
      )}

      {/* Reserved for future: */}
      {/* <EReader storyId={storyId} /> */}
    </div>
  );
};

export default StoryPage;
