import React, { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
      </>
    )
  }
}
export default App
