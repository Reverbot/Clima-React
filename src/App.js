import React, {Fragment, useState, useEffect} from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Clima from './Components/Clima'
import Error from './Components/Error'

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
})

const [consultar, guardarConsultar] = useState(false)
const [resultado, guardarResultado] = useState({})
const [error, guardarError] = useState(false)

 //extraer cuidad y pais del state
 const {ciudad, pais} = busqueda

  useEffect(() =>{
    const   consultarApi = async () => {

      if(consultar){
          const apiId =   '4bbcb0a43060dd33178481656606e692'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        guardarResultado(resultado)
        guardarConsultar(false)

        //verificar si existe la cuidad
        if(resultado.cod === "404") {
          guardarError(true)
        }else{
          guardarError(false)
        }
      }
    }
    consultarApi()
    // eslint-disable-next-line
  }, [consultar])

  let componente
  if(error){
    componente = <Error mensaje="No hay resultados"/>
  }else{
    componente = <Clima resultado={resultado}/>
  }
  

  return (
    <Fragment>
      <Header titulo="Clma React App"/>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
              <div className="col m6 s12">
              <Formulario 
                busqueda1={busqueda}
                guardarBusqueda1={guardarBusqueda}
                guardarConsultar={guardarConsultar}
                />
              </div>
              <div className="col m6 s12">
                  {componente}
              </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default App;
