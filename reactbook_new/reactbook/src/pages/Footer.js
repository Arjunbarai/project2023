import React from 'react'
import { Helmet } from 'react-helmet'

export const Footer = () => {
    var style = {
        bordercolor: "#1d1d1d !important"
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



            <footer class="bg-dark text-white">
                <div class="container py-4">
                    <div class="row py-5">
                        <div class="col-md-4 mb-3 mb-md-0">
                            <h6 class="text-uppercase mb-3">Customer services</h6>
                            <ul class="list-unstyled mb-0">
                                <li><a class="footer-link" href="#!">Help &amp; Contact Us</a></li>
                                <li><a class="footer-link" href="#!">Returns &amp; Refunds</a></li>
                                <li><a class="footer-link" href="#!">Online Stores</a></li>
                                <li><a class="footer-link" href="#!">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-3 mb-md-0">
                            <h6 class="text-uppercase mb-3">Company</h6>
                            <ul class="list-unstyled mb-0">
                                <li><a class="footer-link" href="#!">What We Do</a></li>
                                <li><a class="footer-link" href="#!">Available Services</a></li>
                                <li><a class="footer-link" href="#!">Latest Posts</a></li>
                                <li><a class="footer-link" href="#!">FAQs</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h6 class="text-uppercase mb-3">Social media</h6>
                            <ul class="list-unstyled mb-0">
                                <li><a class="footer-link" href="#!">Twitter</a></li>
                                <li><a class="footer-link" href="#!">Instagram</a></li>
                                <li><a class="footer-link" href="#!">Tumblr</a></li>
                                <li><a class="footer-link" href="#!">Pinterest</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-top pt-4" style={style}>
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start">
                                <p class="small text-muted mb-0">© 2021 All rights reserved.</p>
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                {/* <p class="small text-muted mb-0">Template designed by <a class="text-white reset-anchor" href="https://bootstrapious.com/p/boutique-bootstrap-e-commerce-template">Bootstrapious</a></p> */}

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
