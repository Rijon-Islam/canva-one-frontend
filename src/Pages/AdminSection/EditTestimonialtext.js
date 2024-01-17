import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';

const EditTestimonialtext = () => {


    const [testimonialtext, setTestimonialText] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/testimonialtext/${id}`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
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

        const url = `http://localhost:5000/testimonialtext/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(testimonialSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Testimonial Text Is Updated');
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

                            <form class="contact-form " onSubmit={handleTestimonialSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="testimonialText" defaultValue={testimonialtext.testimonialText} placeholder=" Testimonial Text" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="testimonialHeading" defaultValue={testimonialtext.testimonialHeading} placeholder="Testimonial Heading" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="testimonialDetails" defaultValue={testimonialtext.testimonialDetails} placeholder=" Testimonial Details" required />
                                        </div>
                                    </div>


                                    <div class="slider-btn">
                                        <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"> Update Testimonial Text </button>
                                    </div>
                                </div>

                            </form>



                        </div>


                    </div>
                </div>





            </div>
        </section>
    );
};

export default EditTestimonialtext;