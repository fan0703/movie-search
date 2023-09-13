import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  //api key
  const apiKey = '94fe1d81'
  //state for this application
  const [movie,setMovie] = useState(null)
  //Function to get the movies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {const response = await fetch( //fetch is used to set url
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();//data is what we got back 
    //set the Movie state to the movie
    setMovie(data);
  }catch(e){
    console.error(e)
  }
}
  useEffect(() => {
    getMovie("It");
  }, [])
  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
     
    </div>
  );
}

export default App;
