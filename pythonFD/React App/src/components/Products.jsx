import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Products() {

    const [Products, setProducts] = useState([]);

    // Get Products
    function getProducts() {
        axios.get("http://localhost:8000/products/")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getProducts();
    }, []);

    // Delete Product
    function del(id) {

        if(window.confirm("Are you sure you want to delete?")){

            axios.delete(`http://localhost:8000/products/${id}/`)
                .then(() => {

                    toast.success("Record Deleted Successfully", {
                        position: "top-center",
                        autoClose: 3000
                    });

                    // Refresh Product List
                    getProducts();
                })
                .catch((error) => {
                    console.log(error);
                    toast.error("Delete Failed");
                });
        }
    }

    return (
        <React.Fragment>
            <div className="container animated jackInTheBox">

                <section>

                    <div className="row">
                        <div className="col">
                            <p className="lead text-teal">
                                Product Management System
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <Link to="/add" className="btn btn-sm btn-primary">
                                Add Product
                            </Link>
                        </div>

                        <div className="col-md-4">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Product"
                            />
                        </div>
                    </div>

                </section>

                <section className="mt-4">

                    {
                        Products.length > 0 ?

                            <table className="table table-bordered table-striped table-hover text-center">

                                <thead className="bg-secondary text-white">
                                    <tr>
                                        <th>Product ID</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        Products.map((product) => {
                                            return (
                                                <tr key={product.id}>
                                                    <td>{product.prodid}</td>
                                                    <td>{product.prodname}</td>
                                                    <td>{product.prodprice}</td>

                                                    <td>

                                                        <Link to={`/find/${product.id}`}>
                                                            <i className="fa fa-eye fa-2x text-primary"></i>
                                                        </Link>

                                                        <Link to={`/edit/${product.id}`}>
                                                            <i className="ml-3 fa fa-pen fa-2x text-warning"></i>
                                                        </Link>

                                                        <i
                                                            onClick={() => del(product.id)}
                                                            className="ml-3 fa fa-trash fa-2x text-danger"
                                                            style={{ cursor: "pointer" }}
                                                        ></i>

                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>

                            </table>

                            :

                            <p className="h1 text-danger text-center">
                                Records Not Found
                            </p>
                    }

                </section>

            </div>
        </React.Fragment>
    );
}