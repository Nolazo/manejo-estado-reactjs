import React from "react"

const SECURITY_CODE = 'paradigma'

function UseState({name}){
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  })

  console.log(state)
  
  const onConfirm = () => {
    setState({
      ...state, error: false, loading: true, confirmed: true
    })
  }
  const onError = () => {
    setState({...state, loading: false, error: true})
  }
  const onWrite = (newValue) => {
    setState({...state, value: newValue})
  }
  const onCheck = ()=>{
    setState({...state, loading: true})
  }
  const onDelete = () =>{
    setState({...state,deleted: true})
  }
  const onReset = () =>{
    setState({...state, confirmed: false, 
      value: '', deleted: false, error:false, loading: false
    })
  }

  React.useEffect(() => {
    console.log("Empezando efect")

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo validacion")

        if (state.value === SECURITY_CODE) {
          onConfirm()
        }else{
          onError()
        }

        console.log("Terminando validacion")
      }, 500)
    }

    console.log("Finalizando efect")
  }, [state.loading])
  //los [] vacio indican que el efecto se 
  //ejecuta solo cuando se renderiza por primera vez el component

 if (!state.deleted && !state.confirmed) {
  return(
    <div>
    <h2>Eliminar {name}</h2>
    <p>Escribe el cod de seguridad</p>

    {/* FORMA 3 */}
    {(state.error && !state.loading) && ( 
      <p>Error</p>
    )}


    {state.loading && (
      <p>loading...</p>
    )}

    <input type="text" 
      placeholder="Codigo de seguridad"
      value={state.value}
      onChange={(event) => {
        onWrite(event.target.value)
      }}
    />
    <button
      onClick={() => {
        onCheck()
      }}
    >Comprobar</button>
  </div>
  )
 }else if (!!state.confirmed && !state.deleted) {
  return(
    <React.Fragment>
      <p>Tas seguro??</p>
      <button
        onClick={() => {onDelete()}}
      >
        Yep
      </button>
      <button
        onClick={() => {onReset()}}
      >
        Nop
      </button>
    </React.Fragment>
  )
 }else{
  return(
    <React.Fragment>
      <p>Eliminado con exito</p>
      <button
        onClick={() => {onReset()}}
      >
        Volver atras
      </button>
    </React.Fragment>
  )
 }
  
 }


export {UseState}