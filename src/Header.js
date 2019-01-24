import React from "react"
import './App.css'
import Cart from './Cart.js'

function Header() {
    return (
        <header className = "Header">
        	<div className = "title">
	            Haoran's Handsome Haberdashery!
	        </div>
        	<div id = "itemholder">
	            <div id = "stuff" className = "navitem">
	            	Stuff
	            </div>
	            <div id = "morestuff" className = "navitem">
	            	More Stuff
	            </div>
	            <div id = "snow" className = "navitem">
	            	Snow	
	            </div>
	            <div id = "morestuff" className = "navitem">
	            	More Stuff
	            </div>
	        </div>
	       		
	        <Cart/>
        </header>
    )
}

export default Header