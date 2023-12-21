import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';

const Admin = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/subscribers`)
            .then((res) => res.json())
            .then((info) => setSubscribers(info));
    }, []);


    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info));
    }, []);




    return (
        <div>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div>
                            <h2>Welcome to Admin Panel</h2>
                            <AdminMenu></AdminMenu>


                            <h2>Total Orders</h2>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Payment Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => (
                                        <tr key={order._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{order.customerName}</td>
                                            <td>{order.customerEmail}</td>
                                            <td>{order.paymentStatus}</td>
                                            <td><Link to={`/admin/payment-status/${order._id}`}>Change Payment Status</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <h3>Total Subscribers</h3>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subscribers.map((subscribe, index) => (
                                        <tr key={subscribe._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{subscribe.subscriberEmail}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admin;