import React from 'react';

const Clima = ({resultado}) => {

    //extraer los datos
    const {name, main} = resultado

    //no carga el componente si no hay datos
    if(!name) return null

    //grados kelvin
     const kelvin = 273.15   

    return ( 
        <div className="card-panel while col s12">
            <div className="black-text">
                <h2>el clima de {name} es:</h2>
                <p className="temperatura">
                    {parseFloat( main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
     );
}
 
export default Clima;