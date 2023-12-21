import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {

    const [service, setService] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/service-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);


    const handleServiceSection = (event) => {
        event.preventDefault();
        const serviceText = event.target.serviceText.value;
        const serviceHeading = event.target.serviceHeading.value;
        const serviceDetails = event.target.serviceDetails.value;
        const buttonText = event.target.buttonText.value;
        const buttonLink = event.target.buttonLink.value;

        const serviceSection = {
            serviceText,
            serviceHeading,
            serviceDetails,
            buttonText,
            buttonLink,

        };

        const url = `http://localhost:5000/add-Service`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();
        const serviceIcon = event.target.serviceIcon.value;
        const serviceTitle = event.target.serviceTitle.value;
        const serviceDetails = event.target.serviceDetails.value;

        const itemSection = {
            serviceIcon,
            serviceTitle,
            serviceDetails,
        };

        const url = `http://localhost:5000/add-service-item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Item is Added');
            });
    };



    return (
        <div>
            {
                service.map(s =>
                    <section id="services" class="services-area pt-120 pb-90 fix" >
                        <div class="container">
                            <div class="row">

                            </div>
                            <div class="row">

                                <div class="col-lg-8 col-md-12">
                                    <h2> Update Service </h2>
                                    {
                                        service.length === 1 &&
                                        <Link className='btn' to={`/servicetext-edit/${s._id}`}>Update Service</Link>
                                    }
                                    {
                                        service.length === 0 &&
                                        <form class="contact-form " onSubmit={handleServiceSection}>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="contact-field p-relative c-name mb-20">
                                                        <input type="text" id="firstn" name="serviceText" placeholder="Service Text" required />
                                                    </div>
                                                </div>

                                                <div class="col-lg-12">
                                                    <div class="contact-field p-relative c-name mb-20">
                                                        <input type="text" id="firstn" name="serviceHeading" placeholder="Service Heading" required />
                                                    </div>
                                                </div>

                                                <div class="col-lg-12">
                                                    <div class="contact-field p-relative c-name mb-20">
                                                        <input type="text" id="firstn" name="serviceDetails" placeholder=" Servicet Details" required />
                                                    </div>
                                                </div>


                                                <div class="col-lg-12">
                                                    <div class="contact-field p-relative c-name mb-20">
                                                        <input type="text" id="firstn" name="buttonText" placeholder=" Button Text" required />
                                                    </div>
                                                </div>

                                                <div class="col-lg-12">
                                                    <div class="contact-field p-relative c-name mb-20">
                                                        <input type="text" id="firstn" name="buttonLink" placeholder=" Button Link" required />
                                                    </div>
                                                </div>



                                                <div class="slider-btn">
                                                    <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"> Update Services </button>
                                                </div>
                                            </div>

                                        </form>
                                    }

                                    <h2>Add Service</h2>
                                    <form class="contact-form" onSubmit={handleAddItem}>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" id="firstn" name="serviceIcon" placeholder="Service Icon" required />
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" id="firstn" name="serviceTitle" placeholder="Service Title" required />
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" id="firstn" name="serviceDetails" placeholder=" Servicet Details" required />
                                                </div>
                                            </div>

                                            <div class="slider-btn">
                                                <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"> Add Service </button>
                                            </div>
                                        </div>

                                    </form>



                                </div>

                                <div className="col-lg-8 col-md-12">

                                    <div className="row">
                                        {
                                            items.map(item =>
                                                <div className="col-lg-12 col-md-12">
                                                    <div
                                                        className="services-box wow fadeInDown animated"
                                                        data-delay=".5s"
                                                    >
                                                        <div className="services-icon">
                                                            <img src={item.serviceIcon} alt="icon01" />
                                                        </div>
                                                        <div className="services-content2">
                                                            <h5>
                                                                <Link to={`/service-edit/${item._id}`}>{item.serviceTitle}</Link>
                                                            </h5>
                                                            <p>
                                                                {item.serviceDetails}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>)

                                        }





                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>
                )
            }
        </div>
    );
};

export default ServicesSection;