import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function FindProduct() {

    const { id } = useParams();

    const [product, setProduct] = useState({});

    // Fetch Product
    function getProductById() {

        axios.get(`http://localhost:8000/products/${id}/`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getProductById();
    }, []);

    return (
        <React.Fragment>

            <div
                className="container-fluid bg-white py-5"
                style={{ minHeight: "100vh" }}
            >

                <div className="row justify-content-center">

                    <div className="col-lg-6 col-md-8 col-sm-10">

                        <div className="card border rounded-4">

                            {/* Header */}
                            <div className="bg-white border-bottom p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>
                                        <p className="text-warning small fw-bold mb-1">
                                            PRODUCT DETAILS
                                        </p>

                                        <h4 className="fw-bold text-dark mb-1">
                                            {product.prodname}
                                        </h4>

                                        <small className="text-muted">
                                            Inventory Management
                                        </small>
                                    </div>

                                    <div>
                                        <i className="fa fa-box-open fa-2x text-warning"></i>
                                    </div>

                                </div>

                            </div>

                            {/* Body */}
                            <div className="card-body p-4 bg-white">

                                <div className="row g-3">

                                    {/* Product ID */}
                                    <div className="col-md-6">

                                        <div className="border rounded-3 p-3">

                                            <small className="text-muted d-block mb-2">
                                                Product ID
                                            </small>

                                            <h6 className="fw-bold text-primary mb-0">
                                                {product.prodid}
                                            </h6>

                                        </div>

                                    </div>

                                    {/* Product Name */}
                                    <div className="col-md-6">

                                        <div className="border rounded-3 p-3">

                                            <small className="text-muted d-block mb-2">
                                                Product Name
                                            </small>

                                            <h6 className="fw-bold text-success mb-0">
                                                {product.prodname}
                                            </h6>

                                        </div>

                                    </div>

                                    {/* Product Price */}
                                    <div className="col-12">

                                        <div className="border rounded-3 p-3">

                                            <small className="text-muted d-block mb-2">
                                                Product Price
                                            </small>

                                            <h5 className="fw-bold text-danger mb-0">
                                                ₹ {product.prodprice}
                                            </h5>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Footer */}
                            <div className="card-footer bg-white border-top p-3">

                                <div className="d-flex justify-content-between">

                                    <Link
                                        to={`/edit/${id}`}
                                        className="btn btn-dark btn-sm rounded-pill px-4"
                                    >
                                        <i className="fa fa-edit me-2"></i>
                                        Edit
                                    </Link>

                                    <Link
                                        to="/"
                                        className="btn btn-outline-secondary btn-sm rounded-pill px-4"
                                    >
                                        <i className="fa fa-arrow-left me-2"></i>
                                        Back
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </React.Fragment>
    );
}