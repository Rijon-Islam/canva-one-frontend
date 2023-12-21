import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ContactPage = () => {


    const [contactpage, setContactPage] = useState([]);
    const [contact, setcontactItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/contacts`)
            .then((res) => res.json())
            .then((info) => setContactPage(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/contacts`)
            .then((res) => res.json())
            .then((info) => setcontactItems(info));
    }, []);




    const handleContactSection = (event) => {
        event.preventDefault();
        const contactImg = event.target.contactImg.value;
        const contactTitle = event.target.contactTitle.value;
        const contactDetails = event.target.contactDetails.value;




        const contactSection = {
            contactImg,
            contactTitle,
            contactDetails,




        };

        const url = `http://localhost:5000/add-contact`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contactSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Contcat Section is Updated');
            });
    };



    return (
        <div className='container d-flex align-items-center justify-content-center'>
            <section id="services" class="services-area pt-120 pb-90 fix" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update Contact </h2>



                            <form class="contact-form " onSubmit={handleContactSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">

                                            <input type="text" id="firstn" name="contactImg" placeholder=" Image Url" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="contactTitle" placeholder="contact Title" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="contactDetails" placeholder=" Contact Details" required />
                                        </div>
                                    </div>


                                    <div class="slider-btn">
                                        <button class="btn ss-btn" data-delay=".8s"> Add Contcat Details</button>
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
                                <h5> Contact Section</h5>
                                <h2> Contact Details List</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-lg-4 col-md-12">

                            {
                                contact.map(c => <div class="services-box mt-0 mb-30 text-center">
                                    <div class="services-icon">
                                        <img src={c.contactImg} alt="icon01" />
                                    </div>
                                    <div class="services-content2">




                                        <Link to={`/edit-contact-page/${c._id}`} >
                                            <h5>{c.contactTitle}</h5>
                                        </Link>
                                        <p>{c.contactDetails} </p>

                                    </div>
                                </div>)

                            }






                        </div>
                    </div>

                </div>


            </section>
        </div>
    );
};

export default ContactPage;