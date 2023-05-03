import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const Productdetail = (setId) => {
  const { id } = useParams();
  const [values, setvalues] = useState({
    id: id,
    title: "",
    price: "",
    description: "",
    File: "",
    qty: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/book/book/${id}`)
      .then((res) => {
        setvalues(res.data.data);
      })
      .catch((res) => console.log(res));
  }, [id]);

  const [users, setusers] = useState("");

  const getLoggedinUserData = () => {
    var id = localStorage.getItem("_id");
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

  const addToCart = (e) => {
    e.preventDefault();
    setvalues({ ...values, id: e.target.value });
    var bookData = {
      product: e.target.value,
      user: localStorage.getItem("_id"),
    };
    console.log(bookData.product);
    axios
      .post("http://localhost:4000/cart/cart", bookData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLoggedinUserData();
  }, []);

  var style6 = {
    transform: "translate3d(0px, 0px, 0px);",
  };
  var style7 = {
    width: "503px;",
  };

  return (
    <div>
      <Helmet>
        <link rel="stylesheet" to="vendor/nouislider/nouislider.min.css" />

        <link
          rel="stylesheet"
          to="vendor/choices.js/public/assets/styles/choices.min.css"
        />

        <link rel="stylesheet" to="vendor/swiper/swiper-bundle.min.css" />

        <link
          rel="stylesheet"
          to="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&amp;display=swap"
        />
        <link
          rel="stylesheet"
          to="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400;800&amp;display=swap"
        />

        <link
          rel="stylesheet"
          to="css/style.default.css"
          id="theme-stylesheet"
        />

        <link rel="stylesheet" to="css/custom.css" />
        <link
          rel="stylesheet"
          to="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
        <link rel="shortcut icon" to="img/favicon.png" />
        <link
          rel="stylesheet"
          to="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
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
      <div class="container">
        <section class="py-5">
          <div class="container">
            <div class="row mb-5">
              <div class="col-lg-6">
                <div class="row m-sm-0">
                  <div class="col-sm-10 order-1 order-sm-2">
                    <div class="swiper product-slider swiper-initialized swiper-horizontal swiper-pointer-events">
                      <div
                        class="swiper-wrapper"
                        id="swiper-wrapper-0b0103228be7ff1083"
                        aria-live="polite"
                        style={style6}
                      >
                        <div
                          class="swiper-slide h-auto swiper-slide-active"
                          role="group"
                          aria-label="1 / 4"
                          style={style7}
                        >
                          <Link
                            class="glightbox product-view"
                            to="img/product-detail-1.jpg"
                            data-gallery="gallery2"
                            data-glightbox="Product item 1"
                          >
                            <img
                              class="img-fluid"
                              src={`https://drive.google.com/uc?id=${values.File?.bookopediaId}`}
                              alt="..."
                            />
                          </Link>
                        </div>
                      </div>
                      <span
                        class="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <ul class="list-inline mb-2 text-sm">
                  <li class="list-inline-item m-0">
                    <i class="fas fa-star small text-warning"></i>
                  </li>
                  <li class="list-inline-item m-0 1">
                    <i class="fas fa-star small text-warning"></i>
                  </li>
                  <li class="list-inline-item m-0 2">
                    <i class="fas fa-star small text-warning"></i>
                  </li>
                  <li class="list-inline-item m-0 3">
                    <i class="fas fa-star small text-warning"></i>
                  </li>
                  <li class="list-inline-item m-0 4">
                    <i class="fas fa-star small text-warning"></i>
                  </li>
                </ul>
                <h1>{values.title}</h1>
                <p class="text-muted lead">${values.price}</p>
                <p class="text-sm mb-4"></p>
                <div class="row align-items-stretch mb-4">
                  <div class="col-sm-5 pr-sm-0">
                    <div class="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
                      <span class="small text-uppercase text-gray mr-4 no-select">
                        Quantity
                      </span>
                      <div class="quantity">
                        <button class="dec-btn p-0">
                          <i class="fas fa-caret-left"></i>
                        </button>
                        <input
                          class="form-control border-0 shadow-0 p-0"
                          type="text"
                          value="1"
                        />
                        <button class="inc-btn p-0">
                          <i class="fas fa-caret-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3 pl-sm-0">
                    <button
                      value={values._id}
                      onClick={addToCart}
                      className="btn btn-sm btn-dark"
                      type="submit"

                    >
                      Add to cart
                    </button>
                  </div>
                </div>

                <ul class="list-unstyled small d-inline-block">
                  <li class="px-3 py-2 mb-1 bg-white">
                    <strong class="text-uppercase">Available Qty:</strong>
                    <span class="ms-2 text-muted">{values.qty}</span>
                  </li>
                  <li class="px-3 py-2 mb-1 bg-white text-muted">
                    <strong class="text-uppercase text-dark">Category:</strong>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="nav nav-tabs border-0" id="myTab" role="tablist">
              <li class="nav-item">
                <Link
                  class="nav-link text-uppercase active"
                  id="description-tab"
                  data-bs-toggle="tab"
                  to="#description"
                  role="tab"
                  aria-controls="description"
                  aria-selected="true"
                >
                  Description
                </Link>
              </li>

            </ul>
            <div class="tab-content mb-5" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="description"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                <div class="p-4 p-lg-5 bg-white">
                  <h6 class="text-uppercase">{values.description} </h6>
                  <p class="text-muted text-sm mb-0"></p>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="reviews"
                role="tabpanel"
                aria-labelledby="reviews-tab"
              >
                <div class="p-4 p-lg-5 bg-white">
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="d-flex mb-3">
                        <div class="flex-shrink-0">
                          <img
                            class="rounded-circle"
                            src="img/customer-1.png"
                            alt=""
                            width="50"
                          />
                        </div>
                        <div class="ms-3 flex-shrink-1">
                          <h6 class="mb-0 text-uppercase">Jason Doe</h6>
                          <p class="small text-muted mb-0 text-uppercase">
                            20 May 2020
                          </p>
                          <ul class="list-inline mb-1 text-xs">
                            <li class="list-inline-item m-0">
                              <i class="fas fa-star text-warning"></i>
                            </li>
                            <li class="list-inline-item m-0">
                              <i class="fas fa-star text-warning"></i>
                            </li>
                            <li class="list-inline-item m-0">
                              <i class="fas fa-star text-warning"></i>
                            </li>
                            <li class="list-inline-item m-0">
                              <i class="fas fa-star text-warning"></i>
                            </li>
                            <li class="list-inline-item m-0">
                              <i class="fas fa-star-half-alt text-warning"></i>
                            </li>
                          </ul>
                          <p class="text-sm mb-0 text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <img
                            class="rounded-circle"
                            src="img/customer-2.png"
                            alt=""
                            width="50"
                          />
                        </div>
                        <div class="ms-3 flex-shrink-1">
                          <h6 class="mb-0 text-uppercase">Jane Doe</h6>
                          <p class="small text-muted mb-0 text-uppercase">
                            20 May 2020
                          </p>
                          <ul class="list-inline mb-1 text-xs">
                            <li class="list-inline-item m-0">
                              <i class="fas fa-star text-warning"></i>
                            </li>
                            <li class="list-inline-item m-0">
                              <i class="fas fa-star text-warning"></i>
                            </li>
                            <li class="list-inline-item m-0">
                              <i class="fas fa-star text-warning"></i>
                            </li>
                            <li class="list-inline-item m-0">
                              <i class="fas fa-star text-warning"></i>
                            </li>
                            <li class="list-inline-item m-0">
                              <i class="fas fa-star-half-alt text-warning"></i>
                            </li>
                          </ul>
                          <p class="text-sm mb-0 text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 class="h5 text-uppercase mb-4">Related products</h2>
            <div class="row"></div>
          </div>
        </section>
      </div>
    </div>
  );
};