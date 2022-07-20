import React from "react"
import {Loading} from "./Loading.js"

class ClassState extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: false,
      loading: false
    }
  }

  componentDidUpdate(){
    console.log("Actualizando")
    // Si no hago el if se llama de forma permanente
    if (!!this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo validacion")
        setLoading(false)
        console.log("Terminando validacion")
      }, 3000)
    }
  }

  render (){
    return(
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Escribe el cod de seguridad</p>

        {this.state.error && (
          <p>Error</p>
        )}

        {this.state.loading && (
          <Loading />
        )}

        <input type="text" placeholder="Codigo de seguridad"/>
        <button
          onClick={() => this.setState({loading: true})}
        >Comprobar</button>
      </div>
    )
  }
}

export {ClassState}