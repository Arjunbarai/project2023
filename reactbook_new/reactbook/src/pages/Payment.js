import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";


export const Payment = () => {



  const [book, setbook] = useState();
    const [loading, setLoading] = useState(true);
    const getApi = () => {
      axios
        .get("http://localhost:4000/form/getform")
        .then((res) => {
          setbook(res.data.product);
          console.log("------", res.data.product);
          setLoading(false);
          localStorage.setItem("products", JSON.stringify(book));
         var a = localStorage.getItem("products")
         console.log(a)
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    useEffect(() => {
      getApi();
     
    }, []);
  const getLocal = () => {
    
        const localCartData = localStorage.getItem("filteredProducts");
        if (localCartData === null) {
          return [];
        } else {
          return JSON.parse(localCartData);
        }
      };
    
      const totalprice = localStorage.getItem("totalprice");
    
      const parsedTotalPrice = Number(totalprice);
      const isValidNumber = !isNaN(parsedTotalPrice) && isFinite(parsedTotalPrice);
    
      console.log(isValidNumber ? parsedTotalPrice : totalprice);
      console.log(getLocal());
      const init = {
        cart: getLocal(),
        amount: totalprice,
      };
    
      

      
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}



const { register, handleSubmit } = useForm();
var navigate = useNavigate();
const submit = async (data) => {
  var bookData = {
    transcationcode: generateString,
    order: localStorage.getItem("products"),
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


    




  var style={
    display: 'font-size:36px'
  }
  var style1={
    display: 'font-size:36px'
  }
  

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
      <section class="py-5">
  <h2 class="h5 text-uppercase mb-4">Payment</h2>
  <div class="row">
    <div class="col-lg-8">
      <form onSubmit={handleSubmit(submit)}>
        <div class="row gy-3">
          <div class="col-lg-6">
            <label class="form-label text-sm text-uppercase" for="firstName">
              Placeholder Name
            </label>
            <input
              class="form-control form-control-lg"
              type="text"
              id="firstName"
              placeholder="Enter Placeholder Name"
            />
          </div>
          <div class="col-lg-6">
            <label class="form-label text-sm text-uppercase" for="lastName">
              Card Number <i class='fab fa-cc-visa' style={style}></i><i class='fab fa-cc-paypal' style={style1}></i>
            </label>
            <input 
              class="form-control form-control-lg"
              type="text"
              id="lastName"
              placeholder="1111-2222-3333-4444"
            />
          </div>
          <div class="col-lg-6">
            <label class="form-label text-sm text-uppercase" for="expiryDate">
              Expiry Date
            </label>
            <input
              class="form-control form-control-lg"
              type="date"
              id="expiryDate"
              placeholder=""
            />
          </div>
          <div class="col-lg-6">
            <label class="form-label text-sm text-uppercase" for="cvv">
              CVV
            </label>
            <input
              class="form-control form-control-lg"
              type="text"
              id="cvv"
              name="cvv"
              placeholder="CVV"
            />
          </div>
          <div class="col-lg-6">
            <label class="form-label text-sm text-uppercase" for="email">
              Email
            </label>
            <input
              class="form-control form-control-lg"
              type="text"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>
      </form>
    </div>
    <div class="col-lg-4">
      <div class="card border-0 rounded-0 p-lg-4 bg-light">
        <div class="card-body">
          <h5 class="text-uppercase mb-4">Price Details</h5>
          <ul class="list-unstyled mb-0">
            <li class="d-flex align-items-center justify-content-between">
              <strong class="text-uppercase small font-weight-bold">
                Shipping charge
              </strong>
              <span class="text-muted small">40 </span>
            </li>
            <li class="border-bottom my-2"></li>
            <li class="d-flex align-items-center justify-content-between mb-4">
              <strong class="text-uppercase small font-weight-bold">
                Total
              </strong>
              <span>{totalprice}</span>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="row gy-3">
    <div class="col-lg-12 form-group">
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </div>
  </div>
</section>

    </div>
  );
};