import React, { Component } from 'react';
import './App.css';

class Item extends Component {
  render() {
    return (
      <div className = "item">
      	<div className = "itemtitle">Berkly Pullover Hoodie</div>
      	<div className = "itemimg" style = {{backgroundImage: "url('https://i.pinimg.com/736x/54/76/9b/54769b53a1084ad4f9bc49208b121e03.jpg')"}}></div>
      	<div className = "itemprice" >$25!</div>

      </div>
    );
  }
}

export default Item;
