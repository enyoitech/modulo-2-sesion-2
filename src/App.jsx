
import { ComponenteSaludo } from './ComponenteSaludo'

function App() {
  const frutas =[ 'manzanas', 'peras', 'patilla' ]
  const familiar = {nombre: 'sofia', edad: 55}
  return (
    <>
      <h1 >
        hola mundo
      </h1>
      <ComponenteSaludo 
        nombre={'Pepito'}
        edad={25}
        civil={true}
        frutas={frutas}
        familiar= {familiar}

      />
      <ComponenteSaludo
        nombre={'rosa'}
        edad={40}
        civil={false}

      />
      <ComponenteSaludo
      nombre={'carla'}
      edad={18}
      civil={false}
      

      />
    </>

  )
}

export default App
