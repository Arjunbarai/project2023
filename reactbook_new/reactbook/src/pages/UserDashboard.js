


import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const UserDashboard = () => {


  return (

    <div>
      <Helmet>
        <link rel="stylesheet" href="vendor/nouislider/nouislider.min.css" />

        <link rel="stylesheet" href="vendor/choices.js/public/assets/styles/choices.min.css" />

        <link rel="stylesheet" href="vendor/swiper/swiper-bundle.min.css" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&amp;display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400;800&amp;display=swap" />

        <link rel="stylesheet" href="css/style.default.css" id="theme-stylesheet" />

        <link rel="stylesheet" href="css/custom.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
        <link rel="shortcut icon" href="img/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Helmet>

      <div class="row">

        <div class="col-lg-4 col-sm-6">
          <div class="product text-center">
            <div class="mb-3 position-relative">
              <div class="badge text-white bg-"></div><a class="d-block" href="detail.html"><img class="img-fluid w-100" src="img/product-1.jpg" alt="..."/></a>
              <div class="product-overlay">
                <ul class="mb-0 list-inline">
                  <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark" href="#!"><i class="far fa-heart"></i></a></li>
                  <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                  <li class="list-inline-item mr-0"><a class="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i class="fas fa-expand"></i></a></li>
                </ul>
              </div>
            </div>
            <h6> <a class="reset-anchor" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
            <p class="small text-muted">$250</p>
          </div>
        </div>

      </div>













    </div>



  )
}
