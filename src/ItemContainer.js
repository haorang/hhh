import React, { Component } from 'react';
import './App.css';
import Item from './Item.js'

class ItemContainer extends Component {
  render() {
    return (
      <div id = "itemcontainer">
      	<Item/>
      </div>
    );
  }
}

export default ItemContainer;
