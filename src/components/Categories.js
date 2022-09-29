import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import swal from "sweetalert"

function Categories() {

    const [data, setData] = useState([])

    const getAllCategories = () => {
        axios.get('http://localhost:5000/api/categories')
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        getAllCategories()
    }, [])

    const deleteCat = (id) => {
        swal({
            title: "Avertissement.",
            text: "Etes-vous sûr de vouloir supprimer ce tableau ?",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                axios.delete(`http://localhost:5000/api/categories/${id}`)
                    .then(res => {
                        swal({ title: "Succès", icon: "success", text: "Data supprimé avec succès" })
                        getAllCategories();
                    })
                    .catch(err => {
                        console.log(err.response)
                    })
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className='container mt-3'>
            <NavLink to="/admin"><i className='fa fa-chevron-left'></i> Retour sur l'administration tableaux</NavLink>
            <div className="col-12 mt-2">
                <div className='card'>
                    <div className="card-header">
                        <div className='row'>
                            <div className='col-sm-3'>
                                <p>
                                    Gérer les catégories {data.length > 0 && <span className='fs-4'>{data.length}</span>}
                                </p>
                            </div>
                            <div className='col-sm-9'>
                                <NavLink to="/addCat">
                                    <button variant="contained" className='btn' style={{ backgroundColor: '#0c50a2', color: "#fff", float: "right" }}>
                                        Ajouter une catégorie
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nom</th>
                                    <th>Description</th>
                                    <th style={{ width: "250px" }}>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data ?
                                    data.map((val, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{val.nom}</td>
                                                <td>{val.desc}</td>
                                                <td>
                                                    <NavLink to={{ pathname: "/addcat" }} state={{ state: val }} >
                                                        <button className='btn btnEdit btn-outline-dark'>
                                                            Editer  <i className="fa fa-edit"></i>
                                                        </button>
                                                    </NavLink>
                                                    <button className='btn btnEdit btn-outline-dark ms-2' onClick={() => deleteCat(val.id)}>Supprimer <i className='fa fa-trash'></i></button>
                                                </td>
                                            </tr>
                                        )
                                    }) :
                                    <tr>
                                        <td colSpan="4px"><i className='fa fa-spinner fa-spin'></i></td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories