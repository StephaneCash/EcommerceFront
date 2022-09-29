import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom';
import swal from "sweetalert";

function AddCat() {

    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;

    const [clicBtn, setClicBtn] = useState(false)

    const initialiseValues = { id: "", nom: "", desc: "" };
    const [formData, setFormData] = useState(initialiseValues);

    const { id, nom, desc } = formData;

    const changeValue = (e) => {
        const { value, id } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    useEffect(() => {
        if (state) {
            setFormData(state.state)
            console.log(state)
        }
    }, [state]);

    const submitData = () => {
        setClicBtn(true)
        if (state) {
            axios.put(`http://localhost:5000/api/categories/${id}`, { nom, desc })
                .then(resp => {
                    swal({ title: "Succès", icon: "success", text: "Catégorie éditée avec succès" });
                    setClicBtn(false)
                    navigate('/categories');
                })
                .catch(err => {
                    console.log(err.response)
                    setClicBtn(false)
                })
        } else {
            axios.post("http://localhost:5000/api/categories", { nom, desc })
                .then(resp => {
                    swal({ title: "Succès", icon: "success", text: "Catégorie ajoutée avec succès" });
                    setClicBtn(false)
                    navigate("/categories")
                })
                .catch(err => {
                    setClicBtn(false)
                    console.log(err.response)
                })
        }
    }
    return (
        <div className="col-12">
            <>
                <div className="col-12">
                    <div className='container mt-2'>
                        <div className='container mt-2'>
                            <h5>{state ? "Editer cette catégorie " : "Ajouter une catégorie"} </h5>
                            <div className="col-sm-6">
                                <label>Nom de la catégorie</label>
                                <input type="text" placeholder="Nom d'une catégorie" className="form-control" value={nom} id="nom" onChange={changeValue} />
                                <label className='mt-2'>Description</label>
                                <textarea className="form-control" value={desc} placeholder='Description...' id="desc" onChange={changeValue}></textarea>
                                <br />
                                <Button variant="contained" className='mt-3' style={{ backgroundColor: '#0c50a2', color: "#fff" }} onClick={submitData}>
                                    {state ? clicBtn ? "Edition..." : "Editer" : clicBtn ? "Ajout..." : "Ajouter"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default AddCat