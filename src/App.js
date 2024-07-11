import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/nav_bar/NavBar";
import Banner from "./components/banner/Banner";
import RowPost from "./components/row_post/RowPost";
import {
  originals,
  action,
  comedy,
  horror,
  romance,
  documentaries,
} from "./urls";
function App() {
  const [currentVideo, setCurrentVideo] = useState(null);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost
        url={originals}
        title="Netflix Originals"
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />
      <RowPost
        url={action}
        title="Action"
        isSmall={true}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />
      <RowPost
        url={comedy}
        title="Comedy"
        isSmall={true}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />
      <RowPost
        url={horror}
        title="Horror"
        isSmall={true}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />
      <RowPost
        url={romance}
        title="Romance"
        isSmall={true}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />
      <RowPost
        url={documentaries}
        title="Documentaries"
        isSmall={true}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />
    </div>
  );
}

export default App;
