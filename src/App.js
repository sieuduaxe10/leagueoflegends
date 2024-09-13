import React from 'react';
import "./assets/sass/app.scss";

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Main from './layouts/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MusicProvider } from './layouts/MusicProvider'; // Import MusicProvider

function App() {
  return (
    <MusicProvider>
      <div>
        <Header/>
        <br/>
        
        <Main/>
       <br/>
        <Footer/>
      </div>
    </MusicProvider>
  );
}

export default App;
