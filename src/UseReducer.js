import React from "react"

const SECURITY_CODE = 'paradigma'

function UseReducer({name}){
  const [state, dispatch] = React.useReducer(reducer, initialState)

  console.log(state)
  
  React.useEffect(() => {
    console.log("Empezando efect")

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo validacion")

        if (state.value === SECURITY_CODE) {
          dispatch({type: 'CONFIRM'})    
        }else{
          dispatch({type: 'ERROR'})    
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
        dispatch({type: 'WRITE', payload: event.target.value})    
      }}
    />
    <button
      onClick={() => {
        dispatch({type: 'CHECK'})    
      }}
    >Comprobar</button>
  </div>
  )
 }else if (!!state.confirmed && !state.deleted) {
  return (
    <React.Fragment>
      <p>Tas seguro??</p>
      <button
        onClick={() => {
          dispatch({type: 'DELETE'})
        }}
      >
        Yep
      </button>
      <button
        onClick={() => {dispatch({type: 'RESET'})}}
      >
        Nop
      </button>
    </React.Fragment>
  )
 }else {
  return(
    <React.Fragment>
      <p>Eliminado con exito</p>
      <button
        onClick={() => {dispatch({type: 'RESET'})}}
      >
        Volver atras
      </button>
    </React.Fragment>
    )
  }
 }

 //=====REDUCER=====
const initialState ={
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false
}

 const reducerObj = (state, payload) =>({
  'CONFIRM': {...state, error: false, loading: true, 
    confirmed: true},
  'ERROR': {...state, loading: false, error: true},
  'WRITE': {...state, value: payload},
  'CHECK': {...state, loading: true},
  'DELETE': {...state, deleted: true},
  'RESET': {...state, confirmed: false, deleted: false,
    value: '', loading: false, error: false}
 })
  const reducer = (state, action) => {
    if(reducerObj(state)[action.type]){
      return reducerObj(state, action.payload)[action.type]
    }else{
      return state
    }
  }


// FORMA 1
// const reducerIf = (state, action) => {
//   if (action.type === 'ERROR') {
//     return{
//       ...state, error: true, loading: false
//     }
//   }else if(action.type === 'CHECK') {
//     return{
//       ...state, loading: true
//     }
//   }else{
//     return {
//       ...state
//     }
//   }
// }

// FORMA 2
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ERROR':
//       return{
//         ...state, error: true, loading: false
//       }
//     case 'CHECK':
//       return{
//         ...state, loading: true
//       }
//     default:
//       return state
//   }
// }

export {UseReducer}