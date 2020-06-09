import React, {useState} from 'react'


const Formulario = ({busqueda1, guardarBusqueda1, guardarConsultar}) => {

    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })
    const [error, guardarError] = useState(false)

    //funcion que coloca los elementos en el state
    const handleChange = e => {

        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
        guardarBusqueda1({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //extraer cuidad y pais del state
    const {ciudad, pais} = busqueda

    //cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        if(ciudad.trim() === "" || pais.trim()=== ''){
            guardarError(true);
            return;
        }

        guardarError(false)
        guardarConsultar(true)
    }

    return ( 
        <form action="" onSubmit={handleSubmit}>

            
            {error ? <p className="red darken-4 error"> Todos los campos son obligatorios</p> : null}

            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Cuidad:  </label>
            </div>
            <div className="input-field col s12">
                <select 
                    name="pais" 
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="NI">Nicaragua</option>
                </select>
                <label htmlFor="pais">Pais:  </label>
            </div>
            <div className="input-field col s12">
                <button 
                    type="submit"
                    className=" waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>
        </form>
     );
}
 
export default Formulario;