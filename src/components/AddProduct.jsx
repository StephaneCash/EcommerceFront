import { Button } from '@material-ui/core'
import React, { useState } from 'react';
import axios from "axios";
import swal from "sweetalert"
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function AddProduct() {

    const [file, setFile] = useState('');
    const [title, setTitle] = useState("");
    const [qty, setQty] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [categoryId, setCategoryId] = useState(null);
    const [cat, setCat] = useState([]);

    const [btn, setBtn] = useState(false);

    const navigate = useNavigate();

    const submitData = () => {
        setBtn(true)
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        if (title !== "" && qty !== "" && description !== "" && price !== "" && file !== "" && categoryId !== "") {
            console.log(title, qty, price, description, file, categoryId)
            axios.post('http://localhost:5000/api/products',
                { title: title, qty: qty, price: price, description: description, file: file, categoryId: categoryId }, config)
                .then(res => {
                    swal({ title: "Succès", icon: "success", text: res.data.message });
                    navigate('/admin');
                })
                .catch(err => {
                    console.log(err.response);
                    setBtn(false)
                })
        } else {
            swal({ title: "Avertissement", icon: "warning", text: "Veuillez remplir tous les champs svp!!!" });
            setBtn(false)
        }
    }

    const getAllCategories = () => {
        axios.get('http://localhost:5000/api/categories')
            .then(res => {
                setCat(res.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    };

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <div className="col-12">
            <div className='container mt-2'>
                <h5>Ajout d'un nouveau produit</h5>
                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Nom du tableau</label>
                        <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} placeholder='Nom du tableau' id="title" />
                        <br />
                        <label>Prix</label>
                        <input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder='Prix' id="price" />
                        <br />
                        <label>Quantité</label>
                        <input type="text" className="form-control" onChange={(e) => setQty(e.target.value)} placeholder='Quantité' id="qty" />
                        <br />
                        <Button variant="contained" className='mt-3' style={{ backgroundColor: '#0c50a2', color: "#fff" }} onClick={submitData}>
                            {btn ? 'Ajout...' : "Ajouter"}
                        </Button>
                        <NavLink to='/admin' className="btn">Retour</NavLink>
                    </div>
                    <div className="col-sm-6">
                        <label>Télécharger une image</label>
                        <input type="file" className="form-control" name='file' accept='.jpg, .jpeg, .png, .gif'
                            onChange={(e) => setFile(e.target.files[0])}
                            placeholder='' id="file" />
                        <br />
                        <label>Sélectionner une catégorie</label>
                        <select className='form-control' onChange={(e) => setCategoryId(e.target.value)}>
                            <option>--Sélionnez une catégorie--</option>
                            {cat.data && cat.data.map((value, index) => {
                                return <option key={index} value={value.id}>{value.nom}</option>
                            })}
                        </select>
                        <br />
                        <label>Description</label>
                        <textarea className='form-control' id="description" onChange={(e) => setDescription(e.target.value)} placeholder='Description...'></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct