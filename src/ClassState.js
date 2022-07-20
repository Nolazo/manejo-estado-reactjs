import React from "react"

class ClassState extends React.Component {
  render (){

    return(
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Escribe el cod de seguridad</p>
        <input type="text" placeholder="Codigo de seguridad"/>
        <button>Comprobar</button>
      </div>
    )
  }
}

export {ClassState}