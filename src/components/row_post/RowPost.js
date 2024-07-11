import React, { useEffect, useState } from "react";
import { imageUrl, API_KEY } from "../../constants/constants";
import Youtube from "react-youtube";
import axios from "../../axios";
import "./RowPost.css";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
        console.log(err.message);
      });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovieClick = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          const video = response.data.results[0];
          setUrlId(video);
          setShowVideo(true);
          props.setCurrentVideo({ key: video.key, row: props.title });
        } else {
          console.log("Array empty!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCloseBtn = () => {
    setShowVideo(false);
    setUrlId("");
    props.setCurrentVideo(null);
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, index) => {
          return (
            obj.backdrop_path && (
              <div className="poster-container" key={index}>
                <img
                  key={index}
                  onClick={() => handleMovieClick(obj.id)}
                  className={props.isSmall ? "smallPoster" : "poster"}
                  src={`${imageUrl + obj.backdrop_path}`}
                  alt="Poster"
                />
                <p
                  className="movie_name"
                  onClick={() => handleMovieClick(obj.id)}
                >
                  {obj.name || obj.title}
                </p>
              </div>
            )
          );
        })}
      </div>
      {urlId &&
        showVideo &&
        props.currentVideo &&
        props.currentVideo.key === urlId.key &&
        props.currentVideo.row === props.title && (
          <div className="vid_container">
            <button onClick={handleCloseBtn} className="vid_close_btn">
              Close
            </button>
            <Youtube videoId={urlId.key} opts={opts} />
          </div>
        )}
    </div>
  );
}

export default RowPost;
