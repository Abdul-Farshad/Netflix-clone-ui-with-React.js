import React, {useEffect, useState} from "react";
import './Banner.css'
import axios from '../../axios';
import { API_KEY, imageUrl } from "../../constants/constants";

function Banner() {
  const [movie, setMovie] = useState(null)
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      setMovie(response.data.results[randomIndex])
    })
    .catch((err) => {
      console.log("there was an error fetching the movie data!", err)
    }) 
  },[]) 

  const backgroundImage = movie ? `url(${imageUrl + movie.backdrop_path})` : 'none';
  return (
    <div
    style={{backgroundImage}}
     className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title: ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
        <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
