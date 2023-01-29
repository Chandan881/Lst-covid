import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <div className='nav'>
           <Link className='navlinks txs' to="/livepath">VACCOVID<span className='hilite'>.LIVE</span></Link>
           <Link className='navlinks xx' to="/covid">COVID-19</Link>
           <Link className='navlinks xx' to="/VACCINE">VACCINE</Link>
           <Link className='navlinks xx' to="/TREATMENT">TREATMENT</Link>
           <Link className='navlinks xx' to="/MAP">MAP</Link>
           <Link className='navlinks xx' to="/NEWS">NEWS</Link>
           <Link className='navlinks xx' to="/ABOUT">ABOUT</Link>
           <Link className='navlinks txe' to="/buy"> Buy us a coffee</Link>
           
        </div>
    )
}

export default Navbar;
