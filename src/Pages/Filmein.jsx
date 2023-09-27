import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const OMDB_API_KEY = '34bbb2f5';

export const Filmein = () => {
  const navigate= useNavigate()
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=godfather`)
      .then((response) => {
        setMovies(response.data.Search || []); 
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const savename= () => {
    
    navigate("/homepage/theatre")
  }

  return (
    <div>
      <Navbar />
      <h1>Filmein</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='mainmoviediv'>
          {movies.map((movie) => (
            <div className='moviediv' key={movie.imdbID}>
              <img onClick={savename} className='poster' src={movie.Poster} alt={movie.Title} />
              <h3>Title: {movie.Title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
