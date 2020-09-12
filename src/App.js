import React, {Fragment, useState, useEffect } from 'react';
import Pregunta from './components/Pregunta.component';
import Formulario from './components/Formulario.component';
import Listado from './components/Listado.component';
import ControlPresupuesto from './components/ControlPresupuesto.component';

function App() {

    const [ presupuesto, setPresupuesto ] = useState(0);
    const [ restante, setRestante ]       = useState(0);
    const [ mostrar, setMostrar ]         = useState(true);
    const [ gastos, setGastos]            = useState([]);
    const [ gasto, setGasto ]             = useState({});
    const [ crearGasto, setCrearGasto]    = useState(false); 

    useEffect( () => {

      if( crearGasto){
        setGastos ([
          ...gastos,
          gasto
        ])
        const presupuestoRestante = restante - gasto.cantidad;
        setRestante(presupuestoRestante);
        setCrearGasto(false);
      }


    }, [gasto, crearGasto, gastos, restante] );

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
        </header>
        <div  className="contenido-principal contenido">
          { mostrar ? 
          (
            <Pregunta
              setPresupuesto  ={setPresupuesto}
              setRestante     ={setRestante} 
              setMostrar      ={setMostrar}
            /> 
          )
          : 
          (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  setGasto      = { setGasto }
                  setCrearGasto = { setCrearGasto }
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos ={ gastos }
                />
                <ControlPresupuesto
                  presupuesto = { presupuesto }
                  restante    = { restante }
                />
              </div>
            </div>
          )
          }
        </div>

      </div>
    </Fragment>
  );
}

export default App;
