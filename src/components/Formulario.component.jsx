import React,{Fragment, useState} from 'react'
import Error from './Error.component';
import shortId from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ( { setGasto, setCrearGasto }) => {

    const [ nombre, setNombre ]         = useState("");
    const [ cantidad , setCantidad ]    = useState (0);
    const [ error, setError ]           = useState(false);

    const agregarGasto = ( e ) => {
        e.preventDefault();

        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ""){
            setError(true);
            return;
        }

        setError(false);

        const gasto = {
            nombre,
            cantidad,
            id : shortId.generate ()
        }

        setGasto(gasto);
        setCrearGasto(true);
        setNombre('');
        setCantidad(0);
    }

    return (  
        <Fragment>
            <form
                onSubmit={agregarGasto}
            >
                <h2>Agrega tus gastos aquí</h2>
                {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/> : null}

                <div className="campo">
                    <label htmlFor="gasto">Nombre del Gasto</label>
                    <input 
                        type        ="text"
                        className   ="u-full-width"
                        placeholder ="Ejemplo: Comida"
                        value       = {nombre}
                        onChange    = { e => setNombre( e.target.value ) }
                    />
                </div>
                <div className="campo">
                    <label htmlFor="gasto">Cantidad del Gasto</label>
                    <input 
                        type        ="number"
                        className   ="u-full-width"
                        placeholder ="Ejemplo: 500"
                        value       = {cantidad}
                        onChange    = { e => setCantidad( parseInt( e.target.value ) ) }
                    />
                </div>
                <input 
                    type="submit"
                    className="button-primary u-full-width"  
                    value="Agregar Gasto"  
                />
            </form>
        </Fragment>
    );
}
 
Formulario.propTypes = {
    setGasto        : PropTypes.func.isRequired,
    setCrearGasto   : PropTypes.func.isRequired
}
export default Formulario;