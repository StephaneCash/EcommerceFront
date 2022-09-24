import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';

const Navbar = () => {

    const state = useSelector((state) => state.handleCart);

    return (
        <>
            <nav className="navbar navbar-expand-lg py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand" to="/home">E-commerce</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Tableaux</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacts">Contact</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/gerer">Gestion</NavLink>
                            </li>
                        </ul>

                        <input type="search" className='form-control' style={{ width: "50%" }} placeholder='Recherche un tableau' />

                        <div className="buttons" style={{ marginLeft: 'auto' }}>
                            <NavLink to='/' className='ms-2 btn' style={{ border: "1px solid #fff",  }}>
                                <i className="fa fa-user-o"></i> 
                            </NavLink>
                            <NavLink to='/cart' className='btn btn-outline-dark ms-2' style={{ border: "1px solid #fff", float: "right" }}>
                                <i className="fa fa-shopping-cart"></i> Panier ({state.length})
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;