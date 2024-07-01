import './App.css';
import React from 'react';
import NavBar from './components/nav_bar/NavBar';
import Banner from './components/banner/Banner';
import RowPost from './components/row_post/RowPost'
import {originals, action, comedy, horror, romance, documentaries} from './urls'
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title="Netflix Originals" />
     <RowPost url={action} title="Action" isSmall={true} />
     <RowPost url={comedy} title="Comedy" isSmall={true} />
     <RowPost url={horror} title="Horror" isSmall={true} />
     <RowPost url={romance} title="Romance" isSmall={true} />
     <RowPost url={documentaries} title="Documentaries" isSmall={true} />
    </div>
  );
}

export default App;
