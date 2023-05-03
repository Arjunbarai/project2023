import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "jquery";


export const Shop = ({ setId }) => {
  const [book, setbook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);


  console.log(pageCount);

  var url = process.env.PUBLIC_URL + "/uploads/";
  console.log(url);

  const getApi = () => {
    axios
      .get("http://localhost:4000/book/getbookauthor")
      .then((res) => {
        setbook(res.data.books);
        console.log("------", res.data.books);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  
  const [label, setlabel] = useState();
  const labels = () => {
    axios
      .get("http://localhost:4000/label/label")
      .then((res) => {  
        setlabel(res.data.data);
        console.log("------", res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  
  const filter = (Category) => {
     
    console.log('category==',Category)
    axios
      .get("http://localhost:4000/book/filterbookbylable/"+Category)
      .then((res) => {
        setbook(res.data.books);
        console.log("------", res.data.books);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };





  const handleNext = () => {
    if (page === pageCount) return page;
    setPage(page + 1);
  };

  const handlePrevious = () => {
    if (page === 1) return page;
    setPage(page - 1);
  };

  const addToCart = (e) => {
    e.preventDefault();

    setId(e.target.value);
    bookOperation(e.target.value);
  };

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

  function bookOperation(val) {
    var bookData = {
      product: val,
      user: localStorage.getItem("_id"),
    };
    console.log(bookData.product);
    axios
      .post("http://localhost:4000/cart/cart", bookData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getApi();
    getLoggedinUserData();
  labels();
    filter();
  }, [page]);

  useEffect(() => {
    const pagedataCount = Math.ceil((book?.length ?? 0) / 5);

    setPageCount(pagedataCount);
    if (page && book) {
      const LIMIT = 5;
      const skip = LIMIT * page;
      const dataskip = book.slice(page === 1 ? 0 : skip - LIMIT, skip);
      setPageData(dataskip);
    }
  }, [book, page]);

  const [flag, setflag] = useState('')
  
  const searchHandler = (e) => {
    console.log(e.target.value)
    const searchValue = e.target.value
    axios.get(`http://localhost:4000/book/search/${searchValue}`).then((res)=>{
        console.log(res.data)
        setbook(res.data.books)
    }).catch((err)=>{
        
        getApi()
        setflag(<tr><td colSpan="3">No products found</td></tr>)
    })

}





  var style = {
    transform: "translate(-95%, 0px); z-index: 5;",
  };
  var style1 = {
    transform: "translate(-50%, 0px); z-index: 6;",
  };
  var style2 = {
    transform: "translate(5%, 0px) scale(0.45, 1);",
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
        {/* <link rel="stylesheet" href="style1.css" /> */}
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
      {/* <section class="py-5 bg-light">
  <div class="container">
    <div class="row px-4 px-lg-5 py-lg-4 align-items-center">
      <div class="col-lg-6">
        <h1 class="h2 text-uppercase mb-0">Shop</h1>
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
              Shop
            </li>
          </ol>
        </nav>
        <div class="d-flex justify-content-lg-end align-items-center mt-3 mt-lg-0"> 
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section> */}
<section class="py-5 bg-light">
  <div class="container">
    <div class="row px-4 px-lg-5 py-lg-4 align-items-center">
      <div class="col-lg-6">
        <h1 class="h2 text-uppercase mb-0">Shop</h1><br/>    
      </div>

      <div class="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center mt-3 mt-lg-0">
       
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
            <li class="breadcrumb-item">
              <a class="text-dark" href="/">
                Home
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Shop
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>



      <section class="py-5">
        <div class="d-flex justify-content-center">
      <form class="d-flex">
          <input
            class="form-control form-control-lg"
            type="search"
            placeholder="Search product Title" onChange={(e)=>{searchHandler(e)}}
            aria-label="Search"
          />
          <button class="btn btn-dark" type="submit">
            Search
          </button>
        </form>
        </div>
        <div class="container p-0">
          <div class="row">
            <div class="col-lg-3 order-2 order-lg-1">
              <h5 class="text-uppercase mb-4">Categories</h5>
              <div class="py-2 px-4 bg-dark text-white mb-3">
                <strong class="small text-uppercase fw-bold">
                  Books &amp; Acc
                </strong>
              </div>
              {label?.map((u) => {
                  return (
              <ul class="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                <li class="mb-2" onClick={()=>{filter(`${u._id}`)}}>
                  
                  <Link class="reset-anchor" to="">
                    {u.labelname}
                  </Link>
                </li>
              
              </ul>
  );
})}

              {/* <h6 class="text-uppercase mb-4">Price range</h6> */}
              <div class="price-range pt-4 mb-5">
                <div
                  id="range"
                  class="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                >
                  <div class="noUi-base">
                    {/* <div class="noUi-connects">
                      <div
                        class="noUi-connect noUi-draggable"
                        style={style2}
                      ></div>
                    </div> */}
                    {/* <div class="noUi-origin" style={style}>
                      <div
                        class="noUi-handle noUi-handle-lower"
                        data-handle="0"
                        tabindex="0"
                        role="slider"
                        aria-orientation="horizontal"
                        aria-valuemin="0.0"
                        aria-valuemax="700.0"
                        aria-valuenow="100.0"
                        aria-valuetext="$100"
                      >
                        <div class="noUi-touch-area"></div>
                        <div class="noUi-tooltip">$100</div>
                      </div>
                    </div> */}
                    {/* <div class="noUi-origin" style={style1}>
                      <div
                        class="noUi-handle noUi-handle-upper"
                        data-handle="1"
                        tabindex="0"
                        role="slider"
                        aria-orientation="horizontal"
                        aria-valuemin="400.0"
                        aria-valuemax="2000.0"
                        aria-valuenow="1000.0"
                        aria-valuetext="$1000"
                      >
                        <div class="noUi-touch-area"></div>
                        <div class="noUi-tooltip">$1000</div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div class="row pt-2">
                  <div class="col-6">
                    {/* <strong class="small fw-bold text-uppercase">From</strong> */}
                  </div>
                  <div class="col-6 text-end">
                    {/* <strong class="small fw-bold text-uppercase">To</strong> */}
                  </div>
                </div>
              </div>
              {/* <h6 class="text-uppercase mb-3">Show only</h6> */}
            </div>

            <div class="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
              <div class="row mb-3 align-items-center">
                <div class="col-lg-6 mb-2 mb-lg-0">
                  {/* <p class="text-sm text-muted mb-0">
                    Showing 112 of 53 results
                  </p> */}
                </div>
                {/* <div class="col-lg-6">
                  <ul class="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                    <li class="list-inline-item text-muted me-3">
                      <Link class="reset-anchor p-0" to="#!">
                        <i class="fas fa-th-large"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item text-muted me-3">
                      <Link class="reset-anchor p-0" to="#!">
                        <i class="fas fa-th"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <div
                        class="choices"
                        data-type="select-one"
                        tabindex="0"
                        role="listbox"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div class="choices__inner form-control form-control-sm">
                          <select
                            class="selectpicker choices__input"
                            data-customclass="form-control form-control-sm"
                            hidden=""
                            tabindex="-1"
                            data-choice="active"
                          >
                            <option value="">Sort By </option>
                          </select>
                          <div class="choices_list choices_list--single">
                            <div
                              class="choices_item choicesplaceholder choices_item--selectable"
                              data-item=""
                              data-id="1"
                              data-value=""
                              data-custom-properties="null"
                              aria-selected="true"
                            >
                              Sort By{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          class="choices_list choices_list--dropdown"
                          aria-expanded="false"
                        >
                          <div class="choices__list" role="listbox">
                            <div
                              id="choices--4htp-item-choice-5"
                              class="choices_item choicesitem--choice is-selected choicesplaceholder choices_item--selectable is-highlighted"
                              role="option"
                              data-choice=""
                              data-id="5"
                              data-value=""
                              data-select-text=""
                              data-choice-selectable=""
                              aria-selected="true"
                            >
                              Sort By{" "}
                            </div>
                            <div
                              id="choices--4htp-item-choice-1"
                              class="choices_item choicesitem--choice choices_item--selectable"
                              role="option"
                              data-choice=""
                              data-id="1"
                              data-value="default"
                              data-select-text=""
                              data-choice-selectable=""
                            >
                              Default sorting{" "}
                            </div>
                            <div
                              id="choices--4htp-item-choice-2"
                              class="choices_item choicesitem--choice choices_item--selectable"
                              role="option"
                              data-choice=""
                              data-id="2"
                              data-value="popularity"
                              data-select-text=""
                              data-choice-selectable=""
                            >
                              Popularity{" "}
                            </div>
                            <div
                              id="choices--4htp-item-choice-3"
                              class="choices_item choicesitem--choice choices_item--selectable"
                              role="option"
                              data-choice=""
                              data-id="3"
                              data-value="high-low"
                              data-select-text=""
                              data-choice-selectable=""
                            >
                              Price: High to Low{" "}
                            </div>
                            <div
                              id="choices--4htp-item-choice-4"
                              class="choices_item choicesitem--choice choices_item--selectable"
                              role="option"
                              data-choice=""
                              data-id="4"
                              data-value="low-high"
                              data-select-text=""
                              data-choice-selectable=""
                            >
                              Price: Low to High{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="row">
                {pageData?.map((u) => {
                  return (
                    <div className="col-lg-4 col-sm-6" key={u.id}>
                      <div className="product text-center">
                        <div className="mb-3 position-relative">
                          <div className="badge text-white bg-"></div>
                          
                          <Link className="d-block" to={`/product/${u._id}`}>
                            
                            <img
                              className="img-fluid w-100"
                              src={`https://drive.google.com/uc?id=${u?.File?.bookopediaId}`}
                              alt="..."
                            />
                          </Link>
                          <form>
                            <div className="product-overlay">
                              <ul className="mb-0 list-inline">
                                <li className="list-inline-item m-0 p-0">
                                  <a
                                    className="btn btn-sm btn-outline-dark"
                                    href="#!"
                                  >
                                    <i className="far fa-heart"></i>
                                  </a>
                                </li>

                                <li className="list-inline-item m-0 p-0">
                                  <input type="hidden" name="product" />
                                  <button
                                    onClick={addToCart}
                                    className="btn btn-sm btn-dark"
                                    type="submit"
                                    value={u._id}
                                  >
                                    Add to cart
                                  </button>
                                </li>

                                <li className="list-inline-item mr-0">
                                  <a
                                    className="btn btn-sm btn-outline-dark"
                                    href="#productView"
                                    data-bs-toggle="modal"
                                  >
                                    <i className="fas fa-expand"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </form>

                          <h6>
                            <Link className="reset-anchor" to="/product">
                              {u.title}
                            </Link>
                          </h6>
                          <p className="small text-muted">{u.price}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex justify-content-center align-items-center h-100">
                <h2>{flag}</h2>
              </div>
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center justify-content-lg-end">
                  <li
                    class="page-item mx-1"
                    onClick={handlePrevious}
                    disabled={page === 1}
                  >
                    <Link class="page-link" to="#!" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </Link>
                  </li>
                  {Array(pageCount)
                    .fill(null)
                    .map((ele, index) => {
                      return (
                        <>
                          <li
                            class="page-item mx-1 active"
                            active={page === index + 1 ? true : false}
                            className="page-link"
                            onClick={() => setPage(index + 1)}
                          >
                            {index + 1}
                          </li>
                        </>
                      );
                    })}

                  <li
                    class="page-item ms-1"
                    onClick={handleNext}
                    disabled={page === pageCount}
                  >
                    <Link class="page-link" to="#!" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};