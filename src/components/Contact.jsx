import React from 'react'

function Contact() {
    return (
        <div className='conatct'>
            <div className='col-sm-8 content'>
                <div className="text-center">
                    <i className='fa fa-bell'></i> Alerte commande
                    <p className="text-center">
                        Recevez les dernières tendances de produits et les nouvelles de l’industrie directement dans votre boîte de réception
                    </p>
                    <p style={{ width: "50%", margin: "0px auto" }} className="d-flex">
                        <input type="text" className='form-control' />
                        <button className='btn btn-outline-dark ms-2'>Soumettre</button>
                    </p>
                </div>
                <div className='d-flex mt-5'>
                    <div className="col-sm-3">
                        <ul>
                            <h6>Service client</h6>
                            <li>Centre d'aide</li>
                            <li>Signaler un abus</li>
                            <li>Ouvrir un dossier</li>
                            <li>Politiques et règles</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <ul>
                            <h6>A propos de nous</h6>
                            <li>A propos de Créative Déco</li>
                            <li>Plan du site</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <ul>
                            <h6>Source sur Créative Déco</h6>
                            <li>Ressources</li>
                            <li>Toutes les catégories</li>
                            <li>Demande de devis</li>
                            <li>Partenaires acheteurs</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <ul>
                            <h6>Services commerciaux</h6>
                            <li>Assurance commerciale</li>
                            <li>Identité commerciale</li>
                            <li>Services logistiques</li>
                            <li>Services de surveillance et <br /> d'inspection de la production</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="text-center">
                    Tout droit réservé &copy; 2022 creative-deco,
                    <br /> Designed by Keren Milele
                </div>
            </div>
        </div>
    )
}

export default Contact