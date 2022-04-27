import React from 'react'

export const ComponenteSaludo = (props) => {
   console.log(props);
    const {nombre, edad, civil} = props;
  return(
    <div>
      <h1>Soy  {nombre}</h1>
      <p> tengo {edad} años edad</p>
      <p>
        estado civil {civil}
      </p>
    </div>
  )
}

