const movies = require("./movies.json");
import React, {useState, useEffect} from 'react';

// Lets do some movie sorting!
const MoviePage = () =>{

  const [allmovies, setAllMovies] = useState(movies);
  const [movies, setMovies] = useState([]);
  const items_per_page = 3;

  return <div>
    Array Page
    {movies.map(o=>{
      return <div>Movie : ###</div>
    })}
  </div>
}

export default MoviePage;

function sortByMovieTitle(a,b){
}