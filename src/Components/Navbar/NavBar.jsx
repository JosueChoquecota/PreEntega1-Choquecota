import React from 'react';
import './Navbar.css'; 
import CarWidget from '../CarWidget/CarWidget';
import LogoIcon from '../LogoIcon/LogoIcon';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <LogoIcon/>
                </Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item active">
                            <NavLink className="nav-link nav-link-bold" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/camiseta">Camisetas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/calzado">Calzado</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/pantalon">Pantalones</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <CarWidget/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}



export default Navbar;