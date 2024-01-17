import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const [contact, setContact] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/contacts`)
            .then((res) => res.json())
            .then((info) => setContact(info));
    }, []);



    const handleMessage = (event) => {
        event.preventDefault();
        const firstn = event.target.firstn.value;
        const lastn = event.target.lastn.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const messageStatus = event.target.messageStatus.value;
        const message = event.target.message.value;


        const addItem = {
            firstn,
            lastn,
            email,
            phone,
            messageStatus,
            message,

        };

        const url = `http://localhost:5000/add-message`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addItem),
        })
            .then((res) => res.json())
            .then((result) => {
                navigate('/all-messages');
                alert('Message is Updated');
            });
    };



    return (


        <div>
            <section className="breadcrumb-area d-flex align-items-center" style={{ backgroundImage: 'url(img/testimonial/test-bg.png)' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-left">
                                <div className="breadcrumb-title">
                                    <h2>Contact Us</h2>
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title center-align text-center mb-50">
                                <h5>Contact</h5>
                                <h2>
                                    Get In Tuch
                                </h2>
                            </div>

                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-12">

                            {
                                contact.map(c => <div class="services-box mt-0 mb-30 text-center">
                                    <div class="services-icon">
                                        <img src={c.contactImg} alt="icon01" />
                                    </div>
                                    <div class="services-content2">
                                        <h5>{c.contactTitle}</h5>
                                        <p>{c.contactDetails} </p>

                                    </div>
                                </div>)

                            }



                        </div>
                        <div class="col-lg-8 col-md-12">

                            <form class="contact-form" onSubmit={handleMessage}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="firstn" placeholder="First Name" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-email mb-20">
                                            <input type="text" id="lastn" name="lastn" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" id="email" name="email" placeholder="Eamil" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" name="phone" placeholder="Phone No." required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" name="messageStatus" hidden value='UnRead' required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-message mb-45">
                                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Write comments"></textarea>
                                        </div>
                                        <div class="slider-btn">
                                            <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Submit Now</button>
                                        </div>
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

export default ContactUs;