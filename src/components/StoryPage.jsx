// src/components/StoryPage.jsx
import { useParams } from "react-router-dom";
import BookPages from "./BookPages";

// Import story hooks
import useGoldilocksPages from "../stories/goldilocksStory";
import usePanPages from "../stories/petersStory"
import useMulanPages from "../stories/mulanStory"

const { storyId } = useParams();
const normalizedId = storyId?.toLowerCase();

const storyMap = {
  "goldilocks-and-the-three-bears": useGoldilocksPages,
  "peter-pan": usePanPages,
  "mulan": useMulanPages,
};

const usePages = storyMap[normalizedId];

if (!usePages) {
  return <p className="text-center text-lg">Sorry, this story isn't available yet.</p>;
}


const StoryPage = () => {
  const { storyId } = useParams();
  const usePages = storyMap[storyId];
  const storyPages = usePages ? usePages() : [];
  const title = storyId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
      {storyPages.length > 0 ? (
        <BookPages pages={storyPages} />
      ) : (
        <p className="text-center text-lg">This story is still being written…</p>
      )}
    </div>
  );
};

export default StoryPage;
