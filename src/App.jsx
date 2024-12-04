import { useState } from 'react'


import './App.css'
import Provincias from './components/Provincias'
import Footer from './components/footer'
import Header from './components/header'

  


function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards-container">
          <Provincias />
      </div>
      <Footer />
    </div>
  );
}

export default App;