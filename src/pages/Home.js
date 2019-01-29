import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import ItemContainer from './ItemContainer.js'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div id = "featured"></div>
        <ItemContainer/>
      </div>
    )
  }
}

export default Home
