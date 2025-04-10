import { useParams } from 'react-router-dom';

const StoryPage = () => {
  const { storyId } = useParams();

  // Format story name from URL slug
  const title = storyId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg">Your interactive e-reader will go here!</p>

      {/* Example: <EReader storyId={storyId} /> */}
    </div>
  );
};

export default StoryPage;
