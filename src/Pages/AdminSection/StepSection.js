import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StepSection = () => {


    const [steps, setSteps] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/steps`)
            .then((res) => res.json())
            .then((info) => setSteps(info));
    }, []);


    const handleStepSection = (event) => {
        event.preventDefault();
        const stepTitle = event.target.stepTitle.value;
        const stepDetails = event.target.stepDetails.value;
        const stepNumber = event.target.stepNumber.value;



        const stepSection = {
            stepTitle,
            stepDetails,
            stepNumber,



        };

        const url = `http://localhost:5000/add-step`;
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
        <div className='container vh-100 d-flex align-items-center justify-content-center'>
            <section id="services" class="services-area pt-120 pb-90 fix" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update Step </h2>

                            <form class="contact-form " onSubmit={handleStepSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="stepTitle" placeholder=" Step Title" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="stepDetails" placeholder=" Step Details" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="stepNumber" placeholder=" Step Number" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"> Update Step </button>
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
                                <h5>Our Events</h5>
                                <h2>Upcoming Events</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            steps.map(step =>
                                <div className="col-lg-6 col-md-12">
                                    <div className="eventes-box">
                                        <div className="date-box">
                                            <h3>{step.stepNumber}</h3>
                                        </div>
                                        <div className="text">
                                            <h5>
                                                <Link to={`/edit-step/${step._id}`}>
                                                    {step.stepTitle}
                                                </Link>
                                            </h5>

                                            <p>
                                                {step.stepDetails}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            )
                        }

                    </div>

                </div>

            </section>
        </div>
    );
};

export default StepSection;