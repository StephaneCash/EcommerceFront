import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addCart, deleteCart } from "../redux/action";
import Contact from './Contact';

function Cart() {
  const [product, setProduct] = useState([]);
  const state = useSelector((state) => state.handleCart);
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(state);
  }, []);

  useEffect(() => {
    if (state.length !== product.length) {
      setProduct(state)
    }
  }, [state]);

  const delteHandleBtn = (val) => {
    dispatch(deleteCart(val));
  }

  return (
    <>
      <div className='container py-5'>
        <NavLink to="/"><i className="fa fa-chevron-left mb-2"></i> Retour</NavLink>
        {product.length > 0 ?
          product.map((val) => {
            return (
              <>
                <div className='row'>
                  <div className='card mb-2'>
                    <div className="card-body d-flex">
                      <div className='col-md-4'>
                        <img src={val.image} alt={val.title} height="200px" width="200px" />
                      </div>
                      <div className='col-md-4'>
                        <h3>{val.title}</h3>
                        <p className='lead fw-bold' id="p">
                          {qty > 0 ? `${qty} x ${val.price}` : val.qty + " x " + "$" + val.price} = $
                          {qty > 0 ? qty * val.price : val.qty * val.price}
                        </p>
                        <div className='d-flex'>
                          <label>Entrer un nombre</label>
                          <input type="number" className='btn btn-outline-dark' onChange={(e) => setQty(e.target.value)} />

                          <button className='btn btn-outline-dark ms-4' onClick={() => delteHandleBtn(val)}>
                            <i className='fa fa-trash'></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          }) :
          <div className='cardChariotVide'>
            <h5>Aucun tableau n'a été ajouté au panier.</h5>
            <img src='./images/levide.jpg' height="200px" width="200px" style={{ margin: "0px auto" }} />
            <p>
              <NavLink to="/">Retour</NavLink>
            </p>
          </div>
        }

        <div className='row cart'>
          <div className='card mb-2 p-4'>
            {product.length > 0 && <>
              <NavLink to={{ pathname: "/payement" }} state={{ product }}>
                <button className="btn btn-outline-dark">Procéder au payement</button> </NavLink>
            </>

            }
          </div>
        </div>
      </div>
      <Contact />
    </>
  )
}

export default Cart