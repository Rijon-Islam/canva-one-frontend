import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';

const TotalOrders = () => {
    const [orders, setOrders] = useState([]);
    const [currentPageOrders, setCurrentPageOrders] = useState([]);
    const [ordersPage, setOrdersPage] = useState(1);
    const itemsPerPage = 10; // Set the number of items per page here

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info));
    }, []);

    useEffect(() => {
        const startIndex = (ordersPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentPageOrders(orders.slice(startIndex, endIndex));
    }, [orders, ordersPage]);

    return (
        <div>
            <section id="services" className="services-area pt-120 pb-90 fix">
                <div className="container">
                    <div className="row">
                        <div>
                            <h2>Welcome to Admin Panel</h2>
                            <AdminMenu />
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sl No.</th>
                                        <th scope="col">Order Date</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Order Status</th>
                                        <th scope="col">Payment Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentPageOrders.map((order, index) => (
                                        <tr key={order._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{order.orderDate}</td>
                                            <td>{order.customerName}</td>
                                            <td>{order.customerEmail}</td>
                                            <td>${order.packagePrice}</td>
                                            <td>{order.orderStatus}</td>
                                            <td>{order.paymentStatus}</td>
                                            <td><Link className="btn btn-primary" to={`/admin/payment-status/${order._id}`}>Edit Status</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="pagination">
                                <li className={`page-item ${ordersPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => setOrdersPage(prevPage => Math.max(prevPage - 1, 1))}>Previous</button>
                                </li>
                                <li className="page-item"><span className="page-link">{ordersPage}</span></li>
                                <li className={`page-item ${currentPageOrders.length < itemsPerPage ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => setOrdersPage(prevPage => prevPage + 1)}>Next</button>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TotalOrders;
