import "./App.css";
import BrowseGenres from "./components/BrowseGenres";
import FeaturedPlaylist from "./components/FeaturedPlaylist";
import ReleasedSongs from "./components/ReleasedSongs";
import { Link } from "react-router";

function App() {
  return (
    <>
      <div className="MainDiv">
        <Link to="./BrowseGenres">
          <div className="Heading">Generes</div>
        </Link>
        <Link to="./FeaturedPlaylist">
          <div className="Heading">FeaturedPlaylist</div>
        </Link>
        <Link to="./ReleasedSongs">
          <div className="Heading">ReleasedSongs</div>
        </Link>
      </div>
    </>
  );
}

export default App;
