import React from "react"

class Loading extends React.Component{
  componentWillUnount(){
    console.log("componentWillUnount")
  }

  render(){
    return(
      <p>Cargando ...</p>
    )
  }
}

export {Loading}