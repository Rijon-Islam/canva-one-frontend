import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const EditFooterContact = () => {

    const [footerad, setAddressfooter] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/footer-address/${id}`)
            .then((res) => res.json())
            .then((info) => setAddressfooter(info));
    }, []);


    const handlefooterAddress = (event) => {
        event.preventDefault();

        const footeraddress = event.target.footeraddress.value;
        const footerPhone = event.target.footerPhone.value;
        const footerEmail = event.target.footerEmail.value;




        const contactSection = {

            footeraddress,
            footerPhone,
            footerEmail,




        };

        const url = `http://localhost:5000/footer-address/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contactSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer Address is Updated');
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


                            <h2> Update Footer Contact </h2>

                            

                    

                                <form class="contact-form " onSubmit={handlefooterAddress}>
                                    <div class="row">



                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">

                                                <input type="text" id="firstn" name="footeraddress" defaultValue={footerad.footeraddress} placeholder=" Footer Address" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="footerPhone" defaultValue={footerad.footerPhone} placeholder=" Footer Phone" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="footerEmail" defaultValue={footerad.footerEmail} placeholder=" Footer Email" required />
                                            </div>
                                        </div>



                                        <div class="slider-btn">
                                            <button class="btn ss-btn" data-delay=".8s"> Add Footer Address Details</button>
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

export default EditFooterContact;