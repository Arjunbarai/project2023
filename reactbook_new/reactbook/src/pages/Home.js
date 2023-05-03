import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
export const Home = () => {
  var style = {
    background: "url(img/book1.jpg)",
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

      <section
        class="hero pb-3 bg-cover bg-center d-flex align-items-center"
        style={style}
      >
        <div class="container py-5">
          <div class="row px-4 px-lg-5">
            <div class="col-lg-6">
              <p class="text-muted small text-uppercase mb-2">
                New Inspiration 2023
              </p>
              <h1 class="h2 text-uppercase mb-3">20% off on new season</h1>
              <Link class="btn btn-dark" to="/shop">
                Browse collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-5">
        <header class="text-center">
          <p class="small text-muted small text-uppercase mb-1">
            Carefully created collections
          </p>
          <h2 class="h5 text-uppercase mb-4">Browse our categories</h2>
        </header>
        <div class="row">
          <div class="col-md-4">
            <Link class="category-item" to="/shop">
              <img class="img-fluid" src="img/adventure.jpg" alt="" />
              <strong class="category-item-title">Adventure Books</strong>
            </Link>
          </div>
          <div class="col-md-4">
            <Link class="category-item mb-4" to="/shop">
              <img class="img-fluid" src="img/history.jpg" alt="" />
              <strong class="category-item-title">History Books</strong>
            </Link>
            <Link class="category-item" to="/shop">
              <img class="img-fluid" src="img/comic.jpg" alt="/" />
              <strong class="category-item-title">Comic</strong>
            </Link>
          </div>
          <div class="col-md-4">
            <Link class="category-item" to="/shop">
              <img class="img-fluid" src="img/horror.jpg" alt="" />
              <strong class="category-item-title">Horror Books</strong>
            </Link>
          </div>
        </div>
      </section>

      <section class="py-5">
        <header>
          <p class="small text-muted small text-uppercase mb-1">
            Made the hard way
          </p>
          <h2 class="h5 text-uppercase mb-4">Top trending products</h2>
        </header>
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product text-center">
              <div class="position-relative mb-3">
                <div class="badge text-white bg-"></div>
                <Link class="d-block" to="detail.html">
                  <img class="img-fluid w-100" src="img/12.jpg" alt="..." />
                </Link>
                <div class="product-overlay">
                  <ul class="mb-0 list-inline">
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-outline-dark" to="#!">
                        <i class="far fa-heart"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-dark" to="/cart">
                        Add to cart
                      </Link>
                    </li>
                    <li class="list-inline-item me-0">
                      <Link
                        class="btn btn-sm btn-outline-dark"
                        to="#productView"
                        data-bs-toggle="modal"
                      >
                        <i class="fas fa-expand"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <Link class="reset-anchor" to="/product">
                  Adventure Begins
                </Link>
              </h6>
              <p class="small text-muted">$250</p>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product text-center">
              <div class="position-relative mb-3">
                <div class="badge text-white bg-primary">Sale</div>
                <Link class="d-block" to="detail.html">
                  <img class="img-fluid w-100" src="img/13.jpg" alt="..." />
                </Link>
                <div class="product-overlay">
                  <ul class="mb-0 list-inline">
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-outline-dark" to="#!">
                        <i class="far fa-heart"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-dark" to="/cart">
                        Add to cart
                      </Link>
                    </li>
                    <li class="list-inline-item me-0">
                      <Link
                        class="btn btn-sm btn-outline-dark"
                        to="#productView"
                        data-bs-toggle="modal"
                      >
                        <i class="fas fa-expand"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <Link class="reset-anchor" to="/product">
                  Hiking Forward 30 Days of Experince
                </Link>
              </h6>
              <p class="small text-muted">$300</p>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product text-center">
              <div class="position-relative mb-3">
                <div class="badge text-white bg-"></div>
                <Link class="d-block" to="detail.html">
                  <img class="img-fluid w-100" src="img/14.jpg" alt="..." />
                </Link>
                <div class="product-overlay">
                  <ul class="mb-0 list-inline">
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-outline-dark" to="#!">
                        <i class="far fa-heart"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-dark" to="/cart">
                        Add to cart
                      </Link>
                    </li>
                    <li class="list-inline-item me-0">
                      <Link
                        class="btn btn-sm btn-outline-dark"
                        to="#productView"
                        data-bs-toggle="modal"
                      >
                        <i class="fas fa-expand"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <Link class="reset-anchor" to="detail.html">
                  Party Begins Here
                </Link>
              </h6>
              <p class="small text-muted">$25</p>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product text-center">
              <div class="position-relative mb-3">
                <div class="badge text-white bg-info">New</div>
                <Link class="d-block" to="detail.html">
                  <img class="img-fluid w-100" src="img/15.jpg" alt="..." />
                </Link>
                <div class="product-overlay">
                  <ul class="mb-0 list-inline">
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-outline-dark" to="#!">
                        <i class="far fa-heart"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-dark" to="/cart">
                        Add to cart
                      </Link>
                    </li>
                    <li class="list-inline-item me-0">
                      <Link
                        class="btn btn-sm btn-outline-dark"
                        to="#productView"
                        data-bs-toggle="modal"
                      >
                        <i class="fas fa-expand"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <Link class="reset-anchor" to="/product">
                  Action Comic Books
                </Link>
              </h6>
              <p class="small text-muted">$351</p>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product text-center">
              <div class="position-relative mb-3">
                <div class="badge text-white bg-danger">Sold</div>
                <Link class="d-block" to="detail.html">
                  <img class="img-fluid w-100" src="img/16.jpg" alt="..." />
                </Link>
                <div class="product-overlay">
                  <ul class="mb-0 list-inline">
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-outline-dark" to="#!">
                        <i class="far fa-heart"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-dark" to="/cart">
                        Add to cart
                      </Link>
                    </li>
                    <li class="list-inline-item me-0">
                      <Link
                        class="btn btn-sm btn-outline-dark"
                        to="#productView"
                        data-bs-toggle="modal"
                      >
                        <i class="fas fa-expand"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <Link class="reset-anchor" to="/product">
                  Happy Halloween Night party
                </Link>
              </h6>
              <p class="small text-muted">$250</p>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product text-center">
              <div class="position-relative mb-3">
                <div class="badge text-white bg-"></div>
                <Link class="d-block" to="detail.html">
                  <img class="img-fluid w-100" src="img/17.jpg" alt="..." />
                </Link>
                <div class="product-overlay">
                  <ul class="mb-0 list-inline">
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-outline-dark" to="#!">
                        <i class="far fa-heart"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-dark" to="/cart">
                        Add to cart
                      </Link>
                    </li>
                    <li class="list-inline-item me-0">
                      <Link
                        class="btn btn-sm btn-outline-dark"
                        to="#productView"
                        data-bs-toggle="modal"
                      >
                        <i class="fas fa-expand"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <Link class="reset-anchor" to="/product">
                  Horror & Scares Party
                </Link>
              </h6>
              <p class="small text-muted">$300</p>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product text-center">
              <div class="position-relative mb-3">
                <div class="badge text-white bg-"></div>
                <Link class="d-block" to="detail.html">
                  <img class="img-fluid w-100" src="img/18.jpg" alt="..." />
                </Link>
                <div class="product-overlay">
                  <ul class="mb-0 list-inline">
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-outline-dark" to="#!">
                        <i class="far fa-heart"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-dark" to="/cart">
                        Add to cart
                      </Link>
                    </li>
                    <li class="list-inline-item me-0">
                      <Link
                        class="btn btn-sm btn-outline-dark"
                        to="#productView"
                        data-bs-toggle="modal"
                      >
                        <i class="fas fa-expand"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <Link class="reset-anchor" to="/product">
                  Happy Independence Day
                </Link>
              </h6>
              <p class="small text-muted">$25</p>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product text-center">
              <div class="position-relative mb-3">
                <div class="badge text-white bg-"></div>
                <Link class="d-block" to="detail.html">
                  <img class="img-fluid w-100" src="img/19.jpg" alt="..." />
                </Link>
                <div class="product-overlay">
                  <ul class="mb-0 list-inline">
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-outline-dark" to="#!">
                        <i class="far fa-heart"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item m-0 p-0">
                      <Link class="btn btn-sm btn-dark" to="/cart">
                        Add to cart
                      </Link>
                    </li>
                    <li class="list-inline-item me-0">
                      <Link
                        class="btn btn-sm btn-outline-dark"
                        to="#productView"
                        data-bs-toggle="modal"
                      >
                        <i class="fas fa-expand"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <Link class="reset-anchor" to="/product">
                  International Arts Fairs
                </Link>
              </h6>
              <p class="small text-muted">$351</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5 bg-light">
        <div class="container">
          <div class="row text-center gy-3">
            <div class="col-lg-4">
              <div class="d-inline-block">
                <div class="d-flex align-items-end">
                  <svg class="svg-icon svg-icon-big svg-icon-light">
                    {/* <use link:to="#delivery-time-1"> </use> */}
                  </svg>
                  <div class="text-start ms-3">
                    <h6 class="text-uppercase mb-1">Free shipping</h6>
                    <p class="text-sm mb-0 text-muted">
                      Free shipping worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="d-inline-block">
                <div class="d-flex align-items-end">
                  <svg class="svg-icon svg-icon-big svg-icon-light">
                    {/* <use xlink:to="#helpline-24h-1"> </use> */}
                  </svg>
                  <div class="text-start ms-3">
                    <h6 class="text-uppercase mb-1">24 x 7 service</h6>
                    <p class="text-sm mb-0 text-muted">
                      Free shipping worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="d-inline-block">
                <div class="d-flex align-items-end">
                  <svg class="svg-icon svg-icon-big svg-icon-light">
                    {/* <use xlink:to="#label-tag-1"> </use> */}
                  </svg>
                  <div class="text-start ms-3">
                    <h6 class="text-uppercase mb-1">Festivaloffers</h6>
                    <p class="text-sm mb-0 text-muted">
                      Free shipping worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="container p-0">
          <div class="row gy-3">
            <div class="col-lg-6">
              <h5 class="text-uppercase">Let's be friends!</h5>
              <p class="text-sm text-muted mb-0">
                Nisi nisi tempor consequat laboris nisi.
              </p>
            </div>
            <div class="col-lg-6">
              <form action="#">
                <div class="input-group">
                  <input
                    class="form-control form-control-lg"
                    type="email"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon2"
                  />
                  <button class="btn btn-dark" id="button-addon2" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
