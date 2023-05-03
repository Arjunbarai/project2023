import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const List = () => {
  const [book, setbook] = useState();
  const [loading, setLoading] = useState(true);
  var url = process.env.PUBLIC_URL + "/uploads/";
  console.log(url);
  var id = localStorage.getItem("_id")
  const getApi = () => {
    axios
      .get("http://localhost:4000/book/get/"+id)
      .then((res) => {
        setbook(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getLoggedinUserData();
    getApi();
  }, []);

  const [users, setusers] = useState("");

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

  const deleteitem = (id) => {
    axios
      .delete("http://localhost:4000/book/delete/" + id)
      .then((res) => {
        getApi();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section class="py-5 bg-light">
        <div class="container">
          <div class="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div class="col-lg-6">
              <h1 class="h2 text-uppercase mb-0">List of Products Added</h1>
              <h2>Seller:{users.name}</h2>
            </div>
            <div class="col-lg-6 text-lg-end">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                  <li class="breadcrumb-item">
                    <Link class="text-dark" to="/seller">
                      Add Product{" "}
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

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
                    <strong class="text-sm text-uppercase">Description</strong>
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
                {book?.map((u) => {
                  return (
                    <tr>
                      <th class="ps-0 py-3 border-light" scope="row">
                        <div class="d-flex align-items-center">
                          <Link
                            class="reset-anchor d-block animsition-link"
                            to=""
                          >
                            <img
                              
                              src={`https://drive.google.com/uc?id=${u?.File?.bookopediaId}`}
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
                        <p class="mb-0 small">{u.title}</p>
                      </td>
                      <td class="p-3 align-middle border-light">
                        <p class="mb-0 small">{u.price}</p>
                      </td>
                      <td class="p-3 align-middle border-light">
                        <div class="border d-flex align-items-center justify-content-between px-3">
                          <span class="small text-uppercase text-gray headings-font-family">
                            Quantity
                          </span>
                          <div class="quantity">
                            <input
                              class="form-control form-control-sm border-0 shadow-0 p-0"
                              type="text"
                            />
                            {u.qty}
                          </div>
                        </div>
                      </td>
                      <td class="p-3 align-middle border-light">
                        <textarea class="form-control form-control-lg">
                          {u.description}
                        </textarea>
                      </td>
                      <td class="p-3 align-middle border-0">
                        <i
                          class="fas fa-trash-alt small text-muted"
                          onClick={() => {
                            deleteitem(u._id);
                          }}
                        />
                      </td>
                      <td class="p-3 align-middle border-0">
                        <i>
                          <Link
                            class="fas fa-edit"
                            to={`/update1/${u._id}`}
                          ></Link>
                        </i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};