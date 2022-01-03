import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import { fetchApi } from './api/main';

function App() {

  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    async function fetchAllMovies() {
      const _trendingMovies = await fetchApi('movie', 'trending/movie/day');
      setTrendingMovies(_trendingMovies);
    };
    fetchAllMovies();
  }, []);

  return (
    <div className="main">
      <Navbar />
      <Showcase trendingMovies={trendingMovies} />
    </div>
  );
}

export default App;
