import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import axios from "axios";


export const Navbar = () => {

  const [user, setuser] = useState('')
  const getLoggedinUserData = () =>{
    var id = localStorage.getItem("_id")
    axios.get("http://localhost:4000/user/get/"+id).then((res)=>{
        console.log(res.data.data)
        setuser(res.data.data)
    }).catch((err)=>{
        console.log(err)
    })
}
useEffect(() => {
  
    getLoggedinUserData()
  
}, [])

  var id = localStorage.getItem("_id")
  const  navigate =useNavigate()
  function logout ()
  {
    localStorage.clear();
    navigate("/login")
  }
  
  

  var style = {
    display: "block;",
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

      <header class="header bg-white">
        <div class="container px-lg-3">
          <nav class="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
            <Link class="navbar-brand" to="/">
              <span class="fw-bold text-uppercase text-dark">Bookopedia</span>
            </Link>
            <button
              class="navbar-toggler navbar-toggler-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <Link class="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/product">
                    Contact
                  </Link>
                </li>
                
              </ul>

              <ul class="navbar-nav ms-auto">
              {  localStorage.getItem("_id") ?
                <li class="nav-item">
                  <Link class="nav-link" to="/cart">
                    {" "}
                    <i class="fas fa-dolly-flatbed me-1 text-gray"></i>Cart
                    <small class="text-gray fw-normal"></small>
                  </Link>
                </li>
                    :null
                  }
                {/* <li class="nav-item">
                  <a class="nav-link" href="#!">
                    {" "}
                    <i class="far fa-heart me-1"></i>
                    <small class="text-gray fw-normal"> (0)</small>
                  </a>
                </li> */}
                {!localStorage.getItem("_id") ? (
  <li class="nav-item">
    <Link class="nav-link" to="/login">
      <i class="fas fa-user me-1 text-gray fw-normal"></i>Login
    </Link>
  </li>
) : null}
              {  localStorage.getItem("_id") ?
                <li class="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle variant="nav-link" id="dropdown-basic">
                      <i class="fas fa-user me-1 text-gray fw-normal"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                      <Dropdown.Item  >profile</Dropdown.Item>
                      <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                :null
}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};