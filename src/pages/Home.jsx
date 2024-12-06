import React, { useState, useEffect } from "react";
import "../assets/css/home.css"

const Home = () => {
  //Creamos el componente
  const [noticias, setnOTICIAS] = useState([]); //Definimos el estado en el cual almacenaremos las noticias
  /*noticias almacena la llista de las noticias y setnOTICIAS actualiza el estado de las noticias
    useState([]): Inicializamos el estado como un arreglo vacío porque inicialmente no hay noticias cargadas*/

  //----------Cargamos los datos de la api de noticias------------//

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=0442c7fcec37441f87db8a9d720d2152`
    ) // Llamamos a la api de noticias
      .then((response) => response.json()) // Convierte la respuesta en un objeto JSON
      .then((data) => setnOTICIAS(data.articles)) // Actualiza el estado noticias con los datos obtenidos
  
      .catch((error) => console.error("Error al cargar las noticias:", error)); // Maneja errores en caso de que falle la petición
  }, []); /// Se ejecuta una sola vez cuando el componente se monta
  return (
    <div className="conteiner2-News">
    {noticias.map((noticia, index) => (
      <div className="card-n" key={index}>
        <h2>{noticia.title}</h2>
        {noticia.urlToImage && (
          <img src={noticia.urlToImage} alt={noticia.title} />
        )}
        <p>{new Date(noticia.publishedAt).toLocaleDateString()}</p>
      </div>
    ))}
  </div>
);
};

export default Home;
