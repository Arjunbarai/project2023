import { Helmet } from "react-helmet";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Seller = () => {
  const { register, handleSubmit } = useForm();
  const [author, setauthor] = useState();
  const [label, setlabel] = useState();
  const [users, setusers] = useState("");
  const [fileData, setfileData] = useState();

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
  useEffect(() => {
    getLoggedinUserData();
  }, []);
  // const {register, handleSubmit} = useForm();
  const submit =  async (data) => {
    var formData = new FormData();

    formData.append("file", data.file[0]);

   

  const response =   await axios.post("http://localhost:4000/upload/upload", formData)
  if(response!=null || response!= undefined){
    setfileData(response.data.data._id)
  }
      
      if(fileData!= null || fileData!== undefined){
      var bookData = {
        File: fileData,
        title: data.title,
        price: data.price,
        author: data.author,
        qty: data.qty,
        description: data.description,
        user: localStorage.getItem("_id"),
        isCharity: data.isCharity,
        label:data.label
      };


    console.log(bookData);
    await axios
    .post("http://localhost:4000/book/book", bookData)
      .then((res) => {
        console.log(res.data);
        alert("Book Add Succefully");
      })
      .catch((err) => {
        console.log(err);
      });
      }
  };
  useEffect(() => {
    getAuthor();
    getLabel();
    
  }, []);

  const getAuthor = () => {
    axios.get("http://localhost:4000/author/author").then((res) => {
      
      setauthor(res.data.data);
    });
  };
  
  const getLabel = () => {
    axios.get("http://localhost:4000/label/label").then((res) => {
      
      setlabel(res.data.data);
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
              <h1 class="h2 text-uppercase mb-0">Add Product Details</h1>
              <h2>Seller:{users.name}</h2>
            </div>
            <div class="col-lg-6 text-lg-end">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                                    <li class="breadcrumb-item"><Link class="text-dark" to="/list">PRODUCT LIST </Link></li>
                                    
                                    
                                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
        <div class="row">
          <div class="col-lg-8">
            <form onSubmit={handleSubmit(submit)} encType="multipart/form-data">
              <div class="row gy-3">
                <div class="col-lg-6">
                  <label class="form-label text-sm text-uppercase" for="phone2">
                    Product Img
                  </label>
                  <input
                    class="form-control form-control-lg"
                    id="file"
                    type="file"
                    {...register("file")}
                  />

                  {/* <button  class="btn btn-dark" type="submit" >Upload</button> */}
                </div>

                <div class="col-lg-6">
                  <label class="form-label text-sm text-uppercase">
                    Title{" "}
                  </label>
                  <input
                    class="form-control form-control-lg"
                    id="name"
                    type="title"
                    {...register("title")}
                  />
                </div>
                <div class="col-lg-6">
                  <label class="form-label text-sm text-uppercase" for="phone2">
                    Price{" "}
                  </label>
                  <input
                    class="form-control form-control-lg"
                    id="mobile"
                    type="price"
                    {...register("price")}
                  />
                </div>
                <div class="col-lg-6">
                  <label class="form-label text-sm text-uppercase" for="phone2">
                    Quantity{" "}
                  </label>
                  <input
                    class="form-control form-control-lg"
                    id="qty"
                    type="price"
                    {...register("qty")}
                  />
                </div>
                <div class="col-lg-6">
                  <label class="form-label text-sm text-uppercase" for="phone2">
                    Description
                  </label>
                                
                 <textarea  class="form-control form-control-lg" id="description"{...register("description")}/>
                    
                
                </div>

                <div class="col-lg-6 form-group">
                  <label class="form-label text-sm text-uppercase" for="phone2">
                    Author{" "}
                  </label>
                  <select class="form-control" {...register("author")}>
                    {author?.map((author) => {
                      return (
                        <option value={author._id}>{author.authorName}</option>
                      );
                    })}
                  </select>
                </div>

                <div class="col-lg-6 form-group">
                  <label class="form-label text-sm text-uppercase" >Category </label>
                  <select class="form-control" {...register("label")}>
                    {
                      label?.map((label) => {
                        return (

                          <option value={label._id}>{label.labelname}</option>
                        )
                      })
                    }
                  </select>
                </div>

                {/* <div class="col-lg-6 form-group">
                    <label class="form-label text-sm text-uppercase" for="phone2">Gender </label>
                    <select class="form-control form-control-lg" id="name" ="Name"   >
                      <option value="">Gender</option> 
                      <option >Female</option>
                      <option >Male</option>
                      <option >Other</option>
                    </select>
                  </div> */}
                {/* <div class="col-lg-6">
                  <label class="form-label text-sm text-uppercase" for="phone2">Back Page Book </label>
                  <input class="form-control form-control-lg" id="file" type="file" />
                </div> */}

                <div class="col-lg-6 ">
                  <label class="form-label text-sm text-uppercase" for="gender">
                    Charity
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="charity"
                      id="yes"
                      value="true"
                      {...register("isCharity")}
                    />
                    <label class="form-check-label" for="true">
                      True
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="charity"
                      id="no"
                      value="false"
                    />
                    <label class="form-check-label" for="false">
                      False
                    </label>
                  </div>
                </div>

                <div class="col-lg-12 form-group">
                  <button class="btn btn-dark" type="submit">
                    Submit
                  </button>
                </div>
                {/* <div class="col-lg-12 form-group"><Link class="btn btn-dark" to="/login">Login<i class="fas fa-long-arrow-alt-right ms-2"></i></Link></div> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};