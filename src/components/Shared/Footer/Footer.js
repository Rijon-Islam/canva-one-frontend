import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [categories, setCategories] = useState([]);
  const [footerAbout, setFooterAbout] = useState([]);
  const [footerAddress, setFooterAddress] = useState([]);
  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  const [canvas, setCanvas] = useState([]);



  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/Shah-Limon/canvaProjectImage/main/canva16000.json`)
      .then((res) => res.json())
      .then((info) => setCanvas(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, [categories]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-about`)
      .then((res) => res.json())
      .then((info) => setFooterAbout(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);




  return (
    <>
      <footer
        className="footer-bg footer-p fix"
        style={{
          backgroundImage: "url(img/bg/footer-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="footer-top pt-70 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-sm-12">
                {
                  logo.map(l => <div className="footer-widget mb-30">
                    <img src={l.logo} alt="img" />
                  </div>)
                }

              </div>
              <div className="col-xl-7 col-lg-7 col-sm-12">
                <div className="footer-widget footer-link mt-20 text-center">
                  {/* <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html"> About Us</a>
                    </li>
                    <li>
                      <a href="services.html"> Courses </a>
                    </li>
                    <li>
                      <a href="contact.html"> Events</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog </a>
                    </li>
                    <li>
                      <a href="blog.html">Contact Us </a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-12">
                {
                  footerSocial.map(c => <div className="footer-widget footer-social mt-15 text-right text-xl-right">
                    <a href={c.fblink}>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href={c.inslink}>
                      <i className="fab fa-instagram" />
                    </a>

                  </div>)
                }

              </div>
            </div>
          </div>
        </div>
        <div className="footer-center pt-70 pb-40">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-3 col-sm-6">

                {
                  footerAbout.map(a =>
                    <div className="footer-widget mb-30">
                      <div className="f-widget-title">
                        <h2>{a.aboutFooterText}</h2>
                      </div>
                      <div className="footer-link">
                        {a.aboutFooterDetails}
                      </div>
                    </div>)
                }



              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Contact Us</h2>
                  </div>

                  {
                    footerAddress.map(a =>
                      <div className="f-contact">
                        <ul>
                          <li>
                            <i className="icon fal fa-map-marker-check" />
                            <span>
                              {a.footeraddress}
                            </span>
                          </li>
                          <li>
                            <i className="icon fal fa-phone" />
                            <span>
                              {a.footerPhone}

                            </span>
                          </li>
                          <li>
                            <i className="icon fal fa-envelope" />
                            <span>
                              <a href="mailto:info@example.com">{a.footerEmail} </a>

                            </span>
                          </li>
                        </ul>
                      </div>

                    )
                  }

                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Our Gallery</h2>
                  </div>


                  <div className="f-insta">
                    <ul>
                      {
                        canvas.slice(0, 4).map(canva => <li>

                          <img src={canva.image} alt="img" />

                        </li>
                        )
                      }



                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row align-items-center">

              {
                footerCopyright.map(c =>
                  <div className="col-lg-5">
                    {c.copyrightText}
                  </div>)
              }


            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
