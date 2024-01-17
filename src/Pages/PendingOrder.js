import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import BannerImageOne from './BannerImageOne';
import { Link } from 'react-router-dom';
import UserDashboardMenu from './UserDashboardMenu';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const PendingOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info));
    }, []);

    // Function to generate serial numbers
    const generateSerialNumbers = () => {
        let serialNumber = 1;
        return orders.map((order, index) => order.customerEmail === user?.email && (
            <tr key={index}>
                <th scope="row">{serialNumber++}</th>
                <td>{order.orderDate}</td>
                <td>{order.customerName}</td>
                <td>{order.orderStatus}</td>
                <td>
                    {order.paymentStatus === 'UnPaid' &&
                        <Link className='btn ss-btn' to={`/pay-now/${order._id}`}>Pay Now</Link>
                    }
                    {order.paymentStatus === 'Paid' &&
                        <Link className='btn ss-btn' to='#'>You Have Paid</Link>
                    }
                </td>
            </tr>
        ));
    };

    return (
        <section id="services" className="services-area pt-120 pb-90 fix">
            <div className="container">
                <div></div>
                <div>
                    <UserDashboardMenu></UserDashboardMenu>
                    <div>
                        <h2>Your Pending Orders</h2>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl No.</th>
                                    <th scope="col">Your Name</th>
                                    <th scope="col">Order Date</th>
                                    <th scope="col">Order Status</th>
                                    <th scope="col">Payment Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {generateSerialNumbers()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PendingOrder;
