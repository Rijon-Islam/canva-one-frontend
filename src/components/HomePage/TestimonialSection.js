import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  const [testimonialtext, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);


  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (
    <>
      <section class="testimonial-area pt-120 pb-120" style={divStyle}>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              {

                testimonialtext.map(text => <div class="about-title second-atitle pt-15">
                  <h5>{text.testimonialText}</h5>
                  <h2> {text.testimonialHeading}
                  </h2>
                  <p class="pt-15">
                  {text.testimonialDetails}
                  </p>
                </div>)
              }


            </div>

            <div class="col-lg-6">
              <div class="testimonial-active">
                {
                  testimonial.map(e =>
                    <div class="single-testimonial">
                      <div class="testi-author">
                        <img src={e.image} alt="img" />
                        <div class="ta-info">
                          <h6>{e.personName}</h6>
                          <span>{e.personTitle}</span>
                        </div>
                      </div>
                      <div class="qt-img">
                        <img src="img/testimonial/qt-icon.png" alt="img" />
                      </div>
                      <p>
                        {e.desc}
                      </p>
                    </div>
                  )
                }



              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
