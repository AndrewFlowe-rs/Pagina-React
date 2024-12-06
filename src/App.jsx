import { useState } from 'react'


import './App.css'
import Home from './pages/Home'
import Provincias from './pages/Provincias'
import Footer from './components/footer'
import Header from './components/header'




function App() {
  return (
    <div className="App">
      <Header />
      <div className='container1-cards-news'>
        <Home />
      </div>
      {/* <div className="cards-container">
          <Provincias />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;