import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link, useParams } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';

const PaymentStatus = () => {
    const [order, setOrder] = useState([]);
    const {id} = useParams();



    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then((res) => res.json())
            .then((info) => setOrder(info));
    }, []);

    const handlePaymentStatus = (event) => {
        event.preventDefault();
        const paymentStatus = event.target.paymentStatus.value;



        const status = {
            paymentStatus,
        };

        const url = `http://localhost:5000/order/${order._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(status),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('PaymentStatus is Updated');
            });
    };

    return (
        <div className='container'>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div>
                            <h2>Welcome to Admin Panel</h2>
                            <AdminMenu></AdminMenu>

                            <form onSubmit={handlePaymentStatus}>
                            <div class="col-lg-6">
                                        <div class="contact-field p-relative c-name mb-20">
                                        <select name="paymentStatus" id="cars">
                                    <option value="UnPaid">UnPaid</option>
                                    <option value="Paid">Paid</option>
                                </select>
                                        </div>
                                    </div>
                                <div class="slider-btn">
                                        <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"> Update Status </button>
                                    </div>
                            </form>

                        </div>


                    </div>
                </div> 
            </section>
        </div>
    );
};

export default PaymentStatus;