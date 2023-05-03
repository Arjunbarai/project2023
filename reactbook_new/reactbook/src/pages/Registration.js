import { useForm } from 'react-hook-form';

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axios from 'axios';
import React, { useEffect, useState } from 'react'



export const Registration = () => {


  // var style={
  // 	display: "block; padding-right: 17px"
  // }
  const { register, handleSubmit } = useForm();
  const [roles, setroles] = useState()

  const submit = (data) => {

    axios.post("http://localhost:4000/user/user", data).then((res) => {
      console.log(res.data)
      
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    getRoles();
  }, [])

  const getRoles = () => {

    axios.get("http://localhost:4000/role/get").then((res) => {
      // console.log(res.data.data)
      
      setroles(res.data.data.filter((e)=>{
        return e.name!= "Admin"
      }))
    })

  }


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
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'/>

        <script src="vendor/glightbox/js/glightbox.min.js"/>
        <script src="vendor/nouislider/nouislider.min.js"/>
        <script src="vendor/swiper/swiper-bundle.min.js"/>
        <script src="vendor/choices.js/public/assets/scripts/choices.min.js"/>
        <script src="js/front.js"/>








      </Helmet>
     





     
        <section class="py-5 bg-light">
          <div class="container">
            <div class="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div class="col-lg-6">
                <h1 class="h2 text-uppercase mb-0">Registration</h1>
              </div>
              <div class="col-lg-6 text-lg-end">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                    <li class="breadcrumb-item"><Link class="text-dark" to="/">Home</Link></li>
                    <li class="breadcrumb-item"><Link class="text-dark" to="/login">Login</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Registration</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section class="py-5">


          <div class="row">
            <div class="col-lg-8">
              <form onSubmit={handleSubmit(submit)} >
                <div class="row gy-3">
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="phone2">Name </label>
                    <input class="form-control form-control-lg" id="name" placeholder="Name" type="text" {...register("name")} />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="phone2">Email </label>
                    <input class="form-control form-control-lg" id="email" placeholder="Email" type="email" {...register("email")} />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="phone2">MobileNo </label>
                    <input class="form-control form-control-lg" id="mobile" placeholder="MobileNo" type="mobile" {...register("mobile")} />
                  </div>

                  <div class="col-lg-6 form-group">
                    <label class="form-label text-sm text-uppercase" for="phone2">Role </label>
                    <select {...register('role')} class="form-control">
                      {
                        roles?.map((role) => {
                          return (
                            <option value={role._id}>{role.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                 
                  <div class="col-lg-6 form-group">
                    <label class="form-label text-sm text-uppercase" for="phone2">Gender </label>
                    <select class="form-control form-control-lg" id="name" placeholder="Name"  {...register("gender")} >
                      {/* <option value="">Gender</option> */}
                      <option >Female</option>
                      <option >Male</option>
                      <option >Other</option>
                    </select>
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="phone2">password </label>
                    <input class="form-control form-control-lg" id="password" placeholder="Password" type="password" {...register("password")} />
                  </div>
                  <div class="col-lg-12 form-group">
                   <button class="btn btn-dark" type="submit">Submit</button>
                  </div>
                  {/* <div class="col-lg-12 form-group"><Link class="btn btn-dark" to="/login">Login<i class="fas fa-long-arrow-alt-right ms-2"></i></Link></div> */}
                </div>
              </form>


            </div>

          </div>
        </section>
      

    </div>

  )
}
