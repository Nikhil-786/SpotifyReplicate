import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router';
import ReleasedSongs from './components/ReleasedSongs.jsx';
import FeaturedPlaylist from './components/FeaturedPlaylist.jsx';
import BrowseGenres from './components/BrowseGenres.jsx';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ReleasedSongs" element={<ReleasedSongs/>}/>
      <Route path="/FeaturedPlaylist" element={<FeaturedPlaylist/>}/>
      <Route path="/BrowseGenres" element={<BrowseGenres/>}/>
    </Routes>
  </BrowserRouter>
)
