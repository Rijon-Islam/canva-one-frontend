import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditStep = () => {


    const [step, setStep] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/step-item/${id}`)
            .then((res) => res.json())
            .then((info) => setStep(info));
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

        const url = `http://localhost:5000/step-item/${step._id}`;
        fetch(url, {
            method: "PUT",
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
                                            <input type="text" id="firstn" name="stepTitle" defaultValue={step.stepTitle} required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="stepDetails" defaultValue={step.stepDetails} required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="stepNumber" defaultValue={step.stepNumber}  required />
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
             

            </section>
        </div>
    );
};

export default EditStep;