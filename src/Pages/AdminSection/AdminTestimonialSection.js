import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';

const AdminTestimonialSection = () => {


    const [testimonialtext, setTestimonialText] = useState([]);

    const [testimonials, settestimonials] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/testimonialtext`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/testimonials`)
            .then((res) => res.json())
            .then((info) => settestimonials(info));
    }, []);

    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const testimonialText = event.target.testimonialText.value;
        const testimonialHeading = event.target.testimonialHeading.value;
        const testimonialDetails = event.target.testimonialDetails.value;

        const testimonialSection = {
            testimonialText,
            testimonialHeading,
            testimonialDetails,

        };

        const url = `http://localhost:5000/add-testimonial-text`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(testimonialSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };





    const handleStepSection = (event) => {
        event.preventDefault();
        const image = event.target.image.value;
        const personName = event.target.personName.value;
        const personTitle = event.target.personTitle.value;
        const desc = event.target.desc.value;
        const stepSection = {
            image,
            personName,
            personTitle,
            desc,

        };

        const url = `http://localhost:5000/add-testimonial`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(stepSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Step Section is Updated');
            });
    };



    return (
        <section id="services" class="services-area pt-120 pb-90 fix">
            <div className='mt-5'>
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">

                            <h2> Update Testimonial Text </h2>
                            {
                                testimonialtext.length === 1 &&
                                <>
                                    {testimonialtext.map(text =>
                                        <Link className='btn' to={`/testimonialtext-edit/${text._id}`}> Update Now</Link>
                                    )}
                                </>
                            }

                            {testimonialtext.length === 0 &&
                                <form class="contact-form " onSubmit={handleTestimonialSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="testimonialText" placeholder=" Testimonial Text" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="testimonialHeading" placeholder="Testimonial Heading" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="testimonialDetails" placeholder=" Testimonial Details" required />
                                            </div>
                                        </div>


                                        <div class="slider-btn">
                                            <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"> Update Testimonial Text </button>
                                        </div>
                                    </div>

                                </form>
                            }





                            <h2> Add Testimonial Item </h2>

                            <form class="contact-form " onSubmit={handleStepSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="image" placeholder=" Person Image URL" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="personName" placeholder=" Person Name" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="personTitle" placeholder=" Person Title" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="desc" placeholder=" Details" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="btn ss-btn" data-delay=".8s"> Add Testimonial</button>
                                    </div>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title center-align text-center mb-50">
                                <h5>Testimonial Section</h5>
                                <h2>Testimonial List</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            testimonials.map(e =>
                                <div class="col-lg-6">
                                    <div class="testimonial-active">

                                        <Link to={`/edit-testimonial/${e._id}`}>
                                            <div class="single-testimonial mb-3">
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
                                        </Link>




                                    </div>
                                </div>

                            )
                        }
                    </div>

                </div>




            </div>
        </section>
    );
};

export default AdminTestimonialSection;