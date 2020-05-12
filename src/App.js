import React, { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  render(){
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
      </React.Fragment>
    )
  }
}
export default App
