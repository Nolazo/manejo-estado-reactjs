import React from "react"

function UseState({name}){
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    console.log("Empezando efect")

    if (!!loading) {
      setTimeout(() => {
        console.log("Haciendo validacion")
        setLoading(false)
        console.log("Terminando validacion")
      }, 3000)
    }

    console.log("Finalizando efect")
  }, [loading])
  //los [] vacio indican que el efecto se 
  //ejecuta solo cuando se renderiza por primera vez el component

  return(
    <div>
    <h2>Eliminar {name}</h2>
    <p>Escribe el cod de seguridad</p>

    {error && (
      <p>Error</p>
    )}

    {loading && (
      <p>loading...</p>
    )}

    <input type="text" placeholder="Codigo de seguridad"/>
    <button
      onClick={() => setLoading(true)}
    >Comprobar</button>
  </div>
  )
}

export {UseState}