import "./App.css";
import freeCodeCampLogo from "./imagenes/FreeCodeCamp_logo.png"
import Boton  from "./Componentes/Boton"
import Contador from "./Componentes/Contador";
import { useState } from "react";



function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className="freecodecamp-logo" 
          src={freeCodeCampLogo} 
          alt='freecodecamp logo' />
      </div>

      <div className='contenedor-principal'>
        <Contador numClicks= {numClicks} />
        <Boton
          texto = 'click'
          esBotonDeClick = {true}
          manejarClick = {manejarClick} />
        <Boton 
          texto = 'reiniciar'
          esBotonDeClick = {false}
          manejarClick = {reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
