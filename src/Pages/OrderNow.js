import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const OrderNow = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });

    const handleNewOrder = (event) => {
        event.preventDefault();
        const customerEmail = event.target.customerEmail.value;
        const packagePrice = event.target.packagePrice.value;
        const customerName = event.target.customerName.value;
        const customerAddress = event.target.customerAddress.value;
        const customerCountry = event.target.customerCountry.value;
        const paymentStatus = event.target.paymentStatus.value;
        const orderStatus = event.target.orderStatus.value;

        const order = {
            customerEmail,
            packagePrice,
            customerName,
            customerAddress,
            customerCountry,
            paymentStatus,
            orderStatus,
            orderDate: formattedDate,
        };

        const url = `http://localhost:5000/new-order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
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
        <section id="services" className="services-area pt-120 pb-90 fix">
            <div className="container">
                <div className="row"></div>
                <div className="row">
                    <h2>You are buying 16000+ Readymade Canva Templates</h2>

                    <form className="contact-form mt-5 w-50" onSubmit={handleNewOrder}>
                        <div className="contact-field p-relative c-name mb-20">
                            <input disabled type="email" id="firstn" value={user?.email} name="customerEmail" required />
                        </div>
                        <div className="contact-field p-relative c-email mb-20">
                            <input type="text" id="lastn" name="packagePrice" defaultValue={'29'} required />
                        </div>
                        <div className="contact-field p-relative c-email mb-20">
                            <input type="text" id="lastn" name="customerName" placeholder="Full Name" required />
                        </div>
                        <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" id="text" name="customerAddress" placeholder="Your Address" required />
                        </div>
                        <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" id="text" name="customerCountry" placeholder="Your Country" required />
                        </div>
                        <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" hidden id="text" value="UnPaid" name="paymentStatus" required />
                        </div>
                        <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" hidden id="text" value="Pending" name="orderStatus" required />
                        </div>

                        <div className="slider-btn">
                            <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">
                                Place Order Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
    );
};

export default OrderNow;
