import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux/action";


function ProductOne() {
    const [product, setProduct] = useState([]);
    const [load, setLoad] = useState(false);

    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        setProduct(state.product)
    }, []);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400} />
                </div>
                <div className='col-md-6' style={{ lineHeiht: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <div className="d-flex">
                        <Skeleton height={50} width={100} />
                        <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                    </div>
                </div>
            </>
        )
    };

    const handleToast = (product) => {
        alert('Vous avez ajouté un produit dans le panier ' + product);
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='row productOne'>
                    <div className="col-md-6">
                        <img src={state.product.image} title={state.product.title} height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <h5 className='text-uppercase text-black-50'>
                            {state.product.categories && state.product.categories.nom}
                        </h5>
                        <h6 className='display-6'>{state.product.title}</h6>
                        <p className='lead'>
                            Évaluation {state.product.rating && state.product.rating} <i className="fa fa-star"></i> <i className="fa fa-star"></i><i className="fa fa-star"></i>
                        </p>
                        <h6 className='display-6 fw-bold my-6'>
                            $ {state.product.price}
                        </h6>
                        <p className='lead' style={{
                            background: "#f0f0f0", border: "1px solid silver",
                            borderRadius: "7px", padding: "30px", color: "#333"
                        }}>{state.product.description}</p>
                        <button className='btn btn-outline-dark px-4 py-2'
                            onClick={() => (handleToast(state.product.title), addProduct(product))}>Ajouter au panier</button>
                        <NavLink to="/cart" className='btn btn-outline-dark ms-2 px-3 py-2'>Allez au panier</NavLink>
                        <NavLink to="/products" className='btn btn-outline-dark ms-2 px-3 py-2'>Retour</NavLink>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container py-5">
                <div className="row py-4">
                    {load ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </>
    )
}

export default ProductOne