import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar } from "@material-ui/core";
import { useEffect } from 'react';

const Navbar = () => {

    const state = useSelector((state) => state.handleCart);

    const [data, setData] = useState(null);

    const local = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    useEffect(() => {
        if (local) {
            setData(local);
        } else {
            setData(null);
        }
    }, [local])

    const handleCart = () => {
        if (data) {
            navigate("/cart");
        } else {
            navigate("/login");
        }
    }

    const deconnexion = () => {
        localStorage.removeItem("user");
        navigate("/")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><i className="fa fa-home"></i> Créative Déco</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">A propos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacts">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin"> <i className="fa fa-cog"></i> Admin</NavLink>
                            </li>
                        </ul>

                        {data ? <><Avatar>{data && data.nom !== undefined && data.nom.charAt(0) }</Avatar> <i className='text-white ms-2 me-2'>Salut <u>{data.nom && data.nom}</u></i> <button className='btn btn-outline-dark ms-2' style={{ color: "#fff", border: "1px solid #fff" }} onClick={deconnexion}>Déconnexion</button></> : <NavLink to='/login' alt="Connexion" className='ms-2 btn' style={{ border: "1px solid #fff", }}>
                            Connectez-vous
                        </NavLink>}

                        <button onClick={handleCart} className='btn btn-outline-dark ms-2' style={{ border: "1px solid #fff", float: "right", color: "white" }}>
                            <i className="fa fa-shopping-cart"></i> Panier ({state.length})
                        </button>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;