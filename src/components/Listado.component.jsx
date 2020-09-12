import React, {Fragment} from 'react';
import Gasto from './Gasto.component';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => {
    return ( 
        <Fragment>
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {
                    gastos.map( gasto => (
                        <Gasto
                            key     = { gasto.id }
                            gasto   = { gasto }
                        />
                    ))
                }
            </div>  
        </Fragment>  
    );
}
 
Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
export default Listado;