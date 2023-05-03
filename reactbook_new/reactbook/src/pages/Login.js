import React from 'react'
import axios from "axios";
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	var style = {
		display: "block; padding-right: 17px"
	}

	const { register, handleSubmit } = useForm();
	var navigate = useNavigate()

	const submit = (data) => {

		axios.post('http://localhost:4000/user/user/login', data).then((res) => {
			if (res.data.data) {
				console.log("user found....")
				//console.log(res.data.data[0].role.name)
				console.log(res.data.data[0]?._id)
				localStorage.setItem("_id", res.data.data._id)
				console.log(res.data.data.role.name)
				if (res.data.data.role.name === "User") {

					navigate("/shop")
				}
				else if (res.data.data.role.name === "Admin") {
					navigate("/admin")
				}
				else if (res.data.data.role.name === "Seller") {
					navigate("/list")
				}
				//role...

			}

		}).catch((err) => {
			console.log("EMAIL OR PASSWORD INCORRECT....")
			alert("EMAIL OR PASSWORD INCORRECT....")
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
				<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous' />

				<script src="vendor/glightbox/js/glightbox.min.js" />
				<script src="vendor/nouislider/nouislider.min.js" />
				<script src="vendor/swiper/swiper-bundle.min.js" />
				<script src="vendor/choices.js/public/assets/scripts/choices.min.js" />
				<script src="js/front.js" />










			</Helmet>


			<div class="container">
				<section class="py-5 bg-light">
					<div class="container">
						<div class="row px-4 px-lg-5 py-lg-4 align-items-center">
							<div class="col-lg-6">
								<h1 class="h2 text-uppercase mb-0">Login</h1>
							</div>
							<div class="col-lg-6 text-lg-end">
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
										<li class="breadcrumb-item"><Link class="text-dark" to="/">Home</Link></li>
										<li class="breadcrumb-item"><Link class="text-dark" to="/registration">Registration</Link></li>
										<li class="breadcrumb-item active" aria-current="page">Login</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</section>
				<section class="py-5">


					<div class="row">
						<div class="col-lg-8">
							<form onSubmit={handleSubmit(submit)} action="#">
								<div class="row gy-3">
									<div class="col-lg-6">
										<label class="form-label text-sm text-uppercase" for="phone2">Email </label>
										<input class="form-control form-control-lg" id="email" placeholder="Email" type="email" {...register("email")} />
									</div>
									<div class="col-lg-6">

										<label class="form-label text-sm text-uppercase" for="phone2">Password </label>
										<input class="form-control form-control-lg" id="password" placeholder="Password" type="password" {...register("password")} />
									</div>

									<div >
										<button class="btn btn-dark" type="submit">Submit</button>
									</div>

									{/* <div class="col-lg-12 form-group" ><Link class="btn btn-dark" to="/registration">Register<i class="fas fa-long-arrow-alt-right ms-2"></i></Link></div> */}
									<a class="for-pwd" href="javascript:;">Forgot your password?</a>

								</div>
							</form>


						</div>

					</div>
				</section>
			</div>



		</div>


	)
}
