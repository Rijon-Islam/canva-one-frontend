import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Admin = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [subscribersPage, setSubscribersPage] = useState(1);
    const [ordersPage, setOrdersPage] = useState(1);
    const itemsPerPage = 5;

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

    const getCurrentPageItems = (data, page) => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };


    const paidOrders = orders.filter(order => order.paymentStatus === 'Paid');
    const totalSalesAmount = paidOrders.reduce((total, order) => total + parseFloat(order.packagePrice), 0).toFixed(2);

    const renderOrdersTable = () => {
        const currentPageOrders = getCurrentPageItems([...orders].reverse(), ordersPage);


        return (
            <>
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
            </>
        );
    };

    const renderSubscribersTable = () => {
        const currentPageSubscribers = getCurrentPageItems([...subscribers].reverse(), subscribersPage);
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sl No.</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageSubscribers.map((subscribe, index) => (
                            <tr key={subscribe._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{subscribe.subscriberEmail}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className={`page-item ${subscribersPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setSubscribersPage(prevPage => Math.max(prevPage - 1, 1))}>Previous</button>
                        </li>
                        <li className="page-item"><span className="page-link">{subscribersPage}</span></li>
                        <li className={`page-item ${currentPageSubscribers.length < itemsPerPage ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setSubscribersPage(prevPage => prevPage + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </>
        );
    };


    const [user, loading] = useAuthState(auth);

    const [admin, setAdmin] = useState([]);
    const [isAdminUser, setIsAdminUser] = useState(false);

    useEffect(() => {
        const fetchAdminUsers = async () => {
            try {
                const response = await fetch(`http://localhost:5000/users`);
                const data = await response.json();
                setAdmin(data);
                const isAdmin = data.some((adminUser) => adminUser.userEmail === user?.email);
                setIsAdminUser(isAdmin);
            } catch (error) {
                console.error('Error fetching admin users', error);
            }
        };

        fetchAdminUsers();
    }, [user]);


    return (
        <div>

            <>
                {loading ? (
                    <p>Loading...</p>
                ) : isAdminUser ? (
                    <>
                        <section id="services" className="services-area pt-120 pb-90 fix">
                            <div className="container">
                                <div className="row"></div>
                                <div className="row">
                                    <div>

                                        <h2>Welcome to Admin Panel</h2>
                                        <div className='total-sales'>
                                            <h4>Total Sales: ${totalSalesAmount}</h4>
                                        </div>
                                        <AdminMenu></AdminMenu>

                                        <h2>Total Orders</h2>
                                        {renderOrdersTable()}

                                        <h3 className='mt-5'>Total Subscribers</h3>
                                        {renderSubscribersTable()}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <p>Not Permitted to View This Page</p>
                )}
            </>


        </div>
    );
};

export default Admin;
