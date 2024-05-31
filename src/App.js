import React from 'react';
import "./assets/sass/app.scss";
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Main from './layouts/Main';
import { MusicProvider } from './layouts/MusicProvider'; // Import MusicProvider

function App() {
  return (
    <MusicProvider>
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </MusicProvider>
  );
}

export default App;
