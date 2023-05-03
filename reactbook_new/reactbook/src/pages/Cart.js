import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
export const Cart = ({ bookId }) => {
  var id = localStorage.getItem("_id");
  const [users, setusers] = useState("");
  
  const [books, setbooks] = useState();
  const [loading, setLoading] = useState(true);
  const [totalprice, setTotalPrice] = useState();
  const [totalprices, setTotalPrices] = useState();
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
  const incrementCount=(data)=>{
    axios.put('http://localhost:4000/cart/inccount/'+data).then((res)=>{
      console.log(res);
      getApi()
    }).catch((err)=>{
      console.log(err);
    })
  }
  const decrementCount=(data)=>{
  

    axios.put('http://localhost:4000/cart/deccount/'+data).then((res)=>{
      console.log(res);
      getApi()
    }).catch((err)=>{
      console.log(err);
    })
      }



 
  const getApi = () => {
    axios.get('http://localhost:4000/cart/getloggedinusercart/'+id).then((res)=>{
      console.log(">>>>>>>>>>>>>>>>>>>>",res.data);
      const filteredProducts=(res.data);
      console.log("......", filteredProducts)
      
      var subtotal = 0;
      for (let i = 0; i < filteredProducts.length; i++) {
        console.log(filteredProducts[i])

        subtotal = subtotal + filteredProducts[i].product.price * filteredProducts[i].qty;

      }
      setTotalPrices(subtotal)
      var total = 40;
      for (let i = 0; i < filteredProducts.length; i++) {
        console.log(filteredProducts[i])

        total = total + filteredProducts[i].product.price * filteredProducts[i].qty;

      }
      setTotalPrice(total)
      setbooks(filteredProducts);
      localStorage.setItem("totalprice", total)
      localStorage.setItem("filtered", JSON.stringify(filteredProducts));

      localStorage.setItem("totalprices", subtotal)






    }).catch((err)=>{
      setusers(">>>>>>>>>>>>>>",err);
    })
  };







  const deleteUser = (id) => {

    axios.delete("http://localhost:4000/cart/delete/" + id).then((res) => {



getApi()


    }).catch((err) => {

      console.log(err)
    })
  }


  useEffect(() => {
  
getApi()
getLoggedinUserData();
  }, [])
  



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

      <section class="py-5 bg-light">
        <div class="container">
          <div class="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div class="col-lg-6">
              <h1 class="h2 text-uppercase mb-0">Cart</h1>
              <h1>{users.name}</h1>
            </div>
            <div class="col-lg-6 text-lg-end">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                  <li class="breadcrumb-item">
                    <Link class="text-dark" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Cart
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
        <h2 class="h5 text-uppercase mb-4"></h2>
        <div class="row">
          <div class="col-lg-8 mb-4 mb-lg-0">
            <div class="table-responsive mb-4">
              <table class="table text-nowrap">
                <thead class="bg-light">
                  <tr>
                    <th class="border-0 p-3" scope="col">
                      <strong class="text-sm text-uppercase">Product</strong>
                    </th>
                    <th class="border-0 p-3" scope="col">
                      <strong class="text-sm text-uppercase">Title</strong>
                    </th>
                    <th class="border-0 p-3" scope="col">
                      <strong class="text-sm text-uppercase">Price</strong>
                    </th>

                    <th class="border-0 p-3" scope="col">
                      <strong class="text-sm text-uppercase">Quantity</strong>
                    </th>

                    <th class="border-0 p-3" scope="col">
                      <strong class="text-sm text-uppercase">Action</strong>
                    </th>
                    <th class="border-0 p-3" scope="col">
                      <strong class="text-sm text-uppercase">Action</strong>
                    </th>
                  </tr>
                </thead>

          
                <tbody class="border-0">
                  {books?.map((u) => {
                    return (
                      <tr>
                        <th class="ps-0 py-3 border-light" scope="row">
                          <div class="d-flex align-items-center">
                            <Link
                              class="reset-anchor d-block animsition-link"
                              to=""
                            >
                              <img
                                src={`https://drive.google.com/uc?id=${u?.product.File?.bookopediaId}`}
                                alt="..."
                                width="70"
                              />
                            </Link>

                            <div class="ms-3">
                              <strong class="h6">
                                <Link
                                  class="reset-anchor animsition-link"
                                  to=""
                                ></Link>
                              </strong>
                            </div>
                          </div>
                        </th>
                        <td class="p-3 align-middle border-light">
                          <p class="mb-0 small">{u.product.title}</p>
                        </td>
                        <td class="p-3 align-middle border-light">
                          <p class="mb-0 small">{u.product.price}</p>
                        </td>
                        <td class="p-3 align-middle border-light">
                          <div class="border d-flex align-items-center justify-content-between py-1 px-3"><span class="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                            <div class="quantity">
                              <button type="button" onClick={() => decrementCount(u._id)} class="dec-btn p-0"><i class="fas fa-caret-left"></i></button>
                              <input class="form-control border-0 shadow-0 p-0" type="text" />{u.qty}
                              <button type="button" onClick={() => incrementCount(u._id)} class="inc-btn p-0"><i class="fas fa-caret-right"></i></button>
                            </div>
                          </div>
                        </td>

                        
                        <td class="p-3 align-middle border-0">
                          <i>
                            <Link class='fas fa-trash-alt small text-muted' onClick={() => { deleteUser(u._id) }}></Link>
                          </i>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div class="bg-light px-4 py-3">
              <div class="row align-items-center text-center">
                <div class="col-md-6 mb-3 mb-md-0 text-md-start">
                  <Link class="btn btn-link p-0 text-dark btn-sm" to="/shop">
                    <i class="fas fa-long-arrow-alt-left me-2"> </i>Continue
                    shopping
                  </Link>
                </div>
                <div class="col-md-6 text-md-end">
                  <Link class="btn btn-outline-dark btn-sm" to="/check">
                    Procceed to checkout
                    <i class="fas fa-long-arrow-alt-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card border-0 rounded-0 p-lg-4 bg-light">
              <div class="card-body">
                <h5 class="text-uppercase mb-4">Cart total</h5>
                <ul class="list-unstyled mb-0">
                  <li class="d-flex align-items-center justify-content-between">
                    <strong class="text-uppercase small font-weight-bold">
                      Subtotal
                    </strong>
                    <span class="text-muted small">{totalprices}</span>
                  </li>
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
                  <li>

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