import React from "react"
import {Loading} from "./Loading.js"

const SECURITY_CODE = 'paradigma'

class ClassState extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
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
        
        if (this.state.value === SECURITY_CODE) {
          this.setState({loading: false, error: false})
        }else{
          this.setState({loading: false, error: true})
        }

        console.log("Terminando validacion")
      }, 3000)
    }
  }

  render (){
    return(
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Escribe el cod de seguridad</p>

        {(this.state.error && !this.state.loading) &&(
          <p>Error</p>
        )}

        {this.state.loading && (
          <Loading />
        )}

        <input type="text" 
          placeholder="Codigo de seguridad"
          value={this.state.value}
          onChange={(event) => {
            this.setState({
              value: event.target.value
            })
          }}
        />
        <button
          onClick={() => this.setState({loading: true})}
        >Comprobar</button>
      </div>
    )
  }
}

export {ClassState}