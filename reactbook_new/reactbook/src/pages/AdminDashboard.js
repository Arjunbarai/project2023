// import React from 'react'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
export const AdminDashboard = () => {
    const [users, setusers] = useState()
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


    const [loading, setLoading] = useState(true);

    const getApi = () => {
        axios.get("http://localhost:4000/user/getuser")
            .then((res) => {
                setusers(res.data.users);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        //  getLoggedinUserData();
        getApi();
    }, []);


    const deleteUser = (id) => {

        axios.delete("http://localhost:4000/user/user/" + id).then((res) => {


            getApi()



        }).catch((err) => {

            console.log(err)
        })
    }

    const updateUser = (id) => {
        const updatedName = document.getElementById("name").value;
        const updatedEmail = document.getElementById("email").value;
        const updatedPassword = document.getElementById("password").value;

        axios.put("http://localhost:4000/user/user/" + id, {
            name: updatedName,
            email: updatedEmail,
            password: updatedPassword,
            // age: updatedAge
        })
            .then((res) => {
                setusers(users.map(u => u._id === id ? res.data.user : u))
            })
            .catch((err) => {
                console.log(err)
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

            <section class="py-5">
                <h1>{user.name}</h1>
                <h2 class="h5 text-uppercase mb-4">AdminDashboard</h2>
                <div class="row">
                    <div class="col-lg-8 mb-4 mb-lg-0">

                        <div class="table-responsive mb-4">
                            <table class="table text-nowrap">
                                <thead class="bg-light">
                                    <tr>
                                        <th class="border-0 p-3" scope="col"> <strong class="text-sm text-uppercase">Role</strong></th>
                                        <th class="border-0 p-3" scope="col"> <strong class="text-sm text-uppercase">Name</strong></th>
                                        <th class="border-0 p-3" scope="col"> <strong class="text-sm text-uppercase">Email</strong></th>
                                        <th class="border-0 p-3" scope="col"> <strong class="text-sm text-uppercase">Password</strong></th>
                                        <th class="border-0 p-3" scope="col"> <strong class="text-sm text-uppercase">Mobile</strong></th>
                                        <th class="border-0 p-3" scope="col"> <strong class="text-sm text-uppercase">Gender</strong></th>
                                        <th class="border-0 p-3" scope="col"> <strong class="text-sm text-uppercase">Action</strong></th>


                                    </tr>
                                </thead>




                                {
                                    users?.map((u) => {
                                        return (<tr>
                                            {/* <td>{u._id}</td> */}
                                            <td>{u.role.name}</td>
                                            <td>{u.name}</td>
                                            <td>{u.email}</td>
                                            <td>{u.password}</td>
                                            <td>{u.mobile}</td>
                                            <td>{u.gender}</td>

                                           
                                            <td><label for="name">Name:</label>
                                                <input type="text" id="name" />

                                                <label for="email">Email:</label>
                                                <input type="email" id="email" />

                                                <label for="password">Password:</label>
                                                <input type="password" id="password" /></td>
                                            <td>
                                                <div class="col-lg-12 form-group">
                                                    <button onClick={() => { updateUser(u._id) }}>UPDATE</button>
                                                    {/* <button class="btn btn-dark" onClick={() => { deleteUser(u._id) }}>DELETE</button> */}
                                                </div>
                                            </td>
                                            <td>
                                                <div class="col-lg-12 form-group">
                                                    <button class="btn btn-dark" onClick={() => { deleteUser(u._id) }}>DELETE</button>
                                                </div>
                                            </td>
                                        </tr>)
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
