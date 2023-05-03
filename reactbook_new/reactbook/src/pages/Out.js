import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export const Out = (setId) => {
    var id = localStorage.getItem("_id");
    const [users, setusers] = useState("");
    const getLoggedinUserData = () => {
        axios
            .get("http://localhost:4000/user/get/" + id)
            .then((res) => {
                console.log(res.data.data);
                setusers(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getLoggedinUserData();

        getApi();
    }, []);

    const [books, setbooks] = useState();
    const [loading, setLoading] = useState(true);
    const [totalprice, setTotalPrice] = useState();
    const [totalprices, setTotalPrices] = useState();
    var url = process.env.PUBLIC_URL + "/uploads/";
    console.log(url);

    const getApi = () => {
        axios
            .get("http://localhost:4000/cart/getproduct")
            .then((res) => {
                const filteredProducts = res.data.product.filter((product) => {
                    return product.user._id === id;
                });
                console.log("......", filteredProducts);
                var subtotal = 0;
                for (let i = 0; i < filteredProducts.length; i++) {
                    console.log(filteredProducts[i]);

                    subtotal =
                        subtotal +
                        filteredProducts[i].product.price * filteredProducts[i].qty;
                }
                setTotalPrices(subtotal);

                var total = 40;
                for (let i = 0; i < filteredProducts.length; i++) {
                    console.log(filteredProducts[i]);

                    total =
                        total + filteredProducts[i].product.price * filteredProducts[i].qty;
                }
                setTotalPrice(total);
                setbooks(filteredProducts);

                setLoading(false);
            })

            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const getLocal = () => {
        const localCartData = localStorage.getItem("filtered");
        if (localCartData === null) {
            return [];
        } else {
            return JSON.parse(localCartData);
        }
    };

    const totalpric = localStorage.getItem("totalprice");

    const parsedTotalPrice = Number(totalprice);
    const isValidNumber = !isNaN(parsedTotalPrice) && isFinite(parsedTotalPrice);

    console.log(isValidNumber ? parsedTotalPrice : totalpric);
    console.log(getLocal());


    const { register, handleSubmit } = useForm();
    var navigate = useNavigate();

    const submit = async (data) => {
        var bookData = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            pincode: data.pincode,
            address: data.address,
            city: data.city,
            state: data.state,
            cart: getLocal(),
            total: totalpric,
            user: localStorage.getItem("_id"),
        };

        console.log(bookData);
        await axios
            .post("http://localhost:4000/form/form", bookData)
            .then((res) => {
                console.log(res.data.data);
                alert("Data Add Succefully");
                navigate("/payment")
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="vendor/nouislider/nouislider.min.css" />

                <link
                    rel="stylesheet"
                    href="vendor/choices.js/public/assets/styles/choices.min.css"
                />

                <link rel="stylesheet" href="vendor/swiper/swiper-bundle.min.css" />

                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&amp;display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400;800&amp;display=swap"
                />

                <link
                    rel="stylesheet"
                    href="css/style.default.css"
                    id="theme-stylesheet"
                />

                <link rel="stylesheet" href="css/custom.css" />
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
                    integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                    crossorigin="anonymous"
                />
                <link rel="shortcut icon" href="img/favicon.png" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <script
                    src="https://kit.fontawesome.com/a076d05399.js"
                    crossorigin="anonymous"
                />

                <script src="vendor/glightbox/js/glightbox.min.js" />
                <script src="vendor/nouislider/nouislider.min.js" />
                <script src="vendor/swiper/swiper-bundle.min.js" />
                <script src="vendor/choices.js/public/assets/scripts/choices.min.js" />
                <script src="js/front.js" />
            </Helmet>
            <section class="py-5 bg-light">
                <div class="container">
                    <div class="row px-4 px-lg-5 py-lg-4 align-items-center">
                        <div class="col-lg-6">
                            <h1 class="h2 text-uppercase mb-0">Checkout</h1>
                        </div>
                        <div class="col-lg-6 text-lg-end">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                                    <li class="breadcrumb-item">
                                        <Link class="text-dark" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <Link class="text-dark" to="/cart">
                                            Cart
                                        </Link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Checkout
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-5">
                <h2 class="h5 text-uppercase mb-4">Billing details</h2>
                <div class="row">
                    <div class="col-lg-8">
                        <form onSubmit={handleSubmit(submit)}>
                            <div class="row gy-3">
                                <div class="col-lg-6">
                                    <label
                                        class="form-label text-sm text-uppercase"
                                        for="firstName"
                                    >
                                        First name{" "}
                                    </label>
                                    <input
                                        class="form-control form-control-lg"
                                        type="text"
                                        id="firstName"
                                        placeholder="Enter your first name"
                                        {...register("firstname")}
                                    />
                                </div>
                                <div class="col-lg-6">
                                    <label
                                        class="form-label text-sm text-uppercase"
                                        for="lastName"
                                    >
                                        Last name{" "}
                                    </label>
                                    <input
                                        class="form-control form-control-lg"
                                        type="text"
                                        id="lastName"
                                        placeholder="Enter your last name"
                                        {...register("lastname")}
                                    />
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label text-sm text-uppercase" for="email">
                                        Email address{" "}
                                    </label>
                                    <input
                                        class="form-control form-control-lg"
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        {...register("email")}
                                    />
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label text-sm text-uppercase" for="phone">
                                        Phone number{" "}
                                    </label>
                                    <input
                                        class="form-control form-control-lg"
                                        type="tel"
                                        id="phone"
                                        placeholder="Mobile NO"
                                        {...register("phone")}
                                    />
                                </div>

                                <div class="col-lg-6">
                                    <label class="form-label text-sm text-uppercase" for="phone">
                                        Pincode{" "}
                                    </label>
                                    <input
                                        class="form-control form-control-lg"
                                        type="pincode"
                                        id="pincode"
                                        placeholder="Pincode"
                                        {...register("pincode")}
                                    />
                                </div>
                                <div class="col-lg-12">
                                    <label
                                        class="form-label text-sm text-uppercase"
                                        for="address"
                                    >
                                        Address{" "}
                                    </label>
                                    <input
                                        class="form-control form-control-lg"
                                        type="text"
                                        id="address"
                                        placeholder="House number and street name"
                                        {...register("address")}
                                    />
                                </div>

                                <div class="col-lg-6">
                                    <label class="form-label text-sm text-uppercase" for="city">
                                        City{" "}
                                    </label>
                                    <input
                                        class="form-control form-control-lg"
                                        type="text"
                                        id="city"
                                        {...register("city")}
                                    />
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label text-sm text-uppercase" for="state">
                                        State{" "}
                                    </label>
                                    <input
                                        class="form-control form-control-lg"
                                        type="text"
                                        id="state"
                                        {...register("state")}
                                    />
                                </div>

                                <div class="col-lg-12 form-group">
                                    {/* <Link className="d-block" to="/payment"> */}
                                    <button class="btn btn-dark" type="submit">
                                        Place order
                                    </button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-lg-4">
                        <div class="card border-0 rounded-0 p-lg-4 bg-light">
                            <div class="card-body">
                                <h5 class="text-uppercase mb-4">Your order</h5>
                                <ul class="list-unstyled mb-0">
                                    {books?.map((u) => {
                                        return (
                                            <React.Fragment key={u.id}>
                                                <li class="d-flex align-items-center justify-content-between">
                                                    <strong class="small fw-bold">
                                                        {u.product.title}
                                                    </strong>
                                                    <span class="text-muted small">
                                                        {u.product.price}
                                                    </span>
                                                </li>
                                                <li class="border-bottom my-2"></li>
                                            </React.Fragment>
                                        );
                                    })}
                                    {/* <li class="d-flex align-items-center justify-content-between"><strong class="small fw-bold">{u.product.title}</strong><span class="text-muted small">{u.product.price}</span></li>
                                        <li class="border-bottom my-2"></li>
                                        <li class="d-flex align-items-center justify-content-between"><strong class="small fw-bold">Gray Nike running shoes</strong><span class="text-muted small">$351</span></li>
                                        <li class="border-bottom my-2"></li> */}
                                    <li class="d-flex align-items-center justify-content-between">
                                        <strong class="text-uppercase small fw-bold">Total</strong>
                                        <span>{totalpric}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};