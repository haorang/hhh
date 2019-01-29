import React, { Component } from 'react';
import './App.css';

class Item extends Component {
  render() {
    return (
      <div className = "item">
      	<div className = "itemtitle">Berkly Pullover Hoodie</div>
      	<div className = "itemimg" style = {{backgroundImage: "url('https://i.imgur.com/BRjqnTM.jpg')"}}></div>
      	<div className = "itemprice" >$25!</div>

      </div>
    );
  }
}

export default Item;
