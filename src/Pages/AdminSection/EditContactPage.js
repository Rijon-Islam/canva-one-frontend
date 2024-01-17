import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const EditContactPage = () => {

    const [contactdetails, setContact] = useState([]);


    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/contacts/${id}`)
            .then((res) => res.json())
            .then((info) => setContact(info));
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

        const url = `http://localhost:5000/contacts/${id}`;
        fetch(url, {
            method: "PUT",
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
        <div className='container vh-100 d-flex align-items-center justify-content-center'>
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

                                            <input type="text" id="firstn" name="contactImg" defaultValue={contactdetails.contactImg} placeholder=" Image Url" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="contactTitle" defaultValue={contactdetails.contactTitle} placeholder="contact Title" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="contactDetails" defaultValue={contactdetails.contactDetails} placeholder=" Contact Details" required />
                                        </div>
                                    </div>


                                    <div class="slider-btn">
                                        <button class="btn ss-btn" data-delay=".8s"> Update Contcat Details</button>
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

export default EditContactPage;