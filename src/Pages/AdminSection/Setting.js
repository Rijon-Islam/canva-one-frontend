import React from 'react';
import { Link } from 'react-router-dom';
import banner from './Images/banner.png'
import logo from "./Images/logo.png"
import about from "./Images/about.png"
import service from "./Images/service.png"
import image from "./Images/image.png"
import steps from "./Images/steps.png"
import testimonial from "./Images/testimonial.png"
import aboutfooter from './Images/footerabout.png'
import footersocial from './Images/footersocial.png'
import footeraddress from './Images/footercontact.png'
import footerad from './Images/footeraddress.png'
import copyright from './Images/copyright.png'


import "./Setting.css";

const Setting = () => {

    return (

        <div className='setting-menu'>
            <section id="home" className="slider-area slider-four fix p-relative">
                <div className="slider-active">
                    <div
                        className="single-slider slider-bg d-flex align-items-center"
                        style={{
                            background: "url(img/slider/slider_img_bg.png) no-repeat",
                            backgroundPosition: "center center",
                        }}
                    >
                        <div className='container align-items-center justify-content-center mt-5'>

                            <div class="container text-center">
                                <div class="row">
                                    <div class="col-lg-3  col-md-6 col-12">
                                        <div className='single-card'>
                                            <Link to='/edit-banner'> <img src={banner} />Banner Setting</Link>
                                        </div>
                                    </div>
                                    <div class="col-lg-3  col-md-6 col-12">
                                        <div className='single-card'>
                                            <Link to='/add-logo'> <img src={logo} /> Logo Setting</Link>
                                        </div>

                                    </div>

                                    <div class="col-lg-3  col-md-6 col-12">
                                        <div className='single-card'>
                                            <Link to='/edit-about'>  <img src={about} /> About Us Setting</Link>
                                        </div>

                                    </div>
                                    <div class="col-lg-3  col-md-6 col-12">

                                        <div className='single-card'>
                                            <Link to='/edit-service'> <img src={service} /> Service Setting</Link>
                                        </div>
                                    </div>
                                    <div class="col-lg-3  col-md-6 col-12">
                                        <div className='single-card'>
                                            <Link to='/edit-video'><img src={image} /> Image Setting</Link>
                                        </div>

                                    </div>
                                    <div class="col-lg-3  col-md-6 col-12">

                                        <div className='single-card'>
                                            <Link to='/step-section'>  <img src={steps} /> Step Setting</Link>
                                        </div>
                                    </div>
                                    <div class="col-lg-3  col-md-6 col-12">

                                        <div className='single-card'>
                                            <Link to='/edit-testimonial'> <img src={testimonial} /> Testimonial Setting</Link>
                                        </div>
                                    </div>
                                    <div class="col-lg-3  col-md-6 col-12">
                                        <div className='single-card'>
                                            <Link to='/add-contact'> <img src={footeraddress} /> Contact Page Setting</Link>
                                        </div>

                                    </div>
                                    <div class="col-lg-3  col-md-6 col-12">
                                        <div className='single-card'>
                                            <Link to='/add-about-footer'> <img src={aboutfooter} /> Footer About</Link>
                                        </div>

                                    </div>
                                    <div class="col-lg-3  col-md-6 col-12">
                                        <div className='single-card'>
                                            <Link to='/add-address-footer'> <img src={footerad} /> Footer Address</Link>
                                        </div>

                                    </div>
                                    <div class="col-lg-3  col-md-6 col-12">

                                        <div className='single-card'>
                                            <Link to='/add-social-footer'> <img src={footersocial} /> Footer Social</Link>
                                        </div>
                                    </div>

                                    <div class="col-lg-3  col-md-6 col-12">

                                        <div className='single-card'>
                                            <Link to='/add-copyright'> <img src={copyright} /> Footer CopyRight</Link>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className='admin-cards mt-5 container '>






                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
};

export default Setting;