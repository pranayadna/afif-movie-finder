import { useEffect, useState } from 'react';
import { getMovieList, searchQuery } from './api';
import './App.css';

const baseImgUrl = process.env.REACT_APP_BASEIMGURL

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then(data => setPopularMovies(data))
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            src={`${baseImgUrl}/${movie.poster_path}`}
            alt={movie.title}
            className="Movie-image" />
          <div className="Movie-date">Release Date: {movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchQuery(q)
      setPopularMovies(query.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>AFIF MOVIE FINDER</h1>
        <input
          type="text"
          placeholder='Find your favourite movies'
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
