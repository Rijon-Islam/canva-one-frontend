import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const OrderNow = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
 
    const handleNewOrder = (event) => {
        event.preventDefault();
        const customerEmail = event.target.customerEmail.value;
        const customerName = event.target.customerName.value;
        const customerAddress = event.target.customerAddress.value;
        const customerCountry = event.target.customerCountry.value;
        const paymentStatus = event.target.paymentStatus.value;
        const orderStatus = event.target.orderStatus.value;
 
    
        const order = {
            customerEmail,
            customerName,
            customerAddress,
            customerCountry,
            paymentStatus,
            orderStatus,
    
        };
    
        const url = `http://localhost:5000/new-order`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(order),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate('/pending-order');
          });
      };


    return (
        <div>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">
                    <h2>You are buying 16000+ Readymade Canva Templates</h2>
                    
                    
                    <form class="contact-form mt-5" onSubmit={handleNewOrder}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input disabled type="email" id="firstn" value={user?.email} name="customerEmail" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-email mb-20">
                                            <input type="text" id="lastn" name="customerName" placeholder="Full Name" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" id="text" name="customerAddress" placeholder="Your Address" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" id="text" name="customerCountry" placeholder="Your Country" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" hidden id="text" value='UnPaid' name="paymentStatus" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" hidden id="text" value='Pending' name="orderStatus" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Place Order Now</button>
                                    </div>
                                </div>

                            </form>
                        


                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderNow;