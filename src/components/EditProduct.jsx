import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function EditProduct() {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;

    const [file, setFile] = useState({});
    const [title, setTitle] = useState("");
    const [qty, setQty] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [categoryId, setCategoryId] = useState(null);
    const [cat, setCat] = useState([]);
    const [categorie, setCategorie] = useState("");
    const [id, setId] = useState(null);

    const [clicBtn, setClicBtn] = useState(false);

    useEffect(() => {
        if (state) {
            setFile(state.state.image);
            setTitle(state.state.title);
            setQty(state.state.qty);
            setDescription(state.state.description);
            setPrice(state.state.price);
            setId(state.state.id)
        }
    }, [state]);


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
        if (typeof (file) !== 'object') {
            setFile({
                lastModified: 1551204204000,
                lastModifiedDate: 'Tue Feb 26 2019 19: 03: 24 GMT + 0100(heure normale d’Afrique de l’Ouest) {}',
                name: "userConnected.png",
                size: 36073,
                type: "image/png",
                webkitRelativePath: ""
            })
        }
    }, [file])

    useEffect(() => {
        getAllCategories();
    }, []);

    const submitData = (e) => {
        e.preventDefault();
        setClicBtn(true);
        console.log(typeof (file))
        if (title !== "" && qty !== '' && price !== "" && description !== "" && file !== "" && categoryId !== "") {
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            axios.put(`http://localhost:5000/api/products/${id}`, { title, qty, price, description, file, categoryId }, config)
                .then(resp => {
                    navigate("/admin");
                    setClicBtn(false);
                    swal({ title: "Succès", icon: "success", text: "Tableau édité avec succès" });
                })
                .catch(err => {
                    console.log(err.response);
                    setClicBtn(false);
                })
        } else {
            swal({ title: "Avertissement", icon: "warning", text: "Veuillez remplir tous les champs svp!!!" });
            setClicBtn(false);
        }

    }
    return (
        <div className="col-12">
            <div className='container'>
                <h5 className='mt-5'>Edition du produit</h5>
                <div className='row mt-4'>
                    <div className='col-sm-4'>
                        <label>Nom du tableau</label>
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Nom du tableau' id="title" />
                        <br />
                        <label>Prix en ($)</label>
                        <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Prix' id="price" />
                        <br />
                        <label>Quantité</label>
                        <input type="text" className="form-control" value={qty} onChange={(e) => setQty(e.target.value)} placeholder='Quantité' id="qty" />
                        <br />
                        <Button variant="contained" className='mt-3' style={{ backgroundColor: '#0c50a2', color: "#fff" }} onClick={submitData}>
                            {clicBtn ? "Edition..." : "Editer"}
                        </Button>
                    </div>
                    <div className="col-sm-4">
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
                        <textarea className='form-control' value={description} id="description" onChange={(e) => setDescription(e.target.value)} placeholder='Description...'></textarea>
                    </div>
                    <div className="col-sm-4">
                        <span className='text-center'>Image du tableau</span>
                        <br />
                        <img src={file ? file : state && state.state.image} alt={title} style={{ borderRadius: "50%" }} width="200px" height="200px" />
                    </div>
                </div> <br />
            </div>
        </div>
    )
}

export default EditProduct