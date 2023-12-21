import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);


  return (
    <>
      {
        about.map(a =>
          <section
            id="about"
            className="about-area about-p pt-70 pb-120 p-relative"
            style={{
              background: "url(img/features/about-bg-aliments.png) no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div className="container">

              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                  <div
                    className="s-about-img p-relative wow fadeInLeft animated"
                    data-animation="fadeInLeft"
                    data-delay=".4s"
                  >
                    <img src={a.aboutImage} alt="img" />
                    <div className="about-text second-about">
                      <div className="all-text">
                        <h3>{a.numberYear}</h3>
                        <span>
                          {a.experienceDetails}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div
                    className="about-content s-about-content wow fadeInRight animated"
                    data-animation="fadeInRight"
                    data-delay=".4s"
                  >
                    <div className="about-title second-atitle pb-25">
                      <h5>{a.aboutText}</h5>
                      <h2>{a.aboutHeading}</h2>
                    </div>
                    <p>
                      {a.aboutDetails}
                    </p>
                    <div className="about-content3">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="green">
                            <li>
                              {a.aboutPointone}
                            </li>
                            <li>
                              {a.aboutPointwo}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="slider-btn mt-10">
                      <Link
                        to='/order-now'
                        className="btn ss-btn"
                        data-animation="fadeInRight"
                        data-delay=".8s"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

        )
      }

    </>
  );
};

export default AboutSection;
