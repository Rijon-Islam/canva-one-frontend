import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditFooterabout = () => {

    const [footerabout, setFooterabout] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/footer-about/${id}`)
            .then((res) => res.json())
            .then((info) => setFooterabout(info));
    }, [footerabout]);


    const handleFooterAbout = (event) => {
        event.preventDefault();
        const aboutFooterText = event.target.aboutFooterText.value;
        const aboutFooterDetails = event.target.aboutFooterDetails.value;



        const FooterAboutSection = {
            aboutFooterText,
            aboutFooterDetails,


        };

        const url = `http://localhost:5000/footer-about/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(FooterAboutSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer is Updated');
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
                            <h2> Update Footer About</h2>

                            <form class="contact-form " onSubmit={handleFooterAbout}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="aboutFooterText" defaultValue={footerabout.aboutFooterText} placeholder="About Text" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-email mb-20">
                                            <input type="text" id="lastn" name="aboutFooterDetails" defaultValue={footerabout.aboutFooterDetails} placeholder="About Details" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"> Update Footer About</button>
                                    </div>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default EditFooterabout;