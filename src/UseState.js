import React from "react"

function UseState({name}){
  const [error, setError] = React.useState(false)
  return(
    <div>
    <h2>Eliminar {name}</h2>
    <p>Escribe el cod de seguridad</p>

    {error && (
      <p>Error</p>
      )
    }

    <input type="text" placeholder="Codigo de seguridad"/>
    <button>Comprobar</button>
  </div>
  )
}

export {UseState}