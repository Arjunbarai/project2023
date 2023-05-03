import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";

export const Updatel = () => {

    
    const { id } = useParams();
    const [values,setvalues]=useState({
      id:id,
      
      title:'',
      price:'',
      qty:'',
      description:'',
      
    })
    useEffect(() => {
      axios
        .get("http://localhost:4000/book/book/" + id)
        .then(res =>{
  setvalues({...values,title:res.data.title,price:res.data.price,price:res.data.price,qty:res.data.qty, description:res.data. description})
        } )
        .catch((res) => console.log(res));
    }, []);
  
    const  navigate =useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios
        .put("http://localhost:4000/book/update/" + id,values)
        .then(res =>{
  navigate('/list');
        } )
        .catch((res) => console.log(res));
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


      <section class="py-5 bg-light">
        <div class="container">
          <div class="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div class="col-lg-6">
              <h1 class="h2 text-uppercase mb-0">UPDATE PRODUCT DETAILS</h1>
            </div>
            <div class="col-lg-6 text-lg-end">
             
            </div>
          </div>
        </div>
      </section>                       

      

      <section class="py-5">
        <div class="row">
          <div class="col-lg-8">
            <form onSubmit={handleSubmit}>
              <div class="row gy-3">
                <div class="col-lg-6">
                  <label class="form-label text-sm text-uppercase" for="phone2">
                    Title
                  </label>
                  <input
                    class="form-control form-control-lg"
                    id="title"
                    placeholder="Title"
                    type="text"
                    value={values.title} onChange={e => setvalues({ ...values, title: e.target.value })}
                  />
                </div>
                <div class="col-lg-6">
                  <label class="form-label text-sm text-uppercase" for="phone2">
                    Price
                  </label>
                  <input
                    class="form-control form-control-lg"
                    id="price"
                    placeholder="Price"
                    type="price"
                    value={values.price} onChange={e => setvalues({ ...values, price: e.target.value })} />
                </div>
                <div class="col-lg-6">
                  <label class="form-label text-sm text-uppercase" for="phone2">
                    Quantity
                  </label>
                  <input
                    class="form-control form-control-lg"
                    id="qty"
                    placeholder="Qty"
                    type="qty"
                    value={values.qty } onChange={e => setvalues({ ...values, qty: e.target.value })}/>
                </div>

                <div class="col-lg-6">
                  <label class="form-label text-sm text-uppercase" for="phone2">
                    Description
                  </label>
                  <textarea
                    class="form-control form-control-lg"
                    id="description"
                    placeholder="Description"
                    type="description"
                    value={values.description} onChange={e => setvalues({ ...values, description: e.target.value })}/>
                </div>
                <div class="col-lg-12 form-group">
                  <button class="btn btn-dark" >
                    UPDATE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>



        
    </div>
  )
}