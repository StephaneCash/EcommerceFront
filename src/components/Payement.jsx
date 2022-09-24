import React from 'react';
import ButtonCheckOut from './paypal/ButtonCheckOut';
import { useLocation } from "react-router-dom";

function Payement() {
    const location = useLocation();
    const { state } = location;
    return (
        <>
            <div className='data'>
                <ButtonCheckOut product={state} />
            </div>
        </>
    )
}

export default Payement