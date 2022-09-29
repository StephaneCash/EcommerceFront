import React from 'react'
import Contact from './Contact'

function Apropos() {
    return (
        <>
            <div className="container py-5">
                <div className="row py-4">
                    <h4>A propos de Créatuve Déco</h4>
                    <div className='col-sm-12'>
                        <div className="row">
                            <div className="col-sm-6">
                                <p>
                                    Lancé en 2022, creativedeco.com est la principale plateforme de commerce de gros
                                    mondial. Nous servons des millions d'acheteurs et de fournisseurs dans le monde entier.
                                </p>
                                <h5>Notre mission</h5>

                                <p>
                                    En tant que membre du groupe Créative Déco, notre mission est de faciliter les affaires partout.

                                    Pour ce faire, nous donnons aux fournisseurs les outils nécessaires pour atteindre un public mondial pour leurs produits et en aidant les
                                    acheteurs à trouver des produits et des fournisseurs rapidement et efficacement
                                </p>

                            </div>
                            <div className="col-sm-6">
                                <img src="./images/com.jpg" width="400px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />

        </>
    )
}

export default Apropos