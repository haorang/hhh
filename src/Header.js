import React from "react"
import './App.css'

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
	       		

	        <div id ="cart">
	        	<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
<input type="hidden" name="cmd" value="_s-xclick">
</input>
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
</input>
<input type="image" src="https://yt3.ggpht.com/a-/AN66SAwhc5XefT4_IfxZXi1SUVBbxt2wAamT3MHsdQ=s100-mo-c-c0xffffffff-rj-k-no" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
</input>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</img>
</form>

	        </div>
        </header>
    )
}

export default Header