import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AbogadoCard from './components/AbogadoCard'
import Footer from './components/footer'
import Header from './components/header'

  
const abogados = [
 
  
  {
    nombre: 'Sebastian Pineda',
    especialidad: 'Derecho Civil',
    imagen: 'https://via.placeholder.com/150'
  },
  {
    nombre: 'Sebastian Pineda',
    especialidad: 'Derecho Civil',
    imagen: 'https://via.placeholder.com/150'
  },
  {
    nombre: 'Sebastian Pineda',
    especialidad: 'Derecho Civil',
    imagen: 'https://via.placeholder.com/150'
  },
  {
    nombre: 'Juanito Alcachofa',
    especialidad: 'Derecho Penal',
    imagen: 'https://via.placeholder.com/150'
  },
  {
    nombre: 'María García',
    especialidad: 'Derecho Civil',
    imagen: 'https://via.placeholder.com/150'
  },
  {
    nombre: 'María García',
    especialidad: 'Derecho Civil',
    imagen: 'https://via.placeholder.com/150'
  },
  {
    nombre: 'María García',
    especialidad: 'Derecho Civil',
    imagen: 'https://via.placeholder.com/150'
  },
  {
    nombre: 'María García',
    especialidad: 'Derecho Civil',
    imagen: 'https://via.placeholder.com/150'
  },
  {
    nombre: 'María García',
    especialidad: 'Derecho Civil',
    imagen: 'https://via.placeholder.com/150'
  },
  // Añade más abogados aquí
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards-container">
        {abogados.map((abogado, index) => (
          <AbogadoCard key={index} abogado={abogado} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;