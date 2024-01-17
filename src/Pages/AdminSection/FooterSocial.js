import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const FooterSocial = () => {

    const [footersocial, setFootersocial] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/footer-social`)
            .then((res) => res.json())
            .then((info) => setFootersocial(info));
    }, []);


    const handleFootersocial = (event) => {
        event.preventDefault();

        const fblink = event.target.fblink.value;
        const inslink = event.target.inslink.value;





        const footerSection = {

            fblink,
            inslink,





        };

        const url = `http://localhost:5000/add-footer-social`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(footerSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Social Link is Updated');
            });
    };



    return (
        <div className='container vh-100 d-flex align-items-center justify-content-center'>
            <section id="services" class="services-area pt-120 pb-90 fix" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update Footer Socail Link </h2>
                            {
                                footersocial.length === 1 &&
                                <>
                                    {
                                        footersocial.map(c =>
                                            footersocial.map(c =>
                                                <Link className='btn' to={`/edit-social-footer/${c._id}`}> Edit Footer Social URL </Link>)


                                        )
                                    }
                                </>
                            }
                            {
                                footersocial.length === 0 &&


                                <form class="contact-form " onSubmit={handleFootersocial}>
                                    <div class="row">




                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">

                                                <input type="text" id="firstn" name="fblink" placeholder=" Facebook URL" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="inslink" placeholder=" Instagram URL" required />
                                            </div>
                                        </div>



                                        <div class="slider-btn">
                                            <button class="btn ss-btn" data-delay=".8s"> Add Footer Social Link</button>
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

export default FooterSocial;