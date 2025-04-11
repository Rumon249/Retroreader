import { useState } from "react";
import BookCover from "./components/BookCover";
import BookPages from "./components/BookPages";

function App() {
  const [bookOpen, setBookOpen] = useState(false);

  const handleOpenBook = () => {
    setBookOpen(true);
  };

  const showCover = !bookOpen;

  return (
    <div className="app-container">
      {showCover ? (
        <BookCover onOpen={handleOpenBook} />
      ) : (
        <BookPages />
      )}
    </div>
  );
}


export default App;
