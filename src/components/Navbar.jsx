import React from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import logo from '../images/logo.png'


function Navbar() {
    return ( 
    <div>
        <div className='nav-container'>
            <img src={logo} className='logo' alt="" />
            <h1 className='nav-title'>Bun Drop</h1>
            <Link to='/'><p className='nav-links'>Home</p></Link>
            <Link to='/Menu'><p className='nav-links'>Menu</p></Link>
            <Link to='/Cart'><p className='nav-links'><ShoppingCart className='dark-grey' size={28}/></p></Link>
        </div>
    </div>
     );
}

export default Navbar;