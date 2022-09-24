import React from 'react';
import ButtonCheckOut from './paypal/ButtonCheckOut';
import { useLocation } from "react-router-dom";

function Payement() {
    const location = useLocation();
    const { state } = location;
    return (
        <>
            <div className='data'>
                <ButtonCheckOut product={state} style={{ margin: '0px auto', width: '50%' }} />
                <p className='text-center'>Vous pouvez acheter via MPSA par ce numéro
                    <br />
                    <br />
                    <img src="./images/mpsa.jpg" height="100px" width="100px" />
                    <br />
                    <br />
                    <h3>    +243 818984376</h3>
                </p>

            </div>
        </>
    )
}

export default Payement