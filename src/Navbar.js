import React from "react"
import {Link} from "react-router-dom"


const Navbar = () => {
    return (  
<ul>
    <li><Link to="/"> Home </Link></li>
    <li><Link to="/sprite"> Sprite </Link></li>
    <li><Link to="/cigars"> Cigars </Link></li>
    <li><Link to="/warheads"> Warheads </Link></li>
 
 
 
 
</ul>
    )
}

export default Navbar