import React,{Fragment, useState} from 'react';
import Error from './Error.component';
import PropTypes from 'prop-types';


const Pregunta = ({setPresupuesto, setRestante, setMostrar }) => {

    const [cantidad, setCantidad]   = useState(0);
    const [error, setError ]        = useState(false);

    const definirPresupuesto = (e) => {
        const cantidades = parseInt(e.target.value, 10);
        setCantidad(cantidades)
    }

    const agregarPresupuesto = (e) => {
        e.preventDefault();
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true);
            return;
        }
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrar(false);
    }


    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}
            <form 
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define tu presupuesto"
                />  
            </form>
        </Fragment>

     );
}

Pregunta.propTypes = {
    setPresupuesto  : PropTypes.func.isRequired,
    setRestante     : PropTypes.func.isRequired,
    setMostrar      : PropTypes.func.isRequired
}
 
export default Pregunta;