import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom';
import Navbar from "./Navbar"

function Product() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const [categories, setCategories] = useState([]);

    let componentMounted = true;

    const getProducts = async () => {
        setLoading(true);
        fetch("http://localhost:5000/api/products").then(resp => {
            resp.json()
                .then(response => {
                    if (componentMounted) {
                        setData(response.data);
                        setFilter(response.data);
                        setLoading(false);
                    }

                    return () => {
                        componentMounted = false;
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }).catch(err => {
            console.log(err)
        })
    };

    const getAllCat = () => {
        axios.get('http://localhost:5000/api/categories')
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => {
                console.log(err.response)
            });
    }

    useEffect(() => {
        getProducts();
        getAllCat();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <i className="fa fa-spinner fa-spin fa-2x"></i> En cours de chargement....
                </div>
            </>
        )
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5 dernierProduct">
                    <button className="btn btn-outline-dark" onClick={() => setFilter(data)}>Tout</button>
                    <button className="btn btn-outline-dark ms-2" onClick={() => filterProduct('men\'s clothing')}>Pain à la main</button>
                    <button className="btn btn-outline-dark ms-2" onClick={() => filterProduct('women\'s clothing')}>Indien</button>
                    <button className="btn btn-outline-dark ms-2" onClick={() => filterProduct('electronics')}>Sur thème des paysages</button>
                </div>
                <div className='grille'>
                    {
                        filter && filter.map((product) => {
                            return (
                                <>

                                    <div className=" text-center p-4" key={product.id}>
                                        <div className=" mb-4 product" style={{ display: "grid" }}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className='text'>{product.title.substring(0, 15)}...</div>
                                                    <img src={product.image} alt='Image-tableau' />

                                                    <div className="mb-0">{product.title.substring(0, 12)}...</div>
                                                    <p className='card-text lead fw-bold'>
                                                        USD $ {product.price}
                                                    </p>
                                                    <NavLink to={{ pathname: '/productOne' }} state={{ product: product }} className='btn btn-outline-dark'>
                                                        Acheter maintenant
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </>
        )
    }

    return (
        <>
            <div className=" my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Derniers produits de qualité</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    )
}

export default Product