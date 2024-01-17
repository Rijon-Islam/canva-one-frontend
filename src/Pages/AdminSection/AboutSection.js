import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/about`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, []);



    const handleAboutSection = (event) => {
        event.preventDefault();
        const aboutText = event.target.aboutText.value;
        const aboutHeading = event.target.aboutHeading.value;
        const aboutDetails = event.target.aboutDetails.value;
        const aboutPointone = event.target.aboutPointone.value;
        const aboutPointwo = event.target.aboutPointwo.value;
        const numberYear = event.target.numberYear.value;
        const experienceDetails = event.target.experienceDetails.value;
        const aboutImage = event.target.aboutImage.value;


        const aboutSection = {
            aboutText,
            aboutHeading,
            aboutDetails,
            aboutPointone,
            aboutPointwo,
            numberYear,
            experienceDetails,
            aboutImage,

        };

        const url = `http://localhost:5000/add-about`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(aboutSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('About is Updated');
            });
    };



    return (
        <div>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update About </h2>

                            {
                                about.length === 1 &&
                                <>
                                    {
                                        about.map(a =>
                                            <Link className='btn' to={`/${a._id}`}>
                                                Update About Section
                                            </Link>
                                        )
                                    }
                                </>
                            }
                            {
                                about.length === 0 &&

                                
                                <form class="contact-form " onSubmit={handleAboutSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="aboutText" placeholder="About Text" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="aboutHeading" placeholder="About Heading" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="aboutDetails" placeholder="About Details" required />
                                            </div>
                                        </div>


                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="aboutPointone" placeholder="About Point One" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="aboutPointwo" placeholder="About Point Two" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="numberYear" placeholder="Number Year" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="experienceDetails" placeholder="Experience Details" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" id="email" name="aboutImage" placeholder="About Image" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"> Update About </button>
                                        </div>
                                    </div>

                                </form>
                            }



                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;