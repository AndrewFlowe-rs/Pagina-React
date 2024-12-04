import React ,   {useState, useEffect} from 'react'; //Traemos los hooks useState y iseEfect . useState para manejar el estado de las provincias y useEffect para manejar el ciclo de vida del componente para ejecutar el codigo cuando el componente se monta (ideal para llamadaas api)
import "../assets/css/ProvinciasCard.css";
const Provincias = () => { //Creamos el componente 
 const [provincias, setProvincias] = useState([]); //Creamos el estado de las provincias
 // Provincias almacena la llista de las provincias y setProvincias actualiza el estado de las provincias
//useState([]): Inicializamos el estado como un arreglo vacío porque inicialmente no hay provincias cargadas

//---------------Carga de datos con useEffect---------

useEffect(() => {
  fetch('/json/ProvinciasArgentinas.json')
    .then((response) => response.json())
    .then((data) => setProvincias(data))
    .catch((error) => console.error('Error al cargar las provincias:', error));
}, []);
/*useEffect(() => { ... }, []);:
Este código se ejecuta una sola vez cuando el componente se monta, porque el segundo argumento es un arreglo vacío ([]).

fetch('/provincias.json'):
Hace una petición para obtener datos desde un archivo provincias.json (podría ser también una API).

.then((response) => response.json()):
Convierte la respuesta del fetch en un objeto JSON.

.then((data) => setProvincias(data)):
Actualiza el estado provincias con los datos obtenidos.

.catch((error) => console.error('Error al cargar las provincias:', error)):
Maneja errores en caso de que falle la petición.
*/

return (
  <div className='provincias'>
    {provincias.map((provincia, index) => (
      <div key={index} className='provincia-card' >
        <img src={provincia.imagen} alt={provincia.nombre} className='provincia-image'  />
        <h3>{provincia.nombre}</h3>
        <p>{provincia.descripcion}</p>
      </div>
    ))}
  </div>
);
};

export default Provincias;