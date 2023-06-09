import React from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import logo from '../Logo/logo.png'


function Navbar() {
    return ( 
    <div>
        <div className='nav-container'>
            <Link to='/'><img src={logo} className='logo' alt="" /></Link>
            <Link to='/'><h1 className='nav-title'>Bun Drop</h1></Link>
            <Link to='/'><p className='nav-links'>Home</p></Link>
            <Link to='/menu'><p className='nav-links'>Menu</p></Link>
            <Link to='/cart'><p className='nav-links'><ShoppingCart className='dark-grey' size={28}/></p></Link>
        </div>
    </div>
     );
}

export default Navbar;