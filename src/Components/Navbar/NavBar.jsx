import React from 'react';
import './Navbar.css'; 
import CarWidget from '../CarWidget/CarWidget';
import LogoIcon from '../LogoIcon/LogoIcon';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <div className="navbar-brand" href="#">
                    <LogoIcon/>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item active">
                            <a className="nav-link nav-link-bold" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Camisetas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Calzado</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pantalones</a>
                        </li>
                        <li className="nav-item">
                            <CarWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}



export default Navbar;