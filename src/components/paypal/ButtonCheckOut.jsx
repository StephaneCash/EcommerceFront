import React, { useEffect, useState } from 'react'
import { PayPalButtons } from "@paypal/react-paypal-js";


function ButtonCheckOut(props) {
    const product = props.product;
    const [qty, setQty] = useState([])

    console.log(product.product)

    const [paid, setPaid] = useState(false);
    const [erreurs, setErreurs] = useState(null);

    useEffect(() => {
        let tab = []
        product.product.forEach(element => {
            console.log(element.price)
            tab.push(element.price)
            setQty(tab)
        });
    }, []);

    let somme = 0;

    for (let i = 0; i < qty.length; i++) {
        somme = qty[i] + somme;
    }

    const handleApprove = (orderID) => {
        setPaid(true);
    }

    if (paid) {
        alert('Votre payement a été effectué avec succès');
    }
    if (erreurs) {
        alert(erreurs);
    }
    return (
        <>
            <PayPalButtons
                onClick={(data, actions) => {
                    const hasAlraedy = false;
                    if (hasAlraedy) {
                        setErreurs("Produit déjà acheté.")
                        return actions.reject();
                    } else {
                        return actions.resolve();
                    }
                }}
                createOrder={
                    (data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: "Achat tableau",
                                    amount: {
                                        value: 100
                                    }
                                }
                            ]
                        });
                    }
                }
                onApprove={async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log("ORDER : ", order);

                    handleApprove(data.orderID);
                }}
                onCancel={() => {
                    alert('Vous avez quitté la procédure de payement.')
                }}
            />
        </>
    )

}

export default ButtonCheckOut