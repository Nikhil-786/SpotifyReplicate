import "./App.css";
import BrowseGenres from "./components/BrowseGenres";
import FeaturedPlaylist from "./components/FeaturedPlaylist";
import ReleasedSongs from "./components/ReleasedSongs";
function App() {
  return (
    <>
    <div className="MainDiv">
      <BrowseGenres />
      <FeaturedPlaylist />
      <ReleasedSongs />
    </div>
    </>
  );
}

export default App;
