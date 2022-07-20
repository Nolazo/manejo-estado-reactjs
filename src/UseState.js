import React from "react"

const SECURITY_CODE = 'paradigma'

function UseState({name}){
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  console.log(value)

  React.useEffect(() => {
    console.log("Empezando efect")

    if (!!loading) {
      setTimeout(() => {
        console.log("Haciendo validacion")

        if (value === SECURITY_CODE) {
          setLoading(false)
          setSuccess(true)
        }else{
          setError(true)
          setLoading(false)
          setSuccess(false)
        }

        console.log("Terminando validacion")
      }, 500)
    }

    console.log("Finalizando efect")
  }, [loading])
  //los [] vacio indican que el efecto se 
  //ejecuta solo cuando se renderiza por primera vez el component

  return(
    <div>
    <h2>Eliminar {name}</h2>
    <p>Escribe el cod de seguridad</p>

    {/* FORMA 3 */}
    {(error && !loading && !success) && ( 
      <p>Error</p>
    )}

    {(success && !loading) && (
      <p>success...</p>
    )}

    {loading && (
      <p>loading...</p>
    )}

    <input type="text" 
      placeholder="Codigo de seguridad"
      value={value}
      onChange={(event) => {
        // setError(false)  FORMA 2
        setValue(event.target.value)
      }}
    />
    <button
      onClick={() => {
        //setError(false) // FORMA 1 DE ACTUALIZAR EL ESTADO
        setLoading(true)
      }}
    >Comprobar</button>
  </div>
  )
}

export {UseState}